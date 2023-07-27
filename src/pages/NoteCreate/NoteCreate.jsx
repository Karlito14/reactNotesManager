import { NotesAPI } from 'api/notes-api';
import { NoteForm } from 'components/NoteForm/NoteForm';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addNote } from 'store/note/note-slice';

export const NoteCreate = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const newNote = async (formValues) => {
        const createdNote = await NotesAPI.create({
            ...formValues, 
            created_at : new Date().toLocaleDateString()
        });
        
        dispatch(addNote(createdNote));

        navigate('/');
    };

    return (
        <NoteForm title={'Create a note'} onSubmit={newNote} />
    )
};