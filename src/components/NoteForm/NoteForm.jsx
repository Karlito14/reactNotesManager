import { ButtonPrimary } from 'components/ButtonPrimary/ButtonPrimary';
import style from './style.module.css';
import { PencilFill, TrashFill } from 'react-bootstrap-icons';
import { useState } from 'react';
import { ValidatorService } from 'services/form-validators';
import { FieldError } from 'components/FieldError/FieldError';

const VALIDATORS = {
    title : (value) => {
        return ValidatorService.min(value, 3) || ValidatorService.max(value, 20);
    },
    content : (value) => {
        return ValidatorService.min(value, 3);
    },
}

export const NoteForm = ({ isEditable = true, title, onClickEdit, onClickTrash, onSubmit, note }) => {

    const [formValues, setFormValues] = useState({title : '', content : ''});

    const [formErrors, setFormErrors] = useState({title : "", content : ""});

    const hasError = () => {
        return Object.values(formErrors).some(error => error !== undefined)
    };

    const validateForm = (fieldName, fieldValue) => {
        setFormErrors({...formErrors, [fieldName] : VALIDATORS[fieldName](fieldValue)});
    }

    const updateFormValues = (event) => {
        const value = event.target.value.trim();
        setFormValues({...formValues, [event.target.name]: value});
        validateForm(event.target.name, value);
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
        <div className='mb-5'>
            <label htmlFor='title' className='form-label'>Title</label>
            <input 
                onChange={updateFormValues}
                id='title' 
                type='text' 
                name='title' 
                className='form-control'  
            />
            {formErrors.title && <FieldError message={formErrors.title} />}
        </div>
    );

    const contentInput = (
        <div className='mb-5'>
            <label htmlFor='content' className='form-label'>Content</label>
            <textarea 
                onChange={updateFormValues}
                id='content' 
                type='text' 
                name='content' 
                className='form-control' 
                rows='5'  
            >
            </textarea>
            {formErrors.content && <FieldError message={formErrors.content} />}
        </div>
    );
    
    
    const submitButton = (
        <div className={style.div_button}>
            <ButtonPrimary 
                isDisabled={hasError()} 
                onClick={() => onSubmit(formValues)} 
                content={'Submit'} 
            /> 
        </div>
    );

    return(
        <form className={style.container}>
            <div className='row justify-content-space-between mb-3'>
                <h2 className='col-10'>{title}</h2>
                {actionIcons}
            </div>
            <div className={`mb-3 ${style.title_input}`}>{isEditable && titleInput}</div>
            <div className='mb-3'>{isEditable ? contentInput : <pre>{note.content}</pre>}</div>
            {onSubmit && submitButton}
        </form>
    )
};