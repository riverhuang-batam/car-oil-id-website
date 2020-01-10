import React from 'react'
import FormSend from '../../components/form/form'
import Contact from '../../components/contact/contact'
import { Row, Col, Container} from 'reactstrap'

const BodyWeb = () => (
    
        <Container>
            <h2 className="text-center">Contact</h2>
        <Row>
            <Col md="6">
            <Contact/>
            </Col>
            <Col md="6">
            <FormSend className="mt-4"/>
            </Col>
        </Row>
        </Container>
)
export default BodyWeb;