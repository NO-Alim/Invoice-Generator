import React from 'react';

const CategoryDashBoard = ({ items }) => {
  return (
    <div className="w-full flex flex-col gap-2 mt-2">
      {items.map((item) => {
        return (
          <div className="py-2 bg-borderPrimary/10 w-full" key={item.key}>
            {item.category}
          </div>
        );
      })}
    </div>
  );
};

export default CategoryDashBoard;
