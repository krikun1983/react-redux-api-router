import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { currentPageAction } from '../../store/reducers/currentPageReducer';
import { searchFieldNameErrorSuccess } from '../../store/reducers/searchFieldNameErrorReducer';
import { searchResultsTableClose } from '../../store/reducers/searchResultsTableViewReducer';

const Header = (): JSX.Element => {
  const dispatch = useDispatch();

  const closeSearchResultsTable = (): void => {
    dispatch(searchResultsTableClose());
    dispatch(currentPageAction(1));
    dispatch(searchFieldNameErrorSuccess());
  };

  return (
    <header>
      <h1 className="heading">Task React. Redux</h1>
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
