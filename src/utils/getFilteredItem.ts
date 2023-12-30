import { Result } from "../types/Types";

export const getFilteredItem = (videoItem: any) => {
  const filteredItem: Result = {
    channelName: videoItem.snippet.channelId,
    videoTitle: videoItem.snippet.title,
    videoDesc: videoItem.snippet.description,
    videoId: videoItem.id.videoId,
  };
  return filteredItem;
};
