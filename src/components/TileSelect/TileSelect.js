import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';

// import logos from '../install/assets';
import TileOption from './TileOption';
import TileCollapser from './TileCollapser';

const TileSelect = ({ options, onChange, value, label, placeholder }) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleChange = (value) => {
    onChange(value);
    setIsOpen(false);
  };

  const selectedOption =
    value && options.find((option) => option.value === value);

  return (
    <div
      css={css`
        margin-top: 1rem;
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
              onChange={handleChange}
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
  options: PropTypes.object,
  onSelect: PropTypes.func,
  value: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
};

export default TileSelect;
