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
  return (
    <div className={css.dialogs}>
      <div className={css.dialogsItems}>

        <DialogItem name="Gyver" id="1" />
        <DialogItem name="Lara" id="2" />
        <DialogItem name="Alex" id="33" />
      </div>
      <div className={css.messages}>
        <Message message="hi" />
        <Message message="hello" />
        <Message message="halahula" />
      </div>
    </div>

  );
}

export default Dialogs;