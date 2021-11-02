const fs = require('fs');
const path = require('path');
const glob = require('glob');
const dirTree = require('directory-tree');

const CAPITALIZE = ['new', 'relic'];
const stripPath = (path) =>
  path.endsWith('.mdx') ? path.substring(0, path.lastIndexOf('.')) : path;

const getSlug = (path) => {
  const strippedPath = stripPath(path);
  console.log(strippedPath);
  return strippedPath.match(/content(.*)/)[1];
};
const convertToTitle = (path) => {
  // console.log(dir);
  const strippedPath = stripPath(path);

  return strippedPath
    .split('-')
    .map((word, index) => {
      // if (index !== 0 || !CAPITALIZE.includes(word)) {
      //   return word;
      // }
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(' ');
};

const editEldest = (parent) => {
  const { title, path, pages } = parent;
  !pages && console.log(parent);
  if (!pages) {
    return {
      title,
      path,
    };
  }
  return {
    title,
    path,
    pages: pages.map(editChildren),
  };
};

const editChildren = (parent) => {
  const { name, path, children } = parent;
  !name && console.log(parent);
  if (!children) {
    return {
      title: convertToTitle(name),
      path: getSlug(path),
    };
  }
  return {
    title: convertToTitle(name),
    path: getSlug(path),
    pages: children.map(editChildren),
  };
};

const isDirectory = (filepath) => fs.statSync(filepath).isDirectory();
const getMainDirectories = (tree) => {
  return tree.children.map((child) => {
    const { name, path: fullPath, children } = child;
    if (!isDirectory(fullPath)) {
      return {
        title: name,
        path: getSlug(fullPath),
      };
    }
    return {
      title: convertToTitle(name),
      path: getSlug(fullPath),
      pages: children,
    };
  });
};

const main = async () => {
  // const mainDirectories = glob.sync(`${__dirname}/../../src/content/docs/*`, {
  //   ignore: ['**/*.mdx'],
  // });
  const tree = dirTree(`${__dirname}/../../src/content/docs/`, {
    exclude: /images/,
  });
  // console.log(tree)
  const mainDirectories = getMainDirectories(tree);

  const editedChildren = mainDirectories.map(editEldest);
  
  console.log(editedChildren);
  fs.writeFileSync('thingystuff.txt', JSON.stringify(editedChildren));
  // const individualJson = mainDirectories.map((dir) => {
  //   const path = dir.match(/content(.*)/)[1];
  //   const directoryName = path.match(/docs\/(.*)/)[1];
  //   console.log(directoryName);
  //   const title = convertToTitle(directoryName);
  //   return {
  //     title,
  //     path,
  //     directory: dir,
  //   };
  // });
};

main();
