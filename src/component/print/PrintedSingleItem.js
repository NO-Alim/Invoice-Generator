import React from 'react';
import { precisionRound } from '../../utils/PrecisionRound';

const PrintedSingleItem = ({ item }) => {
  const currency = localStorage.getItem('currency');
  return (
    <div className="flex justify-between text-sm items-center">
      <h2 className="flex-1 text-start">{item.name}</h2>
      <h2 className="flex-1 text-center">
        {item.quantity} X {precisionRound(Number(item.price), 2)}
      </h2>
      <h2 className="flex-1 text-center">0</h2>
      <h2 className="flex-1 text-end">
        {currency}
        {precisionRound(Number(item.quantity * item.price), 2)}
      </h2>
    </div>
  );
};

export default PrintedSingleItem;
