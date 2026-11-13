import { useSelector } from "react-redux";
import styles from "./css/pendingTaskMsg.module.css";

export default function PendingTaskMsg(){

  const pendingTaskCount = useSelector(state => state.todos.todos.length);

  if ( pendingTaskCount === 0 ) return (<p className={styles.para}>Good Job !!! No pending task.</p>);
  else if ( pendingTaskCount === 1 ) return (<p className={styles.para}>1 pending task:</p>);
  return (<p className={styles.para}>{pendingTaskCount} pending tasks:</p>);
}