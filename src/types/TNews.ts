export type TNews = {
  by: string;
  descendants: number;
  id: number;
  score: number;
  time: number;
  title: string;
  text: string;
  type: string;
  url: string;
  kids: Array<number>;
}