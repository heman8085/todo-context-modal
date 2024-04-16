
import React, { useContext, useState, useEffect } from "react";
import { TodoContext } from "./TodoContext";

const TodoForm = ({ closeModal, todoToEdit }) => {
  const { addTodo, editTodo } = useContext(TodoContext);
  const [todo, setTodo] = useState("");

  useEffect(() => {
    if (todoToEdit) {
      setTodo(todoToEdit.text);
    }
  }, [todoToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!todo.trim()) return;
    if (todoToEdit) {
      editTodo(todoToEdit.id, todo);
    } else {
      addTodo({
        id: Math.random(),
        text: todo,
      });
    }
    setTodo("");
    closeModal();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Enter todo"
      />
      <button type="submit">{todoToEdit ? "Update Todo" : "Add Todo"}</button>
    </form>
  );
};

export default TodoForm;
