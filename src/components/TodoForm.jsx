import React, { useState } from "react";

function TodoForm({ addTodo }) {
  const [text, setText] = useState("");
  const [priority, setPriority] = useState("Medium");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;

    addTodo(text, priority);
    setText("");
    setPriority("Medium");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter a task..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
      >
        <option value="High">🔥 High</option>
        <option value="Medium">⚖️ Medium</option>
        <option value="Low">🌱 Low</option>
      </select>
      <button type="submit">Add</button>
    </form>
  );
}

export default TodoForm;
