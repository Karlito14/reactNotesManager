import style from './style.module.css';

export const ButtonPrimary = ({ content, onClick }) => {
    return (
        <button 
            onClick={onClick} 
            type='button' 
            className={`btn btn-primary ${style.button}`}
        >
            {content}
        </button>
    )
};