import React, { useState, useRef } from 'react';
import { v4 } from 'uuid';

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

  // deleting tasks

  const handleDelete = (id) => {
    const deleteToDo = setAdd.filter((e) => (e.key = { v4 }));
    setAdd([...deleteToDo]);
  };
  return (
    <React.Fragment>
      <div className='center'>
        <form onSubmit={click}>
          <h1 className='header text-center'>To Do List</h1>
          <div className='center mb-4 '>
            <p className='text-white mb-3'>Enter Task Below</p>
            <input ref={inRef} type='text' className='mb-3' />
            <button type='submit' className='button'>
              Add Tasks
            </button>
          </div>
        </form>
        <div className='center'>
          <h2 className='header'>Tasks</h2>
          {add.map((adds) => (
            <li
              className='text-white text-base mb-12 font-bold list-none'
              key={v4()}
            >
              {adds}
              <button
                onClick={() => handleDelete()}
                className='button ml-5 mr-5'
              >
                Delete
              </button>
            </li>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default ToDoListForm;
