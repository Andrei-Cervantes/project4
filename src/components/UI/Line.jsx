import React from 'react';

const LineWithHeader = ({ header, width, fontSize = "3rem" }) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <h2 style={{
          color: '#FFFFFF',
          fontSize: fontSize,
          fontWeight: 'bold',
          marginRight: '10px'
        }}
        className='syne'
      >
        {header}
      </h2>
      <div
        style={{
          width: width,
          height: '2px', // Adjust thickness as needed
          backgroundColor: '#FFFFFF',
        }}
      />
    </div>
  );
};

export default LineWithHeader;
