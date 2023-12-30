import { Result, Search } from "../types/Types";
import InfoContainer from "./InfoContainer";
import StreamContainer from "./StreamContainer";

interface ResultContainerProps {
  searchResult: Result;
}

const ResultContainer = ({ searchResult }: ResultContainerProps) => {
  return (
    <div className="flex items-center justify-center w-3/4">
      <div className="w-[60%]">
        <StreamContainer {...searchResult}></StreamContainer>
      </div>
      <InfoContainer {...searchResult}></InfoContainer>
    </div>
  );
};

export default ResultContainer;
