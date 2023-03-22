import { combineReducers } from "redux";
import { idsReducer } from "./idsReducer";
import { newsInfoReducer } from "./newsInfoReducer";

export type RootState = ReturnType<typeof rootReducer>;

export const rootReducer = combineReducers({
  ids: idsReducer,
  news: newsInfoReducer
})