import moment from 'moment/moment';
import React from 'react';
import { RiDeleteBin6Line } from 'react-icons/ri';
const TbodyItem = ({ item }) => {
  const { id, invoice, productNameArray, totalPrice, timeStamp } = item || {};
  return (
    <>
      <tr className="w-full px-3 py-1 md:px-10 flex justify-between">
        <td className="flex-1 flex gap-2 items-center">
          <span>
            <input type="checkbox" />
          </span>{' '}
          <span>
            {productNameArray.map((item, ind) => {
              return (
                item + `${ind + 1 !== productNameArray.length ? ', ' : ''}`
              );
            })}
          </span>
        </td>
        <td className="flex-1 hidden md:block">
          {moment.unix(timeStamp.seconds).format('L')}
        </td>
        <td className="flex-1 hidden md:block">
          {moment.unix(timeStamp.seconds).format('LTS')}
        </td>
        <td className="flex-1">{totalPrice}</td>
        <td className="flex gap-3">
          {/* <button>
            <i>
              <FaEdit />
            </i>
          </button> */}

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
