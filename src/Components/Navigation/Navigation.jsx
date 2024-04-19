import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Navigation.css";
import varrimg from "../pictures/vaarblacklogo.png"
import newLogoUpdate from "../pictures/newlogoUpdate.png"

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
                    <Link to="/"><img src={newLogoUpdate} alt=" " style={{ width: "130px" }} /></Link>
                </div>
                <div className={`navbar-brand ${isSticky ? '' : 'hide'}`}>
                    <Link to="/"><img src={newLogoUpdate} alt=" " style={{ width: "130px" }} /></Link>
                </div>
                <div>
                    {isDesktop ? (
                        <nav >
                            <ul className='navigation_ul m-0'>

                                <li><Link to="/" className="hover-this">HOME</Link><hr /></li>
                                <li><Link to="/HowItWorks">HOW IT WORKS</Link><hr /></li>
                                {/* <li><Link to="/AboutUs">ABOUT US</Link><hr /></li> */}
                                <li><Link to="/AllResources" >LEARN</Link><hr /></li>
                                <li><Link to="/VaarBlogs">BLOG</Link><hr /></li>
                                <li><Link to="/Vaar">VAAR</Link><hr /></li>
                                {/* <li><Link to="/VaarTeam">TEAM</Link><hr /></li> */}
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
                            <Offcanvas.Title><Link to="/"><h2 style={{ fontSize: "30px", textTransform: "uppercase" }}>Navigate</h2></Link></Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <ul className='mobile-offcanvas-menu'>
                                <li><Link to="/" className="hover-this" onClick={() => {
                                    console.log("click")
                                    handleCloseOffcanvas();
                                }}>HOME</Link></li>
                                <li><Link to="/HowItWorks" className="hover-this" onClick={() => {
                                    console.log("click")
                                    handleCloseOffcanvas();
                                }}>HOW IT WORKS</Link></li>
                                <li><Link to="/AllResources" onClick={() => {
                                    console.log("click")
                                    handleCloseOffcanvas();
                                }}>LEARN</Link></li>
                                <li><Link to="/VaarBlogs" onClick={() => {
                                    console.log("click")
                                    handleCloseOffcanvas();
                                }}>BLOG</Link></li>
                                <li><Link to="/Vaar" onClick={() => {
                                    console.log("click")
                                    handleCloseOffcanvas();
                                }}>VAAR</Link></li>
                            </ul>

                            <div className='social-connect'>
                                <div className='mobile-menu-social-icons'>
                                    <a href="https://x.com/vaar_corp?s=11&t=uw6GXpJlRYYPYOVJoKHs9g" target='_black'><i class='bx bxl-twitter'></i></a>
                                    <a href="https://www.linkedin.com/company/vaar-holding/" target='_black'><i class='bx bxl-linkedin-square'></i></a>
                                </div>
                                <div style={{ display: "flex", justifyContent: "center" }}>
                                    <span>Privacy — Terms</span>
                                </div>
                            </div>
                        </Offcanvas.Body>
                    </Offcanvas>
                </div>
                <div className='sign-in-container'>
                    {/* <div className='input-group'> */}
                    <button className='sign-in-btn'><Link to="/ContactUs" style={{ color: "black" }}>Contact Us</Link></button>
                    {/* </div> */}
                </div>
            </nav>
        </>
    );
}

export default Navigation;
