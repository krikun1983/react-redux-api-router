import React, { ChangeEvent, useState } from 'react';

import { useDispatch } from 'react-redux';
import uuid from 'react-uuid';
import { BASE_URL, PARAM_PAGE } from '../../constants/api';
import useTypeSelector from '../../store/hooks/useTypeSelector';
import { currentPageAction } from '../../store/reducers/currentPageReducer';
import { dataApiActionLoadingStop } from '../../store/reducers/dataApiReducer';
import {
  searchCategoryCharacterAction,
  searchCategoryEpisodeAction,
  searchCategoryLocationAction,
} from '../../store/reducers/searchCategoryRadioValueReducer';
import { searchResultsTableClose } from '../../store/reducers/searchResultsTableViewReducer';
import { ApiItem } from '../../types/form-api';
import getResource from '../../utils/networksResource';

const Form = (): JSX.Element => {
  const dispatch = useDispatch();
  const { searchCategoryRadioValue } = useTypeSelector(state => state.searchCategoryRadioValue);
  const { currentPage } = useTypeSelector(state => state.currentPage);
  const { isSearchFieldNameError } = useTypeSelector(state => state.isSearchFieldNameError);
  const { dataApi } = useTypeSelector(state => state.dataApi);

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>('');
  const [sortStatus, setSortStatus] = useState<string>('');
  const [sortGender, setSortGender] = useState<string>('');

  const resetSort = (): void => {
    setSortStatus('');
    setSortGender('');
    dispatch(currentPageAction(1));
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const { value } = event.target;
    setSearchValue(value);
  };

  const handleChangeRadio = (event: ChangeEvent<HTMLInputElement>): void => {
    const { value } = event.target;
    if (value === ApiItem.CHARACTER) {
      dispatch(searchCategoryCharacterAction());
    } else if (value === ApiItem.LOCATION) {
      dispatch(searchCategoryLocationAction());
    } else if (value === ApiItem.EPISODE) {
      dispatch(searchCategoryEpisodeAction());
    }
    dispatch(dataApiActionLoadingStop());
    dispatch(currentPageAction(1));
    dispatch(searchResultsTableClose());
  };

  const handleChangeSelect = (event: ChangeEvent<HTMLSelectElement>): void => {
    const { value } = event.target;
    dispatch(currentPageAction(+value));
  };

  const handleChangeSelectSortStatus = (event: ChangeEvent<HTMLSelectElement>): void => {
    const { value } = event.target;
    setSortStatus(value);
    dispatch(currentPageAction(1));
  };
  const handleChangeSelectSortGender = (event: ChangeEvent<HTMLSelectElement>): void => {
    const { value } = event.target;
    setSortGender(value);
    dispatch(currentPageAction(1));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();
    setIsLoading(true);

    if (searchValue && sortStatus && sortGender) {
      await getResource(
        `${BASE_URL}${searchCategoryRadioValue}${PARAM_PAGE}${currentPage}&name=${searchValue.toLowerCase()}&status=${sortStatus}&gender=${sortGender}`,
        dispatch,
      );
    } else if (searchValue) {
      await getResource(
        `${BASE_URL}${searchCategoryRadioValue}${PARAM_PAGE}${currentPage}&name=${searchValue.toLowerCase()}`,
        dispatch,
      );
    } else if (sortStatus && sortGender) {
      await getResource(
        `${BASE_URL}${searchCategoryRadioValue}${PARAM_PAGE}${currentPage}&status=${sortStatus}&gender=${sortGender}`,
        dispatch,
      );
    } else if (sortStatus) {
      await getResource(
        `${BASE_URL}${searchCategoryRadioValue}${PARAM_PAGE}${currentPage}&status=${sortStatus}`,
        dispatch,
      );
    } else if (sortGender) {
      await getResource(
        `${BASE_URL}${searchCategoryRadioValue}${PARAM_PAGE}${currentPage}&gender=${sortGender}`,
        dispatch,
      );
    } else {
      await getResource(`${BASE_URL}${searchCategoryRadioValue}${PARAM_PAGE}${currentPage}`, dispatch);
    }

    setSearchValue('');
    setIsLoading(false);
  };

  const select = (): JSX.Element => {
    const number = dataApi?.info.pages;
    const array = [];
    if (number) {
      for (let i = 1; i <= number; i += 1) {
        array.push(i);
      }

      return (
        <>
          {array.map((item: number) => {
            return (
              <option key={uuid()} value={item}>
                {item}
              </option>
            );
          })}
        </>
      );
    }
    return <></>;
  };

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <fieldset className="form__service">
          <legend>Field Search</legend>
          <label htmlFor="character">
            Character
            <input
              className="service-radio-real"
              id="character"
              type="radio"
              name="field"
              onChange={handleChangeRadio}
              value={ApiItem.CHARACTER}
              checked={ApiItem.CHARACTER === searchCategoryRadioValue}
            />
            <span className="service-radio-custom" />
          </label>
          <label htmlFor="location">
            Locations
            <input
              className="service-radio-real"
              id="location"
              type="radio"
              name="field"
              onChange={handleChangeRadio}
              value={ApiItem.LOCATION}
              checked={ApiItem.LOCATION === searchCategoryRadioValue}
            />
            <span className="service-radio-custom" />
          </label>
          <label htmlFor="episode">
            Episodes
            <input
              className="service-radio-real"
              id="episode"
              type="radio"
              name="field"
              onChange={handleChangeRadio}
              value={ApiItem.EPISODE}
              checked={ApiItem.EPISODE === searchCategoryRadioValue}
            />
            <span className="service-radio-custom" />
          </label>
        </fieldset>
        <fieldset className="form__service">
          <legend>Chose a page and click search</legend>
          <label htmlFor="page" className="form__select_span">
            <select id="page" className="form__select" onChange={handleChangeSelect} value={+currentPage}>
              <option value="">{currentPage}</option>
              {select()}
            </select>
          </label>
        </fieldset>
        {searchCategoryRadioValue === ApiItem.CHARACTER ? (
          <fieldset className="form__service">
            <legend>Sort by:</legend>
            <div className="form__service_sort">
              <label htmlFor="status">
                Status
                <select className="form__select" id="status" onChange={handleChangeSelectSortStatus} value={sortStatus}>
                  <option value="">Selected</option>
                  <option value="alive">alive</option>
                  <option value="dead">dead</option>
                  <option value="unknown">unknown</option>
                </select>
              </label>
              <label htmlFor="gender">
                Gender
                <select className="form__select" id="gender" onChange={handleChangeSelectSortGender} value={sortGender}>
                  <option value="">Selected</option>
                  <option value="female">female</option>
                  <option value="male">male</option>
                  <option value="genderless">genderless</option>
                  <option value="unknown">unknown</option>
                </select>
              </label>
              <button className="btn_reset" type="submit" onClick={resetSort}>
                resetSort
              </button>
            </div>
          </fieldset>
        ) : (
          <></>
        )}

        <fieldset className="form__panel">
          <legend>Search Field Name</legend>
          <label className="form__panel_search" htmlFor="search">
            <input
              id="search"
              type="text"
              value={searchValue}
              onChange={handleChange}
              disabled={isLoading}
              placeholder={isLoading ? 'loading...' : 'search'}
            />
          </label>

          <button className="form__panel_btn" type="submit">
            {isLoading ? 'Loading...' : 'Search'}
          </button>
        </fieldset>
        {isSearchFieldNameError ? (
          <div className="form-search-result">Search word for name field not found!</div>
        ) : (
          <></>
        )}
      </form>
    </>
  );
};

export default Form;
