import Drawer from '@material-ui/core/Drawer';
import { makeStyles } from '@material-ui/core/styles';
import React, { useEffect, useRef, useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import OrderCart from './orderDesk.js/OrderCart';
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

const CartDrawer = ({ totalItem }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const DrawerRef = useRef(null);
  const menuBtnRef = useRef(null);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const toggleDrawerOutClick = (e) => {
    if (e.type === 'keydown' && (e.key === 'Enter' || e.key === 'shift')) {
      setDrawerOpen(false);
    }
  };

  const handleClick = (e) => {
    if (e.target.id !== 'DeleteCartItem') {
      if (!menuBtnRef.current.contains(e.target)) {
        if (!DrawerRef.current.contains(e.target)) {
          setDrawerOpen(false);
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
      <div
        className="fixed bg-red-400 text-background w-8 h-20 rounded-l-lg right-0 top-1/3 flex items-center justify-center cursor-pointer"
        onClick={toggleDrawer}
        ref={menuBtnRef}
      >
        <div className="rotate-90 flex gap-2">
          cart <span className="font-bold">{totalItem}</span>
        </div>
      </div>
      <Drawer
        className={classes.list}
        palette="secondary"
        variant="persistent"
        open={drawerOpen}
        anchor="right"
        classes={{ paper: classes.drawerPaper }}
        ref={DrawerRef}
      >
        <div className="ml-5 mt-5">
          <div
            className="w-5 h-5 bg-brand text-background flex items-center justify-center rounded-full cursor-pointer"
            onClick={toggleDrawer}
          >
            <i>
              <FaTimes />
            </i>
          </div>
        </div>
        <div className="p-2 w-screen sm:w-[400px] h-full">
          <OrderCart toggleDrawer={toggleDrawer} />
        </div>
      </Drawer>
    </>
  );
};

export default CartDrawer;
