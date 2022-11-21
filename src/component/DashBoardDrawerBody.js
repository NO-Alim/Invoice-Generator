import React from 'react';
import { Link } from 'react-router-dom';
import logo from '.././img/logo.png';
import useLogOut from '../hooks/useLogOut';

const DashBoardDrawerBody = ({ toggleDashBord }) => {
  const { logOut } = useLogOut();
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-2 items-center justify-center">
        <div className="w-10 h-10 bg-textPrimary rounded-full">
          {/* alt should be creator name */}
          <img src={logo} alt="" className="w-10 h-10 rounded-full" />
        </div>
        <h1>Abdul Alim</h1>
      </div>
      <Link
        to="dashboard"
        className="bg-textPrimary text-center text-background px-3 py-1 rounded-md cursor-pointer"
        onClick={toggleDashBord}
      >
        Dashboard
      </Link>
      <button
        className="bg-textPrimary text-background px-3 py-1 rounded-md cursor-pointer"
        onClick={logOut}
      >
        Logout
      </button>
    </div>
  );
};

export default DashBoardDrawerBody;
