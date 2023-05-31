import React from 'react';

const LoadingStage = () => {
  const dots = Array.from({ length: 4 }, (_, index) => (
    <div className="period-wave-dot" key={index} />
  ));

  return (
    <div className="loadingsectioncontainer">
      <div className="period-wave">{dots}</div>
    </div>
  );
};

export default LoadingStage;
