import React from 'react';
import { FaEdit } from 'react-icons/fa';
import { RiDeleteBin6Line } from 'react-icons/ri';
const TbodyItem = () => {
  return (
    <>
      <tr className="w-full px-3 py-1 md:px-10 flex justify-between">
        <td className="flex gap-2 items-center">
          <span>
            <input type="checkbox" />
          </span>{' '}
          <span> hello world</span>
        </td>
        <td>10:00:00</td>
        <td>10:00:00</td>
        <td>hello world</td>
        <td className="flex gap-3">
          <button>
            <i>
              <FaEdit />
            </i>
          </button>

          <button>
            <i>
              <RiDeleteBin6Line />
            </i>
          </button>
        </td>
      </tr>
    </>
  );
};

export default TbodyItem;
