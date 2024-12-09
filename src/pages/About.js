//=========================================================================
// File: .../src/pages/About.js
// Programmer: Mya Nanthavongdouangsy
//=========================================================================
/*------------------------------------------
   Description:
=========================================================================*/
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

function About() {

    return (
        <Container className="mt-5">
            <Row>
                <Col>
                    <h2>About Me</h2>
                    <h4>- Mya Nanthavongdouangsy</h4>
                    <p>
                        {/* Background */}
                        Growing up in California with immigrant parents, I learned 
                        the value of perseverance and adaptability from a young age. 
                        Their journey to build a better life instilled in me a deep 
                        appreciation for problem-solving and creativity, which 
                        naturally led me to the field of Computer Science.
                        <br />
                        <br />
                        {/* Education */}
                        Being the first in my family to attend and graduate college 
                        has been both challenging and rewarding. I've had to navigate 
                        unfamiliar territory, but each step has been a testament to 
                        my family's hard work aand my determination to pave the way 
                        for future generations.
                        <br />
                        <br />
                        {/* Skills */}
                        My stronget skills are problem-solving and efficiency. I 
                        love the thrill of finding solutions and often lose track 
                        of time when I'm deep into a challenging problem. Writing 
                        the most efficient code possible has become both a passion 
                        and a bit of an obsession. 
                        Over the years, I've refined my abilities in web development, 
                        programming, and problem-solving. The programming languages I 
                        know include C++ (my personal favorite!), Java, JavaScript, 
                        and Python.
                        <br />
                        <br />
                        {/* Interests */}
                        Beyond coding, I enjoy painting, building Legos, experimenting 
                        with new recipes, playing colony sim games like RimWorld, and 
                        watching crime documentaries. These hobbies often spark my ideas 
                        for my projects. My favorite projects are those that simplify 
                        life and bring a touch of ease to everyday challenges.
                    </p>
                    {/* PDF of resume: href="/resume.pdf" */}
                    <Button download style={{ marginTop: '20px' }}>
                        Download My Resume
                    </Button>
                </Col>
            </Row>
        </Container>
    );
};

export default About;
