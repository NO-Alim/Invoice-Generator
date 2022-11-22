import Drawer from '@material-ui/core/Drawer';
import { makeStyles } from '@material-ui/core/styles';
import { useEffect, useRef, useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';
import logo from '../img/logo.png';
import plus from '../img/plus.png';
import DashBoardDrawerBody from './DashBoardDrawerBody';

const useStyles = makeStyles({
  root: {
    display: 'flex',
  },
  list: {
    width: 'auto',
  },
  fullList: {
    width: 'auto',
  },
  drawerPaper: {
    width: 'auto',
    background: '#0b162a',
    color: '#e9e9e9',
  },
});

const Navigation = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [dashBoardDrawerOpen, setDashBoardDrawerOpen] = useState(false);

  const menuBtnRef = useRef(null);
  const dashBoardBtnRef = useRef(null);
  const dashBoardBtnRef2 = useRef(null);
  const DrawerRef = useRef(null);
  const DashBoardDrawerRef = useRef(null);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };
  const toggleDashBord = () => {
    setDashBoardDrawerOpen(!dashBoardDrawerOpen);
  };

  const toggleDrawerOutClick = (e) => {
    if (e.type === 'keydown' && (e.key === 'Enter' || e.key === 'shift')) {
      setDrawerOpen(false);
      setDashBoardDrawerOpen(false);
    }
  };

  const handleClick = (e) => {
    if (!menuBtnRef.current.contains(e.target)) {
      if (!DrawerRef.current.contains(e.target)) {
        setDrawerOpen(false);
      }
    }
    if (!dashBoardBtnRef2.current.contains(e.target)) {
      if (!dashBoardBtnRef.current.contains(e.target)) {
        if (!DashBoardDrawerRef.current.contains(e.target)) {
          setDashBoardDrawerOpen(false);
        }
      }
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', toggleDrawerOutClick);
    document.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('keydown', toggleDrawerOutClick);
      document.removeEventListener('click', handleClick);
    };
  });

  const classes = useStyles();

  return (
    <>
      <nav className="flex gap-5 md:gap-10 px-5 md:px-14 py-3 bg-background items-center justify-between backdrop-blur-sm text-textPrimary">
        <NavLink to="/">
          <img className="w-16" src={logo} alt="mralim" />
        </NavLink>
        <div className="hidden md:flex gap-5 md:gap-10">
          <div className="flex gap-5 md:gap-10 items-center justify-end flex-1">
            <Link to="/">Home</Link>
            <Link to="/transactions">Transactions</Link>
          </div>
          <div className="flex gap-5 md:gap-10 items-center">
            <Link
              to="order"
              className="bg-brand/80 all hover:bg-brand px-2 py-1 text-lg font-semibold rounded-sm flex gap-2 items-center justify-center text-background"
              onClick={() => setDrawerOpen(false)}
            >
              <img src={plus} alt="plus" className="w-5 h-5" />
              <h1>Order</h1>
            </Link>
            {/* <button
              className="bg-textPrimary text-background px-3 py-1 rounded-md cursor-pointer"
              onClick={logOut}
            >
              Logout
            </button> */}
            <div
              className="x w-10 h-10 rounded-full bg-white cursor-pointer overflow-hidden"
              ref={dashBoardBtnRef}
              onClick={toggleDashBord}
              // eslint-disable-next-line react/jsx-no-duplicate-props
              ref={dashBoardBtnRef}
            >
              <img src={logo} alt="" className="" />
            </div>
          </div>
        </div>
        <div className="menu md:hidden cursor-pointer">
          <div
            className={`w-[30px] h-[30px] flex flex-col justify-around`}
            onClick={() => toggleDrawer()}
            ref={menuBtnRef}
          >
            <span
              className={`all menu-bar bg-textPrimary block h-[2px] ${
                drawerOpen ? 't -rotate-45 translate-y-2' : ''
              }`}
            ></span>
            <span
              className={`all menu-bar bg-textPrimary block h-[2px] ${
                drawerOpen ? 'hidden' : ''
              }`}
            ></span>
            <span
              className={`all menu-bar bg-textPrimary block h-[2px] ${
                drawerOpen ? 'rotate-45 -translate-y-[7px]' : ''
              }`}
            ></span>
          </div>
        </div>
      </nav>
      <Drawer
        className={classes.list}
        palette="secondary"
        variant="persistent"
        open={drawerOpen}
        anchor="left"
        classes={{ paper: classes.drawerPaper }}
        ref={DrawerRef}
      >
        <div className="p-2 max-w-[300px] w-screen flex flex-col gap-10">
          <div className="flex justify-between items-center">
            <NavLink to="/">
              <img className="w-16" src={logo} alt="mralim" />
            </NavLink>
            <i onClick={() => setDrawerOpen(false)}>
              <FaTimes />
            </i>
          </div>
          <div>
            <ul className="list-none flex flex-col gap-5">
              <li>
                <Link to="/" onClick={() => setDrawerOpen(false)}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/transactions" onClick={() => setDrawerOpen(false)}>
                  Transactions
                </Link>
              </li>
              <Link
                to="order"
                className="bg-brand/80 all hover:bg-brand px-2 py-1 text-lg font-semibold rounded-sm flex gap-2 items-center justify-center text-background"
                onClick={() => setDrawerOpen(false)}
              >
                <img src={plus} alt="plus" className="w-5 h-5" />
                <h1>Order</h1>
              </Link>
              <button
                className="bg-textPrimary text-background py-1 px-3 font-semibold rounded-sm"
                onClick={() => {
                  setDrawerOpen(false);
                  setDashBoardDrawerOpen(true);
                }}
                ref={dashBoardBtnRef2}
              >
                Panel Board
              </button>
              <button className="bg-textPrimary text-background px-3 py-1 font-semibold rounded-sm cursor-pointer">
                Logout
              </button>
            </ul>
          </div>
        </div>
      </Drawer>
      <Drawer
        className={classes.list}
        palette="secondary"
        variant="persistent"
        open={dashBoardDrawerOpen}
        anchor="left"
        classes={{ paper: classes.drawerPaper }}
        ref={DashBoardDrawerRef}
      >
        <div className="p-2 max-w-[300px] w-screen flex flex-col gap-10">
          <div className="flex justify-between items-center">
            <div></div>
            <i onClick={() => toggleDashBord()}>
              <FaTimes />
            </i>
          </div>
          <DashBoardDrawerBody toggleDashBord={toggleDashBord} />
        </div>
      </Drawer>
    </>
  );
};

export default Navigation;
