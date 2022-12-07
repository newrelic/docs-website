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
        <Icon name="globe" size="2em" />
        <div>
          <h4>{t('machineTranslation.calloutHeading')}</h4>
          <Trans i18nKey="machineTranslation.calloutBody" parent="p">
            In the event of any inconsistency between the English version and
            the translated version, the{' '}
            <Link to={englishHref} shouldAutoLocalize={false}>
              English version
            </Link>
            will take priority. Please visit{' '}
            <Link to="/docs/licenses/translated-documentation/translation-disclaimer/">
              this page
            </Link>{' '}
            for more information.
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
