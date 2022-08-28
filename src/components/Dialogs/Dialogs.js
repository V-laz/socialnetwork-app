import React from 'react';
import css from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;
  return (
    <div className={css.dialog}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  )
}
const Message = (props) => {
  return (
    <div className={css.dialog}>{props.message}</div>
  )
}
const Dialogs = () => {
  let dialogs = [
    { id: 1, name: "Gyver" },
    { id: 2, name: "lara" },
    { id: 3, name: "Alex" }
  ]
  const messages = [
    { id: 1, message: "hi" },
    { id: 2, message: 'hello' },
    { id: 3, message: "Yo" }

  ]
  let dialogsElements = dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />)
  /* 
  dialogsElements = dialogData.map(dialog => <DialogItem name={dialogData[0].name} id={dialogData[0].id} />)
  [
     <DialogItem name={dialogData[0].name} id={dialogData[0].id} />,
     <DialogItem name={dialogData[1].name} id={dialogData[1].id} />,
     <DialogItem name={dialogData[2].name} id={dialogData[2].id} />,
   ]
   */
  let messagesElement = messages.map(message => <Message message={message.message} />)
  return (
    <div className={css.dialogs}>
      <div className={css.dialogsItems}>
        {dialogsElements}
      </div>
      <div className={css.messages}>
        {messagesElement}
      </div>
    </div>

  );
}

export default Dialogs;