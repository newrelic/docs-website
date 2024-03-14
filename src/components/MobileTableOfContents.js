import PropTypes from 'prop-types';
import React, { useState, useEffect, useMemo } from 'react';
import { css } from '@emotion/react';

import {
  Icon,
  Button,
  Overlay,
  useInstrumentedHandler,
} from '@newrelic/gatsby-theme-newrelic';
import Select from './Select';

const prop = (name) => (obj) => obj[name];

const MobileTableOfContents = ({ headings }) => {
  const headingIds = useMemo(() => headings.map(prop('id')), [headings]);
  const [isTocOpen, setIsTocOpen] = useState(false);

  const handleClick = useInstrumentedHandler(null, ({ id, text }) => ({
    eventName: 'tableOfContentsClick',
    category: 'TableOfContents',
    heading: text,
    headingId: id,
  }));

  return headings.length === 0 ? null : (
    <div
      css={css`
        display: flex;
      `}
    >
      <Label htmlFor="mobileTocHeaders">On this page</Label>
      <select
        id="mobileTocHeaders"
        value=""
        css={css`
          width: 100%;
        `}
      >
        {headings.map(({ id, text }) => {
          console.log(id, text, typeof text);
          return (
            <option key={id} value={text}>
              {text}
            </option>
          );
        })}
      </select>
    </div>
  );
};

const Label = ({ children, htmlFor }) => (
  <label
    htmlFor={htmlFor}
    css={css`
      display: block;
      width: 100%;
      font-size: 0.875rem;
      font-weight: 600;
      margin-bottom: 0.25rem;
    `}
  >
    {children}
  </label>
);

Label.propTypes = {
  children: PropTypes.node,
  htmlFor: PropTypes.string,
};

const FormControl = ({ children }) => (
  <div
    css={css`
      &:not(:last-child) {
        margin-bottom: 1.5rem;
      }
    `}
  >
    {children}
  </div>
);

FormControl.propTypes = {
  children: PropTypes.node,
};

MobileTableOfContents.propTypes = {
  headings: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default MobileTableOfContents;
