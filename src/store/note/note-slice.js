import { createSlice } from "@reduxjs/toolkit";;

export const noteSlice = createSlice({
    name : 'noteSlice',
    initialState : {
        noteList : []
    },
    reducers : {
        setNoteList : (currentSlice, action) =>{
            currentSlice.noteList = action.payload;
        },
        addNote : (currentSlice, action) =>{
            currentSlice.noteList.push(action.payload);
        }
    }
});

const { setNoteList, addNote } = noteSlice.actions;

export { setNoteList, addNote };