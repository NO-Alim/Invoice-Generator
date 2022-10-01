import { FaPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../img/logo.png';

const Navigation = () => {
  return (
    <>
      <nav className="flex gap-5 md:gap-10 px-5 md:px-14 py-3 bg-background items-center justify-between backdrop-blur-sm text-textPrimary">
        <div>
          <img className="w-16" src={logo} alt="mralim" />
        </div>

        <div className="flex gap-5 md:gap-10 items-center justify-end flex-1">
          <Link to="/">Home</Link>
          <Link href="/">Sale History</Link>
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
          <button className="bg-textPrimary text-background px-3 py-1 rounded-md cursor-pointer">
            Logout
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
