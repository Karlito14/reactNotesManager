import { TextCard } from 'components/TextCard/TextCard';
import style from './style.module.css';

export const NoteBrowse = () => {
    return (
        <TextCard
            title='test'
            date='01/01/2023'  
            content='Super description textSuper description textSuper description textSuper description textSuper description textSuper description textSuper description textSuper description textSuper description textSuper description textSuper description textSuper description textSuper description textSuper description textSuper description textSuper description text'
            onClickTrash={() => {
                alert('click trash')
            }}
            onClick={() => {
                alert('click note')
            }}
        />
    )
};  