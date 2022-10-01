import React from 'react';

const Form = ({ children, ...rest }) => {
  return (
    <form className="flex border border-brand rounded-md overflow-hidden bg-brand/10 w-auto px-2 py-1">
      {children}
    </form>
  );
};

export default Form;
