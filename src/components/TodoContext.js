
import React, { createContext, useState} from "react";
const TodoContext = createContext();

const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);


  const addTodo = (t) => {
    setTodos([...todos, t]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((t) => t.id !== id));
  };

  const editTodo = (id, newText) => {
    const updatedTodos = todos.map((t) =>
      t.id === id ? { ...t, text: newText } : t
    );
    setTodos(updatedTodos);
  };

  return (
    <TodoContext.Provider value={{ todos, addTodo, deleteTodo, editTodo }}>
      {children}
    </TodoContext.Provider>
  );
};

export { TodoProvider, TodoContext };
