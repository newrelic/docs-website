import React, { useState } from 'react';
import styled from '@emotion/styled';

import icons from '../data/developer-icons.json';

const tuples = Object.entries(icons);
const DeveloperIcons = () => {
  const [query, setQuery] = useState('');
  const [viewMode, setViewMode] = useState('grid');
  const [copiedTimeoutId, setCopiedTimeoutId] = useState(null);
  const [copiedIndex, setCopiedIndex] = useState(null);

  const filteredIcons = tuples.filter(([name]) =>
    name.toLowerCase().includes(query)
  );

  const copy = (text, index) => () => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    const id = setTimeout(() => {
      setCopiedIndex(null);
    }, 3000);
    setCopiedTimeoutId(id);
  };

  return (
    <Container>
      <div>
        <Search
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Filter icons by name"
          type="text"
          value={query}
        />
      </div>
      <fieldset>
        <legend>View</legend>
        <div>
          <input
            aria-label="List view"
            checked={viewMode === 'list'}
            id="list"
            onChange={(e) => setViewMode(e.target.value)}
            type="radio"
            value="list"
          />
          <ListIcon />
        </div>
        <div>
          <input
            aria-label="List grid"
            checked={viewMode === 'grid'}
            id="grid"
            onChange={(e) => setViewMode(e.target.value)}
            type="radio"
            value="grid"
          />
          <GridIcon />
        </div>
      </fieldset>

      <List className={viewMode}>
        {filteredIcons.map(([name, svg], i) => (
          <button
            key={name}
            onClick={copy(name, i)}
            onMouseLeave={() => {
              setCopiedIndex(null);
              clearInterval(copiedTimeoutId);
              setCopiedTimeoutId(null);
            }}
            type="button"
          >
            <dt>{i === copiedIndex ? 'Copied name!' : name}</dt>
            <dd dangerouslySetInnerHTML={{ __html: svg }} />
          </button>
        ))}
      </List>
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 1rem 1rem 4rem;

  .dark-mode && svg {
    fill: #fff;
  }

  & fieldset {
    align-items: center;
    border: 0;
    display: flex;
    justify-content: end;
    margin-right: 2rem;
    padding: 0;

    & div {
      display: grid;
      place-items: center;
      position: relative;
    }

    & svg {
      height: 100%;
      pointer-events: none;
      position: absolute;
      width: 100%;
    }
  }

  /* styling legends is weird. 
   * float: left here is what causes the legend not to render on the fieldset's border.
   * https://morgan.cugerone.com/blog/how-to-make-a-fieldset-legend-inline/
   */
  & legend {
    display: block;
    float: left;
    margin-right: 1rem;
  }

  & input[type='radio'] {
    --size: 1.75rem;
    appearance: none;
    border: 1px solid var(--primary-contrast-color);
    cursor: pointer;
    height: var(--size);
    width: var(--size);

    &:checked {
      border: 1px solid var(--brand-button-primary-accent);
      background: var(--primary-hover-color);
    }

    &:hover:not(:checked),
    &:focus:not(:checked) {
      background: var(--primary-hover-color);
      border: 1px solid var(--primary-text-color);
      outline: none;
    }
  }

  & svg {
    height: 100%;
    width: 100%;
  }
`;

const List = styled.dl`
  --icon-size: 3.25rem;
  list-style: none;
  grid-column: 1 / 3;

  & > button {
    background: transparent;
    border: 0;
    color: var(--primary-text-color);
    cursor: pointer;
    display: flex;
    margin: 0;
    position: relative;
    width: 100%;
  }

  & dd {
    margin: 0;
  }

  &.grid {
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(auto-fill, var(--icon-size));
    padding: 0;

    & > button {
      border: 1px solid transparent;
      border-radius: 4px;
      justify-content: center;
      padding: 0.5rem;
      width: var(--icon-size);
    }

    & > button:hover {
      border: 1px solid var(--border-color);

      & dt {
        display: block;
      }
    }

    & dd {
      width: 100%;
    }

    & dt {
      background: var(--primary-contrast-color);
      border-radius: 4px;
      bottom: -60%;
      display: none;
      font-family: var(--code-font);
      font-size: 0.75rem;
      margin: 0;
      padding: 0.25rem 0.6rem;
      position: absolute;
      width: max-content;
      z-index: 1;
    }
  }

  &.list {
    & > button {
      align-items: center;
      display: flex;
      gap: 1rem;
      flex-wrap: wrap;
      padding: 0.5rem;
    }

    & > button:nth-of-type(odd) {
      background: var(--primary-contrast-color);
    }

    & dd {
      width: 2rem;
    }

    & dt {
      flex-grow: 1;
      text-align: left;
      word-break: break-all;
    }
  }

  @media (width < 750px) {
    &.list {
      & > button {
        display: block;
      }

      dt {
        margin-bottom: 1rem;
      }
    }
  }
`;

const Search = styled.input`
  background: var(--secondary-background-color);
  border: 1px solid var(--primary-contrast-color);
  border-radius: 4px;
  color: var(--primary-text-color);
  font-size: 0.875rem;
  line-height: 1;
  padding-bottom: 0.5rem;
  padding-left: 0.5rem;
  padding-top: 0.5rem;
  max-width: 30rem;
  width: 100%;

  &:focus,
  &:active {
    border: 1px solid var(--primary-text-color);
    outline: none;
  }
`;

const GridIcon = () => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="8" y="8" width="10" height="10" fill="#D9D9D9" />
    <rect x="8" y="22" width="10" height="10" fill="#D9D9D9" />
    <rect x="22" y="8" width="10" height="10" fill="#D9D9D9" />
    <rect x="22" y="22" width="10" height="10" fill="#D9D9D9" />
  </svg>
);

const ListIcon = () => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="12" y="8" width="22" height="4" fill="#D9D9D9" />
    <rect x="5" y="8" width="4" height="4" fill="#D9D9D9" />
    <rect x="12" y="18" width="22" height="4" fill="#D9D9D9" />
    <rect x="5" y="18" width="4" height="4" fill="#D9D9D9" />
    <rect x="12" y="28" width="22" height="4" fill="#D9D9D9" />
    <rect x="5" y="28" width="4" height="4" fill="#D9D9D9" />
  </svg>
);

export default DeveloperIcons;
