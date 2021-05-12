import React from 'react';
import PropTypes from 'prop-types';
import TableOfContentsContainer from './TableOfContentsContainer';
import { Link } from '@newrelic/gatsby-theme-newrelic';

const IndexContents = ({ nav, slug, isLandingPageToc }) => {
  const { pages } = nav;

  const getSubNav = (pages, searchKey, results = []) => {
    const r = results;
    pages.forEach((page) => {
      if (page.url === searchKey) {
        r.push(page);
      } else if (page.pages.length > 0) {
        getSubNav(page.pages, searchKey, r);
      }
    });
    return r;
  };

  const subNav = getSubNav(pages, slug.replace('/table-of-contents', ''));

  return (
    <TableOfContentsContainer>
      {!isLandingPageToc &&
        subNav.map((page) => <TableOfContents key={page.title} root={page} />)}
      {isLandingPageToc &&
        pages.map((page) => <TableOfContents key={page.title} root={page} />)}
    </TableOfContentsContainer>
  );
};

IndexContents.propTypes = {
  nav: PropTypes.shape({
    pages: PropTypes.array.isRequired,
  }).isRequired,
  slug: PropTypes.string.isRequired,
  isLandingPageToc: PropTypes.bool,
};

IndexContents.defaultProps = {
  isLandingPageToc: false,
};

const TableOfContents = ({ root, depth = 2 }) => {
  const { title, url, pages } = root;
  const idx = pages.findIndex((page) => page.pages.length);
  const Heading = `h${depth}`;

  const links = idx === -1 ? pages : pages.slice(0, idx);
  const subSections = idx === -1 ? [] : pages.slice(idx);

  return (
    <>
      <Heading>{url ? <Link to={url}>{title}</Link> : title}</Heading>
      {links.length > 0 && (
        <ul>
          {links.map((page) => (
            <li key={page.title}>
              <Link to={page.url}>{page.title}</Link>
            </li>
          ))}
        </ul>
      )}
      {subSections.map((section) => (
        <TableOfContents key={section.title} root={section} depth={depth + 1} />
      ))}
    </>
  );
};

TableOfContents.propTypes = {
  root: PropTypes.object.isRequired,
  depth: PropTypes.number,
};

export default IndexContents;
