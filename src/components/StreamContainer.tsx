interface StreamContainerProps {
  videoId: string;
}

const StreamContainer = ({ videoId }: StreamContainerProps) => {
  return (
    <div className="relative w-full h-0 pb-[56.25%]">
      <iframe
        className="absolute top-0 left-0 w-full h-full rounded-lg "
        allowFullScreen
        src={`https://www.youtube.com/embed/${videoId}`}
      ></iframe>
    </div>
  );
};

export default StreamContainer;
