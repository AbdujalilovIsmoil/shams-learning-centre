interface activityInterface {
  title: string;
  description: string;
}

const Activity = (props: activityInterface) => {
  return <div>{props.title}</div>;
};

export default Activity;
