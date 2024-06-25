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
  learnMore,
  learnMoreUrl,
  primaryButton,
  primaryButtonUrl,
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

  return (
    <Popover {...props}>
      <Container>
        <Heading>{header}</Heading>
        <Text>{text}</Text>
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
        {learnMore && (
          <LearnMoreButton
            as="a"
            href={learnMoreUrl}
            onClick={onLearnMore}
            tabIndex={0}
            variant={Button.VARIANT.OUTLINE}
          >
            {learnMore}
          </LearnMoreButton>
        )}
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
  font-size: 1rem;
  font-weight: 500;
  grid-column: 1 / 3;
  justify-self: start;
  margin: 0;
`;

const PrimaryButton = styled(Button)`
  cursor: pointer;
  width: 100%;
`;

const LearnMoreButton = styled(Button)`
  border-color: var(--system-background-app-light);
  color: var(--system-background-app-light);
  cursor: pointer;
  width: 100%;

  &:hover {
    color: currentColor;
  }
`;

const Text = styled.p`
  font-size: 1rem;
  font-weight: 300;
  grid-column: 1 / 3;
  margin: 0 0 8px;
`;

export default TwoButton;
