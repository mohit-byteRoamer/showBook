import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./index.css";
import InfoBox from "./infoBox";
import Modal from "../../widgets/modal";
import Button from "../../widgets/button";
import NotFoundImage from "../../../assets/notFound.jpeg";

let MovieDetailPage = function (props) {
  const [movie, setMovie] = React.useState([]);

  const [modal, setModal] = React.useState(false);
  const [userName, setUserName] = React.useState("");
  const [userEmail, setUserEmail] = React.useState("");
  const params = useParams();
  const { id } = params;

  let onChangeFunc = function (e, state) {
    state(e.target.value);
  };

  let openModal = function () {
    setModal(true);
  };

  let showBooked = function (userName, userEmail) {
    alert(
      userName && userEmail ? "Your ShowBooked" : "Your information unComplete"
    );
    setModal(userName && userEmail ? false : true);
  };

  React.useEffect(() => {
    axios.get("https://api.tvmaze.com/search/shows?q=all").then((result) => {
      let newData = result.data;
      for (let i = 0; i <= newData.length - 1; i++) {
        if (newData[i]["show"]["id"] == id) {
          let movieName = newData[i].show.name;
          localStorage.setItem("name", movieName);
          setMovie(newData[i]);
        }
      }
    });
  }, [id]);
  return (
    <div className="detailPage">
      <div className="header">Movie Detail page</div>
      {modal ? (
        <div className="modal">
          <Modal
            showName={movie.show && localStorage.getItem("name")}
            country={
              movie.show && movie.show.network
                ? movie.show.network.country["name"]
                : "Country"
            }
            name={userName}
            email={userEmail}
            time={
              movie.show && movie.show.schedule["time"]
                ? "Time :" + movie.show.schedule["time"]
                : "Time"
            }
            day={
              movie.show && movie.show.schedule["days"][0]
                ? " Day :" + movie.show.schedule["days"][0]
                : "Day"
            }
            nameOnChange={(e) => onChangeFunc(e, setUserName)}
            emailOnChange={(e) => onChangeFunc(e, setUserEmail)}
            submit={() => showBooked(userName, userEmail)}
          />
        </div>
      ) : (
        <div className="movieFullDetail">
          <div className="movieImage">
            <img
              src={
                movie.show && movie.show.image && movie.show.image.medium
                  ? movie.show.image.medium
                  : NotFoundImage
              }
              className="movieImageSize"
            />
          </div>
          <div className="detailBox">
            <div className="movieName">
              {movie.show && movie.show.name ? movie.show.name : "null"}
            </div>
            <div className="infoBoxParents">
              <InfoBox
                heading={"Language"}
                info={
                  movie.show && movie.show.language
                    ? movie.show.language
                    : "null"
                }
              />
              <InfoBox
                heading={"Status"}
                info={
                  movie.show && movie.show.status ? movie.show.status : "null"
                }
              />
              <InfoBox
                heading={"Genres"}
                info={
                  movie.show && movie.show.genres ? movie.show.genres : "null"
                }
              />
            </div>
            <div className="infoBoxParents">
              <InfoBox
                heading={"Type"}
                info={movie.show && movie.show.type ? movie.show.type : "null"}
              />
              <InfoBox
                heading={"Runtime"}
                info={
                  movie.show && movie.show.runtime
                    ? movie.show.runtime + "m"
                    : "null"
                }
              />
              <InfoBox
                heading={"Schedule"}
                info={
                  movie.show &&
                  movie.show.schedule["time"] &&
                  movie.show.schedule["days"][0]
                    ? "Time :" +
                      movie.show.schedule["time"] +
                      " Day :" +
                      movie.show.schedule["days"][0]
                    : "null"
                }
              />
            </div>
            <div className="summary">
              <div className="boxHeader">Summary</div>
              <div>
                {movie.show && movie.show.summary
                  ? movie.show.summary.replace(/(<([^>]+)>)/gi, "")
                  : "null"}
              </div>
            </div>
            <div className="network">
              <div className="boxHeader">Network</div>
              <div className="networkContent">
                <InfoBox
                  heading={"Country"}
                  info={
                    movie.show && movie.show.network
                      ? movie.show.network.country["name"]
                      : "null"
                  }
                />
                <InfoBox
                  heading={"Name"}
                  info={
                    movie.show && movie.show.network
                      ? movie.show.network.name
                      : "null"
                  }
                />
              </div>
            </div>
            <Button onClick={() => openModal()} name={"Show Book"} />
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieDetailPage;
