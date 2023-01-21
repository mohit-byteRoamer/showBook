import React from "react";

let InfoBox = function (props) {
  return (
    <div className="InfoBox">
      <div className="infoBoxheadingP">
        <div className="infoBoxheading">{props.heading}</div>
      </div>
      <div>{props.info}</div>
    </div>
  );
};

export default InfoBox;
