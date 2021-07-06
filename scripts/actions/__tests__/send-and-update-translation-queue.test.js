const fs = require('fs');

const { getContent } = require('../send-and-update-translation-queue');

jest.mock('../serialize-mdx');
jest.mock('fs');

test('getContent skips over files that dont exist', async () => {
  fs.existsSync
    .mockReturnValueOnce(false)
    .mockReturnValueOnce(false)
    .mockReturnValueOnce(false)
    .mockReturnValue(true);

  const mockInput = {
    jp: ['slug1', 'slug2', 'slug3', 'slug4', 'slug5'],
  };

  const fileContent = getContent(mockInput);
  const pages = await fileContent['jp'];

  expect(pages.length).toBe(2); // 5 submitted slugs - 3 false mock returns = 2 files not skipped
});
