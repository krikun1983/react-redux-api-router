import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = (): JSX.Element => {
  return (
    <header>
      <h1 className="heading">Task React. API</h1>
      <nav className="nav-menu">
        <ul className="nav-menu__list">
          <li className="nav-menu__item">
            <NavLink className="nav-menu__link" to="/" exact>
              Home
            </NavLink>
          </li>
          <li className="nav-menu__item">
            <NavLink className="nav-menu__link" to="/about" exact>
              About
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
