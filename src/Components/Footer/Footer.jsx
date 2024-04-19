import React from 'react';
import "./Footer.css"
import footerlogo from "../pictures/newlogoUpdate.png"
function Footer() {
    return (
        <>
            <section id='Footer'>
                <div className='container'>
                    <div className='only-pc-footer'>
                        {/* <div className='top-menu'>
                            <a href="">About</a>
                            <a href="">Resorces</a>
                            <a href="">VAAR HOLDING</a>
                            <a href="">About</a>
                        <a href="">Resorces</a>
                            <a href="">Blog</a>
                            <a href="">Team</a>
                        </div>
                        <br />
                        <hr />
                        <br /> */}
                        <div className='social-icons-btn'>
                            {/* <span><i class='bx bxl-instagram'></i></span> */}
                            <span><a href="https://x.com/vaar_corp?s=11&t=uw6GXpJlRYYPYOVJoKHs9g" target='_blank'><i class='bx bxl-twitter'></i></a></span>
                            <span><a href="https://www.linkedin.com/company/vaar-holding/" target='_blank'><i class='bx bxl-linkedin-square' ></i></a></span>

                        </div>

                        <div className="slitely-padding"></div>
                        <div className='copyright-text'>
                            <span>© 2023 Vaar Holding Corp</span>
                            <span>Privacy — Terms</span>

                        </div>
                    </div>
                    <div className='only-mobile-footer'>
                        {/* <div>

                            <img src={footerlogo} alt="" style={{width:"120px"}}/>

                        </div>
                        <hr /> */}
                        <div className='copyright-text-mobile' style={{ display: "flex", justifyContent: "center" }}>
                            <span style={{ textAlign: "center" }}>© 2023 Vaar Holding Corp. All rights reserved.</span>
                        </div>


                    </div>
                </div>
            </section>
        </>
    )
}

export default Footer;
