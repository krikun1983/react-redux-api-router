import { Dispatch } from 'react';
import getPageId from '../services/getPageId';
import { SearchResultsTableClose, SearchResultsTableShow } from '../store/reducers/searchResultsTableViewReducer';
import { CurrentPageAction, CurrentPageActionType } from '../store/types/currentPage';
import { DataApiAction, DataApiActionTypes } from '../store/types/dataApi';
import { SearchFieldNameErrorAction, SearchFieldNameErrorTypes } from '../store/types/searchFieldNameError';
import { SearchResultsTableViewAction } from '../store/types/searchResultsTableView';
import { GetApiData } from '../types/form-api';
import getApiResource from './network';

const getResource = async (
  getUrl: string,
  dispatch: Dispatch<DataApiAction | CurrentPageAction | SearchFieldNameErrorAction | SearchResultsTableViewAction>,
): Promise<void> => {
  const body = await getApiResource(getUrl);
  const bodyType = body as GetApiData;

  if (bodyType) {
    dispatch({ type: DataApiActionTypes.LOADING, payload: bodyType });
    dispatch({ type: CurrentPageActionType.PREV, payload: (bodyType as GetApiData).info.prev });
    dispatch({ type: CurrentPageActionType.NEXT, payload: (bodyType as GetApiData).info.next });
    dispatch({ type: CurrentPageActionType.CURRENT, payload: getPageId(getUrl) });
    dispatch(SearchResultsTableShow());
    dispatch({ type: SearchFieldNameErrorTypes.SUCCESS, payload: false });
  } else {
    dispatch(SearchResultsTableClose());
    dispatch({ type: SearchFieldNameErrorTypes.NOT_SUCCESS, payload: true });
  }
};

export default getResource;
