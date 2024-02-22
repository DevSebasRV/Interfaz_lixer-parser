// src/TokenizationTable.js
import React from 'react';

const TokenizationTable = ({ data }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Tokens</th>
          <th>Lexemas</th>
          <th>Cantidad</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item[0]}</td>
            <td>{item[1].join(', ')}</td>
            <td>{item[2]}</td>
          </tr>
        ))}
      </tbody>
      <br></br>
    </table>
  );
};

export default TokenizationTable;
