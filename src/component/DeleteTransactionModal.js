import React, { useState } from 'react';
import { AiFillWarning } from 'react-icons/ai';
import { FaTimes } from 'react-icons/fa';
import useDelete from '../hooks/useDelete';

const DeleteTransactionModal = ({ open, control, transactionKey }) => {
  const { deleteTransaction } = useDelete();
  const [randomText, setRandomText] = useState('Delete');
  const [inputValue, setInputValue] = useState('');

  const handleDelete = () => {
    console.log('hello world');
    deleteTransaction(transactionKey);
  };
  return (
    open && (
      <>
        <div className="fixed w-screen h-screen inset-0 z-10 bg-background/50 cursor-pointer flex items-center justify-center overflow-hidden">
          <div
            className="fixed w-screen h-screen bg-transparent z-10"
            onClick={control}
          ></div>
          <div className="rounded w-[400px] lg:w-[600px] space-y-8 bg-textPrimary z-[11]">
            <div className="relative">
              <div
                className="absolute right-0 top-0 w-5 h-5 rounded-full bg-background flex items-center justify-center cursor-pointer"
                onClick={control}
              >
                <i className="text-sm">
                  <FaTimes />
                </i>
              </div>
              <div className="bg-red-100 text-red-500 p-5 flex flex-col gap-3">
                <h1 className="flex items-center gap-2 text-2xl">
                  <i>
                    <AiFillWarning />
                  </i>{' '}
                  Delete this Transaction?
                </h1>
                <p>Doing so will permanently delete this data from Server.</p>
              </div>
              <div className="p-5 text-background flex flex-col gap-3 items-start">
                <h1>
                  Confirm that you want to delete this Transaction by typing:{' '}
                  {randomText}
                </h1>
                <form>
                  <input
                    className="border rounded-md px-2 py-1 w-auto"
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder={randomText}
                  />
                </form>
                <div className="w-full flex justify-end gap-5">
                  <button
                    className="x bg-borderPrimary/00 hover:bg-borderPrimary all px-3 py-1 rounded-md"
                    onClick={control}
                  >
                    Cancel
                  </button>
                  <button
                    disabled={randomText !== inputValue}
                    className="px-3 py-1 rounded-md bg-red-600 text-textPrimary disabled:text-background disabled:bg-borderPrimary"
                    onClick={handleDelete}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  );
};

export default DeleteTransactionModal;
