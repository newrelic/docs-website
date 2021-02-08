const path = require('path');
const { get, uniq } = require('lodash');
const { TYPES } = require('../constants');

const getRedirectsForDoc = (doc, redirects) => {
  const url = new URL(doc.docUrl);

  return uniq([
    ...get(redirects, `/node/${doc.docId}`, []),
    ...get(
      redirects,
      doc.type === TYPES.LANDING_PAGE
        ? path.dirname(url.pathname)
        : url.pathname,
      []
    ),
  ]);
};

const appendDummyRedirects = (redirects, dummyDocs) => {
  return dummyDocs.reduce((memo, doc) => {
    const url = new URL(doc.docUrl);
    const nodePath = `/node/${doc.docId}`;

    const [to] =
      Object.entries(redirects).find(
        ([, paths]) => paths.includes(nodePath) || paths.includes(url.pathname)
      ) || [];

    return to
      ? {
          ...memo,
          [to]: uniq([
            ...get(memo, to, []),
            ...getRedirectsForDoc(doc, redirects),
            url.pathname,
          ]),
        }
      : memo;
  }, redirects);
};

module.exports = { appendDummyRedirects, getRedirectsForDoc };
