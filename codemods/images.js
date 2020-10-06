const visit = require('unist-util-visit');
const download = require('image-downloader');
const path = require('path');

const { setAttribute } = require('./utils/mdxast');

const images = () => (tree, file) => {
  visit(
    tree,
    (node) => node.type === 'image',
    (image) => {
      const downloadImgUrl = image.url.includes('.newrelic.com/')
        ? image.url
        : `https://docs-dev.newrelic.com${image.url}`;
      const options = {
        url: downloadImgUrl,
        dest: path.join('src/images'),
      };
      download
        .image(options)
        .then(({ filename }) => {
          console.log('Image saved at:', filename);
        })
        .catch(
          file.fail(
            new Error(`Error saving file at url: ${downloadImgUrl}`),
            image.position
          )
        );
    }
  );
};

module.exports = images;
