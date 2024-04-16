
import React, { useContext } from "react";
import { TodoContext } from "./TodoContext";

const TodoList = ({ toggleModal }) => {
  const { todos, deleteTodo } = useContext(TodoContext);

  const handleDelete = (id) => {
    deleteTodo(id);
  };

  return (
    <ul>
      {todos.map((t) => (
        <li key={t.id}>
          {t.text}
          <button onClick={() => toggleModal(t)}>Edit</button>
          <button onClick={() => handleDelete(t.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
