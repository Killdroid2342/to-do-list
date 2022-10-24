import React from 'react';

const ToDoListForm = () => {
  const [info, setInfo] = useState({
    name: '',
  });
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
            <input className='rounded-lg' type='text' name='text' />
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
