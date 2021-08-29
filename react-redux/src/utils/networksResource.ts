import { Dispatch } from 'react';
import getPageId from '../services/getPageId';
import { CurrentPageAction, CurrentPageActionType } from '../store/types/currentPage';
import { DataApiAction, DataApiActionTypes } from '../store/types/dataApi';
import { SearchFieldNameErrorAction, SearchFieldNameErrorTypes } from '../store/types/searchFieldNameError';
import { SearchResultsTableViewAction, SearchResultsTableViewActionTypes } from '../store/types/searchResultsTableView';
import { GetApiData } from '../types/form-api';
import getApiResource from './network';

const getResource = async (
  getUrl: string,
  dispatch: Dispatch<DataApiAction | CurrentPageAction | SearchResultsTableViewAction | SearchFieldNameErrorAction>,
): Promise<void> => {
  const body = await getApiResource(getUrl);
  const bodyType = body as GetApiData;

  if (bodyType) {
    dispatch({ type: DataApiActionTypes.LOADING, payload: bodyType });
    dispatch({ type: CurrentPageActionType.PREV, payload: (bodyType as GetApiData).info.prev });
    dispatch({ type: CurrentPageActionType.NEXT, payload: (bodyType as GetApiData).info.next });
    dispatch({ type: CurrentPageActionType.CURRENT, payload: getPageId(getUrl) });
    dispatch({ type: SearchResultsTableViewActionTypes.SHOW, payload: true });
    dispatch({ type: SearchFieldNameErrorTypes.SUCCESS, payload: false });
  } else {
    dispatch({ type: SearchResultsTableViewActionTypes.CLOSE, payload: false });
    dispatch({ type: SearchFieldNameErrorTypes.NOT_SUCCESS, payload: true });
  }
};

export default getResource;
