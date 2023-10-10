import InfoContainer from "./components/InfoContainer";
import OptionContainer from "./components/OptionContainer";
import RandomizeButton from "./components/RandomizeButton";
import StreamContainer from "./components/StreamContainer";

function App() {
  const mockData = {
    author: "Kronii",
    duration: "01:22",
    title: "A stream name",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem eveniet sequi reprehenderit minus, adipisci odio non. Iusto, ducimus magnam inventore laborum vero totam odit, natus, alias corrupti quaerat perferendis! Doloremque!",
  };
  return (
    <div className="flex justify-center items-center gap-4 h-screen flex-col ">
      <div className="flex w-3/4 justify-center items-center">
        <div className="w-[60%]">
          <StreamContainer></StreamContainer>
        </div>

        <InfoContainer {...mockData}></InfoContainer>
      </div>
      <div className="flex flex-col gap-4 items-center ">
        <RandomizeButton></RandomizeButton>
        <OptionContainer></OptionContainer>
      </div>
    </div>
  );
}

export default App;
