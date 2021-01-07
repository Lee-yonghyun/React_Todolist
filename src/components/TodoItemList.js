import React, { Component } from "react";
import TodoItem from "./TodoItem";

class TodoItemList extends Component {
  render() {
    const { todos, onToggle, onRemove } = this.props;

    return (
      <div>
        <TodoItem text="리액트로 만든" />
        <TodoItem text="첫번째" />
        <TodoItem text="Todolist" />
      </div>
    );
  }
}

export default TodoItemList;
