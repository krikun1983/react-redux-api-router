import { Dispatch } from 'react';
import getPageId from '../services/getPageId';
import { currentPageAction, currentPageNextAction, currentPagePrevAction } from '../store/reducers/currentPageReducer';
import { currentUrlAction } from '../store/reducers/currentUrlGoBackReducer';
import { dataApiActionLoading } from '../store/reducers/dataApiReducer';
import {
  searchFieldNameErrorNotSuccess,
  searchFieldNameErrorSuccess,
} from '../store/reducers/searchFieldNameErrorReducer';
import { searchResultsTableClose, searchResultsTableShow } from '../store/reducers/searchResultsTableViewReducer';
import { CurrentPageAction } from '../store/types/currentPage';
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
    dispatch(currentPagePrevAction((bodyType as GetApiData).info.prev));
    dispatch(currentPageNextAction((bodyType as GetApiData).info.next));
    dispatch(currentPageAction(getPageId(getUrl)));
    dispatch(searchResultsTableShow());
    dispatch(searchFieldNameErrorSuccess());
    dispatch(currentUrlAction(getUrl));
  } else {
    dispatch(searchResultsTableClose());
    dispatch(searchFieldNameErrorNotSuccess());
  }
};

export default getResource;
