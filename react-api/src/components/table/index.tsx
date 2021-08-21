import React from 'react';
import uuid from 'react-uuid';
import { TableProps } from '../../types';

const Table = ({ dataApi, tableView }: TableProps): JSX.Element => {
  return (
    <>
      {tableView ? (
        <div className="results">
          <div className="results_btns" />
          <table className="table">
            <caption className="table__heading">Search Result</caption>
            <thead className="table__head">
              <tr>
                <th>Name</th>
                <th>Status</th>
                <th>Species</th>
                <th>Episode</th>
                <th>Images</th>
              </tr>
            </thead>
            <tbody className="table__body">
              {dataApi?.results.map(({ name, status, species, episode, image }) => {
                return (
                  <tr key={uuid()}>
                    <td className="table__body_name">{name}</td>
                    <td className="table__body_status">{status}</td>
                    <td className="table__body_species">{species}</td>
                    <td className="table__body_episode">{episode.length}</td>
                    <td className="table__body_img">
                      <img src={image} alt="" />
                    </td>
                  </tr>
                );
              })}
            </tbody>
            <tfoot>
              <tr>
                <th colSpan={5}>{`Now is ${new Date()}`}</th>
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
