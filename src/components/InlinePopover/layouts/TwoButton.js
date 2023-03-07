import React from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { capitalize } from 'lodash';

import {
  Button,
  Icon,
  Popover,
  useInstrumentedHandler,
} from '@newrelic/gatsby-theme-newrelic';

const TwoButton = ({
  text,
  header,
  learnMoreUrl,
  primaryButton,
  primaryButtonUrl,
  secondaryButton,
  secondaryButtonUrl,
  type,
  ...props
}) => {
  const capsType = capitalize(type);
  const instrumentation = (eventName) => ({
    category: `${capsType}Popover`,
    eventName,
  });

  const onLearnMore = useInstrumentedHandler(
    noop,
    instrumentation('learnMore')
  );
  const onPrimaryClick = useInstrumentedHandler(
    noop,
    instrumentation('primaryButton')
  );
  const onSecondaryClick = useInstrumentedHandler(
    noop,
    instrumentation('secondaryButton')
  );

  return (
    <Popover {...props}>
      <Container>
        <Heading>{header}</Heading>
        <Text>
          {text}{' '}
          <Link onClick={onLearnMore} href={learnMoreUrl}>
            Learn more
          </Link>
        </Text>
        <PrimaryButton
          as="a"
          href={primaryButtonUrl}
          onClick={onPrimaryClick}
          tabIndex={0}
          variant={Button.VARIANT.PRIMARY}
        >
          {primaryButton}{' '}
          <Icon
            css={css`
              margin-left: 4px;
            `}
            name="fe-external-link"
          />
        </PrimaryButton>
        <SecondaryButton
          as="a"
          href={secondaryButtonUrl}
          onClick={onSecondaryClick}
          tabIndex={0}
          variant={Button.VARIANT.OUTLINE}
        >
          {secondaryButton}
        </SecondaryButton>
      </Container>
    </Popover>
  );
};

const noop = () => {};

const Container = styled.div`
  display: grid;
  gap: 0.5rem;
  grid-template-columns: 1fr 1fr;
`;

const Heading = styled.h2`
  color: currentColor;
  font-size: 0.75rem;
  font-weight: 500;
  grid-column: 1 / 3;
  justify-self: start;
  margin: 0;
`;

const Link = styled.a`
  color: currentColor;
  text-decoration: underline;

  &:hover {
    color: currentColor;
  }
`;

const PrimaryButton = styled(Button)`
  cursor: pointer;
  width: 100%;
`;

const SecondaryButton = styled(Button)`
  border-color: var(--system-background-app-light);
  color: var(--system-background-app-light);
  cursor: pointer;
  width: 100%;

  &:hover {
    color: currentColor;
  }
`;

const Text = styled.p`
  font-size: 0.75rem;
  grid-column: 1 / 3;
  margin: 0 0 8px;
`;

export default TwoButton;
