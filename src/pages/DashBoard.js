import moment from 'moment/moment';
import React, { useState } from 'react';
import { FaRegCalendarAlt } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import DashBoardHeader from '../component/DashBoardHeader';
import HeaderDurationModal from '../component/HeaderDurationModal';
import ProductsSummary from '../component/ProductsSummary';
import LoaderSpin from '../component/ui/LoaderSpin';
import useGetBetweenDateTransaction from '../hooks/useGetBetweenDateTransaction';
import { precisionRound } from '../utils/PrecisionRound';

const DashBoard = () => {
  const { startDate, endDate } = useSelector((state) => state.headerDuration);
  const { transactions, loading, error } = useGetBetweenDateTransaction(
    startDate ? new Date(startDate) : '',
    endDate ? new Date(endDate) : ''
  );
  //for modal
  const [openModal, setOpenModal] = useState(false);
  const controlModal = () => {
    setOpenModal(!openModal);
  };

  //today
  const date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let currentDate = `${year}-${month}-${day}`;

  const totalPrice = transactions.reduce(
    (acc, curr) => acc + curr.totalPrice,
    0
  );
  const totalItem = transactions.reduce((acc, curr) => acc + curr.totalItem, 0);

  let content;

  if (loading) content = <LoaderSpin />;
  if (!loading && error) {
    content = <h1 className="x text-red-600 text-xl">{error.message}</h1>;
  }
  if (!loading && !error && transactions?.length === 0) {
    content = <h1 className="x text-red-600 text-xl">No Transaction Found</h1>;
  }

  if (!loading && !error && transactions?.length > 0) {
    content = (
      <>
        <div className="bg-background rounded-md sub-section flex-1 text-center">
          <h1 className="text-xl font-thin">Sales Values</h1>
          <h1 className="text-3xl">${precisionRound(Number(totalPrice), 2)}</h1>
        </div>
        <div className="bg-background rounded-md sub-section flex-1 text-center">
          <h1 className="text-xl font-thin">Total Products Sales</h1>
          <h1 className="text-3xl">{totalItem} unit</h1>
        </div>
        <div className="bg-background rounded-md sub-section flex-1 text-center">
          <h1 className="text-xl font-thin">Customer Visited</h1>
          <h1 className="text-3xl">{transactions.length}</h1>
        </div>
      </>
    );
  }
  return (
    <>
      <div className="section bg-background/90 text-textPrimary min-h-screen flex flex-col gap-5 md:gap-10">
        {/* <DashBoardBtnContainer /> */}
        <DashBoardHeader />
        <div className="flex gap-5 flex-wrap" onClick={controlModal}>
          <span className="text-brand text-xl cursor-pointer border-b-2 border-brand">
            {!startDate && !endDate && 'Today'}
            {startDate &&
              endDate &&
              startDate === endDate &&
              endDate === currentDate &&
              'Today'}

            {startDate === endDate && endDate !== currentDate && `${startDate}`}
            {startDate !== endDate &&
              `${moment(startDate).format('LL')} - ${moment(endDate).format(
                'LL'
              )}`}
          </span>
          <button className="bg-brand/80 all hover:bg-brand px-2 py-1 text-lg font-semibold rounded-sm flex gap-2 items-center justify-center text-background">
            <span>
              <i>
                <FaRegCalendarAlt />
              </i>
            </span>
            <span>Calender</span>
          </button>
        </div>
        <div className="flex gap-5 flex-col sm:flex-row flex-wrap">
          {content}
        </div>
        <div>
          <ProductsSummary />
        </div>
      </div>
      <HeaderDurationModal open={openModal} control={controlModal} />
    </>
  );
};

export default DashBoard;
