import React, { useRef, useState } from 'react';

const ToDoListForm = () => {
  const [list, setList] = useState([]);
  const inputRef = useRef();

  function test(e) {
    e.preventDefault();

    const value = inputRef.current.value;
    if (value === '') return;
    setList((prev) => {
      return [...prev, value];
    });

    inputRef.current.value = '';
  }
  return (
    <React.Fragment>
      <h1 className='center mt-4 text-4xl	font-bold text-white mb-8'>
        To Do List
      </h1>
      <div className='center' id='20'>
        <div className='border-2 border-purple-900 w-96 max-h-screen rounded-lg'>
          <h2 className='header'>Add List</h2>
          <form className='mb-10 mt-10' test={test}>
            <button className='text-white mr-5 ml-5' type='submit'>
              Add Task
            </button>
            <input className='rounded-lg' type='text' ref={inputRef} />
          </form>
          <div className='center flex-col'>
            <button className='btn mb-4'>Add To List</button>
            <button className='btn'>Remove To List</button>
          </div>
          <div className='border-2 border-purple-900 h-96 rounded-lg mt-5'>
            <h2 className='header'>List</h2>
            {list.map((item) => (
              <div>{item}</div>
            ))}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ToDoListForm;
