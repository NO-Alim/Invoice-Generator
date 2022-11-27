import React from 'react';

const SubCategoryDashBoard = ({ items }) => {
  return (
    <div className="w-full flex flex-col gap-2 mt-2">
      {items.map((item) => {
        return (
          <div className="py-2 bg-borderPrimary/10 w-full" key={item.key}>
            {item.subCategory}
          </div>
        );
      })}
    </div>
  );
};

export default SubCategoryDashBoard;
