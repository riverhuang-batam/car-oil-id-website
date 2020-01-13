import React, {Component} from 'react'
import {
    Navbar,
    Nav,
    NavbarBrand,
    NavItem,
    NavbarToggler,
    Collapse,
    
} from 'reactstrap'
import Logo from '../../images/logo_oli_design.png'
export default class Header extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this)

        this.state = {
            isOpen: false
        }
    }
    toggle(){
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <Navbar
                style={{
                top: 0,
                width: "100%",
                zIndex: "1030",
                paddingBottom: '15',
                backgroundColor: "#051537",
                opacity: "0.9"
            }}
            expand="md"
            >
                <NavbarBrand style={{
                    color: "white"
                }}
                className="mx-auto"
                href="/"
                >
                    <img src={Logo} alt={Logo} width="130px"/>
                </NavbarBrand>
               
                
            </Navbar>
        )
    }
}