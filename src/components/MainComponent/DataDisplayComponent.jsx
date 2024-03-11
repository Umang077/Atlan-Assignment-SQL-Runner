// components/DataDisplayComponent.js
import React from 'react';

function DataDisplayComponent({ tableData, tableHeaders }) {
  return (
    <div style={{marginLeft:"5%",width:"92%", height:"450px", overflow:"auto", marginTop:'2.5%'}}>
      <table>
        <thead>
          <tr>
            {tableHeaders.map((header, index) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody style={{textAlign:'center'}}>
          {tableData.map((row, index) => (
            <tr key={index}>
              {tableHeaders.map((header, index) => (
                <td key={index}>{row[header]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DataDisplayComponent;
