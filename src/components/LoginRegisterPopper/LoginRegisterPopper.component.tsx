import { Link } from "react-router-dom";
import { LoginRegisterPopperProps } from "./LoginRegisterPopper.type";

const linkStyles =
  "border border-primary rounded-full bg-secondary text-primary py-2 hover:bg-primary hover:text-secondary hover:border-secondary transition-all duration-300";

const LoginRegisterPopper = ({
  handleAccountSwitcher,
}: LoginRegisterPopperProps) => {
  const links = [
    { to: "/login", text: "Login" },
    { to: "/register", text: "Register" },
  ];

  const additionalLinks = [
    "Become a member to Notes",
    "Create Notes (Owner)",
    "Check Notes (Owner & Others)",
    "Suggest Notes (Owner & Others)",
    "Gift a member",
  ];

  return (
    <div className="fixed w-64 bg-primary top-16 right-4 z-50 shadow-[rgba(0,_0,_0,_0.91)_0px_3px_10px] rounded-md">
      <div className="px-4 pt-6 pb-2 w-full flex flex-col gap-3 text-center text-base border-b-2 border-secondary">
        <p className="text-base font-bold text-secondary">
          Get started with Notes
        </p>
        {links.map((link, index) => (
          <Link
            key={index}
            className={linkStyles}
            to={link.to}
            onClick={handleAccountSwitcher}
          >
            {link.text}
          </Link>
        ))}
      </div>
      <div className="flex flex-col gap-2 px-4 text-sm py-6">
        {additionalLinks.map((text, index) => (
          <Link
            key={index}
            className="pb-2 hover:text-secondary/50 text-secondary transition-all duration-300"
            to=""
            onClick={handleAccountSwitcher}
          >
            {text}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default LoginRegisterPopper;
