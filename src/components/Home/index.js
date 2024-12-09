//=========================================================================
// File: .../src/components/Home/index.js
// Programmer: Mya Nanthavongdouangsy
//=========================================================================
/*------------------------------------------
   Description:
=========================================================================*/
import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import avatar from '../../assets/profile-pic.jpg'; 

function HomePage() {

    return (
        <Container className="mt-5">
            <Row className="justify-content-center text-center">
                <Col>
                    <h1>Welcome to i-mya-gination!</h1>
                </Col>
            </Row>
            <Row className="align-items-center">
                <Col md={4}>
                    {/* Professional headshot/avatar */}
                    <Image src={avatar} roundedCircle fluid />
                    <p>
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

export default HomePage;
/*
                        <br />
                        <br />                        
                        Whether it's solving problems, building projects, 
                        or coming up with bad jokes, I'm here to make it fun (and functional). 
                        <br />
                        <br />
                        Stick around; you might just find something inspiring!
 */