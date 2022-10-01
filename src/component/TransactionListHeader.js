import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { FiPrinter } from 'react-icons/fi';
import { RiDeleteBin6Line } from 'react-icons/ri';
const TransactionListHeader = () => {
  return (
    <div className="flex gap-10 items-center justify-between">
      <div className="flex gap-10 justify-between items-center">
        <h5 className="text-lg text-brand">0 Item selected</h5>
        <button className="hover:text-brand">
          <i>
            <RiDeleteBin6Line />
          </i>
        </button>
        <button className="hover:text-brand">
          <i>
            <FiPrinter />
          </i>
        </button>
      </div>
      <div className="text-end">
        <form className="flex border border-brand rounded-md overflow-hidden bg-brand/10 w-auto px-2 py-1">
          <button>
            <i className="font-thin">
              <FaSearch />
            </i>
          </button>
          <input
            className="bg-transparent hover:outline-none focus:outline-none pl-2"
            placeholder="Search Item"
            type="text"
          />
        </form>
      </div>
    </div>
  );
};

export default TransactionListHeader;
