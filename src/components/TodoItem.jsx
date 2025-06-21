import React from "react";

function TodoItem({ todo, deleteTodo, toggleTodo, index }) {
  return (
    <div className={`todo-item ${todo.completed ? "completed" : ""}`}>
      <span onClick={() => toggleTodo(todo.id)}>
        {index + 1}. {todo.text}
      </span>
      <button onClick={() => deleteTodo(todo.id)}>❌</button>
    </div>
  );
}

export default TodoItem;
