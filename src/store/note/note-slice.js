import { createSlice } from "@reduxjs/toolkit";;

export const noteSlice = createSlice({
    name : 'noteSlice',
    initialState : {
        noteList : []
    },
    reducers : {
        setNoteList : (currentSlice, action) =>{
            currentSlice.noteList = action.payload;
        }
    }
});

const { setNoteList } = noteSlice.actions;

export { setNoteList };