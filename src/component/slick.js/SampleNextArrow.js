import React from 'react';

const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`Slick-arrow next-arrow ${className}`}
      style={{ ...style, display: 'block' }}
      onClick={onClick}
    />
  );
};

export default SampleNextArrow;
