import React from 'react';
import oli from '../../images/oli.jpg'
import { Jumbotron } from 'reactstrap';

const JumbotronOli = () =>(
    <div>
        <Jumbotron
         style={{
            backgroundImage: `url(${oli})`,
            backgroundSize: 'cover',
            position: 'relative',
            padding: '23%'}}
            fluid
            >
 <div
                        style={{
                        position: 'absolute',
                        backgroundColor: 'black',
                        top: '0',
                        left: '0',
                        bottom: '0',
                        right: '0',
                        opacity: '0.3',
                        zIndex: "1"
                    }}
                        fluid></div>
                        <div>Oli Car ID </div>
        </Jumbotron>
    </div>
)
export default JumbotronOli;