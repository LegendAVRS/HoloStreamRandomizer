interface InfoContainerProps {
  videoTitle: string;
  // duration: string;
  videoDesc: string;
  channelName: string;
}

const InfoContainer = ({
  videoTitle,
  videoDesc,
  channelName,
}: InfoContainerProps) => {
  const formatedTitle = { __html: videoTitle };
  const formatedDesc = { __html: videoDesc };
  const formatedChannelName = { __html: channelName };

  return (
    <div className="d-card w-[40%]">
      <div className="d-card-body">
        <h2
          className=" d-card-title"
          dangerouslySetInnerHTML={formatedTitle}
        ></h2>
        <h3 className="font-bold ">Channel: </h3>
        <span dangerouslySetInnerHTML={formatedChannelName}></span>
        <h3 className="font-bold ">Descrition: </h3>
        <span dangerouslySetInnerHTML={formatedDesc}></span>
      </div>
    </div>
  );
};

export default InfoContainer;
