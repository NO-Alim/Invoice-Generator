import React from 'react';
import TbodyItem from '../component/TbodyItem';
import TransactionListHeader from '../component/TransactionListHeader';
import LoaderSpin from '../component/ui/LoaderSpin';
import usePagination from '../hooks/usePagination';

const Transactions = () => {
  const dataLimit = 10;
  const {
    transaction,
    loading,
    error,
    page,
    showNext,
    showPrevious,
    dataForCheckingNext,
  } = usePagination('', dataLimit);
  let content;

  if (loading) content = <LoaderSpin />;
  if (!loading && transaction?.length === 0) {
    content = (
      <h1 className="x text-red-600 text-xl">
        Your Transaction List is Empty now.
      </h1>
    );
  }

  if (!loading && transaction && transaction.length > 0) {
    content = (
      <div className="bg-background rounded-md sub-section flex flex-col gap-5 md:gap-10">
        <TransactionListHeader />
        <table className="flex flex-col gap-5 w-full">
          <thead className="w-full bg-brand px-3 py-1 rounded-t-md md:px-10">
            <tr className="w-full flex justify-between text-lg text-background">
              <th className="font-normal">Product</th>
              <th className="font-normal hidden md:block">Added Date</th>
              <th className="font-normal hidden md:block">Time</th>
              <th className="font-normal">Price</th>
              <th className="font-normal">More</th>
            </tr>
          </thead>
          <tbody className="w-full">
            {transaction &&
              transaction.map((item, ind) => {
                return <TbodyItem item={item} key={ind} />;
              })}
          </tbody>
        </table>

        <div className="flex gap-5 mx-auto w-auto">
          <button
            className="bg-brand/80 hover:bg-brand text-background w-32 px-3 py-1 rounded-md cursor-pointer flex items-center justify-center mx-auto gap-5 font-bold all disabled:cursor-not-allowed disabled:opacity-30"
            onClick={() => showPrevious()}
            disabled={page === 1}
          >
            Prev
          </button>
          <button
            className="bg-brand/80 hover:bg-brand text-background w-32 px-3 py-1 rounded-md cursor-pointer flex items-center justify-center mx-auto gap-5 font-bold all disabled:cursor-not-allowed disabled:opacity-30"
            onClick={() => showNext()}
            disabled={dataLimit >= dataForCheckingNext}
          >
            Next
          </button>
        </div>
      </div>
    );
  }
  return (
    <div>
      <div className="section bg-background/90 text-textPrimary min-h-screen">
        {content}
      </div>
    </div>
  );
};

export default Transactions;
