import React from 'react';

const Form = ({ inRef, click }) => {
  return (
    <div>
      {' '}
      <form onSubmit={click}>
        <h1 className='text-white text-3xl font-bold mb-14 mt-5 text-center'>
          To Do List
        </h1>
        <div className='flex flex-col items-center justify-center mb-4 '>
          <p className='text-white mb-3 font-mono font-bold'>
            Enter Task Below
          </p>
          <input ref={inRef} type='text' className='mb-3 rounded-md' />
          <button
            type='submit'
            className='text-white bg-purple-900 p-2 border-2 border-white rounded-md font-bold'
          >
            Add Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
