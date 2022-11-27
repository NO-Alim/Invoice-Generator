import React from 'react';
import useGetProducts from '../hooks/useGetProducts';
import ProductSummaryTbody from './ProductSummaryTbody';
import LoaderSpin from './ui/LoaderSpin';

const ProductsSummary = () => {
  const { products, loading, error } = useGetProducts('', '');
  let content;
  if (loading) content = <LoaderSpin />;
  if (!loading && error) {
    content = <h1 className="x text-red-600 text-xl">{error.message}</h1>;
  }
  if (!loading && !error && products?.length === 0) {
    content = <h1 className="x text-red-600 text-xl">No Product Found</h1>;
  }
  if (!loading && !error && products?.length > 0) {
    content = (
      <div className="bg-background rounded-md sub-section flex flex-col gap-5 md:gap-10">
        <h1 className="text-3xl font-thin">Indevisual Product Summary</h1>
        <table className="flex flex-col gap-5 w-full">
          <thead className="w-full bg-brand px-3 py-1 rounded-t-md md:px-10">
            <tr className="w-full flex justify-between text-lg text-background">
              <th className="font-normal flex-1 justify-start text-start">
                Name
              </th>
              <th className="font-normal flex-1 justify-start text-center">
                Sales Value
              </th>
              <th className="font-normal flex-1 justify-start text-end">
                Sales Unit
              </th>
            </tr>
          </thead>
          <tbody className="w-full">
            {products &&
              products.map((item, ind) => {
                return <ProductSummaryTbody item={item} key={item.key} />;
              })}
          </tbody>
        </table>
      </div>
    );
  }
  return <div>{content}</div>;
};

export default ProductsSummary;
