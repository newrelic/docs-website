import { InlineSignup as ThemeInlineSignup } from '@newrelic/gatsby-theme-newrelic';
import HideWhenEmbedded from './HideWhenEmbedded';

const InlineSignup = (props) => (
  <HideWhenEmbedded>
    <ThemeInlineSignup {...props} />
  </HideWhenEmbedded>
);

export default InlineSignup;
