import { visit } from 'unist-util-visit';
import { isElement } from 'hast-util-is-element';

const prependSiteUrl = (src) => `https://docs.newrelic.com${src}`;

const addAbsoluteImagePath = () => (tree) => {
  visit(
    tree,
    (node) => isElement(node, 'img'),
    (img) => {
      img.properties.src = prependSiteUrl(img.properties.src);
      img.properties.srcSet = (img.properties.srcSet || []).map((entry) => {
        const [src, size] = entry.split(' ');

        return [prependSiteUrl(src), size].join(' ');
      });
    }
  );
};

export default addAbsoluteImagePath;
