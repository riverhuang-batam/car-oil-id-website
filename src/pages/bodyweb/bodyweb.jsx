import React from 'react'
import FormSend from '../../components/form/form'
import Contact from '../../components/contact/contact'
import Maps from '../../components/maps/maps'
import Videos from '../../components/videos/videos'
import TableList from '../../components/table-list/table-list'
import { Row, Col, Container} from 'reactstrap'

const BodyWeb = () => (
    
        <Container>
            <TableList/>
            <Videos/>
            <h1 className="text-center mt-4">Contact</h1>    
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