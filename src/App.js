// App.js
import React, { useState } from "react";
import { TodoProvider } from "./components/TodoContext";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import Modal from "./components/Modal";

const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [todoToEdit, setTodoToEdit] = useState(null);

  const toggleModal = (t = null) => {
    setTodoToEdit(t);
    setShowModal(!showModal);
  };

  return (
    <TodoProvider>
      <div className="App">
        <h1>Todo List</h1>
        <button onClick={() => toggleModal()}>Add Todo</button>
        {showModal && (
          <Modal>
            <TodoForm closeModal={toggleModal} todoToEdit={todoToEdit} />
            <button onClick={() => toggleModal()}>Close</button>
          </Modal>
        )}
        <TodoList toggleModal={toggleModal} />
      </div>
    </TodoProvider>
  );
};

export default App;
