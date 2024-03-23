import { RiSaveLine } from 'react-icons/ri';
import { MdOutlineCancel } from 'react-icons/md';
import { useSelector } from 'react-redux';
import style from './EditForm.module.css';
import { useDispatch } from 'react-redux';
import { selectCurrentTodo, updateTodo } from '../../reduxTodo/todosSlice';

export const EditForm = () => {
  const dispatch=useDispatch()
  const currentTodo=useSelector(selectCurrentTodo)
  const handleSubmit=(e)=>{
    e.preventDefault()
    const{value}=e.target.elements.text
    dispatch(updateTodo(value))
  }
  return (
    <form onSubmit={handleSubmit} className={style.form}>
      <input
        className={style.input}
        placeholder="What do you want to write?"
        name="text"
        required
        defaultValue={currentTodo.text}
        autoFocus
      />
      <button className={style.submitButton} type="submit">
        <RiSaveLine color="green" size="16px" />
      </button>

      <button className={style.editButton} onClick={()=>(dispatch(updateTodo(null)))}  type="button">
        <MdOutlineCancel color="red" size="16px" />
      </button>
    </form>
  );
};
