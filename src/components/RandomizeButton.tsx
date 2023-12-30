import { useEffect, useRef, useState } from "react";
import { Result, Search } from "../types/Types";
import { fetchData } from "../utils/fetchData";
import channelInfo from "../miscel/channelInfo.json";
import { getRandomFromArray } from "../utils/getRandomFromArray";
import Fuse from "fuse.js";
import { getRandomVideo } from "../utils/getRandomVideo";

interface RandomizeButtonProps {
  searchValue: Search;
  setSearchResult: Function;
}

const RandomizeButton = ({
  searchValue,
  setSearchResult,
}: RandomizeButtonProps) => {
  let channels: string[] = [];
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({ token: "", items: [] });
  useEffect(() => {
    Object.entries(channelInfo).forEach(([key]) => {
      channels.push(...Object.keys(channelInfo[key]));
    });
  }, [channels]);

  useEffect(() => {
    setData({ token: "", items: [] });
  }, [searchValue]);

  const getChannelId = (channel: string) => {
    let id: string = "";
    Object.entries(channelInfo).forEach(([key]) => {
      let tmp = channelInfo[key][channel];
      if (tmp) {
        id = tmp.id;
      }
    });
    return id;
  };

  const getEquivChannel = (channel: string) => {
    const fuse = new Fuse(channels);
    let closestMatch = fuse.search(channel)[0].item;
    return getChannelId(closestMatch);
  };

  const getResult = async () => {
    let channelList = searchValue.channelName.split(",");
    channelList = channelList.map((channel) => channel.trim());
    let channel = getRandomFromArray(channelList);
    let channelId;
    if (channel == "") {
      channelId = getChannelId(getRandomFromArray(channels));
    } else {
      channelId = getEquivChannel(channel);
    }

    try {
      const result = await fetchData(
        channelId,
        searchValue.query,
        searchValue.month,
        searchValue.year,
        data.token
      );
      const newItems: [] = [...data.items, ...result.items] as [];
      const video = getRandomVideo(newItems);
      if (result.token) {
        setData({ token: result.token, items: newItems });
      }
      setLoading(false);
      setSearchResult(video);
    } catch (e) {
      const video = getRandomVideo(data.items as []);
      setLoading(false);
      setSearchResult(video);
    }
  };
  return (
    <button
      className="d-btn d-btn-outline w-fit"
      onClick={() => {
        setLoading(true);
        getResult();
      }}
      disabled={loading ? true : false}
    >
      {loading && <span className="d-loading d-loading-spinner"></span>}
      {!loading && <span>Randomize</span>}
    </button>
  );
};

export default RandomizeButton;
