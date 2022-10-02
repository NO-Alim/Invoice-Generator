import React from 'react';
import { Link } from 'react-router-dom';
import CartList from './CartList';

const OrderCart = () => {
  return (
    <div className="p-5 flex flex-col h-full justify-between gap-5">
      <div className="flex item-center justify-between">
        <h1 className="text-2xl">Cart</h1>
        <div className="flex gap-2 items-center">
          Total Item:{' '}
          <p className="w-5 h-5 bg-brand/50 rounded-md flex items-center justify-center">
            {'1'}
          </p>{' '}
        </div>
      </div>
      <div className="flex-1">
        <CartList />
      </div>
      <hr />
      <div className="flex flex-col gap-5 flex-1 items-start">
        <div className="flex justify-between items-center w-full">
          <h2 className="text-2xl">SubTotal: </h2>
          <h2 className="text-2xl">$234.99</h2>
        </div>
        <div className="flex items-center justify-center gap-5 w-full">
          <Link
            to="/print"
            className="flex gap-2 items-center justify-center bg-brand/30 px-5 py-2 rounded-md text-lg border border-brand  hover:bg-brand hover:text-background all"
          >
            <span>Check Out</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OrderCart;
