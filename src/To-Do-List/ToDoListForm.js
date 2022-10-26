import React, { useState } from 'react';

const ToDoListForm = () => {
  const [testing, setTesting] = useState('');

  // console.log(testing);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { testing };
    // console.log('HELLO THIS IS A TEST');
    console.log(data);
  };

  return (
    <React.Fragment>
      <h1 className='center mt-4 text-4xl	font-bold text-white mb-8'>
        To Do List
      </h1>
      <div className='center'>
        <div className='border-2 border-purple-900 w-96 max-h-screen rounded-lg'>
          <h2 className='header'>Add List</h2>
          <form className='mb-10 mt-10'>
            <label className='text-white mr-5 ml-5'>Add Task</label>
            <input
              className='rounded-lg'
              type='text'
              value={testing}
              onChange={(e) => setTesting(e.target.value)}
            />
          </form>
          <div className='center flex-col'>
            <button className='btn mb-4' onClick={handleSubmit}>
              Add To List
            </button>
            <button className='btn'>Remove To List</button>
          </div>
          <div className='border-2 border-purple-900 h-96 rounded-lg mt-5'>
            <h2 className='header'>List</h2>
            <p className='center mt-4 text-1xl border-2 border-black bg-purple-900 font-bold text-white'>
              {testing}
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ToDoListForm;
