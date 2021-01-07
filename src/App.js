import React from "react";
import Todotemp from "./components/Todotemp";
import Form from "./components/Form";
import TodoItemList from "./components/TodoItemList";

const App = () => {
  return (
    <Todotemp form={<Form />}>
      <TodoItemList />
    </Todotemp>
  );
};

export default App;
