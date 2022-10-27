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
      </form>
    </React.Fragment>
  );
};

export default ToDoListForm;
