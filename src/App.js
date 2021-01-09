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
      { id: 2, text: "리액트", checked: true },
    ],
  };

  handleChange = (e) => {
    this.setState({
      input: e.target.value,
    });
  };

  handleCreate = () => {
    const { input, todos } = this.state;
    this.setState({
      input: "",
      todos: todos.concat({
        id: this.id++,
        text: input,
        checked: false,
      }),
    });
  };

  handleKeyPress = (e) => {
    if (e.key === "Enter") {
      this.handleCreate();
    }
  };

  render() {
    const { input, todos } = this.state;
    const { handleChange, handleCreate, handleKeyPress } = this;

    return (
      <Todotemp
        form={
          <Form
            value={input}
            onKeyPress={handleKeyPress}
            onChange={handleChange}
            onCreate={handleCreate}
          />
        }
      >
        <TodoItemList todos={todos} />
      </Todotemp>
    );
  }
}

export default App;
