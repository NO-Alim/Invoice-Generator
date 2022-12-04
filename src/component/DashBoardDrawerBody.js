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
import useAuth from '../hooks/useAuth';
import useLogOut from '../hooks/useLogOut';
import useUserInfo from '../hooks/useUserInfo';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    borderRadius: '5px',
    overflow: 'hidden',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

const DashBoardDrawerBody = ({ toggleDashBord }) => {
  const { currentUser, loading, updateUser, error } = useAuth();
  const {
    updateContact,
    updateWebsite,
    updateAddress,
    updateShopName,
    updateCurrency,
    contact: useContact,
    address: useAddress,
    website: useWebsite,
    shopName: useShopName,
    currency: useCurrency,
  } = useUserInfo();

  const classes = useStyles();
  const { logOut } = useLogOut();

  const [editMood, setEditMood] = useState(false);
  const [editMood2, setEditMood2] = useState(false);
  const [editMood3, setEditMood3] = useState(false);
  const [editMood4, setEditMood4] = useState(false);
  const [editMood5, setEditMood5] = useState(false);
  const [editMood6, setEditMood6] = useState(false);

  const [imgUrlEditMood, setImgUrlEditMood] = useState(false);
  const [name, setName] = useState('');
  const [contact, setContact] = useState(0);
  const [photoUrl, setPhotoUrl] = useState('');
  const [webSite, setWebSite] = useState('');
  const [address, setAddress] = useState('');
  const [shopName, setShopName] = useState('');
  const [currency, setCurrency] = useState('');

  const changePhoto = (e) => {
    e.preventDefault();
    updateUser('', photoUrl, '');
    setImgUrlEditMood(false);
  };
  const changeName = (e) => {
    e.preventDefault();
    updateUser(name, '', '');
    setEditMood(false);
  };

  const changeContact = (e) => {
    e.preventDefault();
    updateContact(contact);
    setEditMood2(false);
  };

  const changeWebSite = (e) => {
    e.preventDefault();
    updateWebsite(webSite);
    setEditMood3(false);
  };

  const changeAddress = (e) => {
    e.preventDefault();
    updateAddress(address);
    setEditMood4(false);
  };

  const changeShopName = (e) => {
    e.preventDefault();
    updateShopName(shopName);
    setEditMood5(false);
  };

  const changeCurrency = (e) => {
    e.preventDefault();
    updateCurrency(currency);
    setEditMood6(false);
  };

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-2 items-center justify-center">
        <div className="w-10 h-10 bg-textPrimary rounded-full relative">
          {/* alt should be creator name */}
          <img
            src={
              currentUser?.photoURL
                ? currentUser.photoURL
                : 'https://cdn.pixabay.com/photo/2018/11/13/21/43/avatar-3814049_960_720.png'
            }
            alt=""
            className="w-10 h-10 rounded-full"
          />
          <span
            className="w-5 h-5 absolute -right-1 -bottom-1 bg-borderPrimary rounded-full flex items-center justify-center cursor-pointer"
            onClick={() => setImgUrlEditMood(!imgUrlEditMood)}
          >
            <img src={edit} alt="edit" className="w-4 h-4" />
          </span>
        </div>
        {imgUrlEditMood && (
          <form
            className="flex border border-background/90 overflow-hidden rounded-md"
            onSubmit={changePhoto}
          >
            {/* value should be existing name */}
            <input
              type="text"
              className="px-2 w-auto border-b focus:outline-0 focus:border-0 text-background"
              placeholder="Image Url"
              value={photoUrl}
              onChange={(e) => setPhotoUrl(e.target.value)}
            />
            <button className="bg-brand text-background rounded-r-md px-2 py-1">
              Submit
            </button>
          </form>
        )}
        <h1>{currentUser?.displayName}</h1>
      </div>
      <Accordion className={classes.root}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>
            <span className="font-semibold flex gap-5 items-center">
              <span className=" text-background/70">
                <i>
                  <FaUserAlt />
                </i>
              </span>{' '}
              <span>Personal Info</span>
            </span>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div className="flex flex-col w-full gap-3">
            <div className="flex justify-between items-center w-full">
              <div className="flex flex-col gap-1">
                <label className="text-sm text-background/70">Name</label>
                {!editMood && <span>{currentUser?.displayName}</span>}
                {editMood && (
                  <form
                    className="flex border border-background/90 overflow-hidden rounded-md"
                    onSubmit={changeName}
                  >
                    {/* value should be existing name */}
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
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
            {/*  */}
            <div className="flex justify-between items-center w-full">
              <div className="flex flex-col gap-1">
                <label className="text-sm text-background/70">Shop Name</label>
                {!editMood5 && <span>{useShopName}</span>}
                {editMood5 && (
                  <form
                    className="flex border border-background/90 overflow-hidden rounded-md"
                    onSubmit={changeShopName}
                  >
                    <input
                      type="text"
                      value={shopName}
                      onChange={(e) => setShopName(e.target.value)}
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
                  onClick={() => setEditMood5(!editMood5)}
                >
                  <i>
                    {!editMood5 ? (
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
                <label className="text-sm text-background/70">Currency</label>
                {!editMood6 && <span>{useCurrency}</span>}
                {editMood6 && (
                  <form
                    className="flex border border-background/90 overflow-hidden rounded-md"
                    onSubmit={changeCurrency}
                  >
                    <input
                      type="text"
                      value={currency}
                      onChange={(e) => setCurrency(e.target.value)}
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
                  onClick={() => setEditMood6(!editMood6)}
                >
                  <i>
                    {!editMood6 ? (
                      <img src={edit} alt="edit" className="w-4 h-4" />
                    ) : (
                      <img src={close} alt="edit" className="w-4 h-4" />
                    )}
                  </i>
                </div>
              </div>
            </div>
            {/*  */}
            <div className="flex flex-col gap-1">
              <label className="text-sm text-background/70">Email</label>
              <span>{currentUser?.email}</span>
            </div>
            <div className="flex justify-between items-center w-full">
              <div className="flex flex-col gap-1">
                <label className="text-sm text-background/70">contact</label>
                {!editMood2 && <span>{useContact}</span>}
                {editMood2 && (
                  <form
                    className="flex border border-background/90 overflow-hidden rounded-md"
                    onSubmit={changeContact}
                  >
                    {/* value should be existing name */}
                    <input
                      type="number"
                      value={contact}
                      onChange={(e) => setContact(e.target.value)}
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
                {!editMood3 && <span>{useWebsite}</span>}
                {editMood3 && (
                  <form
                    className="flex border border-background/90 overflow-hidden rounded-md"
                    onSubmit={changeWebSite}
                  >
                    {/* value should be existing name */}
                    <input
                      type="text"
                      value={webSite}
                      onChange={(e) => setWebSite(e.target.value)}
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
            <div className="flex justify-between items-center w-full">
              <div className="flex flex-col gap-1">
                <label className="text-sm text-background/70">address</label>
                {!editMood4 && <span>{useAddress}</span>}
                {editMood4 && (
                  <form
                    className="flex border border-background/90 overflow-hidden rounded-md"
                    onSubmit={changeAddress}
                  >
                    {/* value should be existing name */}
                    <input
                      type="text"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
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
                  onClick={() => setEditMood4(!editMood4)}
                >
                  <i>
                    {!editMood4 ? (
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
        className="bg-textPrimary text-center rounded-md text-background px-3 py-1 cursor-pointer"
        onClick={toggleDashBord}
      >
        Dashboard
      </Link>
      <button
        className="bg-textPrimary text-background rounded-md px-3 py-1 cursor-pointer"
        onClick={logOut}
      >
        Logout
      </button>
    </div>
  );
};

export default DashBoardDrawerBody;
