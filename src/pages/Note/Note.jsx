import { useParams } from 'react-router-dom';
import style from './style.module.css';
import { useSelector } from 'react-redux';
import { NoteForm } from 'components/NoteForm/NoteForm';

export const Note = () => {
    const { noteId } = useParams();

    const note = useSelector(store => store.NOTE.noteList.find(note => note.id === noteId));

    return (
        <>
            {note && 
                <NoteForm 
                    title={note.title} 
                    isEditable={false} 
                    onClickEdit={() => {''}} 
                    onClickTrash={() => {''}} 
                    note={note} 
                />
            }
        </>
    )
};