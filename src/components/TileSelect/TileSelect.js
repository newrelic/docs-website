import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';

import TileOption from './TileOption';
import TileCollapser from './TileCollapser';

const TileSelect = ({
  options,
  onChange,
  value,
  label,
  placeholder,
  defaultOpen = true,
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const selectedOption =
    value && options.find((option) => option.value === value);

  return (
    <div
      css={css`
        margin-bottom: 2rem;
      `}
    >
      <h4>{label}</h4>
      <TileCollapser
        label={selectedOption?.displayName}
        placeholder={placeholder}
        onClick={() => setIsOpen(!isOpen)}
        isOpen={isOpen}
      >
        <div
          role="listbox"
          css={css`
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
            grid-gap: 1rem;
          `}
        >
          {options.map((optionProps) => (
            <TileOption
              key={`${label}-${optionProps.displayName}`}
              onChange={(val) => {
                onChange(val);
                setIsOpen(false);
              }}
              isSelected={value === optionProps.value}
              {...optionProps}
            />
          ))}
        </div>
      </TileCollapser>
    </div>
  );
};

TileSelect.propTypes = {
  options: PropTypes.array,
  onSelect: PropTypes.func,
  value: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  defaultOpen: PropTypes.bool,
};

export default TileSelect;
