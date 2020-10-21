import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import styled from '@emotion/styled';

const StyledLink = styled(Link)`
  display: flex;
  color: var(--primary-text-color);
  transition: 0.2s ease-out;
  padding: 0.5rem;

  &:hover {
    color: var(--primary-text-hover-color);
  }
`;

const NavigationItem = ({ page }) => {
  return (
    <>
      {page.path ? (
        <StyledLink to={page.path}>{page.title}</StyledLink>
      ) : (
        <StyledLink as="div">{page.title}</StyledLink>
      )}

      {page.pages?.map((page) => (
        <NavigationItem key={page.title} page={page} />
      ))}
    </>
  );
};

NavigationItem.propTypes = {
  page: PropTypes.shape({
    title: PropTypes.string.isRequired,
    path: PropTypes.string,
    pages: PropTypes.arrayOf(PropTypes.object),
  }),
};

export default NavigationItem;
