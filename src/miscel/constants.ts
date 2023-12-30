import { Result, Search } from "../types/Types";

export const EMPTY_SEARCH: Search = {
  channelName: "",
  genName: "",
  tags: "",
};

export const EMPTY_RESULT: Result = {
  channelName: "",
  videoDesc: "",
  videoTitle: "",
  videoId: "",
};

Object.freeze(EMPTY_SEARCH);
Object.freeze(EMPTY_RESULT);
