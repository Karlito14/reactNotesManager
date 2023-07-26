import { useState } from 'react';
import style from './style.module.css';
import { Trash as TrashIcon } from 'react-bootstrap-icons';

export const TextCard = ({title, date, content, onClickTrash, onClick}) => {

    const [isCardHovered, setIsCardHovered] = useState(false);
    const [isTrashHovered, setIsTrashHovered] = useState(false);

    return (
        <div 
            onClick={onClick}
            className={`card ${style.container}`}
            onMouseEnter={() => setIsCardHovered(true)}
            onMouseLeave={() => setIsCardHovered(false)}
            style={{ borderColor: isCardHovered ? '#0d6efd'  : 'transparent'}}
        >
            <div className="card-body">
                <div className={style.title_row}>
                    <h5 className="card-title">{title}</h5>
                    {isCardHovered ? 
                        <TrashIcon 
                            onClick={(event) => {
                                event.stopPropagation();
                                onClickTrash();
                            }}
                            className={style.trash_icon}
                            onMouseEnter={() => setIsTrashHovered(true)}
                            onMouseLeave={() => setIsTrashHovered(false)} 
                            style={{ color: isTrashHovered ? '#FF7373'  : '#b8b8b8'}}
                        /> : null}
                </div>
                <h6 className="card-subtitle mb-2 text-muted">{date}</h6>
                <p className={`card-text ${style.text_content}`}>{content}</p>
            </div>
        </div>
    )
};