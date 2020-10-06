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
      try {
        const downloadImage = download.image(options);
        console.log(`Image downloaded: ${downloadImgUrl}`);
        const gatsbyImgUrl = `/images/${downloadImgUrl.split('image/')[1]}`;
        image.url = gatsbyImgUrl;
      } catch (error) {
        file.fail(
          new Error(`Error saving file at url: ${downloadImgUrl}`),
          image.position
        );
      }
    }
  );
};

module.exports = images;
