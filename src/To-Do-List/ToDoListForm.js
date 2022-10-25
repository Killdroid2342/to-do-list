import React, { useState } from 'react';

const ToDoListForm = ({ addContact }) => {
  const [info, setInfo] = useState({
    name: '',
  });

  const change = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };

  const submit = (e) => {
    e.preventDefault();
    addContact(info);
  };

  return (
    <React.Fragment>
      <h1 className='center mt-4 text-4xl	font-bold text-white mb-8'>
        To Do List
      </h1>
      <div className='center'>
        <div className='border-2 border-purple-900 w-96 max-h-screen rounded-lg'>
          <h2 className='header'>Add List</h2>
          <form className='mb-10 mt-10' onChange={submit}>
            <label className='text-white mr-5 ml-5'>Add Task</label>
            <input
              className='rounded-lg'
              type='text'
              onChange={change}
              value={info.name}
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

export default ToDoListForm;
