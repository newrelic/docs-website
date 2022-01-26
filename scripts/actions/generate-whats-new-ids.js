const vfileGlob = require('vfile-glob');
const { read, write } = require('to-vfile');

const generateWhatsNewIds = async () => {
  const file = await read('./src/data/whats-new-ids.json', 'utf-8');

  const data = JSON.parse(file.contents);
  let largestID = Object.values(data).reduce(
    (num, id) => Math.max(parseInt(id, 10), num),
    0
  );

  return new Promise((resolve) => {
    const currentWhatsNewPaths = [];
    vfileGlob('./src/content/whats-new/**/*.md').subscribe({
      next: (file) => {
        const slug = file.path
          .replace(/.*?src\/content/, '')
          .replace('.md', '');
        currentWhatsNewPaths.push(slug);
        if (!data[slug]) {
          data[slug] = String(++largestID);
        }
      },
      complete: async () => {
        Object.entries(data).forEach(([path]) => {
          if (!currentWhatsNewPaths.includes(path)) {
            delete data[path];
          }
        });
        file.contents = JSON.stringify(data, null, 2);

        await write(file, 'utf-8');

        resolve();
      },
    });
  });
};

generateWhatsNewIds();
