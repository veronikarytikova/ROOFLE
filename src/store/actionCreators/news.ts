import { ThunkAction } from "redux-thunk";
import DataService  from "services/DataService";
import { RootState } from "store/reducers/rootReducer";
import { NewsActionTypes, TNewsAction } from "store/types/news";
import { TIDsAction } from "store/types/ids";

export const loadNews = (id: number): ThunkAction<void, RootState, unknown, TIDsAction | TNewsAction> => {
  return async dispatch => {
    try {
      dispatch({type: NewsActionTypes.LOAD_NEWS});
      const data = await DataService.getNewsById(id);
      dispatch({type: NewsActionTypes.LOAD_NEWS_SUCCESS, payload: data})
    } catch (error) {
      dispatch({type: NewsActionTypes.LOAD_NEWS_FAIL, payload: 'Someting went wrong'})
    }
  }
};
