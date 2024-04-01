import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Row, Col } from 'antd'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import "./VaarBlogs.css"
import blogImage from "../pictures/blogHomeBaneer.svg"
function VaarBlogs() {
    return (
        <>
            <div className="section-padding"></div>
            <section id='VaarBlogs'>
                <div className='top-blog-header container'>
                    <Row>
                        <Col lg={8} md={8}><img src={blogImage} alt="" style={{ width: "100%", height: "100%" }} /></Col>
                        <Col lg={16} md={16}>
                            <div className='container text-container'>
                                <h6>Vidhi Kankaria</h6>
                                <h1>Beyond the Walls: Keeping Up the Potential with Real Estate Management</h1>
                                <span>Read More</span>
                            </div>
                        </Col>
                    </Row>
                </div>
            </section>
        </>
    );
}

export default VaarBlogs;
