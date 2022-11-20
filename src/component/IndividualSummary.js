import React from 'react';
import { FiShoppingBag } from 'react-icons/fi';

const IndividualSummary = ({ title, value }) => {
  return (
    <div className="bg-background flex gap-5 sub-section rounded-md items-center justify-center flex-1">
      <div>
        <i className="text-3xl">
          <FiShoppingBag />
        </i>
      </div>
      <div>
        <h2 className="text-xl font-thin">{title}</h2>
        <h1 className="text-2xl">{value}</h1>
      </div>
    </div>
  );
};

export default IndividualSummary;
