import React from 'react';

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;

  return (
    <div
      className={`Slick-arrow prev-arrow ${className}`}
      style={{ ...style, display: 'block' }}
      onClick={onClick}
    />
  );
};

export default SamplePrevArrow;
