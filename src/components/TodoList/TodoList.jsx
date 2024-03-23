import { Text, Grid, GridItem, Todo } from 'components';
import { useSelector } from 'react-redux';
import { selectTodo } from "../../reduxTodo/todosSlice";

export const TodoList = () => {

  const todos = useSelector(selectTodo);  
  
  return (
    <>
    { !todos.length ? ( <Text textAlign="center">We did not find any todo😯</Text>) : 
    <Grid>
      { todos.map(({id, text}, index) => (
         <GridItem key={id}>
         <Todo text={text} counter={index + 1} id={id}/>

         
         </GridItem>

      )  )}
    </Grid>
    }
     
    </>
  );
};
