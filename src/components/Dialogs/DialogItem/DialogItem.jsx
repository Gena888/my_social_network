import React from 'react';
import s from './DialogItem.module.css'
import { NavLink } from 'react-router-dom';



const DialogItem = (props) => {
    return (
        <div className={s.dialog + ' ' + s.active}>
            <div className={s.avaImg}>
                <img  src={props.imgSrc} alt="avatar" />
            </div>

            <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
            {/* jsx элемент принимает данные для отрисовки из props, которые туда попали из массива данных через .map */}
        </div>
    );
}

export default DialogItem;