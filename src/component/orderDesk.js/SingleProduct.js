import React from 'react';

const SingleProduct = ({ item }) => {
  const { productName, productPrice } = item;
  return (
    <div className="x h-32 border border-brand/50 rounded-md flex flex-col items-center justify-center gap-2 cursor-pointer hover:border-brand all">
      <h1 className=" text-xl font-thin">{productName}</h1>
      <h1 className="text-textPrimary/50 ml-2 text-2xl">$ {productPrice}</h1>
    </div>
  );
};

export default SingleProduct;
