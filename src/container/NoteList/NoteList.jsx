import { useDispatch, useSelector } from 'react-redux';
import style from './style.module.css';
import { TextCard } from 'components/TextCard/TextCard';
import { useNavigate } from 'react-router-dom';
import { NotesAPI } from 'api/notes-api';
import { deleteNote } from 'store/note/note-slice';

export const NoteList = () => {
    const noteList = useSelector(store => store.NOTE.noteList);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const delete_note = async (note) => {
        if(window.confirm('Supprimer la note ?')) {
            await NotesAPI.deleteByID(note.id);
            dispatch(deleteNote(note));
        };   
    };
    
    return (
        <div className={`row ${style.cards_container}`}>
            {noteList.map(note =>{
                return (
                    <div className={style.card_container} key={note.title + note.id}>
                        <TextCard
                            title={note.title}
                            date={note.created_at}
                            content={note.content}
                            onClick={() => {navigate(`/note/${note.id}`)}}
                            onClickTrash={() => delete_note(note)}
                        />
                    </div>
                )
                
            })}
        </div>
    )
};