import { useParams } from 'react-router-dom';
import style from './style.module.css';
import { useSelector } from 'react-redux';
import { NoteForm } from 'components/NoteForm/NoteForm';
import { useState } from 'react';

export const Note = () => {
    const { noteId } = useParams();
    
    const [isEditable, setIsEditable] = useState(false);

    const note = useSelector(store => store.NOTE.noteList.find(note => note.id === noteId));

    const submit = () => {

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