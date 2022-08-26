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
  let dialogData= [
    {id:1, name:"Gyver"},
    {id:2, name:"lara"},
    {id:3, name:"Alex"}
  ]
  const messagesData = [
    {id:1, message:"hi"},
    {id:2, message:'hello'},
    {id:3, message:"Yo"}
    
  ]
  return (
    <div className={css.dialogs}>
      <div className={css.dialogsItems}>

        <DialogItem name={dialogData[0].name} id={dialogData[0].id} />
        <DialogItem name={dialogData[1].name} id={dialogData[1].id} />
        <DialogItem name={dialogData[2].name} id={dialogData[2].id} />
      </div>
      <div className={css.messages}>
        <Message message={messagesData[0].message}/>
        <Message message={messagesData[1].message}/>
        <Message message={messagesData[2].message}/>
      </div>
    </div>

  );
}

export default Dialogs;