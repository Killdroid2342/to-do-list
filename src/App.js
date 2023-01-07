import React, { useState, useRef } from 'react';
import { v4 } from 'uuid';

function App() {
  const inRef = useRef();
  const [list, setList] = useState(
    // local storage.
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

  return (
    <React.Fragment>
      <div className='h-screen bg-grey-900'>
        <div className='flex flex-col items-center justify-center w-1/2 bg-purple-900 mx-auto border-2 border-white'>
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
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
