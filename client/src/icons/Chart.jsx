import React, { useState } from 'react';

const Chart = ({ className, fill }) => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <div className={`flex justify-center items-center w-full h-16 p-2 mt-8 ${clicked ? 'bg-white' : ''}`} onClick={handleClick}>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className={className}
        viewBox='0 0 512 512'
        style={{ width: '100%', height: '100%' }}
      >
        <title>ionicons-v5-p</title>
        <polygon
          points='496 496 16 496 16 16 48 16 48 464 496 464 496 496'
          fill={fill}
        />
        <path d='M192,432H80V208H192Z' fill={fill} />
        <path d='M336,432H224V160H336Z' fill={fill} />
        <path d='M479.64,432h-112V96h112Z' fill={fill} />
      </svg>
    </div>
  );
};

export default Chart;
