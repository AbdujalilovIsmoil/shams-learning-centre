import React from "react";

interface caseTypes {
  image: string;
  title: string;
  subTitle: string;
}

const Case = (props: caseTypes) => {
  return (
    <div>
      <h2>{props.subTitle}</h2>
    </div>
  );
};

export default Case;
