import { Result } from "../types/Types";
import { getRandomFromArray } from "./getRandomFromArray";

export const getRandomVideo = (items: []) => {
  const videoItem = getRandomFromArray(items);
  const filteredItem: Result = {
    channelName: videoItem.snippet.channelTitle,
    videoTitle: videoItem.snippet.title,
    videoDesc: videoItem.snippet.description,
    videoId: videoItem.id.videoId,
  };
  return filteredItem;
};
