import { useState, useRef } from "react";
import { deleteTodo, saveTodo, toggleTodo } from "./slices/todoSlice";
import { useDispatch } from "react-redux";
import styles from "./css/eachItem.module.css";

export default function EachItem({id, message, isCompleted}){

  console.log ( "New Render ...", id, message, isCompleted );

  let [currText, setCurrText] = useState ( message );
  let [isEditing, setIsEditing] = useState ( false );
  let inputFieldRef = useRef(null);

  const dispatch = useDispatch();

  function handleSave(){
    setIsEditing(false);
    dispatch(saveTodo({id: id, message: currText}));
  }
  function handleEdit(){
    setIsEditing(true);
    inputFieldRef.current.focus();
  }

  return (
    <div className={styles.eachLine}>
      <button onClick={()=>dispatch(toggleTodo(id))} className={styles.toggleBtn}>
        <div className={`${styles.svgDiv} ${isCompleted ? styles.showTick : styles.showClock}`}>
          <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
            <path d="M20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10Z" fill="#53654D"/>
            <path d="M17.5676 6.56668L8.83762 16.349L2.6 10.7823L4.59751 8.54406L8.59685 12.1132L15.3294 4.56917L17.5676 6.56668Z" fill="#2BFF00"/>
          </svg>
          <svg width="17" height="17" viewBox="0 0 512 512">
            <g>
              <path d="M400,496h-8v-71.38c0-17.938-5.456-35.201-15.777-49.923l-82.552-117.75l82.569-118.693C386.55,123.432,392,106.055,392,88
                V16h8c4.418,0,8-3.582,8-8s-3.582-8-8-8H112c-4.418,0-8,3.582-8,8s3.582,8,8,8h8v72c0,18.055,5.45,35.432,15.76,50.253
                l82.569,118.693l-82.552,117.75C125.456,389.419,120,406.682,120,424.62V496h-8c-4.418,0-8,3.582-8,8s3.582,8,8,8h288
                c4.418,0,8-3.582,8-8S404.418,496,400,496z M136,424.62c0-14.634,4.453-28.722,12.878-40.739l85.76-122.324
                c1.926-2.748,1.933-6.406,0.017-9.161l-85.76-123.28C140.459,116.99,136,102.772,136,88V16h240v72
                c0,14.772-4.459,28.99-12.895,41.117l-85.76,123.28c-1.917,2.755-1.91,6.413,0.017,9.161l85.76,122.324
                C371.547,395.898,376,409.986,376,424.62V496H136V424.62z" fill="yellow"/>
              <path d="M304.005,464h-16.001c-4.418,0-8,3.582-8,8s3.582,8,8,8h16.001c4.418,0,8-3.582,8-8S308.424,464,304.005,464z" fill="#ffaa00"/>
              <path d="M256,249.314c2.755,0,5.307-1.417,6.766-3.731c1.774-2.668,34.496-49.8,56.188-81.018c1.699-2.445,1.899-5.632,0.52-8.271
                S315.363,152,312.385,152h-112.77c-2.978,0-5.709,1.654-7.089,4.293s-1.18,5.826,0.52,8.271
                c21.693,31.218,54.415,78.35,56.188,81.018C250.693,247.897,253.245,249.314,256,249.314z M297.085,168
                c-22.897,32.959-34.837,50.177-41.085,59.214c-6.248-9.037-18.188-26.255-41.085-59.214H297.085z" fill="white"/>
              <path d="M312.401,339.408c-1.497-2.136-3.942-3.408-6.55-3.408h-99.702c-2.608,0-5.053,1.271-6.55,3.408l-37.62,53.659
                C155.451,402.378,152,413.29,152,424.62V472c0,4.418,3.582,8,8,8h96.003c4.418,0,8-3.582,8-8s-3.582-8-8-8H168v-39.38
                c0-8.027,2.448-15.762,7.08-22.369L210.311,352h91.379l35.23,50.251c4.632,6.607,7.081,14.342,7.081,22.369V464h-8
                c-4.418,0-8,3.582-8,8s3.582,8,8,8h16c4.418,0,8-3.582,8-8v-47.38c0-11.331-3.451-22.242-9.979-31.554L312.401,339.408z" fill="white"/>
              <path d="M330.077,134.568c1.392,0.968,2.984,1.433,4.562,1.433c2.53,0,5.02-1.197,6.574-3.432l8.758-12.59
                C356.532,110.548,360,99.489,360,88v-8c0-4.418-3.582-8-8-8s-8,3.582-8,8v8c0,8.207-2.477,16.105-7.164,22.843l-8.758,12.59
                C325.555,127.06,326.45,132.045,330.077,134.568z" fill="#d8cf6e"/>
              <path d="M352,56c4.418,0,8-3.582,8-8v-8c0-4.418-3.582-8-8-8s-8,3.582-8,8v8C344,52.418,347.582,56,352,56z" fill="yellow"/>
            </g>
          </svg>
        </div>
      </button>
      <input type="text" className={`${styles.inputField} ${isCompleted ? styles.completedTaskLineThrough : null}`} ref={inputFieldRef} value={currText} onChange={(e)=>setCurrText(e.target.value)} readOnly={isEditing ? false : true} />
      {isEditing && <button className={styles.editSaveBtn} onClick={handleSave}>
        <svg width="35px" height="35px" viewBox="0 0 100 100" style={{position: "relative", top: "2px"}}>
          <path style={{fill:"#90B1DE", stroke:"#2C3D60", strokeWidth:"1.5px"}} d="M 3,88 3,7 C 3,4 4,3 7,3 l 86,0 c 3,0 4,2 4,5 l 0,85 c 0,2 0,4 -4,4 l -81,0 z"/>
          <path style={{fill:"#4E7EC2"}} d="m 6,6 0,81 7,7 81,0 0,-88 z"/>
          <path style={{fill:"#999999", stroke:"#555555", strokeWidth:"2px"}} d="M 28 62 C 24 62 24 64 24 66 L 24 97 L 76 97 L 76 66 C 76 64 75 62 72 62 L 28 62 z M 38 66 C 45 66 44 69 44 69 L 44 87 C 44 87 45 90 38 90 C 32 90 33 87 33 87 L 33 69 C 33 69 32 66 38 66 z "/>
          <rect style={{fill:"#ff0000", fillOpacity:"0.7", width:"66", height:"10", x:"17", y:"4"}}/>
          <rect style={{fill:"#eeeeee", width:"66", height:"42", x:"17", y:"14"}}/>
          <rect style={{fill:"#2C3D60", width:"6", height:"6", x:"8", y:"9"}}/>
          <path style={{fill:"none", stroke:"#bbbbbb", strokeWidth:"2px"}} d="m 21,47 58,0 M 21,35 79,35 M 21,24 79,24"/>
        </svg>
      </button>}
      {!isEditing && <button className={styles.editSaveBtn} onClick={handleEdit}><svg width="35px" height="35px" viewBox="0 0 36 36"><path fill="#D99E82" d="M35.222 33.598c-.647-2.101-1.705-6.059-2.325-7.566c-.501-1.216-.969-2.438-1.544-3.014c-.575-.575-1.553-.53-2.143.058c0 0-2.469 1.675-3.354 2.783c-1.108.882-2.785 3.357-2.785 3.357c-.59.59-.635 1.567-.06 2.143c.576.575 1.798 1.043 3.015 1.544c1.506.62 5.465 1.676 7.566 2.325c.359.11 1.74-1.271 1.63-1.63z"></path><path fill="#EA596E" d="M13.643 5.308a2.946 2.946 0 0 1 0 4.167l-4.167 4.168a2.948 2.948 0 0 1-4.167 0L1.141 9.475a2.948 2.948 0 0 1 0-4.167l4.167-4.167a2.946 2.946 0 0 1 4.167 0l4.168 4.167z"></path><path fill="#FFCC4D" d="M31.353 23.018l-4.17 4.17l-4.163 4.165L7.392 15.726l8.335-8.334l15.626 15.626z"></path><path fill="#292F33" d="M32.078 34.763s2.709 1.489 3.441.757c.732-.732-.765-3.435-.765-3.435s-2.566.048-2.676 2.678z"></path><path fill="#0c8de9" d="M2.183 10.517l8.335-8.335l5.208 5.209l-8.334 8.335z"></path><path fill="#99AAB5" d="M3.225 11.558l8.334-8.334l1.042 1.042L4.267 12.6zm2.083 2.086l8.335-8.335l1.042 1.042l-8.335 8.334z"></path></svg></button>}
      <button onClick={()=>dispatch(deleteTodo(id))} className={styles.clearBtn}>
        <svg width="25" height="25" viewBox="0 0 19555 19555" fill="none">
          <path d="M16624.2 146.447C16819.4 -48.8154 17136 -48.8154 17331.3 146.447L19408.2 2223.34C19603.4 2418.6 19603.4 2735.18 19408.2 2930.45L12561.3 9777.31L19408.2 16624.2C19603.5 16819.5 19603.5 17136.1 19408.2 17331.3L17331.3 19408.2C17136.1 19603.5 16819.5 19603.5 16624.2 19408.2L9777.31 12561.3L2930.45 19408.2C2735.18 19603.4 2418.6 19603.4 2223.34 19408.2L146.446 17331.3C-48.8158 17136 -48.8156 16819.4 146.446 16624.2L6993.31 9777.31L146.478 2930.48C-48.7846 2735.21 -48.7846 2418.63 146.478 2223.37L2223.37 146.477C2418.63 -48.7851 2735.22 -48.7851 2930.48 146.477L9777.31 6993.31L16624.2 146.447Z" fill="#FF0000"/>
        </svg>
        </button>
    </div>
  );
}