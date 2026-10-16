import { InputHTMLAttributes } from "react";

interface InputInterface extends InputHTMLAttributes<HTMLInputElement> {}

const Input = ({ ...props }: InputInterface) => {
  return <input {...props} />;
};

export default Input;
