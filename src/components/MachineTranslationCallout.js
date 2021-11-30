import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import {
  Callout,
  CreateIssueButton,
  Icon,
  Trans,
  useTranslation,
  Link,
} from '@newrelic/gatsby-theme-newrelic';

const MachineTranslationCallout = ({ englishHref }) => {
  const { t } = useTranslation();
  return (
    <Callout
      variant="important"
      title=" "
      css={css`
        margin: 2em 0;
        padding: 0.5em;
      `}
    >
      <div
        css={css`
          display: flex;
          align-items: center;
          > * {
            margin: 0 1em;
          }
          @media screen and (max-width: 1240px) {
            flex-direction: column;
            align-items: flex-start;
            > * {
              margin: 1em 0;
            }
            > :last-child {
              align-self: flex-end;
            }
          }
        `}
      >
        <Icon name="globe" size="2rem" />
        <div>
          <h4>{t('machineTranslation.calloutHeading')}</h4>
          <Trans i18nKey="machineTranslation.calloutBody" parent="p">
            If there's anything unclear, you can try checking the{' '}
            <Link to={englishHref}>English version</Link>. Or tell us how we can
            improve it.
          </Trans>
        </div>
        <CreateIssueButton
          variant="outline"
          css={css`
            border-color: #8a7800;
          `}
          labels={['i18n']}
          instrumentation={{ component: 'MachineTranslationCallout' }}
        />
      </div>
    </Callout>
  );
};

MachineTranslationCallout.propTypes = {
  englishHref: PropTypes.string.isRequired,
};

export default MachineTranslationCallout;
