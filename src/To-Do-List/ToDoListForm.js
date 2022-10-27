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
  return <div></div>;
};

export default ToDoListForm;
