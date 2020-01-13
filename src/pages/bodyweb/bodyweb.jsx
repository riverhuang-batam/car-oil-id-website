import React from 'react'
import FormSend from '../../components/form/form'
import Contact from '../../components/contact/contact'
import Maps from '../../components/maps/maps'
import Videos from '../../components/videos/videos'
import { Row, Col, Container} from 'reactstrap'

const BodyWeb = () => (
    
        <Container>
            <Videos/>
            <h1 className="text-center">Contact</h1>    
        <Row>
            <Col md="6">
            <Contact/>
            </Col>
            <Col md="6">
            <FormSend className="mt-4"/>
            </Col>
        </Row>
        <Maps/>
        </Container>
)
export default BodyWeb;