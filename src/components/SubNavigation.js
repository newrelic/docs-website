import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import { Link } from 'gatsby';
import NavigationItem from './NavigationItem';

const SubNavigation = ({ nav }) => {
  const [isNestedView, setIsNestedView] = useState(false);

  return (
    <>
      <h2>{nav.title}</h2>
      <nav role="navigation" aria-label="SubNavigation">
        {nav.pages.map((page) => {
          return <NavigationItem page={page} />;
        })}
      </nav>
    </>
  );
};

// const noop = () => {};

// const NavigationItem = ({ page, depthLevel = 0, isNestedView, onClick }) => {
//   const [isExpanded, setIsExpanded] = useState(false);
//   const { name, path, pages } = page;

//   if (depthLevel === 0 && !isNestedView) {
//     // can add logic for whether it has an icon or not later
//     return (
//       <div onClick={() => onClick()}>
//         <Link to={path}>{name}</Link>
//       </div>
//     );
//   }

//   if (isNestedView && depthLevel > 0) {
//     // return nestedView Items
//     return (
//       <>
//         <div onClick={() => setIsExpanded(!isExpanded)}>
//           <Link to={path}>{name}</Link>
//         </div>
//         {isExpanded &&
//           pages &&
//           pages.map((child) => (
//             <NavigationItem
//               page={child}
//               onClick={noop}
//               depthLevel={depthLevel + 1}
//               isNestedView
//             />
//           ))}
//       </>
//     );
//   }
// };

export default SubNavigation;
