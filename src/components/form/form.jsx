import React from 'react'
import {Form, FormGroup, Label, Row, Col, Input, Button, Container} from 'reactstrap'
const FormSend = () =>(
    <Container className="mt-4">
        <Row>
            <Col md="4">
        <Form>
            <FormGroup action= "https://formspree.io/Chifuk0999@gmail.com" method="POST">
                <Label>E-mail</Label>
                <Input type="email" name="email" placeholder="E-mail"/>
            </FormGroup>
            <FormGroup>
                <Label>UserName</Label>
                <Input type="name" name="name" placeholder="UserName"/>
            </FormGroup>
            <FormGroup>
                <Label>Message</Label>
                <Input type="textarea" name="Message" placeholder="Message"/>
            </FormGroup>
            <FormGroup>
            <Button>Submit</Button>
            </FormGroup>
        </Form>
            </Col>
        </Row>
    </Container>
)
export default FormSend;