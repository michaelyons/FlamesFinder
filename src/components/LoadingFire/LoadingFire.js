import React from 'react';
import fire from '../LoadingFire/fire.gif';

const fireLoad = () => {
  return (
    <div>
      <img src={fire} alt="fire loading gif" className="fire-gif" />
    </div>
  );
};

export default fireLoad;
