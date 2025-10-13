import React from "react";

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ ...props }, ref) => <input {...props} ref={ref} />,
);

export default Input;
