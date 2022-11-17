import React from 'react';
import { useSelector } from 'react-redux';
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from 'react-router-dom';
import Navigation from './component/Navigation';
import PrintPage from './component/print/PrintPage';
import LoaderSpin from './component/ui/LoaderSpin';
import useAuth from './hooks/useAuth';
import Home from './pages/Home';
import Login from './pages/Login';
import OrderDesk from './pages/OrderDesk';
import Register from './pages/Register';
import Transactions from './pages/Transactions';
function App() {
  const { currentUser, loading } = useAuth();
  const { productList } = useSelector((state) => state.cart);
  if (loading)
    return (
      <div className="w-full h-screen flex justify-center items-center bg-background">
        <LoaderSpin />
      </div>
    );
  return (
    <div className="App">
      <Router>
        {currentUser ? <Navigation /> : null}
        <Routes>
          <Route
            path="/"
            element={currentUser ? <Home /> : <Navigate to="/register" />}
          />
          <Route
            path="/register"
            element={!currentUser ? <Register /> : <Navigate to="/" />}
          />
          <Route
            path="/login"
            element={!currentUser ? <Login /> : <Navigate to="/" />}
          />
          <Route
            path="/order"
            element={currentUser ? <OrderDesk /> : <Navigate to="/register" />}
          />
          <Route
            path="/print"
            element={
              currentUser ? (
                productList && productList.length > 0 ? (
                  <PrintPage />
                ) : (
                  <Navigate to="/order" />
                )
              ) : (
                <Navigate to="/register" />
              )
            }
          />

          <Route
            path="/transactions"
            element={
              currentUser ? <Transactions /> : <Navigate to="/register" />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

//https://invoice-generator.com/#/1
