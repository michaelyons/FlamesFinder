import React from 'react';
import fire from './fire.gif';

const fireLoad = () => {
  return (
    <div>
      <img
        src={fire}
        alt="fire loading gif"
        style={{ width: '200px', margin: 'auto', display: 'block' }}
      />
    </div>
  );
};

export default fireLoad;
