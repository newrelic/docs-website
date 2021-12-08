import fetch from 'node-fetch';

const path = require('path');
const fs = require('fs');
const { BASE_URL } = require('../scripts/utils/constants');
const { selectAll } = require('unist-util-select');

const EXTENSIONS = {
  'image/jpeg': '.jpg',
  'image/png': '.png',
  'image/gif': '.gif',
};

const images = () => async (tree, file) => {
  const imageDirectory = path.join(file.dirname, 'images');
  const imageNodes = selectAll('image', tree);

  if (imageNodes.length > 0 && !fs.existsSync(imageDirectory)) {
    fs.mkdirSync(imageDirectory);
  }

  await Promise.all(imageNodes.map((node) => downloadImage(node, file)));
};

const guessExtension = (contentType) => EXTENSIONS[contentType];

const downloadImage = async (node, file) => {
  // don't do anything if the image url is already a relative path
  if (node.url.startsWith('.')) {
    return;
  }

  const urlString = node.url.startsWith('http')
    ? node.url
    : path.join(BASE_URL, node.url);

  const url = new URL(urlString);
  const dest = path.join(
    file.dirname,
    'images',
    path.basename(url.pathname).replace(/%20/g, '-')
  );

  try {
    const filepath = await download(url, dest);

    // eslint-disable-next-line require-atomic-updates
    node.url = `./images/${path.basename(filepath)}`;
  } catch (e) {
    file.message(
      `Unable to download file: ${url}`,
      node.position.start,
      'images'
    );
  }
};

const download = (url, dest) =>
  new Promise((resolve, reject) => {
    fetch(url.href)
      .then((res) => {
        if (!res.ok) {
          reject(new Error(`Request failed\nStatus code: ${res.statusCode}`));

          return;
        }

        const extension =
          path.extname(dest) || guessExtension(res.headers.get('content-type'));

        const filepath = path.join(
          path.dirname(dest),
          path.basename(dest, extension) + extension
        );

        const fileStream = fs.createWriteStream(filepath);

        res.body.pipe(fileStream);
        res.body.on('error', reject);
        fileStream.on('finish', () => resolve(filepath));
      })
      .catch(reject);
  });

module.exports = images;
