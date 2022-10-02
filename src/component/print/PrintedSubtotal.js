import React from 'react';

const PrintedSubtotal = () => {
  return (
    <div className="p-2 text-sm border border-dashed border-background">
      <div className="flex justify-between">
        <h2 className="font-bold">Subtotal</h2>
        <h2 className="font-bold">$ 2345.02</h2>
      </div>
      <div className="flex justify-between">
        <h2 className="font-bold">Total Pay</h2>
        <h2 className="font-bold">$ 2345.02</h2>
      </div>
      <div className="flex justify-between">
        <h2 className="font-bold">Due</h2>
        <h2 className="font-bold">00.00</h2>
      </div>
    </div>
  );
};

export default PrintedSubtotal;
