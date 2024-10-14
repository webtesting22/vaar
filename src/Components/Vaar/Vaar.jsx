import React, { useRef, useState, useEffect } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Row, Col, Button } from 'antd';
import teamposter from "../Vaar/Rectangle.jpeg"
import "../VaarTeam/Vaarteam.css"
import DrumanPatel from "../Vaar/druman-patel.jpg"
import Reehanshah from "../Vaar/reehan-shah.jpg"
import SiddharthLaheri from "../Vaar/siddharth-laheri.jpg"
import KhEmmaNguyen from "../Vaar/kh-emma-nguyen.jpg";
import JimishP from "../Vaar/JimishP.jpg"
import Anamayee from "../Vaar/anamayee.jpg"
import VipulvPatel from "../Vaar/vipulvpatel.jpg"
import VidhiK from "../Vaar/VidhiK.png"
import Kaivalyashah from "../Vaar/kaivalyashah.jpg"
import teamheroimage2 from "../pictures/teamheroimage2.jpg"
import Anamayee1 from "../Vaar/anamayee1.jpeg"
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
import SignupSection from '../SignUp/SignupSection';
import Title from 'antd/es/skeleton/Title';
// import { Autoplay } from 'swiper/modules';

function Vaar() {

    const [activeTab, setActiveTab] = useState('inward'); // State to track active tab

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top when the component mounts or updates
    }, []);
    const teamMembers = [
        {
            img: VidhiK,
            name: "Vidhi Kankaria",
            position: "Founder, CEO",
            link: "https://www.linkedin.com/in/kankariavidhi/"
        },
        {
            img: Kaivalyashah,
            name: "Kaivalya Shah",
            position: "CTO",
            link: "https://www.linkedin.com/in/kaivalyashah"
        },
        // {
        //     img: DrumanPatel,
        //     name: "Druman Patel",
        //     position: "Accounting and Tax Advisory",
        //     link: "https://www.linkedin.com/in/druman-patel-58bba88b/"
        // },
        {
            img: Reehanshah,
            name: "Reehan Shah",
            position: "Vaar Bot",
            link: "https://www.linkedin.com/in/reehan-shah/"
        },
        {
            img: SiddharthLaheri,
            name: "Siddharth Laheri",
            position: "Vaar App Design",
            link: "https://www.linkedin.com/in/siddharth-laheri-636135122/"
        },
        {
            img: KhEmmaNguyen,
            name: "Khai Han Nguyen",
            position: "Vaar Website Design",
            link: "https://www.linkedin.com/in/kh-emma-nguyen/"
        },
        {
            img: JimishP,
            name: "Jimish Parekh",
            position: "Technology & Product Development",
            link: "https://www.linkedin.com/in/jimishio/"
        },
        {
            img: Anamayee1,
            name: "Anamayee Shirolkar",
            position: "Words",
            link: "https://www.linkedin.com/in/anamayee/"
        },
        // {
        //     img: VipulvPatel,
        //     name: "Vipul Patel",
        //     position: "Advisor",
        //     link: "https://www.linkedin.com/in/vipulvpatel/"
        // },

    ]

    const InwardData = [
        {
            Title: "Inward",
            pointTitle: "Think Rigorously",
            pointDescription: "We care about being right and it often takes reasoning from first principles to get there- essentially boiling things down to facts and using them as a foundation to building a solution."
        },
        {
            pointTitle: "Optimism",
            pointDescription: "We are micro pessimists but macro optimists. Yes, it makes our life difficult in the short-run, but the eventual outcome is generally within shouting-distance of our expectations."
        },
        {
            pointTitle: "Trust & Amplify",
            pointDescription: "By the standards of rest of the world, we overtrust, and we are okay with that. Within the company, individuals are trusted to think and produce the best possible results without interference in their process. Thus, it is imperative for us to work with people that are driven to build and deliver."
        }
    ]
    const OutwardData = [
        {
            Title: "Outward",
            pointTitle: "Do Not Sell",
            pointDescription: "We are neither selling Vaar, nor real estate. We want to equip you with all the relevant information about real estate and then if you decide that the asset deserves a place in your portfolio, we facilitate that transaction."
        },
        {
            pointTitle: "Nobody Likes A Preacher",
            pointDescription: "“You cannot bore people into buying a product. You can only interest them.” - David Ogilvy. We like to think this way, and thus our only job is to walk in our users' shoes so we can build something they might actually want."
        },
        {
            pointTitle: "Implement With Precision",
            pointDescription: "Our users trust us with their money and rely on our research to earn returns. If we mess up, or slow down, it matters. We take that responsibility seriously."
        }
    ]
    return (
        <>
            <div className="section-padding"></div>

            <section style={{ color: "white", backgroundColor: "black" }}>
                <div>
                    <div className="container">
                        <Row>

                            <Col lg={12} md={12}>
                                <div className='team-section-hero' id='team-section-hero'>
                                    <div>
                                        <h2 style={{fontWeight:"200", color:"#D4F604", fontSize:"50px"}}>Who We Are</h2>
                                        <p>Here’s a glimpse into how we think & what our team looks like</p>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={12} md={12}>
                                <div className='team-section-hero2'>
                                    <img src={teamposter} alt="" />
                                    <img src={teamposter} alt="" />
                                    <h2 style={{fontWeight:"200", color:"#D4F604", fontSize:"50px"}} className='mobile-show'>Who We Are</h2>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>

            </section>
            <div className="padding-slite"></div>
            <div className='container'>
                <hr className='top-section-heading-hr' />
                <h1 style={{ textAlign: "start", fontSize: "50px", fontWeight: "300", paddingBottom: "3rem", color: "white" }} >Values</h1>
            </div>
            <div className='container values-container  ourvalues-viewpc' id='ourvalues-viewpc'>
                <Row>
                    {InwardData.map((item, index) => (
                        <Col lg={24} md={24}>
                            <h4 >{item.Title}</h4>
                            <div key={index} className='values-boxes'>
                                <h6 style={{ fontWeight: "400", color: "#D4F604" }}>{item.pointTitle}</h6>
                                <p style={{ color: "white", fontWeight: "200" }}>{item.pointDescription}</p>
                            </div>
                        </Col>
                    ))}
                </Row>

                <Row >
                    {OutwardData.map((item, index) => (
                        <Col lg={24} md={24}>
                            <h4>{item.Title}</h4>
                            <div key={index} className='values-boxes'>
                                <h6 style={{ fontWeight: "400", color: "#D4F604" }}>{item.pointTitle}</h6>
                                <p style={{ color: "white", fontWeight: "200" }}>{item.pointDescription}</p>

                            </div>
                        </Col>
                    ))}

                </Row >
            </div>
            <div className='container values-container ourvalues-viewmobile' >
                <div className='tab-buttons'>
                    <Button
                        onClick={() => handleTabClick('inward')}
                        type="primary"
                        style={{
                            backgroundColor: activeTab === 'inward' ? '#D4F604' : '#000000',
                            color: activeTab === 'inward' ? '#000000' : null,
                        }}
                    >
                        Inward
                    </Button>
                    <Button
                        onClick={() => handleTabClick('outward')}
                        type="primary"
                        style={{
                            backgroundColor: activeTab === 'outward' ? '#D4F604' : '#000000',
                            color: activeTab === 'outward' ? '#000000' : null,
                        }}
                    >
                        Outward
                    </Button>
                </div>
                <Row>
                    {/* <Swiper
                        spaceBetween={30}
                        pagination={{
                            clickable: true, // Enable clickable dots
                        }}
                        // modules={[Pagination,Autoplay]}
                        modules={[Autoplay, Pagination]}
                        className="mySwiper"
                    > */}
                        {(activeTab === 'inward' ? InwardData : OutwardData).map((item, index) => (
                            // <SwiperSlide>
                                <Col lg={24} md={24} key={index}>
                                    {/* <h4>{item.Title}</h4> */}
                                    <div className='values-boxes'>
                                        <h6 style={{ fontWeight: "400", color: "#D4F604" }}>{item.pointTitle}</h6>
                                        <p style={{ color: "white", fontWeight: "200" }}>{item.pointDescription}</p>
                                    </div>
                                </Col>
                            // </SwiperSlide>
                        ))}
                    {/* </Swiper> */}
                </Row>
            </div>
            <div className="padding-slite"></div>

            {/* <section>
                <div className='container'>
                  
                    <hr className='top-section-heading-hr' />
                    <h1 style={{ textAlign: "start", fontSize: "50px", fontWeight: "300", paddingBottom: "3rem", color: "white" }} >Team</h1>
                    <div className='container only-for-pc team-navigation'>
                      
                        <Swiper
                            slidesPerView={4}
                            spaceBetween={30}
                            pagination={{
                                clickable: true,
                            }}
                            
                            navigation={true}
                            modules={[Pagination, Autoplay, Navigation]}
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
                                                            <a href={item.link} target='_blank'><i class='bx bxl-linkedin-square'></i></a>
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
                         
                            modules={[Autoplay, Pagination]}
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
                                                    <a href={item.link} target='_black'><i class='bx bxl-linkedin-square'></i></a>
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
            </section> */}
            <SignupSection />
        </>
    )
}
export default Vaar;