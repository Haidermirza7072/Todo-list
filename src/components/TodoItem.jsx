import React, { useState } from "react";

function TodoItem({ todo, deleteTodo, toggleTodo, index, updateTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(todo.text);

  const handleEdit = () => {
    if (isEditing && editedText.trim()) {
      updateTodo(todo.id, editedText.trim());
    }
    setIsEditing(!isEditing);
  };

  const getPriorityColor = () => {
    switch (todo.priority) {
      case "High": return "red";
      case "Medium": return "orange";
      case "Low": return "green";
      default: return "#888";
    }
  };

  return (
    <div className={`todo-item ${todo.completed ? "completed" : ""}`}>
      {isEditing ? (
        <input
          type="text"
          value={editedText}
          onChange={(e) => setEditedText(e.target.value)}
          autoFocus
        />
      ) : (
        <span onClick={() => toggleTodo(todo.id)}>
          {index + 1}. {todo.text}
        </span>
      )}
      {!isEditing && (
        <span
          className="priority"
          style={{ backgroundColor: getPriorityColor() }}
        >
          {todo.priority}
        </span>
      )}
      <button onClick={handleEdit}>{isEditing ? "✅" : "✏️"}</button>
      {!isEditing && <button onClick={() => deleteTodo(todo.id)}>❌</button>}
    </div>
  );
}

export default TodoItem;
