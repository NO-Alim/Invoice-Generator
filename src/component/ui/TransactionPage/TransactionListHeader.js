import React, { useState } from 'react';
import { FaSearch, FaTimes } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { nameFilter } from '../../../features/TransactionFilter/TransactionFilterSlice';
const TransactionListHeader = () => {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();
  const { name, category, subCategory } = useSelector(
    (state) => state.transactionFilter
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(nameFilter(inputValue));
    setInputValue('');
  };

  const clearFilter = () => {
    dispatch(nameFilter(''));
  };
  return (
    <div className="flex flex-col md:flex-row gap-5 items-start md:items-center justify-between">
      <div className="text-end">
        <form
          className="flex border border-brand rounded-md overflow-hidden bg-brand/10 w-auto px-2 py-1 w-auto"
          onSubmit={handleSubmit}
        >
          <button>
            <i className="font-thin">
              <FaSearch />
            </i>
          </button>
          <input
            className="bg-transparent hover:outline-none focus:outline-none pl-2"
            placeholder="Item Exact* Name"
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </form>
      </div>
      <>
        {name && (
          <h1 className="text-xl md:text-2xl font-thin flex">
            Filtered By Name:{' '}
            <h2 className="bg-brand text-background rounded-md  px-2 pb-1 font-normal relative ml-1 cursor-pointer">
              {name}
              <span
                className="x absolute w-4 h-4 bg-textPrimary -right-2 -top-2 rounded-full cursor-pointer"
                onClick={clearFilter}
              >
                <i className="text-[12px] w-full h-full flex items-center justify-center">
                  <FaTimes />
                </i>
              </span>
            </h2>
          </h1>
        )}
      </>
    </div>
  );
};

export default TransactionListHeader;
