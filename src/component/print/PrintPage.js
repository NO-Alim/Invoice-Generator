import React, { useEffect, useState } from 'react';
import { FaEdit } from 'react-icons/fa';
import { FiPrinter } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import ReactToPrint from 'react-to-print';
import PrintedItemList from './PrintedItemList';
import PrintedSubtotal from './PrintedSubtotal';

const PrintPage = () => {
  const printComponentRef = React.createRef();
  const [height, setHeight] = useState(0);

  useEffect(() => {
    setHeight(Math.round(printComponentRef.current.clientHeight / 96));
  }, [printComponentRef]);
  return (
    <div className="section bg-background/90 text-textPrimary min-h-screen flex flex-col items-center gap-5 border border-background">
      <div
        className="w-96 mx-auto flex flex-col bg-textPrimary text-background p-2"
        ref={printComponentRef}
      >
        <div className="flex justify-end">
          <div>
            <h3 className="font-semibold">Arafat Shop Company</h3>
            <h3 className="font-semibold">234 6th Ave, DHAKA,</h3>
            <h3 className="font-semibold">arafatHossain@gmail.com</h3>
            <h3 className="font-semibold">www.aitaseta.com</h3>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="mt-5 flex w-full justify-center border-t border-b border-dashed border-background">
            <h2 className="font-bold">Invoice #{`2345234`}</h2>
          </div>
          <div>
            <h2>Date {`01/11/2020`}</h2>
            <h2 className="font-bold">Client {`xyz`}</h2>
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

      <div className="flex gap-5">
        <Link
          to="/order"
          className="flex gap-2 items-center justify-center bg-brand/30 px-5 py-2 rounded-md text-lg border border-brand  hover:bg-brand hover:text-background all"
        >
          <i>
            <FaEdit />
          </i>
          <span>Edit</span>
        </Link>
        <ReactToPrint
          pageStyle={`@page {size: 3.5in ${height}in }`}
          trigger={() => (
            <button className="flex gap-2 items-center justify-center bg-brand/30 px-5 py-2 rounded-md text-lg border border-brand  hover:bg-brand hover:text-background all">
              <i>
                <FiPrinter />
              </i>
              <span>Print</span>
            </button>
          )}
          content={() => printComponentRef.current}
        />
      </div>
    </div>
  );
};

export default PrintPage;
