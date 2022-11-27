import React, { useEffect, useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import SelectOption from '../component/ui/SelectOption';
import useEditProduct from '../hooks/useEditProduct';
import useGetCategory from '../hooks/useGetCategory';
import useGetSubCategory from '../hooks/useGetSubCategory';

const EditProductModal = ({ open = false, control, item = {} }) => {
  const { editProduct } = useEditProduct();
  const [categorySelectedField, setCategorySelectedField] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState();

  const [subCategorySelectedField, setSubCategorySelectedField] = useState([]);
  const [selectedSubCategory, setSelectedSubCategory] = useState();

  const { category } = useGetCategory();
  const { subCategory } = useGetSubCategory(selectedCategory?.value);

  const [price, setPrice] = useState(item.productPrice);
  const [name, setName] = useState(item.productName);
  const [error, setError] = useState(`This Feature isn't available now.`);

  const handleCategorySelect = (e) => {
    setSelectedCategory(e);
  };

  const handleSubCategorySelect = (e) => {
    setSelectedSubCategory(e);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && price && selectedCategory && selectedSubCategory) {
      const data = {
        productName: name,
        productPrice: price,
        category: selectedCategory.value,
        subCategory: selectedSubCategory.value,
      };
      editProduct(data, item.key);
      setPrice('');
      setName('');
      setSelectedCategory(null);
      setSelectedSubCategory(null);
      setError('');
      control();
    } else {
      setError('All Field must be filled');
    }
  };

  useEffect(() => {
    const data = category.map((item) => {
      return {
        value: item.category,
        label: item.category,
      };
    });
    setCategorySelectedField(data);
  }, [category]);

  useEffect(() => {
    const data = subCategory.map((item) => {
      return {
        value: item.subCategory,
        label: item.subCategory,
      };
    });
    setSubCategorySelectedField(data);
  }, [subCategory, selectedCategory]);

  //when category change make sure sub category also changed
  useEffect(() => {
    setSelectedSubCategory(null);
  }, [selectedCategory]);
  return (
    open && (
      <>
        <div className="fixed w-screen h-screen inset-0 z-10 bg-background/50 cursor-pointer flex items-center justify-center overflow-hidden">
          <div
            className="fixed w-screen h-screen bg-transparent z-10"
            onClick={control}
          ></div>
          <div className="rounded w-[400px] lg:w-[600px] space-y-8 bg-text z-[11] bg-textPrimary">
            <div className="p-10 relative">
              <div
                className="absolute right-0 top-0 w-5 h-5 rounded-full bg-background flex items-center justify-center cursor-pointer"
                onClick={control}
              >
                <i className="text-sm">
                  <FaTimes />
                </i>
              </div>
              <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                Edit Product
              </h2>
              <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                <div className="rounded-md shadow-sm -space-y-px">
                  <div>
                    <label htmlFor="to" className="sr-only">
                      name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={name}
                      required
                      className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-background focus:border-background focus:z-10 sm:text-sm"
                      placeholder="Name of Category"
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div>
                    <label htmlFor="to" className="sr-only">
                      price
                    </label>
                    <input
                      id="price"
                      name="price"
                      type="number"
                      value={price}
                      required
                      className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-background focus:border-background focus:z-10 sm:text-sm"
                      placeholder="Price of Product per Unit"
                      onChange={(e) => setPrice(e.target.value)}
                    />
                  </div>
                </div>
                <div className="flex gap-5">
                  <div className="text-background flex-1">
                    <SelectOption
                      options={categorySelectedField}
                      value={selectedCategory}
                      placeholder="Select Category"
                      required
                      onChange={(e) => handleCategorySelect(e)}
                    />
                  </div>

                  <div className="text-background flex-1">
                    <SelectOption
                      options={subCategorySelectedField}
                      placeholder="Select Sub Category"
                      value={selectedSubCategory}
                      required
                      onChange={(e) => handleSubCategorySelect(e)}
                    />
                  </div>
                </div>
                {error ? (
                  <div className="text-center">
                    <h1 className="x text-red-700">{error}</h1>
                  </div>
                ) : null}

                <div>
                  <button
                    type="submit"
                    //disabled={true}
                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-background/80 hover:bg-background/ focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-background"
                  >
                    Submit Edit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </>
    )
  );
};

export default EditProductModal;
