import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { SearchResultsTableClose } from '../../store/reducers/searchResultsTableViewReducer';
import { CurrentPageActionType } from '../../store/types/currentPage';
import { SearchFieldNameErrorTypes } from '../../store/types/searchFieldNameError';

const Header = (): JSX.Element => {
  const dispatch = useDispatch();

  const closeSearchResultsTable = (): void => {
    dispatch(SearchResultsTableClose());
    dispatch({ type: CurrentPageActionType.CURRENT, payload: 1 });
    dispatch({ type: SearchFieldNameErrorTypes.SUCCESS, payload: false });
  };

  return (
    <header>
      <h1 className="heading">Task React. API</h1>
      <nav className="nav-menu">
        <ul className="nav-menu__list">
          <li className="nav-menu__item">
            <NavLink className="nav-menu__link" to="/" exact onClick={closeSearchResultsTable}>
              Home
            </NavLink>
          </li>
          <li className="nav-menu__item">
            <NavLink className="nav-menu__link" to="/about" exact onClick={closeSearchResultsTable}>
              About
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
