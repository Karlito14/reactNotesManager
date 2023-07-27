import { ButtonPrimary } from 'components/ButtonPrimary/ButtonPrimary';
import style from './style.module.css';
import { PencilFill, TrashFill } from 'react-bootstrap-icons';
import { useState } from 'react';

export const NoteForm = ({ title, onClickEdit, onClickTrash, onSubmit }) => {

    const [formValues, setFormValues] = useState({title : '', content : ''});

    const updateFormValues = (event) => {
        setFormValues({...formValues, [event.target.name]: event.target.value})
    };

    const actionIcons = (
        <>
            <div className='col-1'>
                {onClickEdit && <PencilFill onClick={onClickEdit} className={style.icon} />}
            </div>
            <div className='col-1'>
                {onClickTrash && <TrashFill onClick={onClickTrash} className={style.icon} />}
            </div>
        </>
    );

    const titleInput = (
        <>
            <label htmlFor='title' className='form-label'>Title</label>
            <input 
                onChange={updateFormValues}
                id='title' 
                type='text' 
                name='title' 
                className='form-control' 
                required 
            />
        </>
    );

    const contentInput = (
        <>
            <label htmlFor='content' className='form-label'>Content</label>
            <textarea 
                onChange={updateFormValues}
                id='content' 
                type='text' 
                name='content' 
                className='form-control' 
                rows='5' 
                required 
            >
            </textarea>
        </>
    );
    
    
    const submitButton = (
        <div className={style.div_button}>
            <ButtonPrimary onClick={() => onSubmit(formValues)} content={'Submit'} /> 
        </div>
    );

    return(
        <form className={style.container}>
            <div className='row justify-content-space-between mb-3'>
                <h2 className='col-10'>{title}</h2>
                {actionIcons}
            </div>
            <div className={`mb-3 ${style.title_input}`}>{titleInput}</div>
            <div className='mb-3'>{contentInput}</div>
            {onSubmit && submitButton}
        </form>
    )
};