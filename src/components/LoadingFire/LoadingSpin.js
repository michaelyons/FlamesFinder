import React from 'react';
import fire from '../LoadingFire/fire.gif';

const fireLoad = () => {
  return (
    <div>
      <img
        src={fire}
        alt="fire loading gif"
        style={{
          width: '200px',
          margin: 'auto',
          display: 'block',
          paddingTop: '12rem'
        }}
      />
    </div>
  );
};

export default fireLoad;
