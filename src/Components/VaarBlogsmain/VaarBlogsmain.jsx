import React, {useEffect} from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import "./VaarBlogsmain.css"
import { Link } from "react-router-dom"
import blogimage from "../pictures/blogHomeBaneer.svg"
import { Row, Col } from "antd"
import BlogDatamain from './VaarBlogData';
import { BestValueCardsData } from '../Bestvalue/BestvalueData';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper React components
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import blogArrow from "../pictures/About-icons/blogarrow.svg"
import SignupSection from '../SignUp/SignupSection';
function VaarBlogs() {
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top when the component mounts or updates
      }, []);
    return (
        <>
            <section className='blog-section-change-back bg-black'>
                <div className='container blog-section-adjust' >
                    <Row className='row-for-pc'>
                        <Col lg={8} md={8}>
                            <div className='blog-top-img'>
                                <img src={blogimage} alt="" />
                            </div>
                        </Col>
                        <Col lg={16} md={16}>
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
                    <div className='Blog-section only-mobile ' style={{ padding: "3rem 0rem" }}>
                   <div className='container'>
                   <hr className='top-section-heading-hr' />
                        <h1 className='section-heading-best-value pb-2' style={{color: "#D4F604"}}>Our Blogs</h1>
                   </div>
                        <div className='container'>

                            {/* <Swiper
                                spaceBetween={30}
                                pagination={{
                                    clickable: true,
                                }}
                                autoplay={{
                                    delay: 2000,
                                    disableOnInteraction: false,
                                }}
                                modules={[Autoplay]}
                                className="mySwiper"
                            > */}
                            {BestValueCardsData.map((item, index) => (
                                // <SwiperSlide>
                                // <Link to="/">

                                <div className='blog-cards'>
                                    <img src={item.img} alt="" style={{ marginBottom: "30px", width: "100%" }} />
                                    <div style={{ position: "relative", display: "flex", justifyContent: "space-between" }}>
                                        <h5 style={{ fontSize: "20px", color: "black", width: "80%", color: "white" }}>{item.title}</h5>
                                        <img src={blogArrow} alt="" style={{ position: "absolute", top: "3px", right: "0" }} />
                                    </div>
                                    <p style={{ fontSize: "16px", color: "#475467", marginBottom: "0px", color: "white" }}>{item.description}</p>
                                    <div className='Posted'>
                                        <div><img src={item.avtar} alt="Not Found" /></div>
                                        <div className='ps-3'>
                                            <h6 style={{ marginBottom: "3px", color: "white" }}>Vidhi Kanaria</h6>
                                            <span>15 Jan 2024</span>
                                        </div>
                                    </div>
                                </div>

                                // </SwiperSlide>
                            ))}

                            {/* </Swiper> */}
                        </div>
                    </div>
                </div>
                <div className='blogs-block text-white '>
                    <div className='container' >
                        {BlogDatamain.map((item, index) => (

                            <Row key={index} className='blog-container-row'style={{borderBottom:"1px solid rgb(196, 196, 196)"}}>
                                {index % 2 === 0 ? (
                                    <>

                                        <Col lg={12} md={12}>
                                            <Link to="/VaarBlogCommon">
                                                <div className='blog-title-container' style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%", width: "100%" }}>
                                                    <div>
                                                        <h1 className='main-blog-heading'><a href="./VaarBlogCommon" className='text-white' style={{fontWeight:"400"}}>{item.blogTitle}</a></h1>
                                                        <p className='text-white'>{item.blogContent}</p>
                                                        <div style={{ display: "flex", alignItems: "center" }}>
                                                            <span style={{ margin: "0px 10px", display: "flex", alignItems: "center", color:"white" }}><i class='bx bxs-calendar' style={{fontSize:"20px"}}></i> </span> <p style={{ margin: "0px", color: "white", fontSize: "14px" }}> {item.Date}</p>

                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </Col>
                                        <Col lg={12} md={12} style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                                            <Link to="/VaarBlogCommon">
                                                <div className='img-style-container'>
                                                    <img src={item.blogImg} alt="" />
                                                </div>
                                            </Link>
                                        </Col>
                                    </>
                                ) : (
                                    <>
                                        <Col lg={12} md={12} style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                                            <Link to="/VaarBlogCommon">
                                                <div className='img-style-container'>
                                                    <img src={item.blogImg} alt="" />
                                                </div>

                                            </Link>
                                        </Col>
                                        <Col lg={12} md={12}>
                                            <Link to="/VaarBlogCommon">
                                                <div className='blog-title-container' style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%", width: "100%" }}>
                                                    <div>
                                                        <h1 className='main-blog-heading'>{item.blogTitle}</h1>
                                                        <p className='text-white'>{item.blogContent}</p>
                                                        <div style={{ display: "flex", alignItems: "center" }}>
                                                            <span style={{ margin: "0px 10px", display: "flex", alignItems: "center", color:"white" }}><i class='bx bxs-calendar' style={{fontSize:"20px"}}></i> </span> <p style={{ margin: "0px", fontSize: "14px", color: "white" }}>{item.Date}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </Col>

                                    </>
                                )}
                            </Row>
                        ))}
                    </div>

                </div>
            </section>
            <SignupSection />
        </>
    );
}

export default VaarBlogs;

