import React, { useState } from 'react';
import plus from '.././img/plus.png';
import AddCategoryModal from './orderDesk.js/AddCategoryModal';
import AddProductModal from './orderDesk.js/AddProductModal';
import { AddSubCategoryModal } from './orderDesk.js/AddSubCategoryModal';

const DashBoardBtnContainer = () => {
  const [opened1, setOpened1] = useState(false);
  const [opened2, setOpened2] = useState(false);
  const [opened3, setOpened3] = useState(false);

  const controlModal1 = () => {
    setOpened1((prevState) => !prevState);
  };
  const controlModal2 = () => {
    setOpened2((prevState) => !prevState);
  };
  const controlModal3 = () => {
    setOpened3((prevState) => !prevState);
  };
  return (
    <>
      <div className="flex gap-5 flex-wrap">
        <button
          className="bg-brand/80 all hover:bg-brand px-2 py-1 text-lg font-semibold rounded-sm flex gap-2 items-center justify-center text-background"
          onClick={controlModal1}
        >
          <img src={plus} alt="plus" className="w-5 h-5" />
          <h1>Category</h1>
        </button>
        <button
          className="bg-brand/80 all hover:bg-brand px-2 py-1 text-lg font-semibold rounded-sm flex gap-2 items-center justify-center text-background"
          onClick={controlModal2}
        >
          <img src={plus} alt="plus" className="w-5 h-5" />
          <h1>Subcategory</h1>
        </button>
        <button
          className="bg-brand/80 all hover:bg-brand px-2 py-1 text-lg font-semibold rounded-sm flex gap-2 items-center justify-center text-background"
          onClick={controlModal3}
        >
          <img src={plus} alt="plus" className="w-5 h-5" />
          <h1>Product</h1>
        </button>
      </div>
      <AddCategoryModal open={opened1} control={controlModal1} />
      <AddSubCategoryModal open={opened2} control={controlModal2} />
      <AddProductModal open={opened3} control={controlModal3} />
    </>
  );
};

export default DashBoardBtnContainer;
