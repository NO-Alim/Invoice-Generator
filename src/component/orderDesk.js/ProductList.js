import React from 'react';
import { useSelector } from 'react-redux';
import useGetProducts from '../../hooks/useGetProducts';
import LoaderSpin from '../ui/LoaderSpin';
import SingleProduct from './SingleProduct';

const ProductList = () => {
  const { category, subCategory } = useSelector((state) => state.orderDesk);
  const { products, loading } = useGetProducts(category, subCategory);
  let content;
  if (loading) content = <LoaderSpin />;
  if (!loading) {
    content = (
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5 px-5 overflow-y-auto max-h-80">
        {products && products.length > 0 ? (
          products.map((item, ind) => {
            return <SingleProduct item={item} key={ind} />;
          })
        ) : (
          <div className="col-span-2 flex items-center">
            <h1 className="text-2xl font-thin cursor-pointer">
              Add sub a Products before start.
              <span className="text-textPrimary/50 ml-2">
                (coca-cola 2 liter, fizzUp 1 liter, 12inc pizza.)
              </span>
            </h1>
          </div>
        )}
      </div>
    );
  }
  return <>{content}</>;
};

export default ProductList;
