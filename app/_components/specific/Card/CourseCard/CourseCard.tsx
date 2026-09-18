// import {} from "./style";

import { moneyTypes } from "@/app/types";

interface dataTypes {
  id: string;
  text: string;
}

interface courseCardTypes {
  image: string;
  title: string;
  data: dataTypes[];
  money: moneyTypes;
}

const CourseCard = (props: courseCardTypes) => {
  return (
    <div>
      <h2>{props.title}</h2>
    </div>
  );
};

export default CourseCard;
