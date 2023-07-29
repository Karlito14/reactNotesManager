import style from './style.module.css';
import { Search as SearchIcon } from 'react-bootstrap-icons';

export const SearchBar = ({ placeholder, onTextChange }) => {
    return (
        <>
            <SearchIcon className={style.icon} />
            <input 
                type='text' 
                className={style.input} 
                onChange={(event) => onTextChange(event.target.value)} 
                placeholder={placeholder}
            />
        </>
    )
};