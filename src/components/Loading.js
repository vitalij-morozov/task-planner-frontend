import React from 'react';

function Loading({ center }) {
  return <div className={center ? 'loading-center loading' : 'loading'}></div>;
}

export default Loading;
