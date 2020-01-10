import React from 'react'
import FormSend from '../../components/form/form'
import {Jumbotron}  from 'reactstrap'
import backgroundOli from '../../images/backgroundoli.png'
const BodyWeb = () =>(
    <Jumbotron fluid  style={{backgroundImage:`url(${backgroundOli})`, backgroundSize: 'cover'}} >
    <div>
    <FormSend/>
    </div>
    </Jumbotron>
)
export default BodyWeb;