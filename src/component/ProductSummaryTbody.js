import React from 'react';
import { useSelector } from 'react-redux';
import useGetBetweenDateTransaction from '../hooks/useGetBetweenDateTransaction';
import { precisionRound } from '../utils/PrecisionRound';

const ProductSummaryTbody = ({ item }) => {
  const { startDate, endDate } = useSelector((state) => state.headerDuration);
  const { transactions, loading, error } = useGetBetweenDateTransaction(
    startDate ? new Date(startDate) : '',
    endDate ? new Date(endDate) : ''
  );
  const { productName } = item;

  let productsArray = transactions.map((item) => item.products);
  productsArray = productsArray.flat(1);

  const thisProducts = productsArray.filter(
    (item) => item.name === productName
  );
  const totalPrice = thisProducts.reduce(
    (acc, curr) => acc + curr.price * curr.quantity,
    0
  );
  const totalQuantity = thisProducts.reduce(
    (acc, curr) => acc + curr.quantity,
    0
  );
  return (
    <tr className="w-full px-3 py-1 md:px-10 flex justify-between hover:bg-brand hover:text-background">
      <td className="flex-1 text-start">{productName}</td>
      <td className="flex-1 text-center">
        $ {precisionRound(Number(totalPrice), 2)}
      </td>
      <td className="flex-1 text-end">{totalQuantity} unit</td>
    </tr>
  );
};

export default ProductSummaryTbody;
