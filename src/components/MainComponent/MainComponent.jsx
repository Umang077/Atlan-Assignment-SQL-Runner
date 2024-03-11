// components/MainComponent.js
import React, { useState } from 'react';
import Papa from 'papaparse';
import './Table.css';
import UploadComponent from './UploadComponent';
import DataDisplayComponent from './DataDisplayComponent';

function MainComponent() {
  const [csvData, setCsvData] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);
  const [sqlQueries, setSqlQueries] = useState([]);
  const [selectedQuery, setSelectedQuery] = useState('');
  const [tableData, setTableData] = useState([]);
  const [tableHeaders, setTableHeaders] = useState([]);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleFileUpload = () => {
    if (selectedFile) {
      Papa.parse(selectedFile, {
        complete: (result) => {
          setCsvData(result.data);
          generateSqlQueries(result.data[0]);
          setSelectedQuery('');
          setTableData([]);
        },
        header: true
      });
    }
  };

  const generateSqlQueries = (sampleRow) => {
    const queries = [];
    if (sampleRow) {
      const columns = Object.keys(sampleRow);
      const fileNameWithoutExtension = selectedFile.name.replace(/\.[^/.]+$/, ''); // Remove file extension
      // Add SELECT * FROM filename query
      queries.push(`SELECT * FROM ${fileNameWithoutExtension}`);
      for (let i = 0; i < columns.length - 4; i++) {
        for (let j = i + 1; j < columns.length-3; j++) {
          queries.push(`SELECT ${columns[i]}, ${columns[j]} FROM ${fileNameWithoutExtension}`);
        }
      }
      for (let i = 0; i < columns.length - 2; i++) {
        for (let j = i + 1; j < columns.length - 1; j++) {
          for (let k = j + 1; k < columns.length; k++) {
            queries.push(`SELECT ${columns[i]}, ${columns[j]}, ${columns[k]} FROM ${fileNameWithoutExtension}`);
          }
        }
      }
      for (let i = 0; i < columns.length; i++) {
        queries.push(`SELECT ${columns[i]} FROM ${fileNameWithoutExtension} WHERE ${columns[i]} > 20`);
      }
      
      setSqlQueries(queries);
    }
  };

  const handleQuerySelect = (query) => {
    setSelectedQuery(query);
    if (query && csvData.length > 0) {
      if (query === `SELECT * FROM ${selectedFile.name.replace(/\.[^/.]+$/, '')}`) {
        const headers = Object.keys(csvData[0]);
        setTableHeaders(headers);
        setTableData(csvData);
      } else {
        const queryColumns = query.replace(/SELECT /, '').replace(/ FROM .*/, '').split(',').map(col => col.trim());
        setTableHeaders(queryColumns);
        Papa.parse(selectedFile, {
          complete: (result) => {
            const headers = result.meta.fields;
            const filteredData = result.data.map(row => {
              const newRow = {};
              headers.forEach(header => {
                if (queryColumns.includes(header)) {
                  newRow[header] = row[header];
                }
              });
              return newRow;
            });
            setTableData(filteredData);
          },
          header: true
        });
      }
    }
  };

  return (
    <div>
      <h1 style={{color:'#fff', fontSize:'35px'}}>Upload A CSV File and Create The SQL Table!</h1>
      <UploadComponent
        handleFileChange={handleFileChange}
        handleFileUpload={handleFileUpload}
        selectedFile={selectedFile}
        sqlQueries={sqlQueries}
        selectedQuery={selectedQuery}
        handleQuerySelect={handleQuerySelect}
      />
      <DataDisplayComponent
        tableData={tableData}
        tableHeaders={tableHeaders}
      />
    </div>
  );
}

export default MainComponent;
