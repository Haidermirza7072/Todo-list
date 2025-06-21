import React from "react";
import TodoItem from "./TodoItem";

function TodoList({ todos, deleteTodo, toggleTodo, updateTodo }) {
  return (
    <div>
      {todos.map((todo, index) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          index={index}
          deleteTodo={deleteTodo}
          toggleTodo={toggleTodo}
          updateTodo={updateTodo}
        />
      ))}
    </div>
  );
}

export default TodoList;
