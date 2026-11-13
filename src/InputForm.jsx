import { useState } from "react";
import { addTodo } from "./slices/todoSlice";
import { useDispatch } from "react-redux";
import styles from "./css/inputForm.module.css";

export default function InputForm(){

  let [newTask, setNewTask] = useState("");
  let [holderUp, setHolderUp] = useState ( false );
  let [showOutline, setShowOutline] = useState ( false );

  const dispatch = useDispatch();

  function addNewTask(e){
    e.preventDefault();
    if ( newTask === "" ) return;
    let id = Date.now(), message = newTask, isCompleted = false;
    let newObj = {id, message, isCompleted};
    dispatch(addTodo(newObj));
    setNewTask("");
  }

  return (
    <form onSubmit={addNewTask} className={styles.form}>
      <input type="text" name="newTodo" id="newTodo" className={`${styles.inputField} ${(showOutline) ? styles.inputFieldOutline : null}`} value={newTask} onChange={(e)=>setNewTask(e.target.value)} onFocus={()=>{setHolderUp(true); setShowOutline(true);}} onBlur={()=>{if(newTask === ""){setHolderUp(false);} setShowOutline(false);}} autoComplete="off" />
      <p className={`${styles.placeHolderPara} ${holderUp ? styles.holderUp : styles.holderDown}`}>Type New Task</p>
      <button type="submit" className={styles.addBtn}>Add</button>
    </form>
  )
}