import React from 'react';
import OrderCart from '../component/orderDesk.js/OrderCart';
import OrderDeskHeader from '../component/orderDesk.js/OrderDeskHeader';
import ProductList from '../component/orderDesk.js/ProductList';

const OrderDesk = () => {
  return (
    <div className="bg-background/90 text-textPrimary min-h-screen grid grid-cols-1 lg:grid-cols-3 gap-5 p-5">
      <div className="flex-1 bg-background col-span-1 lg:col-span-2 rounded-md">
        <OrderDeskHeader />
        <div className="mt-5 mb-10 px-5">
          <div className="border border-brand/50"></div>
        </div>
        <ProductList />
      </div>
      <div className="bg-background col-span-1 rounded-md">
        <OrderCart />
      </div>
    </div>
  );
};

export default OrderDesk;
