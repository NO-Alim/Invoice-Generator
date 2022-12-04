import moment from 'moment/moment';
import React, { useEffect, useState } from 'react';
import { FaEdit, FaSave } from 'react-icons/fa';
import { FiPrinter } from 'react-icons/fi';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import ReactToPrint from 'react-to-print';
import useAddTransaction from '../../hooks/useAddTransaction';
import useAuth from '../../hooks/useAuth';
import PrintedItemList from './PrintedItemList';
import PrintedSubtotal from './PrintedSubtotal';

const PrintPage = () => {
  const { currentUser, loading, error } = useAuth();

  const { addTransaction } = useAddTransaction();
  const [height, setHeight] = useState(0);
  const { cart } = useSelector((state) => state);
  const printComponentRef = React.createRef();

  const now = new Date();
  const second = Math.floor(now.getTime() / 1000);

  let invoiceNumber = 'invoice#' + second;

  const handleSave = () => {
    addTransaction(cart, invoiceNumber);
  };

  let date = new Date().toLocaleDateString();

  const contact = localStorage.getItem('contact');
  const website = localStorage.getItem('website');
  const address = localStorage.getItem('address');
  const shopName = localStorage.getItem('shopName');
  const currency = localStorage.getItem('currency');

  useEffect(() => {
    let clientHeight = Math.round(printComponentRef.current.clientHeight / 96);
    if (clientHeight < 7) {
      setHeight(clientHeight);
    } else {
      setHeight(6);
    }
  }, [printComponentRef]);
  return (
    <div className="section bg-background/90 text-textPrimary min-h-screen flex flex-col items-center gap-5 border border-background">
      <div className="overflow-x-scroll max-w-full">
        <div
          className="w-96 mx-auto flex flex-col bg-textPrimary text-background p-2"
          ref={printComponentRef}
        >
          <div className="flex justify-end">
            <div>
              <h3 className="font-semibold">{shopName}</h3>
              <h3 className="font-semibold">{currentUser?.email}</h3>
              <h3 className="font-semibold">{contact}</h3>
              <h3 className="font-semibold">{website}</h3>
              <h3 className="font-semibold">{address}</h3>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="mt-5 flex w-full justify-center border-t border-b border-dashed border-background">
              <h2 className="font-bold">{invoiceNumber}</h2>
            </div>
            <div>
              <h2>Date: {moment(date).format('L')}</h2>
              <h2 className="font-bold">Client {`--------`}</h2>
            </div>
            <div className="flex w-full justify-between font-semibold text-sm border-t border-b border-dashed border-background">
              <h2 className="flex-1 text-start">Description</h2>
              <h2 className="flex-1 text-center">Quantity x Rate</h2>
              <h2 className="flex-1 text-center">Discount</h2>
              <h2 className="flex-1 text-end">Total</h2>
            </div>
            <PrintedItemList />
            <PrintedSubtotal />
          </div>
          <div className="w-full text-center my-5">
            <h1>Thank You For Visiting Us.</h1>
          </div>
        </div>
      </div>

      <div className="flex gap-5 flex-wrap">
        <Link
          to="/order"
          className="flex gap-2 items-center justify-center bg-brand/30 px-5 py-2 rounded-md text-lg border border-brand  hover:bg-brand hover:text-background all"
        >
          <i>
            <FaEdit />
          </i>
          <span>Edit</span>
        </Link>
        <div
          className="flex gap-2 items-center justify-center bg-brand/30 px-5 py-2 rounded-md text-lg border border-brand  hover:bg-brand hover:text-background all cursor-pointer"
          onClick={handleSave}
        >
          <i>
            <FaSave />
          </i>
          <span>Save</span>
        </div>
        <ReactToPrint
          pageStyle={`@page {size: 3.5in ${height}in }`}
          trigger={() => (
            <button
              className="flex gap-2 items-center justify-center bg-brand/30 px-5 py-2 rounded-md text-lg border border-brand  hover:bg-brand hover:text-background all"
              onClick={handleSave}
            >
              <i>
                <FiPrinter />
              </i>
              <span>Save & Print</span>
            </button>
          )}
          content={() => printComponentRef.current}
        />
      </div>
    </div>
  );
};

export default PrintPage;
