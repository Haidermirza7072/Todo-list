import React, { useState, useEffect } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);
  const [darkMode, setDarkMode] = useState(false);
  const [filter, setFilter] = useState("All");

  // Load theme from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setDarkMode(true);
    }
  }, []);

  // Save theme to localStorage
  useEffect(() => {
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  // Load tasks from localStorage
  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem("todos"));
    if (savedTodos) setTodos(savedTodos);
  }, []);

  // Save tasks to localStorage
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text, priority) => {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false,
      priority,
    };
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const clearAllTodos = () => {
    const confirmClear = window.confirm("Are you sure you want to clear all tasks?");
    if (confirmClear) {
      setTodos([]);
    }
  };

  const updateTodo = (id, newText) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, text: newText } : todo
      )
    );
  };

  // Filter logic
  const filteredTodos = todos.filter((todo) => {
    if (filter === "Active") return !todo.completed;
    if (filter === "Completed") return todo.completed;
    return true;
  });

  return (
    <div className={`app ${darkMode ? "dark" : ""}`}>
      <div className="top-bar">
        <h1>📝 To-Do List</h1>
        <button onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>
      </div>

      {/* Filter Buttons */}
      <div className="filter-buttons">
        <button onClick={() => setFilter("All")} className={filter === "All" ? "active" : ""}>All</button>
        <button onClick={() => setFilter("Active")} className={filter === "Active" ? "active" : ""}>Active</button>
        <button onClick={() => setFilter("Completed")} className={filter === "Completed" ? "active" : ""}>Completed</button>
      </div>

      <TodoForm addTodo={addTodo} />
      <TodoList
        todos={filteredTodos}
        deleteTodo={deleteTodo}
        toggleTodo={toggleTodo}
        updateTodo={updateTodo}
      />
      {todos.length > 0 && (
        <button className="clear-button" onClick={clearAllTodos}>
          🧹 Clear All Tasks
        </button>
      )}
    </div>
  );
}

export default App;