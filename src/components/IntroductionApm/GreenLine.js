import React, { useEffect, useRef, useState } from 'react';
import styled from '@emotion/styled';

export const GreenLine = ({ iconPositions }) => {
  let [calcHeight, setCalcHeight] = useState(0);
  const lineRef = useRef(null);
  const containerRef = useRef(null);

  const handleLineHeight = (h) => {
    if (lineRef.current.getAttribute('height') >= h) return;
    setCalcHeight(h);
  };

  console.log('iconPositions', iconPositions);

  const handleScroll = () => {
    iconPositions.sort();
    // console.log(lineRef.current.getBoundingClientRect());
    const totalHeight = containerRef.current.getBoundingClientRect().height;
    // console.log('totalHeight', totalHeight);
    let top = lineRef.current.getBoundingClientRect().top;

    if (top <= 300) {
      handleLineHeight(iconPositions[0] / totalHeight);
    }
    if (top <= -300) {
      handleLineHeight(iconPositions[1] / totalHeight);
    }
    if (top <= -1000) {
      handleLineHeight(iconPositions[2] / totalHeight);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, []);

  return (
    <Wrapper ref={containerRef}>
      <Line height={calcHeight} ref={lineRef} />
    </Wrapper>
  );
};

const Line = styled.div`
  background-color: var(--brand-button-primary-accent);
  height: ${(p) => p.height}%;
  transition: height 320ms;
  width: 2px;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-left: 48px;
  padding: 0;
  width: 24px;

  @media screen and (max-width: 1000px) {
    display: none;
  }
`;
