import React from "react";
import logo from './ccilogo.png'
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import './NavBar.css'

const LogoText = () => {
    const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined
    })

    useEffect(() => {
        // Handler to call on window resize
        function handleResize() {
            // Set window width/height to state
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }

        // Add event listener
        window.addEventListener("resize", handleResize);

        // Call handler right away so state gets updated with initial window size
        handleResize();

        // Remove event listener on cleanup
        return () => window.removeEventListener("resize", handleResize);
    }, []); // Empty array ensures that effect is only run on mount
    return windowSize;
}

const RenderLogoText = () => {
    const windowSize = LogoText()
    if (windowSize.width >= 865) {
        return (
            <span className="max-width-display"> CENTRE FOR<span style={{fontWeight:'lighter'}}> CYBER INNOVATIONS</span></span>
        )
    } else {
        return (
            <span className="med-width-display" style={{fontWeight:'normal'}}> CCI</span>
        )
    }
}

const navbar = () => {
    return (
        <Navbar  expand="sm" className="Navbar-parent" style={{boxShadow:"none"}}>
            <Navbar.Brand href="#home" className="brand">
                <img
                    src={logo}
                    width="24"
                    height="28"
                    className="d-inline-block align-top"
                    alt="logo"
                />
                <RenderLogoText />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto nav-head">
                    <ul>
                        <Nav.Link href="#home" className="li"><a>Home</a></Nav.Link>
                        <Nav.Link href="#link" className="li"><a>Services</a></Nav.Link>
                        <Nav.Link href="#link2" className="li"><a>Products</a></Nav.Link>
                        <Nav.Link href="#link3" className="li"><a>Contact Us</a></Nav.Link>
                        {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown> */}
                    </ul>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}


// const navbar = () => {
//     return (
//         <div>
//             <header>
//                 <div class="menu-toggle" id="hamburger">
//                     <i class="fas fa-bars"></i>
//                 </div>
//                 <div class="overlay"></div>
//                 <div class="container">
//                     <nav>
//                         <h1 class="brand">
//                             <img
//                                 src={logo}
//                                 width="24"
//                                 height="28"
//                                 className="d-inline-block align-top"
//                                 alt="logo"
//                                 onClick={RenderLogoText}
//                             />
//                             {/* vsdvsdvv */}
//                             <RenderLogoText />
//                         </h1>
//                         <ul>
//                             <li>
//                                 <a>Home</a>
//                             </li>
//                             <li>
//                                 <a>Services</a>
//                             </li>
//                             <li>
//                                 <a>About</a>
//                             </li>
//                             <li>
//                                 <a>Contact</a>
//                             </li>
//                         </ul>
//                     </nav>
//                 </div>
//             </header>
//         </div>
//     );
// };

export default navbar;
