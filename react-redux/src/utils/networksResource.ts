import { Dispatch } from 'react';
import getPageId from '../services/getPageId';
import { dataApiActionLoading } from '../store/reducers/dataApiReducer';
import {
  searchFieldNameErrorNotSuccess,
  searchFieldNameErrorSuccess,
} from '../store/reducers/searchFieldNameErrorReducer';
import { searchResultsTableClose, searchResultsTableShow } from '../store/reducers/searchResultsTableViewReducer';
import { CurrentPageAction, CurrentPageActionType } from '../store/types/currentPage';
import { DataApiAction } from '../store/types/dataApi';
import { SearchFieldNameErrorAction } from '../store/types/searchFieldNameError';
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
    dispatch(dataApiActionLoading(bodyType));
    dispatch({ type: CurrentPageActionType.PREV, payload: (bodyType as GetApiData).info.prev });
    dispatch({ type: CurrentPageActionType.NEXT, payload: (bodyType as GetApiData).info.next });
    dispatch({ type: CurrentPageActionType.CURRENT, payload: getPageId(getUrl) });
    dispatch(searchResultsTableShow());
    dispatch(searchFieldNameErrorSuccess());
  } else {
    dispatch(searchResultsTableClose());
    dispatch(searchFieldNameErrorNotSuccess());
  }
};

export default getResource;
