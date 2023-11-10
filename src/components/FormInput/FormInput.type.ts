import { ChangeEvent } from "react";

export type FormInputProps = {
  label: string;
  name: string;
  type: string;
  placeholder: string;
  minLength?: number;
  autoFocus?: boolean;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
};
