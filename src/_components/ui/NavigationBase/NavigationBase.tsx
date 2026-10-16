
import React, { forwardRef } from "react";
import Button from "@/_components/ui/Button";

const NavigationBase = forwardRef<
  HTMLButtonElement,
  React.ComponentPropsWithoutRef<typeof Button>
>((props, ref) => (
  <Button ref={ref} {...props}>
    {props.children}
  </Button>
));

NavigationBase.displayName = "NavigationBase";

export default NavigationBase;
