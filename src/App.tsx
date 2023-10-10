import InfoContainer from "./components/InfoContainer";
import OptionContainer from "./components/OptionContainer";
import RandomizeButton from "./components/RandomizeButton";
import StreamContainer from "./components/StreamContainer";
// nothing to see here
function App() {
  return (
    <div className="flex justify-center items-center gap-4 h-screen flex-col px-32">
      <div className="flex w-1/2">
        <StreamContainer></StreamContainer>
        <InfoContainer></InfoContainer>
      </div>
      <div>
        <RandomizeButton></RandomizeButton>
        <OptionContainer></OptionContainer>
      </div>
    </div>
  );
}

export default App;
