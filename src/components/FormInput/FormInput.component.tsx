import { FormInputProps } from "./FormInput.type";

const FormInput = ({
  label,
  name,
  type,
  placeholder,
  minLength,
  autoFocus,
  onChange,
}: FormInputProps) => {
  return (
    <div className="mt-4">
      <label className="block text-base" htmlFor={name}>
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        className="w-full text-primary bg-secondary border mt-2 rounded-lg px-4 py-3 focus:border-secondary focus:text-secondary focus:outline-none focus:bg-primary"
        autoComplete="true"
        autoFocus={autoFocus}
        minLength={minLength}
        onChange={onChange}
        required
      />
    </div>
  );
};

export default FormInput;
