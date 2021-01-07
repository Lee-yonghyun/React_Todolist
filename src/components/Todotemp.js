import React from "react";
import "./Todotemp.css";

const Todotemp = ({ form, children }) => {
  return (
    <main className="todo-template">
      <div className="title">오늘 할일</div>
      <section className="form-wrap">{form}</section>
      <section className="todos-wrap">{children}</section>
    </main>
  );
};

export default Todotemp;
