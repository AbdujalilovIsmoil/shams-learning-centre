// import {} from "./style";
import { moneyTypes } from "@/app/types";

interface groupInterface {
  image: string;
  title: string;
  students: string;
  description: string;
  money: Partial<moneyTypes>;
}

const GroupCard = (props: groupInterface) => {
  return <div>{props.title}</div>;
};

export default GroupCard;
