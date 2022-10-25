import React from 'react';

const ToDoList = ({ contacts }) => {
  return (
    <div>
      {contacts.map((contact) => (
        <div>
          <p className='card-name'>{contact.name}</p>
        </div>
      ))}
    </div>
  );
};

export default ToDoList;
