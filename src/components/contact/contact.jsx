import React from 'react'
import { MdEmail, MdLocalPhone, MdLocationOn } from 'react-icons/md';
import {Container, Row, Col} from 'reactstrap'
// import gmail from '../../images/gmail.png'
// import line from '../../images/line.jpg'
// import whatsapp from '../../images/whatsapp.png'
// import location from '../../images/location.png'
// import {Container, Row, Col} from 'reactstrap'
const Contact = () =>(
    <div style={{paddingTop:"20px", paddingBottom:"20px"}}>
    <Container>
    <Row>
        <Col md="12">
            <h1>
        <MdLocalPhone />

            <span
                style={{
                paddingLeft: "8%",
                fontSize: '25px'
            }}>
                081268286523
            </span>
            </h1>
        </Col>
        <Col md="12">

        <h1>
        <MdEmail />

            <span
                style={{
                paddingLeft: "8%",
                fontSize: '20px'
            }}>
                Chifuk0999@gmail.com
            </span>
            </h1>
            
        <h1>
        <MdLocationOn />
            <span
                style={{
                paddingLeft: "8%",
                fontSize: '20px'
            }}>
                Batam, Bengkong Nusantara
            </span>
            </h1>
            
        </Col>
    </Row>
    
    </Container>
</div>
)
export default Contact;