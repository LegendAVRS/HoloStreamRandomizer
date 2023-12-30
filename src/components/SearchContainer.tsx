import { useState } from "react";
import OptionContainer from "./OptionContainer";
import RandomizeButton from "./RandomizeButton";
import { Search } from "../types/Types";

interface SearchContainerProps {
  setSearchResult: Function;
}

const SearchContainer = ({ setSearchResult }: SearchContainerProps) => {
  const mockSearchValue: Search = {
    channelName: "Ouro Kronii",
    genName: "Hololive Promise",
    query: "",
    month: {
      begin: 1,
      end: 12,
    },
    year: {
      begin: 2017,
      end: 2024,
    },
  };

  const [searchValue, setSearchValue] = useState<Search>(mockSearchValue);

  return (
    <div className="flex flex-col items-center gap-4 ">
      <RandomizeButton
        setSearchResult={setSearchResult}
        searchValue={searchValue}
      ></RandomizeButton>
      <OptionContainer
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      ></OptionContainer>
    </div>
  );
};

export default SearchContainer;
