import { configureStore } from "@reduxjs/toolkit";
import { songsReducer, addSong, removeSong } from "./slices/songsSlice";
import { moviesReducer, addMovie, removeMovie } from "./slices/moviesSlice";
import { seriesReducer, addSeriesToList, removeSeriesFromList } from "./slices/seriesSlice";
import { reset } from "./actions/actions";
// create action is used for creating manual actions


const store = configureStore({
    reducer: {
        songs: songsReducer,
        movies: moviesReducer,
        seriesList: seriesReducer,
    }
});

// // console.log(store);

// let initialState = store.getState();
// console.log(JSON.stringify(initialState));

// store.dispatch({
//     type: 'song/addSong',
//     payload: "new Song!!!"
// })
// store.dispatch(songsSlice.actions.addSong("let new song"))

// let finalState = store.getState();
// console.log(JSON.stringify(finalState))



export { store };
export { reset, addSong, removeSong, addMovie, removeMovie, addSeriesToList, removeSeriesFromList};