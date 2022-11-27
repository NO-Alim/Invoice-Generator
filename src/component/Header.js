import moment from 'moment/moment';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import useGetBetweenDateTransaction from '../hooks/useGetBetweenDateTransaction';
import { precisionRound } from '../utils/PrecisionRound';
import HeaderDurationModal from './HeaderDurationModal';
import IndividualSummary from './IndividualSummary';
import LoaderSpin from './ui/LoaderSpin';
const Header = () => {
  const { startDate, endDate } = useSelector((state) => state.headerDuration);
  const { transactions, loading, error } = useGetBetweenDateTransaction();
  // startDate ? new Date(startDate) : '',
  // endDate ? new Date(endDate) : ''

  //today
  const date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let currentDate = `${year}-${month}-${day}`;

  //for modal
  const [openModal, setOpenModal] = useState(false);
  const controlModal = () => {
    setOpenModal(!openModal);
  };

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

  if (!loading && !error) {
    content = (
      <div className="flex flex-col sm:flex-row gap-10">
        <IndividualSummary
          title="Total Sale amount"
          value={`$ ${precisionRound(Number(totalPrice), 2)}`}
        />
        <IndividualSummary
          title="Total Products Sales"
          value={`${totalItem} Unit`}
        />
      </div>
    );
  }
  return (
    <>
      <div className="section text-textPrimary flex flex-col gap-10">
        <h1 className="text-2xl font-thin">
          Here's What's Happen With Your Store{' '}
          <span
            className="text-brand cursor-pointer border-b-2 border-brand"
            onClick={controlModal}
          >
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
        </h1>
        {content}
        <div className="flex items-center justify-center">
          <Link
            to="/dashboard"
            className="bg-brand/80 all hover:bg-brand px-2 py-1 text-lg font-semibold rounded-sm flex gap-2 items-center justify-center text-background"
          >
            More Info
          </Link>
        </div>
      </div>
      <HeaderDurationModal open={openModal} control={controlModal} />
    </>
  );
};

export default Header;
