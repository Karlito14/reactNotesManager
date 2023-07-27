import { useSelector } from 'react-redux';
import style from './style.module.css';
import { TextCard } from 'components/TextCard/TextCard';
import { useNavigate } from 'react-router-dom';

export const NoteList = () => {
    const noteList = useSelector(store => store.NOTE.noteList);
    const navigate = useNavigate();
    
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
                            onClickTrash={() => {alert('suppression')}}
                        />
                    </div>
                )
                
            })}
        </div>
    )
};