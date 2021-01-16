import buttons from '../buttons';
import createProcessor from '../../../scripts/actions/serialize-mdx';

const input = `
<ButtonLink
  to="/docs/agents/c-sdk/table-of-contents"
  variant="normal"
>
  View all C SDK docs
</ButtonLink>

`;

test('serialize button to html', async () => {
  const processor = createProcessor({ codemods: [buttons] });
  const file = await processor.process(input);
  expect(file.contents).toMatchSnapshot();
});
