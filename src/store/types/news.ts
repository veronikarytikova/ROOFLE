import { TNews } from "types/TNews";

export enum NewsActionTypes {
  LOAD_NEWS = 'LOAD_NEWS',
  LOAD_NEWS_SUCCESS = 'LOAD_NEWS_SUCCESS',
  LOAD_NEWS_FAIL = 'LOAD_NEWS_FAIL'
};

export type TNewsState = {
  news: TNews | null;
  loading: boolean;
  error: string | null;
}

type TLoadNewsAction = {
  type: NewsActionTypes.LOAD_NEWS;
}

type TLoadNewsSuccessAction = {
  type: NewsActionTypes.LOAD_NEWS_SUCCESS;
  payload: TNews;
}

type TLoadNewsFailAction = {
  type: NewsActionTypes.LOAD_NEWS_FAIL;
  payload: string;
}

export type TNewsAction = TLoadNewsAction | TLoadNewsSuccessAction | TLoadNewsFailAction;