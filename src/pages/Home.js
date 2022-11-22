import React from 'react';
import Header from '../component/Header';
import TransactionList from '../component/TransactionList';

const Home = () => {
  return (
    <>
      <Header />
      {/* <span>Graph Chart</span> */}
      <TransactionList />
      {/* <InvoiceForm /> */}
    </>
  );
};

export default Home;
