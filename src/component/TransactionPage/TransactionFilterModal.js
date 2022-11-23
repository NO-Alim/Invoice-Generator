import React from 'react';

const TransactionFilterModal = () => {
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
              Add Product
            </h2>
            <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
              <div className="rounded-md shadow-sm -space-y-px">
                <div>
                  <label htmlFor="to" className="sr-only">
                    To
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
                    To
                  </label>
                  <input
                    id="price"
                    name="price"
                    type="number"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    required
                    className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-background focus:border-background focus:z-10 sm:text-sm"
                    placeholder="Price of Product per Unit"
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
                  Add Product
                </button>
              </div>
            </form>
          </div>
        </div>
      </>
    )
  );
};

export default TransactionFilterModal;
