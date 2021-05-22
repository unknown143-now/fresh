import React from "react";
import spinner from "../../images/spinner.gif";
import './Loading.css';

const Loading = () => {
  return (
    <div className="loading-wrapper">
      <div className="loading-content">
        <img src={spinner} alt="loading..." />
      </div>
    </div>
  );
};

export default Loading;
