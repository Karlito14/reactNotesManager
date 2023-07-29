import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { NoteForm } from 'components/NoteForm/NoteForm';
import { useState } from 'react';
import { deleteNote, updateNote } from 'store/note/note-slice';
import { NotesAPI } from 'api/notes-api';

export const Note = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const { noteId } = useParams();
    
    const [isEditable, setIsEditable] = useState(false);

    const note = useSelector(store => store.NOTE.noteList.find(note => note.id === noteId));

    const submit = async (formValues) => {
        const updatedNote = await NotesAPI.update({
            title : formValues.title.trim(),
            content : formValues.content.trim(),
            id : noteId});
        dispatch(updateNote(updatedNote));
        setIsEditable(false);
    };

    const delete_note = async (note) => {
        if(window.confirm('Supprimer la note ?')) {
            await NotesAPI.deleteByID(note.id);
            dispatch(deleteNote(note));
            navigate('/');
        };   
    };


    return (
        <>
            {note && 
                <NoteForm 
                    title={isEditable ? 'Edit note' : note.title} 
                    isEditable={isEditable} 
                    onClickEdit={() => {setIsEditable(!isEditable)}} 
                    onClickTrash={() => delete_note(note)} 
                    note={note} 
                    onSubmit={isEditable && submit} 
                />
            }
        </>
    )
};