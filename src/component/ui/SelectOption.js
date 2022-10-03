import React from 'react';
import Select from 'react-select';
const colorStyles = {
  menuList: (styles) => ({
    ...styles,
  }),
  option: (styles, { isFocused, isSelected }) => ({
    ...styles,
    color: isFocused ? '#fff' : isSelected ? '#fff' : '#101c31',
    background: isFocused ? '#101c31' : isSelected ? '#101c31' : undefined,
    zIndex: 1,
  }),
  menu: (base) => ({
    ...base,
    zIndex: 100,
  }),
  control: (styles, state) => ({
    ...styles,
    border: '1px solid #c2c2c2 !important',
    // This line disable the blue border
    boxShadow: '1px solid #c2c2c2 !important',
    '&:hover': {
      border: '1px solid #101c31 !important',
    },
    '&:focus': {
      border: '1px solid #101c31 !important',
    },
  }),
  placeholder: (styles) => ({
    ...styles,
  }),
};

const SelectOption = ({ options, placeholder, ...rest }) => {
  return (
    <>
      <Select
        placeholder={placeholder}
        options={options}
        styles={colorStyles}
        {...rest}
      />
    </>
  );
};

export default SelectOption;
