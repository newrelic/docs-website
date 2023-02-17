import InlineSignup from './InlineSignup';
import HideWhenEmbedded from './HideWhenEmbedded';

const WrappedInlineSignup = (props) => (
  <HideWhenEmbedded>
    <InlineSignup {...props} />
  </HideWhenEmbedded>
);

export default WrappedInlineSignup;
