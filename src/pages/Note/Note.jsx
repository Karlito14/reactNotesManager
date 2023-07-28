import { useParams } from 'react-router-dom';
import style from './style.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { NoteForm } from 'components/NoteForm/NoteForm';
import { useState } from 'react';
import { updateNote } from 'store/note/note-slice';
import { NotesAPI } from 'api/notes-api';

export const Note = () => {
    const dispatch = useDispatch();

    const { noteId } = useParams();
    
    const [isEditable, setIsEditable] = useState(false);

    const note = useSelector(store => store.NOTE.noteList.find(note => note.id === noteId));

    const submit = async (formValues) => {
        const updatedNote = await NotesAPI.update({...formValues,id : noteId});
        dispatch(updateNote(updatedNote));
        setIsEditable(false);
    };

    return (
        <>
            {note && 
                <NoteForm 
                    title={isEditable ? 'Edit note' : note.title} 
                    isEditable={isEditable} 
                    onClickEdit={() => {setIsEditable(!isEditable)}} 
                    onClickTrash={() => {''}} 
                    note={note} 
                    onSubmit={isEditable && submit} 
                />
            }
        </>
    )
};