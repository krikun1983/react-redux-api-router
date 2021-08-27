import React from 'react';
import useTypeSelector from '../../../store/hooks/useTypeSelector';

type NavigationProps = {
  prevPage: string | null;
  nextPage: string | null;
  onGetResource: (url: string) => Promise<void>;
};

const PageNavigation = ({ prevPage, nextPage, onGetResource }: NavigationProps): JSX.Element => {
  const { isSearchResultsTableView } = useTypeSelector(state => state.isSearchResultsTableView);

  const handleChangePrev = (): Promise<void> => onGetResource(prevPage as string);
  const handleChangeNext = (): Promise<void> => onGetResource(nextPage as string);

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
