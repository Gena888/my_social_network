import React from 'react';
import s from './Dialogs.module.css'
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
            {/* jsx элемент принимает данные для отрисовки из props, которые туда попали из массива данных через .map */}
        </div>
    );
}

const Message = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    );
}

const Dialogs = (props) => {

    let dialogsData = [
        { id: 1, name: 'gena' },
        { id: 2, name: 'sasha' },
        { id: 3, name: 'dima' },
        { id: 4, name: 'pasha' },
        { id: 5, name: 'gleb' }
    ]

    let messagesData = [
        { id: 1, message: 'hi' },
        { id: 2, message: 'how are you' },
        { id: 3, message: 'yo' },
        { id: 4, message: 'yo' },
        { id: 5, message: 'yo' }
    ]

    // let dialogsArray = [
    //     <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />,
    //     <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />,
    //     <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />,
    //     <DialogItem name={dialogsData[3].name} id={dialogsData[3].id} />,
    //     <DialogItem name={dialogsData[4].name} id={dialogsData[4].id} />
    // ]



    // let messageArray = [
    //     <Message message={messagesData[0].message} />,
    //     <Message message={messagesData[1].message} />,
    //     <Message message={messagesData[2].message} />,
    //     <Message message={messagesData[3].message} />
    // ]

    let dialogsElements = dialogsData.map((dialogEl) => <DialogItem name={dialogEl.name} id={dialogEl.id} />)
    let messagesElements = messagesData.map((messageEl) => <Message message={messageEl.message} />)
    // создаём массив jsx элементов и передаём пропсам значения из свойств обьектов массива data
    // массив jsx элементов содержит набор jsx элементов, которые в свою очередь отрисовывают инфу на странице исходя из данных переданных в props

    return (
        <div className={s.dialogs}>

            <div className={s.dialogsItems}>
                {dialogsElements}
                {/* вставляем массив jsx элементов созданный ранее */}
            </div>

            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    );
}

export default Dialogs;