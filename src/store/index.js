import {configureStore, createSlice} from "@reduxjs/toolkit";

const songsSlice = createSlice({
    name: "song",
    initialState: [],
    reducers: {
        addSong(state, action){
            state.push(action.payload);
        },
        removeSong(state, action){
            const index = state.indexOf(action.payload);
            state.splice(index, 1);
        }
    }
});


const moviesSlice = createSlice({
    name: "movie",
    initialState: [],
    reducers: {
        addMovie(state, action){
            state.push(action.payload);
        },
        removeMovie(state, action){
            //
        }
    }
})


const store = configureStore({
    reducer: {
        songs: songsSlice.reducer,
        movies: moviesSlice.reducer,
    }
});

// // console.log(store);

let initialState = store.getState();
console.log(JSON.stringify(initialState));

// // store.dispatch({
// //     type: 'song/addSong',
// //     payload: "new Song!!!"
// // })
// store.dispatch(songsSlice.actions.addSong("let new song"))

// let finalState = store.getState();
// console.log(JSON.stringify(finalState))



export { store };
export const { addSong, removeSong } = songsSlice.actions;
export const { addMovie } = moviesSlice.actions;