import React, { useState } from 'react';
import ToDoList from './To-Do-List/ToDoList';
import ToDoListForm from './To-Do-List/ToDoListForm';

function App() {
  const [toDo, UpdateToDo] = useState([]);

  const contact = (e) => {
    UpdateToDo([...e, e]);
  };
  return (
    <React.Fragment>
      <ToDoListForm contact={contact} />
      <ToDoList toDo={toDo} />
    </React.Fragment>
  );
}

export default App;
