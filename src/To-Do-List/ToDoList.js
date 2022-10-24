import React, { useState } from 'react';

const ToDoList = (props) => {
  const [input, setInput] = useState('');

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });
    setInput('');
  };

  return (
    <React.Fragment>
      <h1 className='center mt-4 text-4xl	font-bold text-white mb-8'>
        To Do List
      </h1>
      <div className='center'>
        <div className='border-2 border-purple-900 w-96 max-h-screen rounded-lg'>
          <h2 className='header'>Add List</h2>
          <form className='mb-10 mt-10' onSubmit={handleSubmit}>
            <label className='text-white mr-5 ml-5'>Add Task</label>
            <input
              className='rounded-lg'
              type='text'
              value={input}
              onChange={handleChange}
            />
          </form>
          <div className='center flex-col'>
            <button className='btn mb-4 '>Add To List</button>
            <button className='btn'>Remove To List</button>
          </div>
          <div className='border-2 border-purple-900 h-96 rounded-lg mt-5'>
            <h2 className='header'>List</h2>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ToDoList;
