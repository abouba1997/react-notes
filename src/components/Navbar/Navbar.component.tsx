import { BsMoonFill, BsSearch, BsSun } from "react-icons/bs";
import { FaRegCircleUser } from "react-icons/fa6";
import { Link } from "react-router-dom";
import useTheme from "../../hooks/useTheme";
import { useState } from "react";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [issearchBarOpen, setIssearchBarOpen] = useState<boolean>(false);

  const openSearchTab = () => {
    setIssearchBarOpen((state) => !state);
  };

  return (
    <div className="w-full py-4 bg-primary text-xl">
      <nav className="flex justify-between items-center w-full mx-auto px-3">
        <Link to="/" className="text-secondary">
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
    </div>
  );
};

export default Navbar;
