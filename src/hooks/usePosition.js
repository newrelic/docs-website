import { useCallback, useState } from 'react';

/**
 * Returns a `measureCallback` to be used in a ref slot,
 * and its `top` and `left` values once they're calculated.
 *
 * @example
 * ```jsx
 * const Component = () => {
 *   const [measureRef, { left, top }] = usePosition();
 *
 *   return <div ref={measureRef}></div>
 * }
 * ```
 */
const usePosition = () => {
  const [dimensions, setDimensions] = useState(null);

  const measureCallback = useCallback((measureEl) => {
    if (!measureEl || dimensions != null) return;

    setDimensions(measureEl.getBoundingClientRect());
  }, []);

  return [
    measureCallback,
    { top: dimensions?.top.toFixed(2), left: dimensions?.left.toFixed(2) },
  ];
};

export default usePosition;
