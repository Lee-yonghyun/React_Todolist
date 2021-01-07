import React, { Component } from "react";
import Todotemp from "./components/Todotemp";
import Form from "./components/Form";
import TodoItemList from "./components/TodoItemList";

class App extends Component {
  id = 3;

  state = {
    input: "",
    todos: [
      { id: 0, text: "리액트", checked: false },
      { id: 1, text: "리액트", checked: true },
      { id: 2, text: "리액트", checked: false },
    ],
  };
  render() {
    return (
      <Todotemp form={<Form />}>
        <TodoItemList />
      </Todotemp>
    );
  }
}

export default App;
