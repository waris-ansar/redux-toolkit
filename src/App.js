import { useDispatch } from "react-redux";
import "./styles.css";
import SongPlaylist from "./components/SongPlaylist";
import MoviePlaylist from './components/MoviePlaylist';
import SeriesPlaylist from "./components/SeriesPlaylist";
import { reset } from "./store";

export default function App() {
  const dispatch = useDispatch();
  const handleResetClick = () => {
    dispatch(reset())
  };

  return (
    <div className="container is-fluid">
      <button onClick={() => handleResetClick()} className="button is-danger">
        Reset All Playlists
      </button>
      <hr />
      <MoviePlaylist />
      <hr />
      <SongPlaylist />
      <hr />
      <SeriesPlaylist />
    </div>
  );
}
