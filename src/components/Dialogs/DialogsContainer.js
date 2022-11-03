import React from 'react';
import Dialogs from './Dialogs';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialog-reducer';

const DialogsContainer = (props) => {
  let state = props.store.getState().dialogPage;

  let onSendMessageClisk = () => {
    props.store.dispatch(sendMessageCreator())
  }

  let onNewMesageChange = (body) => {  
    props.store.dispatch(updateNewMessageBodyCreator(body));
  }

  return (
   <Dialogs updateNewMessageBody={onNewMesageChange} sendMessage={onSendMessageClisk} dialogPage={state}/>

  );
}

export default DialogsContainer;