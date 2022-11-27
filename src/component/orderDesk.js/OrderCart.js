import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { reset } from '../../features/cart/cartSlice';
import { precisionRound } from '../../utils/PrecisionRound';
import CartList from './CartList';

const OrderCart = ({ toggleDrawer }) => {
  const { totalItem, totalPrice, productList } = useSelector(
    (state) => state.cart
  );
  const dispatch = useDispatch();

  const clearCart = () => {
    dispatch(reset());
  };
  return (
    <div className="p-5 flex flex-col h-full justify-between gap-5">
      <div className="flex item-center justify-between">
        <h1 className="text-2xl">Cart</h1>
        <div className="flex gap-2 items-center">
          Total Item:
          <p className="w-5 h-5 bg-brand/50 rounded-md flex items-center justify-center">
            {totalItem}
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
          <h2 className="text-2xl">${precisionRound(Number(totalPrice), 2)}</h2>
        </div>
        <div className="flex items-center justify-center gap-5 w-full">
          {productList && productList.length > 0 && (
            <>
              <Link
                to="/print"
                className="flex gap-2 items-center justify-center bg-brand/30 px-5 py-2 rounded-md text-lg border border-brand  hover:bg-brand hover:text-background all"
                onClick={toggleDrawer}
              >
                <span>Check Out</span>
              </Link>
              <button
                className="flex gap-2 items-center justify-center bg-brand/30 px-5 py-2 rounded-md text-lg border border-brand  hover:bg-brand hover:text-background all"
                onClick={clearCart}
              >
                Clear Cart
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default OrderCart;
