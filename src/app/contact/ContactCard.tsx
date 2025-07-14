'use client';
import React, { useState } from 'react';
import { Contact } from './types';
import { useContacts } from './useContacts';

interface Props {
  contact: Contact;
}

const ContactCard: React.FC<Props> = ({ contact }) => {
  const { dispatch } = useContacts();
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(contact.name);
  const [email, setEmail] = useState(contact.email);

  const handleDelete = () => {
    dispatch({ type: 'DELETE_CONTACT', payload: contact.id });
  };

  const handleUpdate = () => {
    dispatch({
      type: 'UPDATE_CONTACT',
      payload: { ...contact, name, email },
    });
    setIsEditing(false);
  };

  return (
    <div className="border p-3 rounded flex justify-between items-start">
      {isEditing ? (
        <div className="w-full">
          <input
            className="border p-1 rounded w-full mb-1"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="border p-1 rounded w-full mb-2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button onClick={handleUpdate} className="bg-green-500 text-white px-2 py-1 rounded mr-2">
            Save
          </button>
          <button onClick={() => setIsEditing(false)} className="bg-gray-400 text-white px-2 py-1 rounded">
            Cancel
          </button>
        </div>
      ) : (
        <div className="flex justify-between w-full items-center">
          <div>
            <p><strong>{contact.name}</strong></p>
            <p className="text-sm text-gray-600">{contact.email}</p>
          </div>
          <div className="space-x-2">
            <button onClick={() => setIsEditing(true)} className="bg-yellow-500 text-white px-2 py-1 rounded">
              Edit
            </button>
            <button onClick={handleDelete} className="bg-red-600 text-white px-2 py-1 rounded">
              Delete
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactCard;
