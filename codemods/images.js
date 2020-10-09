const download = require('image-downloader');
const path = require('path');
const fs = require('fs');
const { BASE_URL } = require('../scripts/utils/constants');
const { selectAll } = require('unist-util-select');

const images = () => async (tree, file) => {
  const imageDirectory = path.join(file.dirname, 'images');
  const imageNodes = selectAll('image', tree);

  if (imageNodes.length > 0 && !fs.existsSync(imageDirectory)) {
    fs.mkdirSync(imageDirectory);
  }

  await Promise.all(imageNodes.map((node) => downloadImage(node, file)));
};

const downloadImage = async (node, file) => {
  // don't do anything if the image url is already a relative path
  if (node.url.startsWith('.')) {
    return;
  }

  const url = node.url.startsWith('http')
    ? node.url
    : path.join(BASE_URL, node.url);

  try {
    const { filename } = await download.image({
      url,
      dest: path.join(file.dirname, 'images'),
    });

    // eslint-disable-next-line require-atomic-updates
    node.url = `./images/${path.basename(filename)}`;
  } catch (e) {
    file.message(
      `Unable to download file: ${url}`,
      node.position.start,
      'images'
    );
  }
};

module.exports = images;
