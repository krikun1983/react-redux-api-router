import React from 'react';

type NavigationProps = {
  tableView: boolean;
  prevPage: string | null;
  nextPage: string | null;
  onGetResource: (url: string) => Promise<void>;
};

const PageNavigation = ({ tableView, prevPage, nextPage, onGetResource }: NavigationProps): JSX.Element => {
  const handleChangePrev = (): Promise<void> => onGetResource(prevPage as string);
  const handleChangeNext = (): Promise<void> => onGetResource(nextPage as string);

  return (
    <>
      {tableView ? (
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
