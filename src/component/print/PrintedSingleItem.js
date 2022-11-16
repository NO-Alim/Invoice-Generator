import React from 'react';

const PrintedSingleItem = ({ item }) => {
  return (
    <div className="flex justify-between text-sm items-center">
      <h2 className="flex-1 text-start">{item.name}</h2>
      <h2 className="flex-1 text-center">
        {item.quantity} X {item.price}
      </h2>
      <h2 className="flex-1 text-center">0</h2>
      <h2 className="flex-1 text-end">{item.quantity * item.price}</h2>
    </div>
  );
};

export default PrintedSingleItem;
