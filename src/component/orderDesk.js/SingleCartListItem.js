import React, { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  decrementItem,
  deleteItem,
  editItem,
  incrementItem,
} from '../../features/cart/cartSlice';
import deleteIcon from '../../img/delete.png';
import { precisionRound } from '../../utils/PrecisionRound';

const SingleCartListItem = ({ item }) => {
  const { name, price, quantity, id } = item;
  const [value, setValue] = useState(quantity);
  const dispatch = useDispatch();
  const inputRef = useRef(null);

  const handleIncrement = () => {
    dispatch(incrementItem(item));
  };
  const handleDecrement = () => {
    if (quantity > 1) {
      dispatch(decrementItem(item));
    }
  };

  const handleChange = (e) => {
    setValue(e.target.value);
    dispatch(
      editItem({
        id,
        quantity: Number(e.target.value),
      })
    );
  };

  const handleDelete = () => {
    dispatch(deleteItem(id));
  };

  useEffect(() => {
    setValue(quantity);
  }, [quantity]);

  return (
    <>
      <tr className="w-full py-1 px-2 flex justify-between">
        <td className="flex-1">{name}</td>
        <td className="flex-1 flex items-center justify-center gap-1">
          <p className="cursor-pointer" onClick={handleDecrement}>
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
            ref={inputRef}
            onChange={(e) => handleChange(e)}
          />
          <p className="cursor-pointer" onClick={handleIncrement}>
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
          $ {precisionRound(Number(price * quantity), 2)}
        </td>
        <td className="flex items-center justify-center">
          <img
            className="cursor-pointer"
            src={deleteIcon}
            alt="delete"
            onClick={handleDelete}
            id="DeleteCartItem"
          />
        </td>
      </tr>
    </>
  );
};

export default SingleCartListItem;
