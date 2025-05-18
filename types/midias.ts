export type Video = {
  id: string;
  title: string;
  videoId: string;
  description: string;
};

export type Podcast = {
  id: number;
  title: string;
  date: string;
  duration: string;
  description: string;
  spotifyUrl: string;
  youtubeUrl: string;
};

export type SocialProfile = {
  label: string;
  url: string;
  display: string;
  icon: React.ElementType;
};

export type ScheduleItem = {
  day: string;
  time: string;
};

export type ContactInfo = {
  label: string;
  value: string;
  icon: React.ElementType;
};
