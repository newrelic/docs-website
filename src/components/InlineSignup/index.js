import InlineSignup from './InlineSignup';
import HideWhenEmbedded from '../HideWhenEmbedded';

const WrappedInlineSignup = () => (
  <HideWhenEmbedded>
    <InlineSignup />
  </HideWhenEmbedded>
);

export default WrappedInlineSignup;
