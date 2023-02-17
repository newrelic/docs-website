import { InlineSignup as ThemeInlineSignup } from '@newrelic/gatsby-theme-newrelic';
import HideWhenEmbedded from './HideWhenEmbedded';

const DocInlineSignup = (props) => (
  <HideWhenEmbedded>
    <ThemeInlineSignup {...props} />
  </HideWhenEmbedded>
);

export default DocInlineSignup;
