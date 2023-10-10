interface InfoContainerProps {
  title: string;
  duration: string;
  desc: string;
  author: string;
}

const InfoContainer = ({
  title,
  duration,
  desc,
  author,
}: InfoContainerProps) => {
  return (
    <div className="d-card w-[40%]">
      <div className="d-card-body">
        <h2 className=" d-card-title">{title}</h2>
        <h3 className=" font-bold">Channel: </h3>
        <span>{author}</span>
        <h3 className=" font-bold">Duration: </h3>
        <span>{duration}</span>

        <h3 className=" font-bold">Descrition: </h3>
        <span>{desc}</span>
      </div>
    </div>
  );
};

export default InfoContainer;
