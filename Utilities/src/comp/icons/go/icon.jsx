import React from 'react';

function GoIcon({width,height}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className='vg-go-icon'
    >
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}

export default GoIcon;
