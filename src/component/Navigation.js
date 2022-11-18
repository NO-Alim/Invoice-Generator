import Drawer from '@material-ui/core/Drawer';
import { makeStyles } from '@material-ui/core/styles';
import { useEffect, useRef, useState } from 'react';
import { FaPlus, FaTimes } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';
import useLogOut from '../hooks/useLogOut';
import logo from '../img/logo.png';

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
  //const { logOut } = useFirebaseContext();
  const { logOut } = useLogOut();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const menuBtnRef = useRef(null);
  const DrawerRef = useRef(null);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const toggleDrawerOutClick = (e) => {
    if (e.type === 'keydown' && (e.key === 'Enter' || e.key === 'shift')) {
      setDrawerOpen(false);
    }
  };

  const handleClick = (e) => {
    if (!menuBtnRef.current.contains(e.target)) {
      if (!DrawerRef.current.contains(e.target)) {
        setDrawerOpen(false);
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
              className="bg-brand text-background px-3 py-1 rounded-md cursor-pointer flex items-center justify-between gap-5 font-bold"
            >
              <i className="font-thin">
                <FaPlus />
              </i>
              ORDER
            </Link>
            {/* <button
              className="bg-textPrimary text-background px-3 py-1 rounded-md cursor-pointer"
              onClick={logOut}
            >
              Logout
            </button> */}
            <div className="x w-10 h-10 rounded-full bg-white cursor-pointer overflow-hidden">
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
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/transactions">Transactions</Link>
              </li>
              <li>
                <button className="bg-textPrimary text-background px-3 py-1 rounded-md cursor-pointer">
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default Navigation;
