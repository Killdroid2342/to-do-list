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
      <div className='border-2 border-purple-900 flex flex-col items-center justify-center '>
        <form onSubmit={click}>
          <h1 className='text-white ml-14'>To Do List</h1>
          <input ref={inRef} type='text'></input>
          <button type='submit' className='ml-10 text-white bg-purple-900 p-2'>
            Add Tasks
          </button>
        </form>
        <h2 className=''>Tasks</h2>
        {add.map((adds) => (
          <li>{adds}</li>
        ))}
      </div>
    </React.Fragment>
  );
};

export default ToDoListForm;
