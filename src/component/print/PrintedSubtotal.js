import React from 'react';
import { useSelector } from 'react-redux';
import { precisionRound } from '../../utils/PrecisionRound';

const PrintedSubtotal = () => {
  const { totalPrice } = useSelector((state) => state.cart);
  const currency = localStorage.getItem('currency');
  return (
    <div className="p-2 text-sm border border-dashed border-background">
      <div className="flex justify-between">
        <h2 className="font-bold">Subtotal</h2>
        <h2 className="font-bold">
          {currency} {precisionRound(Number(totalPrice), 2)}
        </h2>
      </div>
      <div className="flex justify-between">
        <h2 className="font-bold">Total Pay</h2>
        <h2 className="font-bold">
          {currency} {precisionRound(Number(totalPrice), 2)}
        </h2>
      </div>
      <div className="flex justify-between">
        <h2 className="font-bold">Due</h2>
        <h2 className="font-bold">00.00</h2>
      </div>
    </div>
  );
};

export default PrintedSubtotal;
