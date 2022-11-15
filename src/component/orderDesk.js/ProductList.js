import React, { useState } from 'react';
import AddProductModal from './AddProductModal';
import SingleProduct from './SingleProduct';

const ProductList = () => {
  const [opened, setOpened] = useState(false);
  const [x, setX] = useState(false);

  const controlModal = () => {
    setOpened((prevState) => !prevState);
  };
  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5 px-5 overflow-y-auto max-h-80">
        <SingleProduct />
        <SingleProduct />
        <SingleProduct />
        <SingleProduct />
        <SingleProduct />
        <SingleProduct />
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
