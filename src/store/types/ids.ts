export enum IDsActionTypes {
  LOAD_NEWS_IDS = 'LOAD_NEWS_IDS',
  LOAD_NEWS_IDS_SUCCESS = 'LOAD_NEWS_IDS_SUCCESS',
  LOAD_NEWS_IDS_FAIL = 'LOAD_NEWS_IDS_FAIL'
};

export type TIDsState = {
  newsIDs: Array<number>
  loading: boolean;
  error: string | null;
}

type TLoadIDsAction = {
  type: IDsActionTypes.LOAD_NEWS_IDS;
}

type TLoadIDsSuccessAction = {
  type: IDsActionTypes.LOAD_NEWS_IDS_SUCCESS;
  payload: Array<number>;
}

type TLoadIDsFailAction = {
  type: IDsActionTypes.LOAD_NEWS_IDS_FAIL;
  payload: string;
}

export type TIDsAction = TLoadIDsAction | TLoadIDsSuccessAction | TLoadIDsFailAction;