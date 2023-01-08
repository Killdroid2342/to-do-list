import React, { useState, useRef } from 'react';
import { v4 } from 'uuid';
import Form from './components/Form';
import Task from './components/Task';

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
    <>
      <div className='h-screen bg-grey-900'>
        <div className='flex flex-col items-center justify-center w-1/2 bg-purple-900 mx-auto border-2 border-white'>
          <Form inRef={inRef} click={click} />
          <Task list={list} deleteItem={deleteItem} />
        </div>
      </div>
    </>
  );
}

export default App;
