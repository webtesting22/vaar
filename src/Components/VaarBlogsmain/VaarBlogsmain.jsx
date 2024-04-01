import React from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import "./VaarBlogsmain.css"
import blogimage from "../pictures/blogHomeBaneer.svg"
import { Row, Col } from "antd"
import BlogDatamain from './VaarBlogData';
function VaarBlogs() {
    return (
        <>
            <section style={{ paddingTop: "6rem", backgroundColor: "#f2f2f2" }}>
                <div className='container blog-section-adjust'>
                    <Row>
                        <Col lg={8}>
                            <div>
                                <img src={blogimage} alt="" style={{ width: "100%" }} />
                            </div>
                        </Col>
                        <Col lg={16}>
                            <div className='content-parent-container'>
                                <div className='blog-inside-container'>
                                    <h6 className='owner-tagline-name'>Vidhi Kankaria</h6>
                                    <h1 className='owner-quote-text'>Beyond the Walls: Keeping Up the Potential with Real Estate Management</h1>
                                    <div className='button-animation'>
                                        <br />
                                        <a href="">Read More<i class='bx bx-chevron-right'></i></a>
                                        <span></span>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className='blogs-block bg-white '>
                    <div className='container' >
                        {BlogDatamain.map((item, index) => (

                            <Row key={index} className='blog-container-row'>
                                {index % 2 === 0 ? (
                                    <>

                                        <Col lg={12} md={12}>
                                            <div className='blog-title-container' style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%", width: "100%" }}>
                                                <div>
                                                    <h1>{item.blogTitle}</h1>
                                                    <p>{item.blogContent}</p>
                                                    <div style={{display:"flex", alignItems:"center"}}>
                                                    <span style={{margin:"0px 10px",display:"flex", alignItems:"center"}}><i class="bi bi-person-circle fs-5"></i> </span> <p style={{margin:"0px"}}> {item.authorName}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col lg={12} md={12} style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>

                                            <div className='img-style-container'>
                                                <img src={item.blogImg} alt="" />
                                            </div>

                                        </Col>
                                    </>
                                ) : (
                                    <>
                                        <Col lg={12} md={12} style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>

                                            <div className='img-style-container'>
                                                <img src={item.blogImg} alt="" />
                                            </div>


                                        </Col>
                                        <Col lg={12} md={12}>
                                            <div className='blog-title-container' style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%", width: "100%" }}>
                                                <div>
                                                    <h1>{item.blogTitle}</h1>
                                                    <p>{item.blogContent}</p>
                                                    <div style={{display:"flex"}}>
                                                    <span style={{margin:"0px 10px",display:"flex", alignItems:"center"}}><i class="bi bi-person-circle fs-5"></i> </span> <p style={{margin:"0px"}}> {item.authorName}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </Col>

                                    </>
                                )}
                            </Row>
                        ))}
                    </div>

                </div>
            </section>
        </>
    );
}

export default VaarBlogs;

