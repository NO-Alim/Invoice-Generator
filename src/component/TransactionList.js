import React from 'react';
import { Link } from 'react-router-dom';
import useGetTransaction from '../hooks/useGetTransaction';
import ListContainer from './ListContainer';
import LoaderSpin from './ui/LoaderSpin';

const TransactionList = () => {
  const dataLimit = 5;
  const { transaction, loading, error } = useGetTransaction('', dataLimit);
  let content;
  if (loading) content = <LoaderSpin />;
  if (!loading && error) {
    content = <h1 className="x text-red-600 text-xl text-center">{error}</h1>;
  }
  if (!loading && transaction?.length === 0) {
    content = (
      <h1 className="x text-red-600 text-xl text-center">
        Your Transaction List is Empty now.
      </h1>
    );
  }
  if (!loading && transaction && transaction.length > 0) {
    content = (
      <>
        <ListContainer />
        {transaction.length === dataLimit && (
          <Link
            to="transactions"
            className="bg-brand/80 hover:bg-brand text-background w-32 px-3 py-1 rounded-md cursor-pointer flex items-center justify-center mx-auto gap-5 font-bold all"
          >
            Load More
          </Link>
        )}
      </>
    );
  }
  return (
    <div className="section bg-background/90 text-textPrimary">
      <div className="bg-background rounded-md sub-section flex flex-col gap-5 md:gap-10">
        <h1 className="text-3xl font-thin text-center">Latest Transactions</h1>
        {content}
      </div>
    </div>
  );
};

export default TransactionList;
