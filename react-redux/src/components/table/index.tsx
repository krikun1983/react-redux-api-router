import React from 'react';
import { Link } from 'react-router-dom';
import useTypeSelector from '../../store/hooks/useTypeSelector';
import { ApiItem, TableProps } from '../../types/form-api';

const Table = ({ dataApi }: TableProps): JSX.Element => {
  const { searchCategoryRadioValue } = useTypeSelector(state => state.searchCategoryRadioValue);
  const { isSearchResultsTableView } = useTypeSelector(state => state.isSearchResultsTableView);

  const resultHeaderTable = (value: string): JSX.Element => {
    if (value === ApiItem.CHARACTER) {
      return (
        <tr>
          <th>Name</th>
          <th>Status</th>
          <th>Species</th>
          <th>Gender</th>
          <th>Images</th>
        </tr>
      );
    }
    if (value === ApiItem.LOCATION) {
      return (
        <tr>
          <th>Name</th>
          <th>Type</th>
          <th>Dimension</th>
          <th>Created</th>
        </tr>
      );
    }
    if (value === ApiItem.EPISODE) {
      return (
        <tr>
          <th>Name</th>
          <th>Air_Date</th>
          <th>Episode</th>
          <th>Created</th>
        </tr>
      );
    }
    return <></>;
  };

  return (
    <>
      {isSearchResultsTableView ? (
        <div className="results">
          <div className="results_btns" />
          <table className="table">
            <caption className="table__heading">Search Result</caption>
            <thead className="table__head">{resultHeaderTable(searchCategoryRadioValue)}</thead>
            <tbody className="table__body">
              {searchCategoryRadioValue === ApiItem.CHARACTER ? (
                dataApi?.results.map(({ id, name, status, species, gender, image }) => {
                  return (
                    <tr key={id}>
                      <td className="table__body_name">
                        <Link to={`details/${searchCategoryRadioValue}/${id}`} className="table__body_link">
                          {name}
                        </Link>
                      </td>
                      <td className="table__body_status">
                        <Link to={`details/${searchCategoryRadioValue}/${id}`} className="table__body_link">
                          {status}
                        </Link>
                      </td>
                      <td className="table__body_species">
                        <Link to={`details/${searchCategoryRadioValue}/${id}`} className="table__body_link">
                          {species}
                        </Link>
                      </td>
                      <td className="table__body_episode">
                        <Link to={`details/${searchCategoryRadioValue}/${id}`} className="table__body_link">
                          {gender}
                        </Link>
                      </td>
                      <td className="table__body_img">
                        <Link to={`details/${searchCategoryRadioValue}/${id}`} className="table__body_link">
                          <img src={image} alt={name} />
                        </Link>
                      </td>
                    </tr>
                  );
                })
              ) : (
                <></>
              )}
              {searchCategoryRadioValue === ApiItem.LOCATION ? (
                dataApi?.results.map(({ id, name, type, dimension, created }) => {
                  return (
                    <tr key={id}>
                      <td className="table__body_name">
                        <Link to={`details/${searchCategoryRadioValue}/${id}`} className="table__body_link">
                          {name}
                        </Link>
                      </td>
                      <td className="table__body_status">
                        <Link to={`details/${searchCategoryRadioValue}/${id}`} className="table__body_link">
                          {type}
                        </Link>
                      </td>
                      <td className="table__body_species">
                        <Link to={`details/${searchCategoryRadioValue}/${id}`} className="table__body_link">
                          {dimension}
                        </Link>
                      </td>
                      <td className="table__body_img">
                        <Link to={`details/${searchCategoryRadioValue}/${id}`} className="table__body_link">
                          {created}
                        </Link>
                      </td>
                    </tr>
                  );
                })
              ) : (
                <></>
              )}
              {searchCategoryRadioValue === ApiItem.EPISODE ? (
                dataApi?.results.map(({ id, name, air_date, episode, created }) => {
                  return (
                    <tr key={id}>
                      <td className="table__body_name">
                        <Link to={`details/${searchCategoryRadioValue}/${id}`} className="table__body_link">
                          {name}
                        </Link>
                      </td>
                      <td className="table__body_status">
                        <Link to={`details/${searchCategoryRadioValue}/${id}`} className="table__body_link">
                          {air_date}
                        </Link>
                      </td>
                      <td className="table__body_species">
                        <Link to={`details/${searchCategoryRadioValue}/${id}`} className="table__body_link">
                          {episode}
                        </Link>
                      </td>
                      <td className="table__body_img">
                        <Link to={`details/${searchCategoryRadioValue}/${id}`} className="table__body_link">
                          {created}
                        </Link>
                      </td>
                    </tr>
                  );
                })
              ) : (
                <></>
              )}
            </tbody>
            <tfoot>
              <tr>
                <th colSpan={4}>{`Now is ${new Date()}`}</th>
              </tr>
            </tfoot>
          </table>
        </div>
      ) : (
        ''
      )}
    </>
  );
};

export default Table;
