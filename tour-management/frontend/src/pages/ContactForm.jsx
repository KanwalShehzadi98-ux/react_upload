// src/components/ContactForm.js
import React from 'react';

const ContactForm = () => {
  // Add your form logic here

  return (
    <form>
      {/* Add your form fields here */}
      <label>
        Name:
        <input type="text" name="name" />
      </label>
      <br />
      <label>
        Email:
        <input type="email" name="email" />
      </label>
      <br />
      <label>
        Message:
        <textarea name="message" rows="4" />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default ContactForm;
