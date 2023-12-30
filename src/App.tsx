import { useState } from "react";
import { Result, Search } from "./types/Types";
import SearchContainer from "./components/SearchContainer";
import ResultContainer from "./components/ResultContainer";
import { EMPTY_RESULT } from "./miscel/constants";

function App() {
  const [searchResult, setSearchResult] = useState<Result>(EMPTY_RESULT);
  // console.log(searchResult);
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4 ">
      <ResultContainer searchResult={searchResult}></ResultContainer>
      <SearchContainer setSearchResult={setSearchResult}></SearchContainer>
    </div>
  );
}

export default App;
