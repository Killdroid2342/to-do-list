import React, { useState, useRef } from 'react';

import useLocalStorage from './LocalStorage';

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
          <h1 className='header'>To Do List</h1>
          <div className='border-2 border-purple-900 flex flex-col items-center justify-center mb-4'>
            <p className='text-white mb-3'>Enter Task Below</p>
            <input ref={inRef} type='text' className='mb-3'></input>
            <button type='submit' className='text-white bg-purple-900 p-2'>
              Add Tasks
            </button>
          </div>
        </form>
        <div className='border-2 border-purple-900 flex flex-col items-center justify-center '>
          <h2 className='header'>Tasks</h2>
          {add.map((adds) => (
            <li
              className='text-white text-base mb-12 font-bold list-none'
              key={{ adds }}
            >
              {adds}
            </li>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default ToDoListForm;
