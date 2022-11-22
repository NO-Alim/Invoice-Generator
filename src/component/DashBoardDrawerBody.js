import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import React, { useState } from 'react';
import { FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import close from '.././img/close.png';
import edit from '.././img/edit.png';
import logo from '.././img/logo.png';
import useLogOut from '../hooks/useLogOut';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

const DashBoardDrawerBody = ({ toggleDashBord }) => {
  const classes = useStyles();
  const { logOut } = useLogOut();
  const [editMood, setEditMood] = useState(false);
  const [editMood2, setEditMood2] = useState(false);
  const [editMood3, setEditMood3] = useState(false);
  const [imgUrlEditMood, setImgUrlEditMood] = useState(false);
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-2 items-center justify-center">
        <div className="w-10 h-10 bg-textPrimary rounded-full relative">
          {/* alt should be creator name */}
          <img src={logo} alt="" className="w-10 h-10 rounded-full" />
          <span
            className="w-5 h-5 absolute -right-1 -bottom-1 bg-borderPrimary rounded-full flex items-center justify-center cursor-pointer"
            onClick={() => setImgUrlEditMood(!imgUrlEditMood)}
          >
            <img src={edit} alt="edit" className="w-4 h-4" />
          </span>
        </div>
        {imgUrlEditMood && (
          <form className="flex border border-background/90 overflow-hidden rounded-md">
            {/* value should be existing name */}
            <input
              type="text"
              className="px-2 w-auto border-b focus:outline-0 focus:border-0 text-background"
              placeholder="Image Url"
            />
            <button className="bg-brand text-background rounded-r-md px-2 py-1">
              Submit
            </button>
          </form>
        )}
        <h1>Abdul Alim</h1>
      </div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>
            <div className="font-semibold flex gap-5 items-center">
              <span className=" text-background/70">
                <i>
                  <FaUserAlt />
                </i>
              </span>{' '}
              <h1>Personal Info</h1>
            </div>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div className="flex flex-col w-full gap-3">
            <div className="flex justify-between items-center w-full">
              <div className="flex flex-col gap-1">
                <label className="text-sm text-background/70">Name</label>
                {!editMood && <span>Abdul Alim</span>}
                {editMood && (
                  <form className="flex border border-background/90 overflow-hidden rounded-md">
                    {/* value should be existing name */}
                    <input
                      type="text"
                      className="px-2 w-28 border-b focus:outline-0 focus:border-0"
                    />
                    <button className="bg-background text-textPrimary rounded-r-md px-2 py-1">
                      Submit
                    </button>
                  </form>
                )}
              </div>
              <div>
                <div
                  className="bg-background/20 p-1 rounded-sm cursor-pointer"
                  onClick={() => setEditMood(!editMood)}
                >
                  <i>
                    {!editMood ? (
                      <img src={edit} alt="edit" className="w-4 h-4" />
                    ) : (
                      <img src={close} alt="edit" className="w-4 h-4" />
                    )}
                  </i>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm text-background/70">Email</label>
              <span>abdlualimrakib53@gmail.com</span>
            </div>
            <div className="flex justify-between items-center w-full">
              <div className="flex flex-col gap-1">
                <label className="text-sm text-background/70">contact</label>
                {!editMood2 && <span>1234567890</span>}
                {editMood2 && (
                  <form className="flex border border-background/90 overflow-hidden rounded-md">
                    {/* value should be existing name */}
                    <input
                      type="number"
                      className="px-2 w-28 border-b focus:outline-0 focus:border-0"
                    />
                    <button className="bg-background text-textPrimary rounded-r-md px-2 py-1">
                      Submit
                    </button>
                  </form>
                )}
              </div>
              <div>
                <div
                  className="bg-background/20 p-1 rounded-sm cursor-pointer"
                  onClick={() => setEditMood2(!editMood2)}
                >
                  <i>
                    {!editMood2 ? (
                      <img src={edit} alt="edit" className="w-4 h-4" />
                    ) : (
                      <img src={close} alt="edit" className="w-4 h-4" />
                    )}
                  </i>
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center w-full">
              <div className="flex flex-col gap-1">
                <label className="text-sm text-background/70">website</label>
                {!editMood3 && <span>www.mralim.com</span>}
                {editMood3 && (
                  <form className="flex border border-background/90 overflow-hidden rounded-md">
                    {/* value should be existing name */}
                    <input
                      type="text"
                      className="px-2 w-28 border-b focus:outline-0 focus:border-0"
                    />
                    <button className="bg-background text-textPrimary rounded-r-md px-2 py-1">
                      Submit
                    </button>
                  </form>
                )}
              </div>
              <div>
                <div
                  className="bg-background/20 p-1 rounded-sm cursor-pointer"
                  onClick={() => setEditMood3(!editMood3)}
                >
                  <i>
                    {!editMood3 ? (
                      <img src={edit} alt="edit" className="w-4 h-4" />
                    ) : (
                      <img src={close} alt="edit" className="w-4 h-4" />
                    )}
                  </i>
                </div>
              </div>
            </div>
          </div>
        </AccordionDetails>
      </Accordion>
      <Link
        to="dashboard"
        className="bg-textPrimary text-center text-background px-3 py-1 cursor-pointer"
        onClick={toggleDashBord}
      >
        Dashboard
      </Link>
      <button
        className="bg-textPrimary text-background px-3 py-1 cursor-pointer"
        onClick={logOut}
      >
        Logout
      </button>
    </div>
  );
};

export default DashBoardDrawerBody;
