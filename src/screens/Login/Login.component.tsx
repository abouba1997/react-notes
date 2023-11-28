import { Link } from "react-router-dom";
import FormInput from "../../components/FormInput";
import { ChangeEvent, useState } from "react";

const Login = () => {
  const [formData, setFormData] = useState({
    emailOrPseudo: "",
    password: "",
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Add your form submission logic here using formData
    console.log(formData);
  };

  return (
    <div className="flex-grow flex rounded-2xl shadow-2xl items-center justify-center">
      <div className="bg-primary text-secondary rounded-none sm:rounded-xl shadow-xl p-6 mx-0 sm:mx-2">
        <div className="w-full h-full md:max-w-md lg:max-w-full">
          <h1 className="text-3xl md:text-4xl pb-2 font-bold relative before:content-[''] before:absolute before:bottom-0 before:left-0 before:h-[4px] before:w-[50px] before:bg-secondary">
            Login
          </h1>
          <p className="text-xl md:text-2xl font-bold mt-4 leading-tight">
            If you already a member, easily log in.
          </p>
          <form className="mt-2 text-base" onSubmit={handleSubmit}>
            <FormInput
              label="Email Address or Pseudo"
              name="emailOrPseudo"
              type="text"
              placeholder="Enter your email or pseudo"
              autoFocus
              value={formData.emailOrPseudo}
              onChange={handleChange}
            />
            <FormInput
              label="Password"
              name="password"
              type="password"
              placeholder="Enter your password"
              minLength={6}
              value={formData.password}
              onChange={handleChange}
            />
            <div className="text-sm text-right mt-2">
              <Link
                to="/forgot-password"
                className="hover:text-secondary/70 transition-all duration-300"
              >
                Forgot your password?
              </Link>
            </div>
            <button
              type="submit"
              className="w-full block bg-secondary text-primary hover:bg-primary border border-secondary hover:text-secondary py-3 rounded-lg mt-4 transition-all duration-300 ease-in-out font-semibold"
            >
              Log In
            </button>

            <div className="flex items-center text-sm mt-4 border-y-2 border-secondary py-3">
              <p className="mr-4">If you don't have an account...</p>
              <Link
                to="/register"
                className="bg-secondary text-primary hover:bg-primary border border-secondary hover:text-secondary py-2 px-2 rounded-lg transition-all duration-300 ease-in-out font-semibold"
              >
                Create a new account
              </Link>
            </div>
            <p className="text-sm mt-8">&copy; 2023 React Notes App Login</p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
