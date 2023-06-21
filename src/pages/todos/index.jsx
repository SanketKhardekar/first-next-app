//Server Side Rendering

import { Card, CardWrapper } from "@/components/Card";
import LayoutWrapper from "@/Layouts";

const Todos = ({ todos }) => {
  return (
    <LayoutWrapper>
      <>
        <h1>List of Todos</h1>
        <CardWrapper>
          {todos?.map((todo) => (
            <Card key={todo?.id}>
              <h3>Task: {todo?.title}</h3>
              <h4>Completed : {todo?.completed ? "Done" : "Incomplete"}</h4>
            </Card>
          )) ?? null}
        </CardWrapper>
      </>
    </LayoutWrapper>
  );
};

export default Todos;

// This gets called on every request
export async function getServerSideProps() {
  console.log("getServerSideProps");
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await response.json();
  return {
    props: {
      todos: data,
    },
  };
}
