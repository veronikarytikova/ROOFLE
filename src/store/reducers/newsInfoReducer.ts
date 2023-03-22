import { TNewsAction, TNewsState, NewsActionTypes } from "../types/news";

export const LOAD_NEWS = 'LOAD_NEWS';

const defaultState: TNewsState = {
  news: null,
  loading: false,
  error: null
};

export const newsInfoReducer = (state = defaultState, action: TNewsAction): TNewsState => {
  switch(action.type) { 
    case NewsActionTypes.LOAD_NEWS:
      return {...state, loading: true, error: null, news: null };
    case NewsActionTypes.LOAD_NEWS_SUCCESS:
      return {...state, loading: false, error: null, news: action.payload };
    case NewsActionTypes.LOAD_NEWS_FAIL:
      return {...state, loading: false, error: action.payload, news: null };
    default: 
      return state;
  }
}