import { createSlice } from "@reduxjs/toolkit";

const initialState = { items: [], 
currentTodo:null };

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo(state, { payload }) {
      console.log(payload, "slice")
      state.items.push(payload);
    },
    deleteTodo(state, { payload }) {
      state.items = state.items.filter((item) => item.id !== payload);
    },
    addCurrentTodo(state, {payload}){
      state.currentTodo=payload
    },
  updateTodo(state, {payload}){
    state.items=state.items.map(item =>{
return item.id === state.currentTodo.id ? {text:payload, id:state.currentTodo.id

}:item
    
    })
    state.currentTodo=null
  }
  },
});



export const { addTodo, deleteTodo, addCurrentTodo, updateTodo } = todosSlice.actions;

export const todosReducer = todosSlice.reducer;

export const selectTodo = (state) => state.todos.items;
export const selectCurrentTodo=(state)=> state.todos.currentTodo;