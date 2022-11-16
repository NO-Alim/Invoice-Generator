import React from 'react';
import useGetTransaction from '../hooks/useGetTransaction';
import TbodyItem from './TbodyItem';

const ListContainer = () => {
  const { transaction, loading } = useGetTransaction();
  return (
    <div>
      <table className="flex flex-col gap-5 w-full">
        <thead className="w-full bg-brand px-3 py-1 rounded-t-md md:px-10">
          <tr className="w-full flex justify-between text-lg text-background">
            <th className="font-normal">Product</th>
            <th className="font-normal">Added Date</th>
            <th className="font-normal">Time</th>
            <th className="font-normal">Price</th>
            <th className="font-normal">More</th>
          </tr>
        </thead>
        <tbody className="w-full">
          {transaction &&
            transaction.map((item, ind) => {
              return <TbodyItem key={ind} />;
            })}
        </tbody>
      </table>
    </div>
  );
};

export default ListContainer;
