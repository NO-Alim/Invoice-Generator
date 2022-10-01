import React from 'react';
import SingleCartListItem from './SingleCartListItem';

const CartList = () => {
  return (
    <div>
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
          <SingleCartListItem />
          <SingleCartListItem />
          <SingleCartListItem />
          <SingleCartListItem />
          <SingleCartListItem />
          <SingleCartListItem />
          <SingleCartListItem />
          <SingleCartListItem />
          <SingleCartListItem />
          <SingleCartListItem />
          <SingleCartListItem />
          <SingleCartListItem />
          <SingleCartListItem />
          <SingleCartListItem />
          <SingleCartListItem />
          <SingleCartListItem />
          <SingleCartListItem />
          <SingleCartListItem />
        </tbody>
      </table>
    </div>
  );
};

export default CartList;
