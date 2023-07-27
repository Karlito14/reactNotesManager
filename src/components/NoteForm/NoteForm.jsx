import { ButtonPrimary } from 'components/ButtonPrimary/ButtonPrimary';
import style from './style.module.css';
import { PencilFill, TrashFill } from 'react-bootstrap-icons';

export const NoteForm = ({ title }) => {
    const actionIcons = (
        <>
            <div className='col-1'>
                <PencilFill className={style.icon} />
            </div>
            <div className='col-1'>
                <TrashFill className={style.icon} />
            </div>
        </>
    );

    const titleInput = (
        <>
            <label htmlFor='title' className='form-label'>Title</label>
            <input id='title' type='text' name='title' className='form-control' />
        </>
    );

    const contentInput = (
        <>
            <label htmlFor='content' className='form-label'>Content</label>
            <textarea id='content' type='text' name='content' className='form-control' rows='5'></textarea>
        </>
    );
    
    
    const submitButton = (
        <div className={style.div_button}>
            <ButtonPrimary content={'Submit'} /> 
        </div>
    );

    return(
        <div className={style.container}>
            <div className='row justify-content-space-between mb-3'>
                <h2 className='col-10'>{title}</h2>
                {actionIcons}
            </div>
            <div className={`mb-3 ${style.title_input}`}>{titleInput}</div>
            <div className='mb-3'>{contentInput}</div>
            {submitButton}
        </div>
    )
};