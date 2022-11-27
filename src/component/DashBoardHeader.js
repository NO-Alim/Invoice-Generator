import React, { useState } from 'react';
import useGetCategory from '../hooks/useGetCategory';
import useGetProducts from '../hooks/useGetProducts';
import useGetSubCategory from '../hooks/useGetSubCategory';
import CategoryDashBoard from './CategoryDashBoard';
import DashBoardBtnContainer from './DashBoardBtnContainer';
import AddCategoryModal from './orderDesk.js/AddCategoryModal';
import AddProductModal from './orderDesk.js/AddProductModal';
import { AddSubCategoryModal } from './orderDesk.js/AddSubCategoryModal';
import ProductsDashBoard from './ProductsDashBoard';
import SubCategoryDashBoard from './SubCategoryDashBoard';
import LoaderSpin from './ui/LoaderSpin';

const DashBoardHeader = () => {
  const {
    category,
    loading: categoryLoading,
    error: categoryError,
  } = useGetCategory();
  const {
    subCategory,
    loading: subCategoryLoading,
    error: subCategoryError,
  } = useGetSubCategory();
  const {
    products,
    loading: productsLoading,
    error: productError,
  } = useGetProducts();

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
      <DashBoardBtnContainer />
      <div className="flex flex-col sm:flex-row gap-10">
        <div className="bg-background flex-1 rounded-md text-center shadow-md shadow-black">
          <div className="bg-brand/80 all hover:bg-brand px-2 py-1 text-lg font-semibold rounded-sm flex gap-2 items-center justify-center w-full text-background">
            <h1>Category</h1>
          </div>
          <AddCategoryModal open={opened1} control={controlModal1} />
          <div className="flex h-[400px] overflow-y-scroll scrollbar-hide justify-center ">
            {categoryLoading && <LoaderSpin />}
            {!categoryLoading && categoryError && (
              <div className="flex items-center justify-center">
                <h1 className="text-red-600 font-semibold">
                  {categoryError.message}
                </h1>
              </div>
            )}
            {!categoryLoading &&
              !categoryError &&
              category &&
              category.length > 0 && <CategoryDashBoard items={category} />}
          </div>
        </div>
        <div className="bg-background flex-1 rounded-md text-center shadow-md shadow-black">
          <div className="bg-brand/80 all hover:bg-brand px-2 py-1 text-lg font-semibold rounded-sm flex gap-2 items-center justify-center w-full text-background">
            <h1>Subcategory</h1>
          </div>
          <AddSubCategoryModal open={opened2} control={controlModal2} />

          <div className="flex h-[400px] overflow-y-scroll scrollbar-hide justify-center ">
            {subCategoryLoading && <LoaderSpin />}
            {!subCategoryLoading && subCategoryError && (
              <div className="flex items-center justify-center">
                <h1 className="text-red-600 font-semibold">
                  {subCategoryError.message}
                </h1>
              </div>
            )}
            {!subCategoryLoading &&
              !subCategoryError &&
              subCategory &&
              subCategory.length > 0 && (
                <SubCategoryDashBoard items={subCategory} />
              )}
          </div>
        </div>
        <div className="bg-background flex-1 rounded-md text-center shadow-md shadow-black">
          <div className="bg-brand/80 all hover:bg-brand px-2 py-1 text-lg font-semibold rounded-sm flex gap-2 items-center justify-center w-full text-background">
            <h1>Product</h1>
          </div>
          <AddProductModal open={opened3} control={controlModal3} />
          <div className="flex h-[400px] overflow-y-scroll scrollbar-hide justify-center ">
            {productsLoading && <LoaderSpin />}
            {!productsLoading && productError && (
              <div className="flex items-center justify-center">
                <h1 className="text-red-600 font-semibold">
                  {productError.message}
                </h1>
              </div>
            )}
            {!productsLoading &&
              !productError &&
              products &&
              products.length > 0 && <ProductsDashBoard items={products} />}
          </div>
        </div>
      </div>
    </>
  );
};

export default DashBoardHeader;
