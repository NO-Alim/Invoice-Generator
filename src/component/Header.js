import moment from 'moment/moment';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import useGetBetweenDateTransaction from '../hooks/useGetBetweenDateTransaction';
import HeaderDurationModal from './HeaderDurationModal';
import IndividualSummary from './IndividualSummary';
import LoaderSpin from './ui/LoaderSpin';
const Header = () => {
  const { startDate, endDate } = useSelector((state) => state.headerDuration);
  const { transactions, loading, error } = useGetBetweenDateTransaction(
    startDate ? new Date(startDate) : '',
    endDate ? new Date(endDate) : ''
  );

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
          value={`$ ${totalPrice}`}
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
      <div className="section bg-background/90 text-textPrimary flex flex-col gap-10">
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
      </div>
      <HeaderDurationModal open={openModal} control={controlModal} />
    </>
  );
};

export default Header;
