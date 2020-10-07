const visit = require('unist-util-visit');
const download = require('image-downloader');
const path = require('path');
const fs = require('fs');
const { BASE_URL } = require('../scripts/utils/constants');
const convert = require('unist-util-is/convert');

const isImage = convert('image');

const images = () => async (tree, file) => {
  const promises = [];
  const imageDirectory = path.join(file.dirname, 'images');

  if (!fs.existsSync(imageDirectory)) {
    fs.mkdirSync(imageDirectory);
  }

  const downloadImage = async (node) => {
    const url = node.url.startsWith('http')
      ? node.url
      : path.join(BASE_URL, node.url);

    try {
      const { filename } = await download.image({
        url,
        dest: imageDirectory,
      });

      return filename;
    } catch (e) {
      file.fail(
        `Error downloading file: ${url}`,
        node.position.start,
        'images'
      );
    }
  };

  visit(tree, isImage, async (image) => {
    try {
      const promise = downloadImage(image);

      promises.push(promise);

      const filename = await promise;

      // eslint-disable-next-line require-atomic-updates
      image.url = `./images/${path.basename(filename)}`;
    } catch (error) {
      // do nothing
    }
  });

  await Promise.all(promises);
};

module.exports = images;
