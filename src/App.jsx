import { Section, Container, Header, Text, Form, TodoList } from "components";
import { useSelector } from "react-redux";
import { selectTodo } from "./reduxTodo/todosSlice";

export const App = () => {
  const todos = useSelector(selectTodo);

  return (
    <>
      <Header />
      <Section>
        <Container>
          <Form />
          {todos.length === 0 && (
            <Text textAlign="center">Create your first todo😉</Text>
          )}
          <TodoList />
        </Container>
      </Section>
    </>
  );
};
