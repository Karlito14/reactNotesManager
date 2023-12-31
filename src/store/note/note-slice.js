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
        },
        updateNote : (currentSlice, action) => {
            const index = currentSlice.noteList.findIndex(note => note.id === action.payload.id);
            currentSlice.noteList.splice(index, 1, action.payload);
        },
        deleteNote : (currentSlice, action) => {
            const index = currentSlice.noteList.findIndex(note => note.id === action.payload.id);
            currentSlice.noteList.splice(index, 1);
        }
    }
});

const { setNoteList, addNote, updateNote, deleteNote } = noteSlice.actions;

export { setNoteList, addNote, updateNote, deleteNote };