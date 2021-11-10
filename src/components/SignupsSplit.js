import React from 'react';
import PropTypes from 'prop-types';
import ButtonLink from './ButtonLink';
import ButtonGroup from './ButtonGroup';
import { Link } from 'react-router-dom';
import { useTreatments, SplitContext } from '@splitsoftware/splitio-react';

const SignupsSplit = (props) => {
  const treatments = useTreatments(['signups']);
  const treatment = treatments['singups'];
  const { isReady } = React.useContext(SplitContext);

  const btns = (
    <div {...props}>
      <ButtonGroup>
        <ButtonLink
          data-tessen="stitchedPathLinkClick"
          role="button"
          to="https://newrelic.com/signup"
          variant="primary"
        >
          Get an account
        </ButtonLink>
        <ButtonLink
          data-tessen="stitchedPathLinkClick"
          role="button"
          to={props.guidedInstallLink}
          variant="primary"
        >
          Guided agent install
        </ButtonLink>
      </ButtonGroup>
    </div>
  );

  const btnsEu = (
    <div {...props}>
      <ButtonGroup>
        <ButtonLink
          data-tessen="stitchedPathLinkClick"
          role="button"
          to="https://newrelic.com/signup"
          variant="primary"
        >
          Get an account
        </ButtonLink>
        <ButtonLink
          data-tessen="stitchedPathLinkClick"
          role="button"
          to={props.guidedInstallLink}
          variant="primary"
        >
          Guided agent install
        </ButtonLink>
        <ButtonLink
          data-tessen="stitchedPathLinkClick"
          role="button"
          to={props.euGuidedInstallLink}
          variant="primary"
        >
          EU guided agent install
        </ButtonLink>
      </ButtonGroup>
    </div>
  );

  const links = (
    <ul {...props}>
      <li>
        <Link to="https://newrelic.com/signup">Get an account</Link>
      </li>
      <li>
        <Link to={props.guidedInstallLink}>Guided agent install</Link>
      </li>
    </ul>
  );

  const linksEu = (
    <ul {...props}>
      <li>
        <Link to="https://newrelic.com/signup">Get an account</Link>
      </li>
      <li>
        <Link to={props.guidedInstallLink}>Guided agent install</Link>
      </li>
      <li>
        <Link to={props.euGuidedInstallLink}>EU guided agent install</Link>
      </li>
    </ul>
  );

  if (treatment === 'btns' && isReady) {
    return btns;
  } else if (treatment === 'links' && isReady) {
    return links;
  } else if (treatment === 'btnsEu' && isReady) {
    return btnsEu;
  } else if (treatment === 'linksEu' && isReady) {
    return linksEu;
  }
  return null;
};

SignupsSplit.propTypes = {
  children: PropTypes.node,
  treatmentName: PropTypes.string.isRequired,
};

export default SignupsSplit;
