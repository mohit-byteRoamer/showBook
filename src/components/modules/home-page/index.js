import React from "react";
import axios from "axios";
import "./index.css";
import MovieCard from "../../shared/movie-card";
import { useNavigate, Navigate } from "react-router-dom";

let Home = function (props) {
  let [data, setData] = React.useState([]);
  const navigate = useNavigate();
  let navigatePage = function (id) {
    navigate(`/movie-detail-page/${id}`);
  };

  React.useEffect(() => {
    axios.get("https://api.tvmaze.com/search/shows?q=all").then((result) => {
      //   debugger;
      setData(result.data);
    });
  }, []);
  return (
    <div className="home">
      <div className="header">Movie App</div>
      <div className="movieItems">
        {data.map((val, key) => {
          return (
            <MovieCard
              key={key}
              onClick={() => navigatePage(val.show.id)}
              name={val.show.name}
              cardPic={val.show.image}
              averageTime={val.show.averageRuntime}
              genres={val.show.genres}
              language={val.show.language}
              schedule={val.show.schedule}
              status={val.show.status}
              rating={val.show.rating}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Home;
