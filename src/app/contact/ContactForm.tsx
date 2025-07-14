'use client';
import React, { useState } from 'react';
import { useContacts } from './useContacts';
import { v4 as uuidv4 } from 'uuid';

const ContactForm = () => {
  const { dispatch } = useContacts();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!trimmedName || !trimmedEmail) {
      alert('Name and Email are required.');
      return;
    }

    if (!emailRegex.test(trimmedEmail)) {
      alert('Please enter a valid email address.');
      return;
    }

    dispatch({
      type: 'ADD_CONTACT',
      payload: {
        id: uuidv4(),
        name: trimmedName,
        email: trimmedEmail,
      },
    });

    setName('');
    setEmail('');
  };


  return (
    <div className="p-4 border mb-4 rounded">
      <h2 className="font-semibold text-lg mb-2">Add Contact</h2>
      <input
        type="text"
        placeholder="Name"
        className="border p-2 rounded mb-2 w-full"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="Email"
        className="border p-2 rounded mb-2 w-full"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <button
        onClick={handleSubmit}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Add Contact
      </button>
    </div>
  );
};

export default ContactForm;
