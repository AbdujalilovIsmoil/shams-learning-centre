"use client";

import React, { forwardRef } from "react";

export interface ButtonInterface
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = forwardRef<HTMLButtonElement, ButtonInterface>(
  ({ children, ...props }, ref) => (
    <button ref={ref} {...props}>
      {children}
    </button>
  )
);

Button.displayName = "Button";

export default Button;
