import style from './style.module.css';

export const FieldError = ({ message }) =>{
    return (
        <span className={style.container}>{message}</span>
    )
};