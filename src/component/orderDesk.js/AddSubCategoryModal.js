import React, { useEffect, useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import useAddSubCategory from '../../hooks/useAddSubCategory';
import useGetCategory from '../../hooks/useGetCategory';
import SelectOption from '../ui/SelectOption';

export const AddSubCategoryModal = ({ open, control }) => {
  const { addSubCategory } = useAddSubCategory();
  const { category, loading } = useGetCategory();

  const [reselectField, setReselectField] = useState([]);
  const [selectedOption, setSelectedOption] = useState([]);
  const [subCategory, setSubCategory] = useState('');

  const handleSelect = (e) => {
    setSelectedOption(e);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let arg = {
      category: selectedOption.value,
      subCategory,
    };
    addSubCategory(arg);
    setSubCategory('');
    setSelectedOption([]);
    control();
  };
  useEffect(() => {
    const data = category.map((item) => {
      return {
        value: item.category,
        label: item.category,
      };
    });
    setReselectField(data);
  }, [category]);

  return (
    open && (
      <>
        <div
          onClick={control}
          className="fixed w-full h-full inset-0 z-10 bg-black/50 cursor-pointer"
        ></div>
        <div className="rounded w-[400px] lg:w-[600px] space-y-8 bg-white absolute top-1/2 left-1/2 z-20 -translate-x-1/2 -translate-y-1/2">
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
              Add Sub Category
            </h2>
            <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
              <div className="rounded-md shadow-sm -space-y-px">
                <div>
                  <label htmlFor="to" className="sr-only">
                    To
                  </label>
                  <input
                    id="to"
                    name="to"
                    type="text"
                    value={subCategory}
                    required
                    className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-background focus:border-background focus:z-10 sm:text-sm"
                    placeholder="Name of Sub Category"
                    onChange={(e) => setSubCategory(e.target.value)}
                  />
                </div>
              </div>

              <div className="text-background flex-1">
                <SelectOption
                  options={reselectField}
                  placeholder="Select Category"
                  value={selectedOption}
                  onChange={(e) => handleSelect(e)}
                  required
                />
              </div>

              <div>
                <button
                  type="submit"
                  //disabled={true}
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-background/80 hover:bg-background/ focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-background"
                >
                  Add Sub Category
                </button>
              </div>
            </form>
          </div>
        </div>
      </>
    )
  );
};
