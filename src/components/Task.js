import React from 'react';

const Task = ({ list, deleteItem }) => {
  return (
    <div className='flex flex-col items-center justify-center px-4 w-1/2'>
      <h2 className='text-white text-3xl font-bold mb-14 mt-5'>Tasks</h2>
      {list.map((item) => (
        <li
          className='text-white text-base mb-12 font-bold list-none'
          key={item.id}
        >
          {item.value}
          <button
            onClick={() => deleteItem(item)}
            className='text-white bg-purple-900 p-2 border-2 border-white rounded-md font-bold ml-5 mr-5'
          >
            Delete
          </button>
        </li>
      ))}
    </div>
  );
};

export default Task;
