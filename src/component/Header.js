import React from 'react';
import useGetBetweenDateTransaction from '../hooks/useGetBetweenDateTransaction';
import IndividualSummary from './IndividualSummary';
const Header = () => {
  const nextDate = new Date('11/19/2022 19:15:00 '); //07:15

  const { transaction, loading, error } =
    useGetBetweenDateTransaction(nextDate);
  console.log(transaction);
  console.log(error);
  return (
    <div className="section bg-background/90 text-textPrimary flex flex-col gap-10">
      <h1 className="text-2xl font-thin">
        Here's What's Happen With Your Store{' '}
        <span className="text-brand">Today</span>.
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
