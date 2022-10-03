import React from 'react';
import SelectOption from '../ui/SelectOption';

const AddProductModal = ({ open = false, control }) => {
  const reactSelectOptions = [
    {
      value: 'hello world',
      label: 'hello world',
    },
    {
      value: 'hi world',
      label: 'hi world',
    },
  ];

  return (
    open && (
      <>
        <div
          onClick={control}
          className="fixed w-full h-full inset-0 z-10 bg-black/50 cursor-pointer"
        ></div>
        <div className="rounded w-[400px] lg:w-[600px] space-y-8 bg-white p-10 absolute top-1/2 left-1/2 z-20 -translate-x-1/2 -translate-y-1/2">
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Add Product
          </h2>
          <form className="mt-8 space-y-6">
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="to" className="sr-only">
                  To
                </label>
                <input
                  id="to"
                  name="to"
                  type="email"
                  required
                  className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-background focus:border-background focus:z-10 sm:text-sm"
                  placeholder="Name of Category"
                />
              </div>
              <div>
                <label htmlFor="to" className="sr-only">
                  To
                </label>
                <input
                  id="to"
                  name="to"
                  type="number"
                  required
                  className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-background focus:border-background focus:z-10 sm:text-sm"
                  placeholder="Price of Product per Unit"
                />
              </div>
            </div>
            <div className="flex gap-5">
              <div className="text-background flex-1">
                <SelectOption
                  options={reactSelectOptions}
                  placeholder="Select Category"
                  value={null}
                  required
                />
              </div>

              <div className="text-background flex-1">
                <SelectOption
                  options={reactSelectOptions}
                  placeholder="Select Sub Category"
                  value={null}
                  required
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                disabled={true}
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-background/80 hover:bg-background/ focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-background"
              >
                Add Product
              </button>
            </div>
          </form>
        </div>
      </>
    )
  );
};

export default AddProductModal;
