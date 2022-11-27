import React, { useState } from 'react';
import { FaEdit } from 'react-icons/fa';
import EditProductModal from './EditProductModal';

const SingleDashBoardProduct = ({ item }) => {
  const [open, setOpen] = useState(false);
  const control = () => {
    setOpen(!open);
  };
  return (
    <div className="py-2 px-5 bg-borderPrimary/10 w-full flex justify-between items-center">
      <h1>{item.productName}</h1>
      <span className="cursor-pointer" onClick={control}>
        <i>
          <FaEdit />
        </i>
      </span>
      <EditProductModal open={open} control={control} item={item} />
    </div>
  );
};

export default SingleDashBoardProduct;
