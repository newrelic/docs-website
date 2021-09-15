const hasQueryParams = (urlString) => {
  const url = new URL(urlString);

  return Boolean(url.search);
};

const appendTrailingSlash = (url) => {
  if (hasQueryParams(url)) {
    return url;
  }

  return url.endsWith('/') ? url : `${url}/`;
};

const stripTrailingSlash = (url) => {
  if (hasQueryParams(url)) {
    return url;
  }

  return url.endsWith('/') ? url.replace(/\/$/, '') : url;
};

exports.quote = (str) => `"${str}"`;

exports.uniq = (arr) => [...new Set(arr)];
const appendLeadingSlash = (url) =>
  url.startsWith('/') || url.startsWith('!') || url.startsWith('https://')
    ? url
    : `/${url}`;

exports.getExcludedUrls = (frontmatter, siteUrl) => {
  const resources = frontmatter.resources || [];
  const redirects = frontmatter.redirects || [];

  return resources
    .map((resource) => resource.url)
    .concat(redirects)
    .map(appendLeadingSlash)
    .map((url) => (url.startsWith('/') ? siteUrl + url : url));
};

exports.normalizeUrl = (url) => {
  const prefix = url.startsWith('!') ? '!' : '';
  const plainUrl = url.replace(/^!/, '');

  return [
    prefix + appendTrailingSlash(plainUrl),
    prefix + stripTrailingSlash(plainUrl),
  ];
};
