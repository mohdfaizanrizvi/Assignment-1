import React, { useState } from 'react';

const People = ({ className, fill }) => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <div className={`flex justify-center items-center w-full h-16 p-2 mt-8  ${clicked ? 'bg-white' : ''}`} onClick={handleClick}>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className={className}
        viewBox='0 0 512 512'
        style={{ width: '100%', height: '100%' }}
      >
        <title>ionicons-v5-j</title>
        <circle fill={fill} cx='152' cy='184' r='72' />
        <path
          fill={fill}
          d='M234,296c-28.16-14.3-59.24-20-82-20-44.58,0-136,27.34-136,82v42H166V383.93c0-19,8-38.05,22-53.93C199.17,317.32,214.81,305.55,234,296Z'
        />
        <path
          fill={fill}
          d='M340,288c-52.07,0-156,32.16-156,96v48H496V384C496,320.16,392.07,288,340,288Z'
        />
        <circle fill={fill} cx='340' cy='168' r='88' />
      </svg>
    </div>
  );
};

export default People;
