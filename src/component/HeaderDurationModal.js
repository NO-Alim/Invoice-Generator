import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { setDuration } from '../features/headerDuration/headerDurationSlice';

const HeaderDurationModal = ({ open, control }) => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    let data = {
      startDate,
      endDate,
    };
    dispatch(setDuration(data));
    control();
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
            <div className="p-10 relative">
              <div
                className="absolute right-0 top-0 w-5 h-5 rounded-full bg-background flex items-center justify-center cursor-pointer"
                onClick={control}
              >
                <i className="text-sm text-textPrimary">
                  <FaTimes />
                </i>
              </div>
              <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                Select Duration
              </h2>
              <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                <div className="rounded-md shadow-sm flex flex-col sm:flex-row gap-5">
                  <div className="flex-1">
                    <label htmlFor="to" className="">
                      Start Date
                    </label>
                    <input
                      id="to"
                      name="to"
                      type="date"
                      value={startDate}
                      required
                      className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-background focus:border-background focus:z-10 sm:text-sm"
                      placeholder="Name of Category"
                      onChange={(e) => setStartDate(e.target.value)}
                    />
                  </div>
                  <div className="flex-1">
                    <label htmlFor="to" className="">
                      End date
                    </label>
                    <input
                      id="to"
                      name="to"
                      type="date"
                      value={endDate}
                      required
                      className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-background focus:border-background focus:z-10 sm:text-sm"
                      placeholder="Name of Category"
                      onChange={(e) => setEndDate(e.target.value)}
                    />
                  </div>
                </div>
                <div>
                  <button
                    type="submit"
                    //disabled={true}
                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-background/80 hover:bg-background/ focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-background"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </>
    )
  );
};

export default HeaderDurationModal;
