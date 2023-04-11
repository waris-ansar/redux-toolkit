import { useDispatch, useSelector } from "react-redux";
import { createRandomMovie } from "../data";
import { addSeriesToList, removeSeriesFromList } from "../store";



function SeriesPlaylist() {
  const dispatch = useDispatch();

  // To Do:
  // Get list of movies
  const moviePlaylist = useSelector((state) => {
    // console.log(state.seriesList)
    return state.seriesList
  });

  const handleMovieAdd = (series) => {
    dispatch(addSeriesToList(series));
  };
  const handleMovieRemove = (series) => {
    dispatch(removeSeriesFromList(series))
  };

  const renderedMovies = moviePlaylist.map((series) => {
    return (
      <li key={series}>
        {series}
        <button
          onClick={() => handleMovieRemove(series)}
          className="button is-danger"
        >
          X
        </button>
      </li>
    );
  });

  return (
    <div className="content">
      <div className="table-header">
        <h3 className="subtitle is-3">Series Playlist</h3>
        <div className="buttons">
          <button
            onClick={() => handleMovieAdd(createRandomMovie())}
            className="button is-link"
          >
            + Add Series to Playlist
          </button>
        </div>
      </div>
      <ul>{renderedMovies}</ul>
    </div>
  );
}

export default SeriesPlaylist;