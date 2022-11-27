import moment from 'moment/moment';
import React, { useState } from 'react';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';
import { precisionRound } from '../utils/PrecisionRound';
import DeleteTransactionModal from './DeleteTransactionModal';
const TbodyItem = ({ item }) => {
  const [open, setOpen] = useState(false);

  const control = () => {
    setOpen(!open);
  };

  const { productNameArray, totalPrice, timeStamp, key } = item || {};
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/transaction/${key}`);
  };
  return (
    <>
      <tr className="w-full px-3 py-1 md:px-10 flex justify-between items-center cursor-pointer border-b border-borderPrimary/40 mb-2 pb-2">
        <td className="flex-1 flex gap-2 items-center" onClick={handleClick}>
          <span>
            {productNameArray.map((item, ind) => {
              return (
                item + `${ind + 1 !== productNameArray.length ? ', ' : ''}`
              );
            })}
          </span>
        </td>
        <td className="flex-1 hidden md:block" onClick={handleClick}>
          {moment.unix(timeStamp.seconds).format('L')}
        </td>
        <td className="flex-1 hidden md:block" onClick={handleClick}>
          {moment.unix(timeStamp.seconds).format('LTS')}
        </td>
        <td className="flex-1" onClick={handleClick}>
          ${precisionRound(Number(totalPrice), 2)}
        </td>
        <td className="flex gap-3">
          <button onClick={control}>
            <i>
              <RiDeleteBin6Line />
            </i>
          </button>
        </td>
      </tr>
      <DeleteTransactionModal
        open={open}
        control={control}
        transactionKey={key}
      />
    </>
  );
};

export default TbodyItem;
