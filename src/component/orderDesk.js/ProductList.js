import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import useGetProducts from '../../hooks/useGetProducts';
import AddProductModal from './AddProductModal';
import SingleProduct from './SingleProduct';

const ProductList = () => {
  const [opened, setOpened] = useState(false);

  const { category, subCategory } = useSelector((state) => state.orderDesk);
  const { products, loading } = useGetProducts(category, subCategory);

  const controlModal = () => {
    setOpened((prevState) => !prevState);
  };
  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5 px-5 overflow-y-auto max-h-80">
        {products && products.length > 0 ? (
          products.map((item, ind) => {
            return <SingleProduct item={item} key={ind} />;
          })
        ) : (
          <div className="col-span-2 flex items-center">
            <h1
              className="text-2xl font-thin cursor-pointer"
              onClick={controlModal}
            >
              Add sub a Products before start.
              <span className="text-textPrimary/50 ml-2">
                (coca-cola 2 liter, fizzUp 1 liter, 12inc pizza.)
              </span>
            </h1>
          </div>
        )}
        <div
          className="x h-32 border border-brand/50 rounded-md flex flex-col items-center justify-center cursor-pointer hover:border-brand all text-brand"
          onClick={controlModal}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            fill="currentColor"
            className="bi bi-plus"
            viewBox="0 0 16 16"
          >
            {' '}
            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />{' '}
          </svg>
        </div>
      </div>
      <AddProductModal open={opened} control={controlModal} />
    </>
  );
};

export default ProductList;
