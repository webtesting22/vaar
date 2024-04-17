import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import "./Bestvalue.css"
import { BestvalueData, BestValueCardsData } from './BestvalueData';
import ownerQuoteimg from "../pictures/ownerQuote.png"
// import { FreeMode, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import blogArrow from "../pictures/About-icons/blogarrow.svg"

function Bestvalue() {
    return (
        <>
            <section style={{ backgroundColor: "#000000", color: "white" }}>
                <div className='container'>
                    <div className='top-section'>
                        <h1 className='section-heading-best-value' style={{ fontWeight: "300", fontSize: "50px" }}>Visit Our Courses</h1>
                        <br /><br />
                        <p className=' text-start text-white'>Learn more about the real-estate industry through our quick courses</p>

                    </div>
                    <br />
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={30}
                        freeMode={true}
                        loop={true} // Enable infinite loop
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: true,
                        }}
                        breakpoints={{
                            768: {
                                slidesPerView: 4, // Slides per view for screens >= 768px (for mobile devices)
                            },
                        }}
                        // pagination={{ clickable: true }}
                        id="mySwiper"
                        modules={[Autoplay, Pagination, Navigation]}
                    >
                        <div className='cards-section'>
                            {/* <div className="row m-auto"> */}
                            {BestvalueData.map((item, index) => (
                                <SwiperSlide>
                                    {/* <div className="col-lg-3 col-md-6"> */}
                                    <div className='content-section bg-white'>
                                        <img src={item.img} alt="" />
                                        <div className='footer-card' id='footer-card'>
                                            <h3 className='Card-title text-white'>{item.title}</h3>
                                            <div className='button-animation'>
                                                <a href="">See More <i class='bx bx-chevron-right'></i></a>
                                                <span></span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* </div> */}
                                </SwiperSlide>
                            ))}
                            {/* </div> */}

                        </div>
                        {/* <SwiperSlide style={{ height: "50vh", backgroundColor:"red" }}>Slide 1</SwiperSlide> */}

                    </Swiper>


                    {/* <div className='cards-section'>
                        <div className="row m-auto">
                            {BestvalueData.map((item, index) => (
                                <div className="col-lg-3 col-md-6">
                                    <div className='content-section'>
                                        <img src={item.img} alt="" />
                                        <div className='footer-card'>
                                            <h3 className='Card-title'>{item.title}</h3>
                                            <div className='button-animation'>
                                                <a href="">See More <i class='bx bx-chevron-right'></i></a>
                                                <span></span>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            ))}
                        </div>

                    </div> */}

                    <div className='blogs-section-pc' style={{}}>

                        {/* <div className="section-padding"></div> */}
                        {/* <h1 style={{textAlign:"center", fontWeight:"300", fontSize:"50px"}}>Blogs</h1> */}

                        <div className="section-padding"></div>
                        <p className=' text-start text-white'>Learn more about the real-estate industry through our quick courses</p>
                        <hr />
                        <br />
                        <div className='owner-quote'>

                            <div className="row m-auto">
                                <div className="col-lg-4 col-md-4">
                                    <div className='inside-content1 h-100'>
                                        <img src={ownerQuoteimg} className='w-100 h-100' alt="" />
                                    </div>
                                </div>
                                <div className="col-lg-8 col-md-8" id='Owner_info-content'>
                                    <div className='inside-content2'>
                                        <div className='parent-div'>
                                            <div style={{ position: "relative" }}>
                                                <span>Vidhi Kanaria</span>
                                                <h1>Beyond the Walls: Keeping Up the Potential with Real Estate Management</h1>
                                                <div className='button-animation-without-absolute p-0'>
                                                    <a href="">Read More</a>
                                                    <span className='m-0'></span>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className='Infomation-cards'>

                            <div className="section-padding"></div>
                            <div className="row m-auto">
                                {BestValueCardsData.map((item, index) => (
                                    <div className="col-lg-6 col-md-6">
                                        <div data-aos="fade-up"
                                            data-aos-anchor-placement="top-bottom">
                                            <h5 style={{ fontSize: "24px" }}>{item.title}</h5>
                                            <p style={{ fontSize: "18px" }}>{item.description}</p>
                                            <br />
                                            <div className='m-0 p-0 read-more-btn'>
                                                <a href="">Read More</a>
                                                <span></span>
                                            </div>
                                        </div>
                                    </div>

                                ))}
                            </div>

                        </div>
                    </div>


                </div>

                <div className='Blog-section only-mobile ' style={{ padding: "3rem 0rem" }}>
                    <h1 className='section-heading-best-value pb-4'>Our Blogs</h1>
                    <div className='container'>

                        <Swiper
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
                        >
                            {BestValueCardsData.map((item, index) => (
                                <SwiperSlide>
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
                                                <h6 style={{ marginBottom: "3px", color: "black" }}>Vidhi Kanaria</h6>
                                                <span>15 Jan 2024</span>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}

                        </Swiper>
                    </div>
                </div>

            </section>
        </>
    );
}

export default Bestvalue;
