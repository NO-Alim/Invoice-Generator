import React from 'react';
import useGetTransaction from '../hooks/useGetTransaction';
import TbodyItem from './TbodyItem';
import LoaderSpin from './ui/LoaderSpin';

const ListContainer = () => {
  const { transaction, loading, error } = useGetTransaction('', 10);
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
          {transaction.map((item, ind) => {
            return <TbodyItem item={item} key={ind} />;
          })}
        </tbody>
      </table>
    );
  }
  return <div>{content}</div>;
};

export default ListContainer;
