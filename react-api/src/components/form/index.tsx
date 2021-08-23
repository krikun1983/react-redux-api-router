import React, { ChangeEvent, useState } from 'react';
import uuid from 'react-uuid';
import { BASE_URL, PARAM_PAGE } from '../../constants/api';
import { ApiItem, SetFormValuesProps } from '../../types';

const Form = ({
  dataApi,
  onSetDataApi,
  onSetCurrentPage,
  onSetTableView,
  currentPage,
  onGetResource,
  onSetSearchRadioValue,
  searchRadioValue,
}: SetFormValuesProps): JSX.Element => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>('');
  const [sortStatus, setSortStatus] = useState<string>('');
  const [sortGender, setSortGender] = useState<string>('');

  const resetSort = () => {
    setSortStatus('');
    setSortGender('');
  };
  // Значение из строки поиска
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSearchValue(value);
  };
  // значение из radio
  const handleChangeRadio = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    onSetSearchRadioValue(value);
    onSetDataApi(null);
    onSetTableView(false);
  };
  // Выбор номера страницы
  const handleChangeSelect = async (event: ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    onSetCurrentPage(+value);
  };
  // Выбор сортировки
  const handleChangeSelectSortStatus = async (event: ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    setSortStatus(value);
  };
  const handleChangeSelectSortGender = async (event: ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    setSortGender(value);
  };
  // Загрузка страницы
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();
    setIsLoading(true);

    if (searchValue) {
      await onGetResource(
        `${BASE_URL}${searchRadioValue}/${PARAM_PAGE}${currentPage}&name=${searchValue.toLowerCase()}`,
      );
    } else if (sortStatus && sortGender) {
      await onGetResource(
        `${BASE_URL}${searchRadioValue}${PARAM_PAGE}${currentPage}&status=${sortStatus}&gender=${sortGender}`,
      );
    } else if (sortStatus) {
      await onGetResource(`${BASE_URL}${searchRadioValue}${PARAM_PAGE}${currentPage}&status=${sortStatus}`);
    } else if (sortGender) {
      await onGetResource(`${BASE_URL}${searchRadioValue}${PARAM_PAGE}${currentPage}&gender=${sortGender}`);
    } else {
      await onGetResource(`${BASE_URL}${searchRadioValue}${PARAM_PAGE}${currentPage}`);
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
              defaultChecked
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
            />
            <span className="service-radio-custom" />
          </label>
        </fieldset>
        <fieldset className="form__service">
          <legend>Chose a page and click search</legend>
          <select onChange={handleChangeSelect} value={currentPage}>
            <option value="">{currentPage}</option>
            {select()}
          </select>
        </fieldset>
        {searchRadioValue === ApiItem.CHARACTER ? (
          <fieldset className="form__service">
            <legend>Sort by:</legend>
            <div className="form__service_sort">
              <label htmlFor="status">
                Status
                <select id="status" onChange={handleChangeSelectSortStatus} value={sortStatus}>
                  <option value="">Selected</option>
                  <option value="alive">alive</option>
                  <option value="dead">dead</option>
                  <option value="unknown">unknown</option>
                </select>
              </label>
              <label htmlFor="gender">
                Gender
                <select id="gender" onChange={handleChangeSelectSortGender} value={sortGender}>
                  <option value="">Selected</option>
                  <option value="female">female</option>
                  <option value="male">male</option>
                  <option value="genderless">genderless</option>
                  <option value="unknown">unknown</option>
                </select>
              </label>
              <button className="btn_reset" type="button" onClick={resetSort}>
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
      </form>
    </>
  );
};

export default Form;
