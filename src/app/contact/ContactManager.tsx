'use client';
import React from 'react';
import ContactForm from './ContactForm';
import ContactList from './ContactList';

const ContactManager = () => {
  return (
    <div className="max-w-md mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4">Contact Manager</h1>
      <ContactForm />
      <ContactList />
    </div>
  );
};

export default ContactManager;
