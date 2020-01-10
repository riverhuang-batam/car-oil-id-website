import React from 'react'
import {Form, FormGroup, Label, Input, Button} from 'reactstrap'
const FormSend = () =>(
    
        <Form action= "https://formspree.io/Chifuk0999@gmail.com" method="POST">
            <FormGroup>
                <Label>E-mail</Label>
                <Input type="email" name="email" placeholder="E-mail" required/>
            </FormGroup>
            <FormGroup>
                <Label>UserName</Label>
                <Input type="name" name="name" placeholder="UserName" required/>
            </FormGroup>
            <FormGroup>
                <Label>Message</Label>
                <Input type="textarea" name="Message" placeholder="Message" required/>
            </FormGroup>
            <FormGroup>
            <Button color="success">Submit</Button>
            </FormGroup>
        </Form>
    
)
export default FormSend;