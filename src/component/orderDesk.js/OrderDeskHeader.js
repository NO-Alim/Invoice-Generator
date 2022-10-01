import React from 'react';
import MainCategory from './MainCategory';
import SubCategroy from './SubCategroy';

const OrderDeskHeader = () => {
  return (
    <div className="p-5 flex flex-col gap-5">
      <MainCategory />
      <SubCategroy />
    </div>
  );
};

export default OrderDeskHeader;
