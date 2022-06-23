import { useState, useEffect } from "react";
import {
  getDetailMovie,
  getImageMovie,
  getMovieVideo,
  getLinkVideo
} from "../../Services/Movies";

export const MovieDetail = ({ setOpenModal, movieId }) => {
  const [detail, setDetail] = useState({});
  const [video, setVideo] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([getDetailMovie(movieId), getMovieVideo(movieId)]).then(
      (data) => {
        setDetail(data[0]);
        setVideo(data[1].results[0].key);
        setLoading(false)
      }
    );

    return () => {
      setDetail({});
    };
  }, [movieId]);

  return (
    <>
      {!loading && (
        <div>
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
          <img src={getImageMovie(detail.backdrop_path, "w500")} alt="" />
          <h3>{detail.original_title}</h3>
          <p>{detail.overview}</p>
          <iframe
            width="560"
            height="315"
            src={getLinkVideo(video)}
            title="YouTube video player"
          ></iframe>
        </div>
      )}
    </>
  );
};
