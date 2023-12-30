export type Search = {
  channelName: string;
  genName: string;
  query: string;
  month: {
    begin: number;
    end: number;
  };
  year: {
    begin: number;
    end: number;
  };
};

export type Result = {
  channelName: string;
  videoTitle: string;
  videoDesc: string;
  videoId: string;
};
