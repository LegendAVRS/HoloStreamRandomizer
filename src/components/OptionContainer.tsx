import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Search } from "../types/Types";
import InputCheckBox from "./InputCheckBox";
import InputText from "./InputText";
import InputDropdown from "./InputDropdown";

interface OptionContainerProps {
  searchValue: Search;
  setSearchValue: Dispatch<SetStateAction<Search>>;
}

const OptionContainer = ({
  searchValue,
  setSearchValue,
}: OptionContainerProps) => {
  const tempData = ["nanashi mumei", "ouro kronii", "ceres fauna"];
  const handleChannelChange = (newChannel: string) => {
    setSearchValue({ ...searchValue, channelName: newChannel });
  };

  const handleQueryChange = (newQuery: string) => {
    setSearchValue({ ...searchValue, query: newQuery });
  };

  const handleGenChange = (newGen: Object) => {
    console.log(newGen);
    let channelList = Object.keys(newGen);
    let newSearchValue = channelList.join(", ");
    setSearchValue({ ...searchValue, channelName: newSearchValue });
  };

  const handleTimeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    let num = parseInt(value);
    if (name == "mb") {
      if (num <= searchValue.month.end) {
        setSearchValue({
          ...searchValue,
          month: { ...searchValue.month, begin: num },
        });
      }
    }
    if (name == "me") {
      if (num >= searchValue.month.begin) {
        setSearchValue({
          ...searchValue,
          month: { ...searchValue.month, end: num },
        });
      }
    }
    if (name == "yb") {
      if (num <= searchValue.year.end) {
        setSearchValue({
          ...searchValue,
          year: { ...searchValue.year, begin: num },
        });
      }
    }
    if (name == "ye") {
      if (num >= searchValue.year.begin) {
        setSearchValue({
          ...searchValue,
          year: { ...searchValue.year, end: num },
        });
      }
    }
  };

  const [channelItems, setChannelItems] = useState<string[]>(tempData);

  useEffect(() => {
    const nameLowered = searchValue.channelName.toLowerCase();
    let matchedChannelItems = channelItems.filter(
      (name) =>
        nameLowered.length !== 0 && name.toLowerCase().includes(nameLowered)
    );
    setChannelItems(matchedChannelItems);
  }, [searchValue]);

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="flex gap-2">
        <InputText
          label="Channel"
          placeholder="Ouro Kronii"
          value={searchValue.channelName}
          handleChange={handleChannelChange}
        ></InputText>
        <InputText
          label="Query"
          placeholder="Gaming"
          value={searchValue.query}
          handleChange={handleQueryChange}
        ></InputText>
        <InputDropdown handleGenChange={handleGenChange}></InputDropdown>
      </div>

      <div className="flex justify-between w-full">
        <div>
          <label className="font-bold d-label">
            <span className="d-label-text">Month</span>
          </label>
          <div className="flex">
            <label className="font-bold d-label">
              <span className="d-label-text">From</span>
            </label>
            <input
              type="number"
              min={1}
              max={12}
              value={searchValue.month.begin}
              className="w-full max-w-xs d-input d-input-bordered"
              name="mb"
              onChange={(e) => handleTimeChange(e)}
            ></input>
            <label className="font-bold d-label">
              <span className="d-label-text">To</span>
            </label>
            <input
              type="number"
              min={1}
              max={12}
              value={searchValue.month.end}
              className="w-full max-w-xs d-input d-input-bordered"
              name="me"
              onChange={(e) => handleTimeChange(e)}
            ></input>
          </div>
        </div>
        <div>
          <label className="font-bold d-label">
            <span className="d-label-text">Year</span>
          </label>

          <div className="flex">
            <label className="font-bold d-label">
              <span className="d-label-text">From</span>
            </label>
            <input
              type="number"
              min={2017}
              max={2023}
              value={searchValue.year.begin}
              className="w-full max-w-xs d-input d-input-bordered"
              name="yb"
              onChange={(e) => handleTimeChange(e)}
            ></input>
            <label className="font-bold d-label">
              <span className="d-label-text">To</span>
            </label>
            <input
              type="number"
              min={2017}
              max={2024}
              value={searchValue.year.end}
              className="w-full max-w-xs d-input d-input-bordered"
              name="ye"
              onChange={(e) => handleTimeChange(e)}
            ></input>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OptionContainer;
