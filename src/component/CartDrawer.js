import Drawer from '@material-ui/core/Drawer';
import { makeStyles } from '@material-ui/core/styles';
import React, { useEffect, useRef, useState } from 'react';
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

const CartDrawer = () => {
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
      <div
        className="fixed bg-brand w-8 h-20 rounded-l-lg right-0 top-1/3 flex items-center justify-center cursor-pointer"
        onClick={toggleDrawer}
        ref={menuBtnRef}
      >
        <div className="x rotate-90">cart{10}</div>
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
        hello world
      </Drawer>
    </>
  );
};

export default CartDrawer;
