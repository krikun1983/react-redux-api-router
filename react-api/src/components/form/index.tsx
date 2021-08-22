import React, { ChangeEvent, useState } from 'react';
import uuid from 'react-uuid';
import { BASE_URL, PARAM_PAGE } from '../../constants/api';
import getPageId from '../../services/getPageId';
import { ApiItem, GetApiData, SetFormValuesProps } from '../../types';
import getApiResource from '../../utils/network';

const Form = ({
  dataApi,
  onSetDataApi,
  onSetTableView,
  onSetPrevPage,
  onSetNextPage,
  onSetCurrentPage,
  currentPage,
  onGetResource,
  onSetSearchRadioValue,
  searchRadioValue,
}: SetFormValuesProps): JSX.Element => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>('');
  const [urlSearch, setUrlSearch] = useState<string>(`${BASE_URL}${searchRadioValue}${PARAM_PAGE}${currentPage}`);

  // Значение из строки поиска
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSearchValue(value);
  };
  // значение из radio
  const handleChangeRadio = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    onSetSearchRadioValue(value);
  };
  const handleChangeSelect = async (event: ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    onSetCurrentPage(+value);
  };
  // Загрузка страницы
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();
    setIsLoading(true);

    if (searchValue) {
      await onGetResource(`${BASE_URL}${searchRadioValue}/?name=${searchValue.toLowerCase()}`);
    } else {
      await onGetResource(`${urlSearch}`);
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
          <legend>Сhose a page and click search</legend>
          <select onChange={handleChangeSelect}>
            <option value="">{currentPage}</option>
            {select()}
          </select>
        </fieldset>
        <fieldset className="form__panel">
          <legend>Search</legend>
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
