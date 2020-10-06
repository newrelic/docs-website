const visit = require('unist-util-visit');
const download = require('image-downloader');
const path = require('path');
const fs = require('fs');
const logger = require('../scripts/utils/logger');
const { BASE_URL } = require('../scripts/utils/constants');
const { isType } = require('./utils/mdxast');

const images = () => async (tree, file) => {
  const promises = [];

  visit(
    tree,
    (node) => isType('image', node),
    async (image) => {
      const imageDirectory = path.join(file.dirname, 'images');

      if (!fs.existsSync(imageDirectory)) {
        fs.mkdirSync(imageDirectory);
      }

      const downloadImgUrl = image.url.includes('.newrelic.com/')
        ? image.url
        : path.join(BASE_URL, image.url);

      try {
        promises.push(
          download.image({
            url: downloadImgUrl,
            dest: imageDirectory,
          })
        );

        logger.normal(`Image downloaded: ${downloadImgUrl}`);

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

  await Promise.all(promises);
};

module.exports = images;
