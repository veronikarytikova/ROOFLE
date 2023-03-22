import { TIDsAction, TIDsState, IDsActionTypes } from "../types/ids";

const defaultState: TIDsState = {
  newsIDs: [],
  loading: false,
  error: null
};

export const idsReducer = (state = defaultState, action: TIDsAction): TIDsState => {
  switch(action.type) { 
    case IDsActionTypes.LOAD_NEWS_IDS:
      return {loading: true, error: null, newsIDs: [] };
    case IDsActionTypes.LOAD_NEWS_IDS_SUCCESS:
      return {loading: false, error: null, newsIDs: action.payload };
    case IDsActionTypes.LOAD_NEWS_IDS_FAIL:
      return {loading: false, error: action.payload, newsIDs: [] };
    default: 
      return state;
  }
}