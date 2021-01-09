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

  handleToggle = (id) => {
    const { todos } = this.state;

    // 파라미터id를 통해 현재 todo의 몇번째 인지를 확인.
    const index = todos.findIndex((todo) => todo.id === id);
    const selected = todos[index]; //선택한 todo 객체
    const nextTodos = [...todos]; // 전체 배열복사

    //기존의 값들을 복사하고 , checked 값을 덮어쓰기
    nextTodos[index] = {
      ...selected,
      checked: !selected.checked,
    }; //전체 배열에서 선택된 인자의 checked만 바꾸기.

    this.setState({
      todos: nextTodos,
    });
  };
  render() {
    const { input, todos } = this.state;
    const { handleChange, handleCreate, handleKeyPress, handleToggle } = this;

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
        <TodoItemList todos={todos} onToggle={handleToggle} />
      </Todotemp>
    );
  }
}

export default App;
