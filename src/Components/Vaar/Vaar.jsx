import React, { useRef, useState, useEffect } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import teamposter from "../pictures/teamheroimage.png"
import "../VaarTeam/Vaarteam.css"
import DrumanPatel from "../Vaar/druman-patel.jpg"
import Reehanshah from "../Vaar/reehan-shah.jpg"
import SiddharthLaheri from "../Vaar/siddharth-laheri.jpg"
import KhEmmaNguyen from "../Vaar/kh-emma-nguyen.jpg";
import JimishP from "../Vaar/JimishP.jpg"
import Anamayee from "../Vaar/anamayee.jpg"
import VipulvPatel from "../Vaar/vipulvpatel.jpg"
import teamheroimage2 from "../pictures/teamheroimage2.jpg"
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import SignupSection from '../SignUp/SignupSection';

function Vaar() {
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top when the component mounts or updates
    }, []);
    const teamMembers = [
        {
            img: DrumanPatel,
            name: "Druman Patel",
            position: "Accounting and Tax Advisory"
        },
        {
            img: Reehanshah,
            name: "Reehan Shah",
            position: "Vaar Bot"
        },
        {
            img: SiddharthLaheri,
            name: "Siddharth Laheri",
            position: "Vaar App Design"
        },
        {
            img: KhEmmaNguyen,
            name: "Khai Han Nguyen",
            position: "Vaar Website Design"
        },
        {
            img: JimishP,
            name: "Jimish Parekh",
            position: "Technology & Product Development"
        },
        {
            img: Anamayee,
            name: "Anamayee Shirolkar",
            position: "Words"
        },
        {
            img: VipulvPatel,
            name: "Vipul Patel",
            position: "Advisor"
        },

    ]

    return (
        <>
            <div className="section-padding"></div>

            <section style={{ color: "white", backgroundColor: "rgb(27, 27, 27)" }}>
                <div>
                    <div className="container">
                        <Row>
                            <Col lg={6} md={6}>
                                <div className='team-section-hero'>
                                    <div>
                                        <h2>People who care about fyour growth</h2>
                                        <p>Meet our team members and learn more about their work at VAAR Holding.</p>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={6} md={6}>
                                <div className='team-section-hero2'>
                                    <img src={teamposter} alt="" />
                                    <img src={teamheroimage2} alt="" />
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>

            </section>
            <section>
                <div>
                    {/* <div className="section-padding"></div> */}
                    <div className='container only-mobile-heading'>
                        <h1 style={{ fontSize: "18px", fontWeight: "700", color: "white" }}>Our Team</h1>
                        <hr className='team-hr mb-4' />
                    </div>
                    <h1 style={{ textAlign: "center", fontSize: "50px", fontWeight: "300", paddingBottom: "3rem", color: "white" }} className='only-pc-heading'>Our Team</h1>
                    <div className='container only-for-pc'>
                        {/* <Row>
                {teamMembers.map((item, index) => (
                    <Col key={index} lg={4} md={6} style={{ margin: "auto" }}>
                        <img src={item.img} alt={item.name} style={{ textAlign: "center", width: "100%" }} />
                        <div style={{backgroundColor:"rgb(27, 27, 27)", padding:"20px 10px"}}>
                            <h2 style={{ fontSize: "23px", color: "#ffffff" }}>{item.name}</h2>
                            <span style={{ fontSize: "14px", color: "#ffffff" }}>{item.position}</span>
                        </div>
                        <div className="team-section-padding"></div>
                    </Col>

                ))}

            </Row> */}
                        <Swiper
                            slidesPerView={4}
                            spaceBetween={30}
                            // pagination={{
                            //     clickable: true,
                            // }}
                            modules={[Pagination]}
                            className="mySwiper"
                        >
                            {teamMembers.map((item, index) => (
                                <SwiperSlide>
                                    <Row>
                                        <div className='team-card'>

                                            <Col key={index} lg={24} md={24} style={{ margin: "auto" }} >
                                                <img src={item.img} alt={item.name} style={{ textAlign: "center", width: "100%" }} />
                                                <div className='team-card-footer'>
                                                    <h2 style={{ fontSize: "23px", color: "#ffffff" }}>{item.name}</h2>
                                                    <span style={{ fontSize: "14px", color: "#ffffff" }}>{item.position}</span>
                                                    <div className='team-Social_handles'>
                                                        <div>
                                                            <a href=""><i class='bx bxl-linkedin-square'></i></a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="team-section-padding"></div>
                                            </Col>

                                        </div>
                                    </Row>
                                </SwiperSlide>

                            ))}
                        </Swiper>
                    </div>


                    <div className='container only-for-mobile'>

                        <Swiper
                            spaceBetween={30}
                            pagination={{
                                clickable: true,
                            }}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: true,
                            }}
                            modules={[Autoplay]}
                            className="mySwiper"
                        >
                            {teamMembers.map((item, index) => (
                                <SwiperSlide>
                                    <div className='team-card'>
                                        <img src={item.img} alt={item.name} style={{ textAlign: "center", width: "100%" }} />
                                        <div className='pt-4'>
                                            <h2 style={{ fontSize: "23px", color: "#ffffff" }}>{item.name}</h2>
                                            <span style={{ fontSize: "14px", color: "#ffffff" }}>{item.position}</span>
                                            <div className='team-Social_handles'>
                                                <div>
                                                    <a href=""><i class='bx bxl-linkedin-square'></i></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="team-section-padding"></div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </section>
            <SignupSection />
        </>
    )
}
export default Vaar;