import { FiSearch } from "react-icons/fi";
import style from "./Form.module.css";
import { useState } from "react";
import { addTodo } from "reduxTodo/todosSlice";
import { nanoid } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

export const Form = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const todo = {
      id: nanoid(),
      text: value,
    };
    dispatch(addTodo(todo));
    setValue("");
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <button className={style.button} type="submit">
        <FiSearch size="16px" />
      </button>

      <input
        className={style.input}
        placeholder="What do you want to write?"
        name="search"
        onChange={handleChange}
        value={value}
        required
        autoFocus
      />
    </form>
  );
};
