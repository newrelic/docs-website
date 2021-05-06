const hasQueryParams = (urlString) => {
  const url = new URL(urlString);

  return Boolean(url.search);
};

exports.appendTrailingSlash = (url) => {
  if (hasQueryParams(url)) {
    return url;
  }

  return url.endsWith('/') ? url : `${url}/`;
};

exports.stripTrailingSlash = (url) => {
  if (hasQueryParams(url)) {
    return url;
  }

  return url.endsWith('/') ? url.replace(/\/$/, '') : url;
};
