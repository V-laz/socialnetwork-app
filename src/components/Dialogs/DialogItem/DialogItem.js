import React from 'react';
import css from './DialogItem.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;
  return (
    <div className={css.dialogName}>
      <NavLink to={path} className={dialogData => dialogData.isActive ? css.active : css.dialog}>{props.name}</NavLink>

    </div>
  )
}


export default DialogItem;