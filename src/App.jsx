import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearAllTodo } from "./slices/todoSlice"; 
import styles from "./css/app.module.css";
import InputForm from "./InputForm";
import PendingTaskMsg from "./PendingTaskMsg";
import EachItem from "./EachItem";

export default function App(){

  useEffect(()=>{
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
  }, []);

  const todos = useSelector(state => state.todos.todos);
  const dispatch = useDispatch();

  console.log ( todos );

  useEffect(()=>{
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className={styles.box}>
      <h2 className={styles.heading}>To-do list Tracker</h2>
      <InputForm />
      <PendingTaskMsg />
      {
        todos.map((eachTaskObj)=>(
          <EachItem key={eachTaskObj.id} id={eachTaskObj.id} message={eachTaskObj.message} isCompleted={eachTaskObj.isCompleted} />
        ))
      }
      <button className={styles.clearAll} onClick={()=>{dispatch(clearAllTodo())}}>Clear All</button>
    </div>
  );
}