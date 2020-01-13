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
            padding: '16%'}}
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
                        ></div>
                         <div
                        className="text-center"
                        style={{
                        position: "relative",
                        zIndex: "10"
                    }}>
                        <h1 style={{color:"white"}}>
                            <b>
                            Oli Car ID 
                            </b>
                            
                            </h1>
                            <h2 style={{color:"white"}}>
                            
                            Website yang Membantu para newbie yang masih pemula ataupun ragu2 dalam memilih oli
                            
                            </h2>
                        </div>
        </Jumbotron>
    </div>
)
export default JumbotronOli;