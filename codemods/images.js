const visit = require('unist-util-visit');
const download = require('image-downloader');
const path = require('path');
const fs = require('fs');

const { setAttribute, isType } = require('./utils/mdxast');

const images = () => (tree, file) => {
  visit(
    tree,
    (node) => isType('image', node),
    (image) => {
      const currDirectoryPath = file.history[0].substring(
        0,
        file.history[0].lastIndexOf('/')
      );
      const imageDirectory = path.join(currDirectoryPath, 'images');
      if (!fs.existsSync(imageDirectory)) {
        fs.mkdirSync(imageDirectory);
      }

      const downloadImgUrl = image.url.includes('.newrelic.com/')
        ? image.url
        : `https://docs-dev.newrelic.com${image.url}`;
      const options = {
        url: downloadImgUrl,
        dest: imageDirectory,
      };
      try {
        const downloadImage = download.image(options);
        console.log(`Image downloaded: ${downloadImgUrl}`);
        const gatsbyImgUrl = `./images/${downloadImgUrl.split('image/')[1]}`;
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
