import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import Logo from './logo.png'
import { FaTwitter, FaLinkedin, FaFacebook } from "react-icons/fa";
import { Row, Col, Image, Form, Button } from "react-bootstrap";
import './Footer.css'
import {
    MdEmail,
    MdLocalPhone,
    MdMap,
    MdCode,
    MdSubscriptions,
} from "react-icons/md";

const FooterPage = () => {
    return (
        <MDBFooter className="pt-4 mt-4 footer-container">
            <MDBContainer fluid className="text-center text-md-center">
                <MDBRow>
                    <MDBCol md="3" className="social">
                        <img src={Logo} alt="NONE" />
                        {/* <h2 className="title">Social Media</h2> */}
                        <p><br></br>
                            <a href="">
                                <FaLinkedin className="icon linkedin-icon" />
                            </a>
                            <a href="">
                                <FaTwitter className="icon twitter-icon" />
                            </a>
                            <a href="">
                                <FaFacebook className="icon facebook-icon" />
                            </a>
                        </p>
                    </MDBCol>
                    <MDBCol md="3" className="Address">
                        <h2 className="title">Reach Us</h2>
                        <ul>
                            <li className="list-unstyled">
                                <MdEmail style={{ fontSize: 20 }} />{" "}mail@ccifisat.com
                            </li>
                            <li className="list-unstyled">
                                <MdLocalPhone style={{ fontSize: 20 }} />{" "}+91 000 000 000 0
                            </li>
                            <li className="list-unstyled">
                                <MdMap style={{ fontSize: 20 }} />{" "}Hormis Nagar, Mookanoor
                            </li>
                        </ul>
                    </MDBCol>
                    <MDBCol md="3" className="Links">
                        <h2 className="title">Links</h2>
                        <ul>
                            <li className="list-unstyled">
                                <a href="#!">Home</a>
                            </li>
                            <li className="list-unstyled">
                                <a href="#!">Services</a>
                            </li>
                            <li className="list-unstyled">
                                <a href="#!">Products</a>
                            </li>
                            <li className="list-unstyled">
                                <a href="#!">Contact Us</a>
                            </li>
                        </ul>
                    </MDBCol>
                    <MDBCol md="3" className="Updates">
                        <h2 className="title">Signup for Updates <MdSubscriptions /></h2>
                        <Form style={{ paddingTop: 20 }} className="formParent">
                            <Form.Group controlId="formBasicEmail" className = "inputFieldGroup">
                                <Form.Control type="email" placeholder="Enter email" className="input-field"/>
                            </Form.Group>
                        </Form>
                        <Button className="button" style={{ fontWeight: "bold", backgroundColor:"darkblue" }} variant="custom">
                            <p>Subscribe</p>
                        </Button>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
            <div className="footer-copyright text-center py-3">
                <MDBContainer fluid>
                    &copy; {new Date().getFullYear()} Copyright: <a href=""> CCIFisat.com </a>
                </MDBContainer>
            </div>
        </MDBFooter>
    );
}

export default FooterPage;