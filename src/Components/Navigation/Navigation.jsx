import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Navigation.css";
import varrimg from "../pictures/vaarblacklogo.png"
import varrimg1 from "../pictures/vaarwhitelogo.jpeg"

function Navigation() {
    const [show, setShow] = useState(false);
    const [isSticky, setIsSticky] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    

    const isDesktop = window.innerWidth > 768; // Assuming tablet breakpoint is at 768px
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // adds smooth scrolling
        });
    };

    const handleSelect = () => {
        setExpanded(false); // Collapse the navbar when a link is clicked
        // document.body.scrollTop = 0;
        // document.documentElement.scrollTop = 0;
    };

    const handleSelectAndScroll = () => {
        handleSelect();
        scrollToTop();
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.pageYOffset > 30);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <div id="navigation" className={`navbar navbar-expand-lg ${isSticky ? 'sticky' : ''}`}>
                <div className={`navbar-brand ${isSticky ? 'hide' : ''}`}>
                    <Link to="/"><img src={varrimg} alt=" " style={{ width: "50px" }} /></Link>
                </div>
                <div className={`navbar-brand ${isSticky ? '' : 'hide'}`}>
                    <Link to="/"><img src={varrimg} alt=" " style={{ width: "50px" }} /></Link>
                </div>
                <div>
                    {isDesktop ? (
                        <nav >
                            <ul className='navigation_ul m-0'>
                                <li><Link to="/AboutUs" className="hover-this">AboutUs</Link></li>
                                <li><Link to="/AllResources" >Resources</Link></li>
                                <li><Link to="/about">Blog</Link></li>
                                <li><Link to="/VaarTeam">Team</Link></li>
                            </ul>
                        </nav>
                    ) : (
                        <i class='bx bx-menu' onClick={handleShow} style={{fontSize:"40px",color:"#D4F604"}}></i>
                        // <Button variant="primary" >
                        //     Open Menu
                        // </Button>
                    )}

                    <Offcanvas show={show} onHide={handleClose} placement="end">
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <ul>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/AllResources">About</Link></li>
                                <li><Link to="/services">Services</Link></li>
                                <li><Link to="/contact">Contact</Link></li>
                            </ul>
                        </Offcanvas.Body>
                    </Offcanvas>
                </div>
                <div className='sign-in-container'>
                    <Button className='sign-in-btn'>Sign In</Button>
                </div>
            </div>
        </>
    );
}

export default Navigation;
