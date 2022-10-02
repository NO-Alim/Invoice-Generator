import React, { useState } from 'react';
import { RiDeleteBin6Line } from 'react-icons/ri';

const SingleCartListItem = () => {
  const [value, setValue] = useState(1);
  return (
    <>
      <tr className="w-full py-1 px-2 flex justify-between">
        <td className="flex-1">Hello world</td>
        <td className="flex-1 flex items-center justify-center gap-1">
          <p className="cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              className="bi bi-file-minus"
              viewBox="0 0 16 16"
            >
              <path d="M5.5 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1-.5-.5z" />
            </svg>
          </p>
          <input
            className="w-9 text-center bg-brand/50 border-none focus:outline-none hover:outline-none appearance-none"
            type="number"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <p className="cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              className="bi bi-plus"
              viewBox="0 0 16 16"
            >
              {' '}
              <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />{' '}
            </svg>
          </p>
        </td>
        <td className="flex-1 flex items-center justify-center">
          $ {'456.99'}
        </td>
        <td className="flex items-center justify-center">
          <i className="cursor-pointer hover:text-brand all">
            <RiDeleteBin6Line />
          </i>
        </td>
      </tr>
    </>
  );
};

export default SingleCartListItem;
