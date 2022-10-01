import React from 'react';
import ListContainer from './ListContainer';
import TransactionListHeader from './TransactionListHeader';

const TransactionList = () => {
  return (
    <div className="section bg-background/90 text-textPrimary">
      <div className="bg-background rounded-md sub-section flex flex-col gap-5 md:gap-10">
        <TransactionListHeader />
        <ListContainer />
      </div>
    </div>
  );
};

export default TransactionList;
