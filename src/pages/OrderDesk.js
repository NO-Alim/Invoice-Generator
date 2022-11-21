import React from 'react';
import OrderDeskHeader from '../component/orderDesk.js/OrderDeskHeader';
import ProductList from '../component/orderDesk.js/ProductList';

const OrderDesk = () => {
  return (
    <div className="bg-background/90 text-textPrimary min-h-screen section">
      <div className="bg-background rounded-md p-5">
        <OrderDeskHeader />
        <div className="mt-5 mb-10 px-5">
          <div className="border border-brand/50"></div>
        </div>
        <ProductList />
      </div>
    </div>
  );
};

export default OrderDesk;
