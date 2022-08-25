import React from 'react';
import css from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
  return (
    <div className={css.dialog}>
    <NavLink to={"/dialogs/"+props.id}>{props.name}</NavLink>
  </div>
  )
}

const Dialogs = () => {
  return (
    <div className={css.dialogs}>
      <div className={css.dialogsItems}>

        <DialogItem name="Gyver" id="1"/>
        <DialogItem name="Lara" id="2"/>
        <DialogItem name="Alex" id="3"/>


      </div>
      <div className={css.messages}>
        <div className={css.message}>hello</div>
        <div className={css.message}>hello</div>
        <div className={css.message}>hello</div>
      </div>
    </div>

  );
}

export default Dialogs;