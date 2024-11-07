import React from 'react';
import "./styles.css";

const CubeLoader = (props) => {
  return (
    <div className="cube-loader flex flex-col items-center justify-center h-full space-y-4">
      <div className="cube">
        <div className="face front"></div>
        <div className="face back"></div>
        <div className="face left"></div>
        <div className="face right"></div>
        <div className="face top"></div>
        <div className="face bottom"></div>
      </div>
      <div className="loading-text">Fetching {props.data}...</div>
    </div>
  );
};

export default CubeLoader;
