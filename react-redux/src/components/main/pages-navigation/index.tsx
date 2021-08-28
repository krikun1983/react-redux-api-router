import React from 'react';
import useTypeSelector from '../../../store/hooks/useTypeSelector';

type NavigationProps = {
  onGetResource: (url: string) => Promise<void>;
};

const PageNavigation = ({ onGetResource }: NavigationProps): JSX.Element => {
  const { isSearchResultsTableView } = useTypeSelector(state => state.isSearchResultsTableView);
  const { prevPage } = useTypeSelector(state => state.prevPage);
  const { nextPage } = useTypeSelector(state => state.nextPage);

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
