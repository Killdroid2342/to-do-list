import React, { useState, useRef } from 'react';
import { v4 } from 'uuid';

const ToDoListForm = () => {
  const inRef = useRef();
  const [list, setList] = useState(
    JSON.parse(localStorage.getItem('lists')) ?? []
  );

  document.title = `To Do List`;

  const click = (e) => {
    e.preventDefault();

    const val = inRef.current.value;
    if (val === '') return;
    const itemData = {
      id: v4(),
      value: val,
    };
    setList([...list, itemData]);
    localStorage.setItem('lists', JSON.stringify([...list, itemData]));
    inRef.current.value = '';
  };
  // deleting tasks

  const deleteItem = (item) => {
    // console.log(item);
    const newList = list.filter((currItem) => currItem !== item);
    setList(newList);
    localStorage.setItem('lists', JSON.stringify([...newList]));
  };
  // local storage.

  return (
    <React.Fragment>
      <div className='h-screen bg-grey-900'>
        <div className='center w-1/2 bg-purple-900 mx-auto border-2 border-white'>
          <form onSubmit={click}>
            <h1 className='header text-center'>To Do List</h1>
            <div className='center mb-4 '>
              <p className='text-white mb-3'>Enter Task Below</p>
              <input ref={inRef} type='text' className='mb-3 rounded-md' />
              <button type='submit' className='button'>
                Add Task
              </button>
            </div>
          </form>
          <div className='center px-4 w-1/2'>
            <h2 className='header'>Tasks</h2>
            {list.map((item) => (
              <li
                className='text-white text-base mb-12 font-bold list-none'
                key={item.id}
              >
                {item.value}
                <button
                  onClick={() => deleteItem(item)}
                  className='button ml-5 mr-5'
                >
                  Delete
                </button>
              </li>
            ))}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ToDoListForm;
