import React from 'react';
import SingleDashBoardProduct from './SingleDashBoardProduct';

const ProductsDashBoard = ({ items }) => {
  return (
    <div className="w-full flex flex-col gap-2 mt-2">
      {items.map((item) => {
        return <SingleDashBoardProduct item={item} key={item.key} />;
      })}
    </div>
  );
};

export default ProductsDashBoard;
