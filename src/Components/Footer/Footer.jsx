import React from 'react';
import "./Footer.css"
function Footer() {
    return (
        <>
            <section id='Footer'>
                <div className='container'>
                    <div className='top-menu'>
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
                    <br />
                    <div className='social-icons-btn'>
                        <span><i class='bx bxl-instagram'></i></span>
                        <span><i class='bx bxl-linkedin-square' ></i></span>
                       
                    </div>
                    
                    <div className="slitely-padding"></div>
                    <div className='copyright-text'>
                        <span>© 2024</span>
                        <span>Privacy — Terms</span>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Footer;
