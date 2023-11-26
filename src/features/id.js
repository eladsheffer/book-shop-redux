import { createSlice } from "@reduxjs/toolkit";
import jsonBooks from "../books.json"

export const idSlice = createSlice({
    name: "id",
    initialState: {value: jsonBooks.length + 1},
    reducers: {
        nextId: (state) =>{
            state.value = state.value + 1;
        }
    }
});

export const {nextId} = idSlice.actions;

export default idSlice.reducer;