import React from "react";
import NotFoundImage from "../../../assets/notFound.jpeg";

import "./index.css";
let MovieCard = function (props) {
  return (
    <div onClick={props.onClick} className="movieCardRoot">
      <div className="cardImage">
        <img
          src={
            props.cardPic && props.cardPic.medium
              ? props.cardPic.medium
              : NotFoundImage
          }
          className="image"
        />
      </div>
      <div className="cardDetail">
        <div className="nameText">{props.name}</div>
        <div className="">
          {props.genres[0]},{props.genres[1]}
        </div>
        <div className="">
          RunTime : {props.averageTime ? props.averageTime + " m" : "null"}
        </div>
        <div className="">Rating :{props.rating.average}</div>
      </div>
    </div>
  );
};

export default MovieCard;
