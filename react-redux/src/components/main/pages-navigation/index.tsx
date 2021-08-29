import React from 'react';
import { useDispatch } from 'react-redux';
import useTypeSelector from '../../../store/hooks/useTypeSelector';
import getResource from '../../../utils/networksResource';

const PageNavigation = (): JSX.Element => {
  const dispatch = useDispatch();
  const { isSearchResultsTableView } = useTypeSelector(state => state.isSearchResultsTableView);
  const { prevPage } = useTypeSelector(state => state.prevPage);
  const { nextPage } = useTypeSelector(state => state.nextPage);

  const handleChangePrev = (): Promise<void> => getResource(prevPage as string, dispatch);
  const handleChangeNext = (): Promise<void> => getResource(nextPage as string, dispatch);

  return (
    <>
      {isSearchResultsTableView ? (
        <div className="navigation">
          <button type="button" onClick={handleChangePrev} className="navigation__btn" disabled={!prevPage}>
            prev
          </button>

          <button type="button" onClick={handleChangeNext} className="navigation__btn" disabled={!nextPage}>
            next
          </button>
        </div>
      ) : (
        ''
      )}
    </>
  );
};

export default PageNavigation;
