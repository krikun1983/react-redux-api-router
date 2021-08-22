import React from 'react';
import { ApiItem, TableProps } from '../../types';

const Table = ({ dataApi, tableView, searchRadioValue }: TableProps): JSX.Element => {
  const resultHeaderTable = (value: string): JSX.Element => {
    if (value === ApiItem.CHARACTER) {
      return (
        <tr>
          <th>Name</th>
          <th>Status</th>
          <th>Species</th>
          <th>Type</th>
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
      {tableView ? (
        <div className="results">
          <div className="results_btns" />
          <table className="table">
            <caption className="table__heading">Search Result</caption>
            <thead className="table__head">{resultHeaderTable(searchRadioValue)}</thead>
            <tbody className="table__body">
              {searchRadioValue === ApiItem.CHARACTER ? (
                dataApi?.results.map(({ id, name, status, species, type, image }) => {
                  return (
                    <tr key={id}>
                      <td className="table__body_name">{name}</td>
                      <td className="table__body_status">{status}</td>
                      <td className="table__body_species">{species}</td>
                      <td className="table__body_episode">{type}</td>
                      <td className="table__body_img">
                        <img src={image} alt="" />
                      </td>
                    </tr>
                  );
                })
              ) : (
                <></>
              )}
              {searchRadioValue === ApiItem.LOCATION ? (
                dataApi?.results.map(({ id, name, type, dimension, created }) => {
                  return (
                    <tr key={id}>
                      <td className="table__body_name">{name}</td>
                      <td className="table__body_status">{type}</td>
                      <td className="table__body_species">{dimension}</td>
                      <td className="table__body_img">{created}</td>
                    </tr>
                  );
                })
              ) : (
                <></>
              )}
              {searchRadioValue === ApiItem.EPISODE ? (
                dataApi?.results.map(({ id, name, air_date, episode, created }) => {
                  return (
                    <tr key={id}>
                      <td className="table__body_name">{name}</td>
                      <td className="table__body_status">{air_date}</td>
                      <td className="table__body_species">{episode}</td>
                      <td className="table__body_img">{created}</td>
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
