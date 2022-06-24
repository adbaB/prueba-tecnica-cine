import { useState, useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import {
  getDetailMovie,
  getImageMovie,
  getMovieVideo,
  getLinkVideo,
} from "../../Services/Movies";
import "./index.css";
export const MovieDetail = ({ setOpenModal, movieId }) => {
  const [detail, setDetail] = useState({});
  const [video, setVideo] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([getDetailMovie(movieId), getMovieVideo(movieId)]).then(
      (data) => {
        setDetail(data[0]);
        setVideo(data[1].results[0].key);
        setLoading(false);
      }
    );
  }, [movieId]);

  return (
    <>
      {!loading && (
        <div className="modal-container">
          <button
            className="btn-detail"
            onClick={() => {
              setOpenModal(false);
            }}
          >
            <FaTimes size={24} />
          </button>
          <img width="800px" src={getImageMovie(detail.backdrop_path)} alt="" />
          <div className="text-container">
            <h3 className="title-detail">{detail.original_title}</h3>
            <p className="text-detail">{detail.overview}</p>
            <h4 className="genres-title">Genres:</h4>
            <div className="container-tag">
              {detail.genres.map((genre) => {
                return (
                  <span className="tag" key={genre.id}>
                    {genre.name}
                  </span>
                );
              })}
            </div>
          </div>
          <iframe
            className="video-detail"
            width="800px"
            src={getLinkVideo(video)}
            title="YouTube video player"
          ></iframe>
        </div>
      )}
    </>
  );
};
