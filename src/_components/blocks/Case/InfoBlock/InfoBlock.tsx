interface infoTypes {
  image: string;
  title: string;
  description: string;
}

const InfoBlock = (props: infoTypes) => {
  return (
    <div>
      <h1>{props.title}</h1>
    </div>
  );
};

export default InfoBlock;
