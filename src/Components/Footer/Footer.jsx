import React from 'react';
import "./Footer.css"
import footerlogo from "../pictures/footerlogo.svg"
function Footer() {
    return (
        <>
            <section id='Footer'>
                <div className='container'>
                    <div className='only-pc-footer'>
                        <div className='top-menu'>
                            <a href="">About</a>
                            <a href="">Resorces</a>
                            <a href="">VAAR HOLDING</a>
                            {/* <a href="">About</a>
                        <a href="">Resorces</a> */}
                            <a href="">Blog</a>
                            <a href="">Team</a>
                        </div>
                        <br />
                        <hr />
                        <br />
                        <div className='social-icons-btn'>
                            {/* <span><i class='bx bxl-instagram'></i></span> */}
                            <span><i class='bx bxl-twitter'></i></span>
                            <span><i class='bx bxl-linkedin-square' ></i></span>

                        </div>

                        <div className="slitely-padding"></div>
                        <div className='copyright-text'>
                            <span>© 2024</span>
                            <span>Privacy — Terms</span>

                        </div>
                    </div>
                    <div className='only-mobile-footer'>
                        <div>

                            <img src={footerlogo} alt="" style={{width:"120px"}}/>

                        </div>
                        <hr />
                        <div className='copyright-text-mobile'>
                            <span>© 2024 Vaar Holding. All rights reserved.</span>
                        </div>


                    </div>
                </div>
            </section>
        </>
    )
}

export default Footer;
