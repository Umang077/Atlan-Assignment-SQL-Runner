// components/UploadComponent.js
import React from 'react';
import './UploadStyles.css';

function UploadComponent({
  handleFileChange,
  handleFileUpload,
  selectedFile,
  sqlQueries,
  selectedQuery,
  handleQuerySelect
}) {
  return (
    <div style={{marginLeft: '3%'
    }}>
      <input  className='button-62' type="file" onChange={handleFileChange} />
      <button  className='button-62' style={{marginLeft:'17%'}}  onClick={handleFileUpload}>Upload CSV</button>
      {sqlQueries.length > 0 && (
        <select value={selectedQuery} onChange={(e) => handleQuerySelect(e.target.value)} style={{border: 'none',
          padding: '10px 20px',
          borderRadius: '5px',
          background:'linear-gradient(to right bottom, rgb(239, 71, 101), rgb(255, 154, 90))',
          color:'#fff',
          cursor:'pointer',
          fontSize:'15px',
          fontWeight:'700',
          marginLeft:'1.25%'}}>
          <option value="" style={{
   borderLeft: '6px solid transparent',
   borderTop: '6px solid rgba(0,0,0,0.6)',
   borderRight: '6px solid transparent',
   background:'#fff',
   padding:'5px 15px',
   display:'block',
   fontSize:'13px',
   fontWeight:'700',
   color:'rgba(0,0,0,0.6)'
  
  }}>Select SQL Query</option>
          {sqlQueries.map((query, index) => (
            <option style={{borderLeft: '6px solid transparent',
            borderTop: '6px solid rgba(0,0,0,0.6)',
            borderRight: '6px solid transparent',
            background:'#fff',
            padding:'5px 15px',
            display:'block',
            fontSize:'13px',
          fontWeight:'700',
          color:'rgba(0,0,0,0.6)'
          }} key={index} value={query}>{query}</option>
          ))}
        </select>
      )}
    </div>
  );
}

export default UploadComponent;
