import React from 'react';

const ToDoList = () => {
  return (
    <div className='center'>
      <div className='border-2 border-purple-900 w-96 h-96 rounded-lg'>
        <h1 className='text-center mt-4 text-xl font-bold text-white'>
          To Do List
        </h1>
        <form className='mb-10 mt-10'>
          <label className='text-white mr-5 ml-5'>Add Task</label>
          <input className='rounded-lg' type='text' />
        </form>
        <div className='center flex-col'>
          <button className='btn mb-4 '>Add To List</button>
          <button className='btn'>Remove To List</button>
        </div>
      </div>
    </div>
  );
};

export default ToDoList;
