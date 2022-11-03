import React from 'react';
import css from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {


  let state= props.dialogPage;

  let dialogsElements = state.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />);
  let messagesElement = state.messages.map(message => <Message message={message.message} />);
  let newMessageBody = state.newMessageBody;

  let onSendMessageClisk = () => {
    props.sendMessage();
    //props.store.dispatch(sendMessageCreator())
  }

  let onNewMesageChange = (e) => {
    let body = e.target.value;
    props.updateNewMessageBody(body);
    //props.store.dispatch(updateNewMessageBodyCreator(body));
  }

  return (
    <div className={css.dialogs}>
      <div className={css.dialogsItems}>
        <div>{dialogsElements}</div>
      </div>
      <div className={css.messages}>
        <div>{messagesElement}</div>
        <div>
          <div>
            <textarea value={newMessageBody}
              onChange={onNewMesageChange}
              placeholder='Enter your message'></textarea>
          </div>
          <div>
            <button onClick={onSendMessageClisk}>Send</button>
          </div>
        </div>
      </div>
    </div>

  );
}

export default Dialogs;