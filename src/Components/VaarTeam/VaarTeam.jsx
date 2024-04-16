import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import teamposter from "../pictures/teamheroimage.png"
import "./Vaarteam.css"
import teamMemberimg1 from "../pictures/team1.svg"
import teamMemberimg2 from "../pictures/team2.svg"
import teamMemberimg3 from "../pictures/team3.svg"
import teamheroimage2 from "../pictures/teamheroimage2.jpg"
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import SignupSection from '../SignUp/SignupSection';
function VaarTeam() {
    const teamMembers = [
        {
            img: teamMemberimg1,
            name: "ANNIE HOANG",
            position: "Marketing Associate"
        },
        {
            img: teamMemberimg2,
            name: "MICHELLE WANG",
            position: "Content Creator"
        },
        {
            img: teamMemberimg3,
            name: "RACHELE LEE",
            position: "Manager"
        },
        {
            img: teamMemberimg1,
            name: "ANNIE HOANG",
            position: "Marketing Associate"
        },
        {
            img: teamMemberimg2,
            name: "MICHELLE WANG",
            position: "Content Creator"
        },
        {
            img: teamMemberimg3,
            name: "RACHELE LEE",
            position: "Manager"
        },
        {
            img: teamMemberimg1,
            name: "ANNIE HOANG",
            position: "Marketing Associate"
        },
        {
            img: teamMemberimg2,
            name: "MICHELLE WANG",
            position: "Content Creator"
        },
        {
            img: teamMemberimg3,
            name: "RACHELE LEE",
            position: "Manager"
        },
    ]

    return (
        <>

            <div className="section-padding"></div>

            <section style={{color:"white"}}>
                <div>
                    <div className="container">
                        <Row>
                            <Col lg={6} md={6}>
                                <div className='team-section-hero'>
                                    <div>
                                        <h2>People who care about your growth</h2>
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
                        <h1 style={{ fontSize: "18px", fontWeight: "700",color:"white" }}>Our Team</h1>
                        <hr className='team-hr mb-4' />
                    </div>
                    <h1 style={{ textAlign: "center", fontSize: "55px", paddingBottom: "3rem",color:"white" }} className='only-pc-heading'>Our Team</h1>
                    <div className='container only-for-pc'>
                        <Row>
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

                        </Row>
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
                                    <img src={item.img} alt={item.name} style={{ textAlign: "center", width: "100%" }} />
                                    <div className='pt-4'>
                                        <h2 style={{ fontSize: "23px", color: "#ffffff" }}>{item.name}</h2>
                                        <span style={{ fontSize: "14px", color: "#ffffff" }}>{item.position}</span>
                                    </div>
                                    <div className="team-section-padding"></div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </section>
            <SignupSection/>
        </>
    );
}

export default VaarTeam;
