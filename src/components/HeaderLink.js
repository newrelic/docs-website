import React from 'react';
import { useLocation } from '@reach/router';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import { useClipboard } from '@newrelic/gatsby-theme-newrelic';

const HeaderLink = ({ children }) => {
  const location = useLocation();
  const [copied, copy] = useClipboard();

  return (
    <StyledButton
      type="button"
      name="copy header link"
      onClick={() => {
        copy(location.origin + location.pathname + children.props.href);
      }}
    >
      {children}

      {copied && <CopiedMessage>Copied!</CopiedMessage>}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  background: none;
  border: none;
  width: 0;
  padding: 0;
`;

const copyAnimation = keyframes`
from {
  transform: translate3d(0,0,0);
  opacity: 0;
}

40%, to {
  transform: translate3d(5px, 0, 0);
  opacity: 1;
}
`;

const CopiedMessage = styled.p`
  background: var(--brand-button-primary-accent);
  color: var(--system-text-primary-light);
  border-radius: 3px;
  font-size: 1rem;
  min-width: 70px;
  padding: 0 0.25rem;
  position: absolute;
  bottom: 0;

  animation: ${copyAnimation} 1s ease;
`;

export default HeaderLink;
