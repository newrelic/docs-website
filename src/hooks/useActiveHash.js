import { useEffect, useRef, useState } from 'react';
import getScrollHeight from '../utils/scrollHeight';
import { useWindowSize } from 'react-use';

// global header height + layout content padding
const MIN_THRESHOLD = 68;

const useActiveHash = (ids) => {
  const { height } = useWindowSize();
  const threshold = Math.max(height * 0.2, MIN_THRESHOLD);
  const [activeHash, setActiveHash] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.location.hash || ids[0];
    }

    return ids[0];
  });
  const activeHashRef = useRef(activeHash);

  useEffect(() => {
    if (ids.length === 0) {
      return;
    }

    const handler = () => {
      const elements = ids.map((id) => document.getElementById(id));
      const scrollTop = document.documentElement.scrollTop;
      const scrolledToBottom = scrollTop + height >= getScrollHeight();

      const element = scrolledToBottom
        ? elements[elements.length - 1]
        : findNearestHeading(elements, threshold);

      if (element && element.id !== activeHashRef.current) {
        setActiveHash(element.id);
        activeHashRef.current = element.idj;
      }
    };

    window.addEventListener('scroll', handler, {
      capture: false,
      passive: true,
    });

    return () => window.removeEventListener('scroll', handler);
  }, [ids, threshold, height]);

  return activeHash;
};

const findNearestHeading = (elements, offset) => {
  const scrollTop = document.documentElement.scrollTop;

  const hasCrossedThreshold = (element) =>
    element ? element.offsetTop - scrollTop <= offset : false;

  return elements.find((element, idx) => {
    if (!element) {
      return false;
    }

    if (idx === 0 && !hasCrossedThreshold(element)) {
      return true;
    }

    return (
      hasCrossedThreshold(element) && !hasCrossedThreshold(elements[idx + 1])
    );
  });
};

export default useActiveHash;
