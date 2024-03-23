import { Text } from 'components';
import { RiDeleteBinLine, RiEdit2Line } from 'react-icons/ri';
import style from './Todo.module.css';
import { useDispatch } from 'react-redux';
import {deleteTodo, addCurrentTodo} from "../../reduxTodo/todosSlice";

export const Todo = ({id, text, counter }) => {
const dispatch = useDispatch()
const handleDelete=()=>{dispatch(deleteTodo(id))}
  return (
     <div className={style.box}>
     <Text textAlign="center" marginBottom="20">
       TODO # {counter}
     </Text>
 
     <Text>{text}</Text>
     <button className={style.deleteButton} onClick={handleDelete} type="button">
       <RiDeleteBinLine size={24} />
     </button>
     <button className={style.editButton} onClick={()=>dispatch(addCurrentTodo({id, text}))} type="button">
       <RiEdit2Line size={24} />
     </button>
   </div>
  );
};
