import { InlineSignup } from '@newrelic/gatsby-theme-newrelic';
import HideWhenEmbedded from '../HideWhenEmbedded';

const WrappedInlineSignup = () => (
  <HideWhenEmbedded>
    <InlineSignup />
  </HideWhenEmbedded>
);

export default WrappedInlineSignup;
