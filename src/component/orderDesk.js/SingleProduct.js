import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, incrementItem } from '../../features/cart/cartSlice';

const SingleProduct = ({ item }) => {
  const dispatch = useDispatch();
  const { productList } = useSelector((state) => state.cart);

  //let id = _uniqueId('item-');
  const { productName, productPrice, id } = item;
  const handleClick = () => {
    const data = {
      name: item.productName,
      price: Number(productPrice),
      quantity: 1,
      id,
    };

    if (productList?.length > 0) {
      if (productList.some((item) => item.id === id)) {
        dispatch(incrementItem(data));
      } else {
        dispatch(addToCart(data));
      }
    } else {
      dispatch(addToCart(data));
    }
  };
  return (
    <div
      className="x h-32 border border-brand/50 rounded-md flex flex-col items-center justify-center gap-2 cursor-pointer hover:border-brand all"
      onClick={handleClick}
    >
      <h1 className=" text-xl font-thin">{productName}</h1>
      <h1 className="text-textPrimary/50 ml-2 text-2xl">$ {productPrice}</h1>
    </div>
  );
};

export default SingleProduct;
