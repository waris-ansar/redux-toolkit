import { createSlice } from "@reduxjs/toolkit";
import { reset } from "../actions/actions";


const seriesSlice = createSlice({
    name: "seriesname",
    initialState: [],
    reducers:{
        addSeriesToList(state, action){
            state.push(action.payload);
        },
        removeSeriesFromList(state, action){
            const index = state.indexOf(action.payload);
            state.splice(index, 1);
        }
    },
    extraReducers(builder){
        builder.addCase(reset().type, (state,action)=>{
            return [];
        })
    }
})


export const {addSeriesToList, removeSeriesFromList} = seriesSlice.actions;
export const seriesReducer = seriesSlice.reducer;