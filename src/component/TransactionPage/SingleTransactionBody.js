import moment from 'moment/moment';
import React from 'react';
import { precisionRound } from '../../utils/PrecisionRound';

const SingleTransactionBody = ({ data }) => {
  const { products, totalPrice, timeStamp, totalItem, invoice } = data || {};
  return (
    //w-[595px] mx-auto for print
    <div className="flex flex-col gap-5">
      <h1 className="text-4xl font-semibold">INVOICE</h1>
      <div className="flex flex-col sm:flex-row items-start sm:items-end gap-10 justify-between">
        <div className="text-lg font-semibold">
          <h1 className="">Arafat Store</h1>
          <h1>arafatHossain@gmail.com</h1>
          <h1>www.aitaSaita.com</h1>
        </div>
        <div className="w-[200px]">
          <div className="flex justify-between text-xl">
            <h1 className="font-semibold">Invoice#</h1>
            <h1>{invoice}</h1>
          </div>
          <div className="flex justify-between text-xl">
            <h1 className="font-semibold">Date</h1>
            <h1>{moment.unix(timeStamp.seconds).format('l')}</h1>
          </div>
          <div className="flex justify-between text-xl">
            <h1 className="font-semibold">Time</h1>
            <h1>{moment.unix(timeStamp.seconds).format('LTS')}</h1>
          </div>
        </div>
      </div>
      <div className="border-t border-b py-1 flex items-center justify-between px-5 mt-10 text-base gap-2">
        <div className="flex-1">Name</div>
        <div className="flex-1">Quantity</div>
        <div className="flex-1">Unit Price</div>
        <div className="flex-1">Total Price</div>
      </div>
      {products.map((item, ind) => {
        const { name, price, quantity, key } = item || {};
        return (
          <div
            className="flex gap-2 items-center justify-between px-5 capitalize text-sm sm:text-lg"
            key={ind}
          >
            <div className="flex-1">{name}</div>
            <div className="flex-1">{quantity} unit</div>
            <div className="flex-1">${precisionRound(Number(price), 2)}</div>
            <div className="flex-1">
              $ {precisionRound(Number(price * quantity), 2)}
            </div>
          </div>
        );
      })}
      <hr />
      <div className="grid grid-cols-4 px-5 text-lg font-semibold">
        <div className="col-span-1 hidden sm:block"></div>
        <div className="col-span-1"></div>
        <div className="text-base sm:text-lg col-span-2 sm:col-span-1">
          <h1 className="">Total</h1>
          <h1 className="">Total Pay</h1>
          <h1 className="">Due</h1>
        </div>
        <div className="col-span-1">
          <h1>$ {precisionRound(Number(totalPrice), 2)}</h1>
          <h1>$ {precisionRound(Number(totalPrice), 2)}</h1>
          <h1>$ 00.00</h1>
        </div>
      </div>
    </div>
  );
};

export default SingleTransactionBody;
