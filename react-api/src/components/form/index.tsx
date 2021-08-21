import React, { ChangeEvent, useState } from 'react';
import { SetFormValuesProps } from '../../types';

const BASE_URL = 'https://rickandmortyapi.com/api/';
const CHARACTERS = 'character'; // used to get all the characters
const LOCATIONS = 'location'; // used to get all the locations
const EPISODES = 'episode'; // used to get all the episodes

const Form = ({ onSetDataApi, onSetTableView }: SetFormValuesProps): JSX.Element => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>('');
  const [searchRadioValue, setSearchRadioValue] = useState<string>('character');
  // const [prevPage, setPrevPage] = useState('');
  // const [nextPage, setNextPage] = useState('');
  // const [currentPage, setCurrentPage] = useState(1);

  // Значение из строки поиска
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSearchValue(value);
  };
  // значение из radio
  const handleChangeRadio = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSearchRadioValue(value);
  };
  // Загрузка страницы
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch(`${BASE_URL}${searchRadioValue}`);
      const body = await response.json();

      console.log(body);

      onSetDataApi(body);
      onSetTableView(true);
      setSearchValue('');
    } catch (err) {
      console.error(err);
      onSetTableView(false);
    } finally {
      setIsLoading(false);
    }
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
              value={CHARACTERS}
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
              value={LOCATIONS}
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
              value={EPISODES}
            />
            <span className="service-radio-custom" />
          </label>
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
