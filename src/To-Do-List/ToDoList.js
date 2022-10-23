import React from 'react';

const ToDoList = (props) => {
  return (
    <div className='flex items-center justify-center'>
      <div className='border-2 border-green-900 w-96 h-96 rounded-lg'>
        <h1 className='text-center mt-4 text-xl font-bold'>To Do List</h1>
        {/* Input goes here */}
        {/* Input goes here */}
        <div className='flex flex-col'>
          <button className='btn mb-4'>Add To List</button>
          <button className='btn'>Remove To List</button>
        </div>
      </div>
    </div>
  );
};

export default ToDoList;
