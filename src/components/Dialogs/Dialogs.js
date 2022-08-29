import React from 'react';
import css from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

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