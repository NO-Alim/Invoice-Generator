import React from 'react';
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
function App() {
  const { currentUser, loading } = useAuth();
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
            element={currentUser ? <PrintPage /> : <Navigate to="/register" />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

//https://invoice-generator.com/#/1
