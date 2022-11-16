import React from 'react';
import { useSelector } from 'react-redux';
import SingleCartListItem from './SingleCartListItem';

const CartList = () => {
  const { productList } = useSelector((state) => state.cart);
  return (
    <div>
      {productList?.length > 0 ? (
        <table className="flex flex-col gap-2 w-full">
          <thead className="w-full py-1 rounded-md bg-brand/30 px-2">
            <tr className="w-full flex justify-between text-lg ">
              <th className="font-normal">Item Name</th>
              <th className="font-normal">Quantity</th>
              <th className="font-normal">Price</th>
              <th></th>
            </tr>
          </thead>
          <tbody className="w-full max-h-52 overflow-auto">
            {productList.map((item) => {
              return <SingleCartListItem item={item} key={item.id} />;
            })}
          </tbody>
        </table>
      ) : (
        <h1 className="text-center my-5 text-xl font-thin">
          Your Cart is Empty Now.
        </h1>
      )}
    </div>
  );
};

export default CartList;
