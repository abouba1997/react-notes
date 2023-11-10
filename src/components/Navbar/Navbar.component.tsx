import { BsMoonFill, BsSearch, BsSun } from "react-icons/bs";
import { FaRegCircleUser } from "react-icons/fa6";
import { MdOutlineNoteAlt } from "react-icons/md";
import { Link } from "react-router-dom";
import useTheme from "../../hooks/useTheme";
import { useState } from "react";
import OutsideClickHandler from "../../utils/OutsideClickHandler";
import LoginRegisterPopper from "../LoginRegisterPopper";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [issearchBarOpen, setIssearchBarOpen] = useState<boolean>(false);
  const [isAccountSwitcherOpen, setIsAccountSwitcherOpen] =
    useState<boolean>(false);

  const openSearchTab = () => {
    setIssearchBarOpen((state) => !state);
  };

  const handleAccountSwitcher = () => {
    setIsAccountSwitcherOpen((prev) => !prev);
  };

  return (
    <div className="w-full py-4 bg-primary text-xl">
      <nav className="flex justify-between items-center w-full mx-auto px-3">
        <Link
          to="/"
          className="text-secondary flex justify-center items-center"
        >
          <MdOutlineNoteAlt size={30} className="mr-1" />
          Notes App
        </Link>
        <div>
          <input
            type="text"
            placeholder="Search for a note"
            className="px-3 py-1 rounded-full focus:outline-none text-lg bg-secondary text-primary hidden sm:flex"
          />
        </div>
        <div className="flex items-center justify-between">
          <BsSearch
            size={20}
            className="navbar-icon flex sm:hidden"
            title="Click to search"
            onClick={openSearchTab}
          />
          <FaRegCircleUser
            size={20}
            className="navbar-icon"
            title="User account"
            onClick={handleAccountSwitcher}
          />
          {theme === "light" ? (
            <BsMoonFill
              size={20}
              className="navbar-icon"
              title="Switch to light mode"
              onClick={toggleTheme}
            />
          ) : (
            <BsSun
              size={20}
              title="Switch to dark mode"
              className="navbar-icon"
              onClick={toggleTheme}
            />
          )}
        </div>
      </nav>
      {issearchBarOpen && (
        <div
          className={`absolute top-20 left-[50%] translate-x-[-50%] bg-primary max-w-[500px] py-4 px-4 rounded-lg shadow-2xl
                    transition-all ease-out duration-700 flex sm:hidden`}
        >
          <input
            type="text"
            placeholder="Search for a note"
            className="px-3 py-1 rounded-full focus:outline-none text-lg bg-secondary text-primary"
          />
        </div>
      )}
      {isAccountSwitcherOpen && (
        <OutsideClickHandler onOutsideClick={handleAccountSwitcher}>
          <LoginRegisterPopper handleAccountSwitcher={handleAccountSwitcher} />
        </OutsideClickHandler>
      )}
    </div>
  );
};

export default Navbar;
