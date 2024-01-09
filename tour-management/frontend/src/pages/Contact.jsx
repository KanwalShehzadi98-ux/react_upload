// src/components/Contact.js
import React from 'react';
import ContactForm from './ContactForm';
import '../styles/contact.css';
import ReactWhatsapp from 'react-whatsapp';

const Contact = () => {
  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <p>Feel free to reach out to us using the form below:</p>
      <ReactWhatsapp number="+92 3072576629" class="btn btn-outline-primary" message="I am interested">START CHAT</ReactWhatsapp>
      <br/>
      <p>At Tours World, we believe that every journey is a story waiting to be written. 
        With a passion for exploration and a commitment to creating exceptional travel experiences,
        we invite you to embark on a journey of a lifetime with us. Our team of dedicated travel 
        experts is here to ensure that your adventure is not just a vacation but a collection of
         extraordinary moments that will stay with you forever. Whether you dream of discovering 
         hidden gems, immersing yourself in diverse cultures, or simply enjoying the beauty of the 
         world, we have the perfect itinerary for you. Feel free to reach out to us using the form below, 
         and let us help you turn your travel dreams into reality. We look forward to being a part of your
          next great adventure!</p>
    </div>
  );
};

export default Contact;
