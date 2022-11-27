import React from 'react';
import Header from '../component/Header';
import TransactionList from '../component/TransactionList';

const Home = () => {
  return (
    <div className="min-h-screen bg-background/90">
      <Header />
      {/* <span>Graph Chart</span> */}
      <TransactionList />
      {/* <InvoiceForm /> */}
    </div>
  );
};

export default Home;
