import React from 'react'
import {Row, Col} from 'reactstrap'
const Videos = () =>(
    <div>
        <h1 className="text-center mb-4">Videos</h1>
        <Row>
            <Col md="6">
            <iframe title="helixvideo" width="100%" height="350" src="https://www.youtube.com/embed/gsOkl5lSJ5A" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>    
            </Col>
            <Col md="6">
            <iframe title="helixvideo" width="100%" height="350" src="https://www.youtube.com/embed/T0KXirlrjSQ" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>    
            </Col>
        </Row>
        
        
    </div>
)
export default Videos;