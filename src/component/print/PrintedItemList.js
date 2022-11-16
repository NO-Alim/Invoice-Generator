import React from 'react';
import { useSelector } from 'react-redux';
import PrintedSingleItem from './PrintedSingleItem';

const PrintedItemList = () => {
  const { productList } = useSelector((state) => state.cart);

  return (
    <div className="w-full">
      {productList.map((item) => {
        return <PrintedSingleItem item={item} key={item.id} />;
      })}
    </div>
  );
};

export default PrintedItemList;
