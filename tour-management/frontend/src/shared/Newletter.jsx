import React, { useRef, useState } from 'react';
import './newletter.css';
import { Container, Col, Row } from 'reactstrap';
import maleTourist from '../assets/images/male-tourist.png';
import emailjs from '@emailjs/browser';

const Newsletter = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_2l063zb', 'template_espkttw', form.current, 'Ph8C-zLlaafPEPznO')
      .then((result) => {
          console.log(result.text);
          e.target.reset();
          console.log("Message Sent");
      }, (error) => {
          console.log(error.text);
      });
  };

  const [email, setEmail] = useState('');

  const handleSubscribe = () => {
    alert(`Successfully subscribed with email: ${email}`);

    // Clear the email input after showing the alert
    setEmail('');
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <section className="newsletter">
      <Container>
        <Row>
          <Col lg="6">
            <div className="newsletter__content">
              <h2>Subscribe Now To Get Useful Travelling Information.</h2>
              <form ref={form} onSubmit={sendEmail}>
              <div className="newsletter__input">
                <input
                  type="email"
                  name=""
                  id=""
                  placeholder="Enter Your Email"
                  value={email}
                  onChange={handleEmailChange}
                />
                <button className="btn newsletter__btn" onClick={handleSubscribe}>
                  Subscribe
                </button>
              </div>
              </form>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis expedita dolorum quo eaque ad unde?
              </p>
            </div>
          </Col>
          <Col lg="6">
            <div className="newsletter__img">
              <img src={maleTourist} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Newsletter;
