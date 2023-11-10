import { ChangeEvent, useState } from "react";
import { Link } from "react-router-dom";
import FormInput from "../../components/FormInput";

const Register = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    pseudo: "",
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
    console.log(formData);
  };

  return (
    <div className="flex-grow flex rounded-2xl shadow-2xl items-center justify-center">
      <div className="bg-primary text-secondary rounded-none sm:rounded-xl shadow-xl p-6 mx-0 sm:mx-2">
        <div className="w-full h-full md:max-w-md lg:max-w-full">
          <h1 className="text-3xl md:text-4xl pb-2 font-bold relative before:content-[''] before:absolute before:bottom-0 before:left-0 before:h-[4px] before:w-[50px] before:bg-secondary">
            Register
          </h1>
          <p className="text-xl md:text-2xl font-bold mt-4 leading-tight">
            If you not yet a member, easily register.
          </p>
          <form className="mt-2 text-base" onSubmit={handleSubmit}>
            <FormInput
              label="Full Name"
              name="fullName"
              type="text"
              placeholder="Enter your full name"
              autoFocus
              onChange={handleChange}
            />
            <FormInput
              label="Email Address"
              name="email"
              type="text"
              placeholder="Enter your email address"
              onChange={handleChange}
            />
            <FormInput
              label="Pseudo"
              name="pseudo"
              type="text"
              placeholder="Enter your pseudo"
              onChange={handleChange}
            />
            <FormInput
              label="Password"
              name="password"
              type="password"
              placeholder="Enter your password"
              minLength={6}
              onChange={handleChange}
            />
            <button
              type="submit"
              className="w-full block bg-secondary text-primary hover:bg-primary border border-secondary hover:text-secondary py-3 rounded-lg mt-4 transition-all duration-300 ease-in-out font-semibold"
            >
              Register
            </button>

            <div className="flex items-center text-sm mt-4 border-y-2 border-secondary py-3">
              <p className="mr-4">Already have an account...</p>
              <Link
                to="/login"
                className="bg-secondary text-primary hover:bg-primary border border-secondary hover:text-secondary py-2 px-2 rounded-lg transition-all duration-300 ease-in-out font-semibold"
              >
                Login
              </Link>
            </div>
            <div className="flex justify-between items-center text-sm mt-8">
              <p>&copy; 2023 React Notes App Register</p>
              <Link to="/term-of-service" className="font-bold hover:underline">
                Terms of Service
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
