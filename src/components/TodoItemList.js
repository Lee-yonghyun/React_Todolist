import React, { Component } from "react";
import TodoItem from "./TodoItem";

class TodoItemList extends Component {
  render() {
    const { todos, onToggle, onRemove } = this.props;

    const todoList = todos.map(({ id, text, checked }) => (
      <TodoItem
        id={id}
        text={text}
        checked={checked}
        onToggle={onToggle}
        onRemove={onRemove}
        key={id}
      />
    ));
    // const todoList = todos.map((todo) => (
    //   <TodoItem
    //     {...todo}
    //     onToggle={onToggle}
    //     onRemove={onRemove}
    //     key={todo.id}
    //   />
    // ));

    return (
      <div>
        {/* <TodoItem text="리액트로 만든" />
        <TodoItem text="첫번째" />
        <TodoItem text="Todolist" /> */}
        {todoList}
      </div>
    );
  }
}

export default TodoItemList;
