import React from 'react';

const ToDoForm = () => {
  return (
    <div>
      {contacts.map((contact) => (
        <div className='card' key={contact.phonenumber}>
          <p className='card-name'>{contact.name}</p>
          <p>{contact.email}</p>
          <p>{contact.phonenumber}</p>
        </div>
      ))}
    </div>
  );
};

export default ToDoForm;
