import React from 'react'

const Maps = () => (
    <div className="mt-4 mb-4">
        <h1 className="text-center mt-4 mb-4">Maps</h1>
        <iframe
            title="myFrame"
            width="100%"
            height="450"
            
            style={{
            border: 0
        }}
            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBGdf6Y17ot1GTceh__7GpnuO2aCxgoiQY
&q=1.1572973, 104.027181" allowFullScreen></iframe>
    </div>
)

export default Maps