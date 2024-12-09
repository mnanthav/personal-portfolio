//=========================================================================
// File: .../src/pages/Contact.js
// Programmer: Mya Nanthavongdouangsy
//=========================================================================
/*------------------------------------------
   Description:
=========================================================================*/
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';

function Contact() {

    const initialState = {
        name: '',
        email: '',
        message: ''
    };

    const [contactData, setContactData] = useState(initialState);

    function handleChange(e) {
        const { name, value } = e.target;
        setContactData({
            ...contactData, 
            [name]: value
        });
    };

    function handleSubmit(e) {

        e.preventDefault();

        console.log('Sending email with the following data:', contactData); // Log form data

        emailjs
            .send(
                'service_g6t67cf',
                'template_sqdswzv',
                {
                    name: contactData.name,
                    email: contactData.email,
                    message: contactData.message
                },
                'puxMtH4rrFqHzXzw2'
            )
            .then(
                (res) => {
                    console.log('SUCCESS!', res.status, res.text);
                    alert('Your message has been sent!');
                    setContactData(initialState); // Reset form
                },
                (err) => {
                    console.log('ERROR:', err);
                    alert('Something went wrong. Please try again.');
                }
            );
    };

    return (
        <Container className="mt-5">
            {/* Contact Form */}
            <h2>Contact Me</h2>
            <Row className="mb-4">
                <Col md={6}>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="contactName" className="mb-3">
                            <Form.Label>Name</Form.Label>
                            <Form.Control 
                                type="text"
                                name="name"
                                placeholder="Enter your name"
                                value={contactData.name}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>
                        <Form.Group
                            controlId="contactEmail"
                            className="mb-3"
                        >
                            <Form.Label>Email</Form.Label>
                            <Form.Control 
                                type="email"
                                name="email"
                                placeholder="Enter your email"
                                value={contactData.email}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>
                        <Form.Group
                            controlId="contactMessage"
                            className="mb-3"
                        >
                            <Form.Label>Message</Form.Label>
                            <Form.Control 
                                as="textarea"
                                name="message"
                                rows={4}
                                placeholder="Write your message"
                                value={contactData.message}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Send
                        </Button>
                    </Form>
                </Col>
                <Col md={6}>
                    {/* Links to social media profiles */}
                    <h4>Where else can you find me online?</h4>
                    <ul>
                        <li>
                            <a
                                href="https://github.com/mnanthav"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                GitHub
                            </a>
                        </li>
                        <li>
                            ** I will add more in the future **
                        </li>
                    </ul>
                    <div className="mt-4">
                        <p>
                            My Location:
                        </p>
                        {/* Google Maps iframe */}
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d425487.9164301994!2d-117.78875112772853!3d33.576120566539885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80db7d3fc502f2f1%3A0x12d42ef99dd4ed8f!2sMurrieta%2C%20CA!5e0!3m2!1sen!2sus!4v1733727200624!5m2!1sen!2sus" 
                            width="400" 
                            height="300" 
                            allowfullscreen="" 
                            loading="lazy" 
                            referrerpolicy="no-referrer-when-downgrade"
                            title="Google Maps Location"
                        ></iframe>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Contact;