interface DropDownInterface {
  children: React.ReactNode;
}

const DropDownRoot = ({ children }: DropDownInterface) => {
  return <ul>{children}</ul>;
};

const DropDownItem = ({ children }: DropDownInterface) => {
  return <li>{children}</li>;
};

const DropDown = Object.assign(DropDownRoot, { Item: DropDownItem });

export default DropDown;
