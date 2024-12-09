//=========================================================================
// File: .../src/pages/Home.js
// Programmer: Mya Nanthavongdouangsy
//=========================================================================
/*------------------------------------------
   Description:
=========================================================================*/
import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import avatar from '../assets/profile-pic.jpg'; 

function Home() {

    return (
        <Container className="mt-5" style={{ textAlign: 'center'}}>
            <Row>
                <Col>
                    <h1>Welcome to I-mya-gination!</h1>
                </Col>
            </Row>
            <Row className="align-items-center">
                <Col md={4}>
                    {/* Professional headshot/avatar */}
                    <Image 
                        src={avatar} 
                        roundedCircle 
                        fluid 
                        style={{
                            border: '5px solid #C88630',
                            marginBottom: '20px'
                        }}
                    />
                    <p style={{ fontStyle: 'italic' }}>
                        ** Please don't judge me ): Replacing this with a professional headshot aa soon as I get one!! **
                    </p>
                </Col>
                <Col md={8}>
                    <p>
                        {/* Introduction */}
                        Hi! My name is Mya Nanthavongdouangsy-yes, my last name is long, but 
                        think of it as a fun coding challenge to spell it right! 
                        <br/>
                        <br />
                        I'm a Computer Science student at California State University, 
                        Fullerton, graduating with my B.S. in Spring 2024. 
                        <br />
                        <br />
                        {/* Tagline */}
                        My passion lies in merging creativity and code, which is why this 
                        site is called \"i-mya-gination\"-a little play on words that brings 
                        my name to life! 
                    </p>
                </Col>
            </Row>
        </Container>
    );
};

export default Home;
