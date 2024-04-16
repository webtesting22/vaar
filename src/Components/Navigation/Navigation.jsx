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
    const [offcanvasOpen, setOffcanvasOpen] = useState(false);

    const handleCloseOffcanvas = () => {
        setOffcanvasOpen(false);
        handleClose();
    };

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
            <nav id="navigation" className={`navbar navbar-expand-lg ${isSticky ? 'sticky' : ''}`} >
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
                                <li><Link to="/AboutUs" className="hover-this">ABOUT US</Link><hr /></li>
                                <li><Link to="/AllResources" >RESOURCES</Link><hr /></li>
                                <li><Link to="/VaarBlogs">BLOG</Link><hr /></li>
                                <li><Link to="/VaarTeam">TEAM</Link><hr /></li>
                                {/* <li><Link to="/ContactUs">Contact</Link></li> */}
                            </ul>
                        </nav>
                    ) : (
                        <i class='bx bx-menu' onClick={handleShow} style={{ fontSize: "40px", color: "#D4F604" }}></i>
                        // <Button variant="primary" >
                        //     Open Menu
                        // </Button>
                    )}

                    <Offcanvas show={show} onHide={handleClose} placement="end">
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title><Link to="/"><img src={varrimg1} alt=" " style={{ width: "50px" }} /></Link></Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <ul className='mobile-offcanvas-menu'>
                                <li><Link to="/AboutUs" className="hover-this" onClick={() => {
                                    console.log("click")
                                    handleCloseOffcanvas();
                                }}>AboutUs</Link></li>
                                <li><Link to="/AllResources" onClick={() => {
                                    console.log("click")
                                    handleCloseOffcanvas();
                                }}>Resources</Link></li>
                                <li><Link to="/VaarBlogs" onClick={() => {
                                    console.log("click")
                                    handleCloseOffcanvas();
                                }}>Blog</Link></li>
                                <li><Link to="/VaarTeam" onClick={() => {
                                    console.log("click")
                                    handleCloseOffcanvas();
                                }}>Team</Link></li>
                            </ul>
                        </Offcanvas.Body>
                    </Offcanvas>
                </div>
                <div className='sign-in-container'>
                    <button className='sign-in-btn'><Link to="/ContactUs" style={{ color: "black" }}>Join Our</Link></button>
                </div>
            </nav>
        </>
    );
}

export default Navigation;
