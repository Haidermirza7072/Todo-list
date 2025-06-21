import React from "react";
import TodoItem from "./TodoItem";

function TodoList({ todos, deleteTodo, toggleTodo }) {
    return (
        <div>
            {todos.map((todo, index) => (
                <TodoItem
                    key={todo.id}
                    index={index}
                    todo={todo}
                    deleteTodo={deleteTodo}
                    toggleTodo={toggleTodo}
                />
            ))}

        </div>
    );
}

export default TodoList;
