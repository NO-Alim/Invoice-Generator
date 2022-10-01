import React from 'react';
import IndividualSummary from './IndividualSummary';
const Header = () => {
  return (
    <div className="section bg-background/90 text-textPrimary flex flex-col gap-10">
      <h1 className="text-2xl font-thin">
        Here's What's Happen With Your Store.
      </h1>
      <div className="flex gap-10">
        <IndividualSummary />
        <IndividualSummary />
        <IndividualSummary />
        <IndividualSummary />
      </div>
    </div>
  );
};

export default Header;
