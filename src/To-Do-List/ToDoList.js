import React from 'react';

const ToDoList = ({ contacts }) => {
  return (
    <div>
      {contacts.map((haha) => (
        <div>
          <p className='card-name'>{haha.name}</p>
        </div>
      ))}
    </div>
  );
};

export default ToDoList;
