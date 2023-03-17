import React, { useEffect, useRef, useState } from 'react';
import styled from '@emotion/styled';

export const GreenLine = () => {
  let [calcHeight, setCalcHeight] = useState(0);
  const lineRef = useRef(null);

  const handleLineHeight = (h) => {
    if (lineRef.current.getAttribute('height') >= h) return;
    setCalcHeight(h);
  };

  const handleScroll = () => {
    console.log(lineRef.current.getBoundingClientRect());
    const totalHeight = lineRef.current.getBoundingClientRect().height;
    let top = lineRef.current.getBoundingClientRect().top;

    if (top <= 300) {
      handleLineHeight(20);
    }
    if (top <= 0) {
      handleLineHeight(40);
    }
    if (top <= -300) {
      handleLineHeight(60);
    }
    if (top <= -600) {
      handleLineHeight(80);
    }
    if (top <= -1000) {
      handleLineHeight(100);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, []);

  return (
    <Wrapper onScroll={handleScroll}>
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
