import React from 'react';

const Input = ({ name, type, placeholder, ...rest }) => {
  return (
    <input
      className="bg-transparent hover:outline-none focus:outline-none pl-2"
      placeholder={placeholder}
      type={type}
    />
  );
};

export default Input;
