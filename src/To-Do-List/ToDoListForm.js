import React, { useState, useRef } from 'react';

const ToDoListForm = () => {
  const inRef = useRef();
  const [add, setAdd] = useState([]);

  const click = (e) => {
    e.preventDefault();

    const val = inRef.current.value;
    if (val === '') return;
    setAdd((pre) => {
      return [...pre, val];
    });

    inRef.current.value = '';
  };
  return (
    <React.Fragment>
      <form onSubmit={click}>
        add: <input ref={inRef} type='text'></input>
        <button type='submit'>Add Tasks</button>
      </form>
      <h2>Tasks</h2>
      {add.map((adds) => (
        <div>{adds}</div>
      ))}
    </React.Fragment>
  );
};

export default ToDoListForm;
