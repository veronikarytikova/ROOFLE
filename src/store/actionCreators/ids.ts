import { ThunkAction } from "redux-thunk";
import DataService  from "services/DataService";
import { RootState } from "store/reducers/rootReducer";
import { IDsActionTypes, TIDsAction } from "store/types/ids";
import { TNewsAction } from "store/types/news";

export const loadIDs = (): ThunkAction<void, RootState, unknown, TIDsAction | TNewsAction> => {
  return async dispatch => {
    try {
      dispatch({type: IDsActionTypes.LOAD_NEWS_IDS});
      const data = await DataService.getData();
      dispatch({type: IDsActionTypes.LOAD_NEWS_IDS_SUCCESS, payload: data})
    } catch (error) {
      dispatch({type: IDsActionTypes.LOAD_NEWS_IDS_FAIL, payload: 'Someting went wrong'})
    }
    
  }
};
