import React, { useEffect, useState } from 'react';
import { css } from '@emotion/react';

const Tooltip = ({ className, children }) => {
  const [shouldHide, setShouldHide] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShouldHide(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      css={css`
        --length: 278px
        --height: 72px;
        height: var(--height);
        width: var(--length);
        z-index: 90;
        border-radius: 4px;
        padding: 1rem;
        font-size: 14px;
        color: var(--system-text-primary-dark);
        background: var(--erno-black);
        box-shadow: 0px -5px 6px 0 rgba(0,0,0,0.25);
        &::before {
          --size: 1rem;
          background: var(--erno-black);
          border-bottom-right-radius: 4px;
          content: '';
          right: calc(50% - var(--size) / 2);
          bottom: calc(var(--size) / -2);
          height: var(--size);
          position: absolute;
          rotate: 45deg;
          transform-origin: center;
          translate: calc(var(--overflow-offset) * -1) 0;
          width: var(--size);
        }
        p {
          margin: 0;
        }
        ${
          shouldHide &&
          css`
            display: none;
          `
        }
      `}
      className={className}
    >
      {children}
    </div>
  );
};

export default Tooltip;
