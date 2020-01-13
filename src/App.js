import React from 'react';
import {Spring} from 'react-spring/renderprops'
import JumbotronOli from './components/jumbotronoli/jumbotronoli'
import ProductPages from './pages/productpages/productpages'
import BodyWeb from './pages/bodyweb/bodyweb'
import Header from './pages/header/header'
import './App.css';

function App() {
    return (
        <Spring
            from={{
            opacity: 0,
            marginTop: -500
        }}
            to={{
            opacity: 1,
            marginTop: 0
        }}>
            {animation => (
                <div style={animation}>
                    <Header/>
                    <JumbotronOli/>
                    <ProductPages/>
                    <BodyWeb/>
                </div>
            )
}
        </Spring>

    );
}

export default App;
