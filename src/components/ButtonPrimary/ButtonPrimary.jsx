import style from './style.module.css';

export const ButtonPrimary = ({ content, onClick, isDisabled }) => {
    return (
        <button 
            disabled={isDisabled}
            onClick={onClick} 
            type='button' 
            className={`btn btn-primary ${style.button}`}
        >
            {content}
        </button>
    )
};