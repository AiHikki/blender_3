import { Section, Container, Header, Text, Form, TodoList, EditForm } from "components";
import { useSelector } from "react-redux";
import { selectCurrentTodo, selectTodo } from "./reduxTodo/todosSlice";

export const App = () => {
  const todos = useSelector(selectTodo);
  const isEdit= useSelector(selectCurrentTodo);
  return (
    <>
      <Header />
      <Section>
        <Container>
          {!isEdit ? <Form/>:<EditForm/> }
          {todos.length === 0 ? (
            <Text textAlign="center">Create your first todo😉</Text>
          ):( <TodoList />) }
         
        </Container>
      </Section>
    </>
  );
};
