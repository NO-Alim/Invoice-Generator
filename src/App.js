import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './component/Navigation';
import Home from './pages/Home';
import OrderDesk from './pages/OrderDesk';
function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/order" element={<OrderDesk />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

//https://invoice-generator.com/#/1
