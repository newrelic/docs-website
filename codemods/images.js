const visit = require('unist-util-visit');
const download = require('image-downloader');
const path = require('path');
const fs = require('fs');
const { BASE_URL } = require('../scripts/utils/constants');

const { setAttribute, isType } = require('./utils/mdxast');

const images = () => (tree, file) => {
  visit(
    tree,
    (node) => isType('image', node),
    (image) => {
      console.log(file.dirname);
      const currDirectoryPath = file.dirname;
      const imageDirectory = path.join(currDirectoryPath, 'images');
      if (!fs.existsSync(imageDirectory)) {
        fs.mkdirSync(imageDirectory);
      }
      console.log(BASE_URL);
      const downloadImgUrl = image.url.includes('.newrelic.com/')
        ? image.url
        : path.join(BASE_URL, image.url);
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
