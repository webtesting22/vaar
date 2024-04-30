import React, { useState, useEffect, useRef } from 'react';
import "./Founder.css";
import animatedGirl from "../pictures/animatedgirl.png";
import founderPicture from "../Founder/VidhiK.png"
import img1 from "../pictures/About-icons/lightning.svg"
import img2 from "../pictures/About-icons/graph.svg"
import img3 from "../pictures/About-icons/command.svg"
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import { TypeAnimation } from 'react-type-animation';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Descriptions, Carousel } from 'antd';
import AnimatedAccordion from '../AnimatedAccordion/AnimatedAccordion';

const ValueData = [
    {
        title: "Asset Quality",
        colorText: "Invest in assets that grow with what surrounds them",
        // Descriptions: "We don’t buy into what was, or what will be. We offer what is here to stay."
    },

    {
        title: "Transparency",
        colorText: "Know what you’re getting into with clarity",
        // Descriptions: " We disclose all costs related to each asset, ensuring our investors have the necessary information to make well-informed decisions."
    },
    {
        title: "Intuitive UI & UX",
        colorText: "Uncomplicate your investments via an interface that makes information accessible",
        // Descriptions: "The intricacies of any real estate transactions often crowd-out the retail investor. However, Vaar prides itself on making RE accessible at any users' fingertips."
    },
    {
        title: "Diversification",
        colorText: "Preserve and grow your wealth by accessing several assets at the same time",
        // Descriptions: "Diversify in real assets can be both capital intensive and challenging to manage. Vaar provides a solutions for both these issues."
    },
    {
        title: "Feasibility",
        colorText: "Fractionally own what suits your portfolio"
    }
]
export { ValueData };
function Founder() {
    const onChange = (currentSlide) => {
        // console.log(currentSlide);
    };
    const carouselRef = useRef(null);

    const handlePrev = () => {
        carouselRef.current.prev();
    };

    const handleNext = () => {
        carouselRef.current.next();
    };
    return (
        <>
            <div className='only-for-pc-device'>
                <AnimatedAccordion />
            </div>
            <section id='Founder-section'>
                <div className="container">
                    <div style={{ display: "none" }}>
                        <div className='text-center' >
                            <hr className='m-0' />
                            <h1 className='section-heading-big only-pc-heading' id='hello' style={{ fontWeight: "300", fontSize: "50px", textAlign: "start" }}>
                                <TypeAnimation
                                    sequence={[
                                        // Same substring at the start will only be typed out once, initially
                                        'We take care of it all,  ',
                                        6000, // wait 1s before replacing "Mice" with "Hamsters"

                                    ]}
                                    wrapper="h1"
                                    speed={200}
                                    style={{ fontWeight: "300", fontSize: "50px", textAlign: "start", margin: "0px" }}
                                    // style={{ fontSize: '2em', display: 'block', fontSize: "8vw", fontWeight: "400px", textAlign: "center" }}
                                    repeat={Infinity}
                                />
                                from the small stuff to the big picture.</h1>
                            {/* <h1 className='section-heading-big only-mobile-heading' style={{ fontWeight: "300", fontSize: "8vw", textAlign: "start" }}>We take care of it all, from the small stuff to the big picture.</h1> */}
                            <h1 className='section-heading-big only-mobile-heading' id='hello' style={{ fontWeight: "300", fontSize: "8vw", textAlign: "start" }}>
                                <TypeAnimation
                                    sequence={[
                                        // Same substring at the start will only be typed out once, initially
                                        'We take care of it all,  ',
                                        6000, // wait 1s before replacing "Mice" with "Hamsters"

                                    ]}
                                    wrapper="h1"
                                    speed={200}
                                    style={{ fontWeight: "300", fontSize: "8vw", textAlign: "start", margin: "0px" }}
                                    // style={{ fontSize: '2em', display: 'block', fontSize: "8vw", fontWeight: "400px", textAlign: "center" }}
                                    repeat={Infinity}
                                />
                                from the small stuff to the big picture.</h1>
                            {/* <p className='section-para text-white text-start m-0' style={{ color: "white", fontWeight:"200" }}>By bringing the largest asset class to your fingertips </p> */}
                        </div>
                        {/* <div className="padding-slite"></div> */}
                        {/* <div className="padding-slite"></div> */}
                        <div className="row w-100 m-auto home-pc">
                            {ValueData.map((item, index) => (

                                // <div className="col-lg-3" key={index}></div>
                                <div className="col-lg-3" key={index}>
                                    <div className='box'>
                                        <div>
                                            <div className='box-top-header'>
                                                <h2 className='box-title'>{item.title}</h2>

                                            </div>

                                            <br />
                                            <span><span style={{ fontWeight: "600" }}>{item.colorText}</span> {item.Descriptions}</span>
                                        </div>


                                    </div>


                                </div>

                            ))}



                        </div>
                    </div>

                    <div className="row w-100 m-auto home-mobile">
                        <hr className='m-0' />
                        <h1 className='section-heading-big only-mobile-heading' id='hello' style={{ fontWeight: "300", fontSize: "8vw", textAlign: "start" }}>
                            <TypeAnimation
                                sequence={[
                                    // Same substring at the start will only be typed out once, initially
                                    'We take care of it all,  ',
                                    6000, // wait 1s before replacing "Mice" with "Hamsters"

                                ]}
                                wrapper="h1"
                                speed={200}
                                style={{ fontWeight: "300", fontSize: "8vw", textAlign: "start", margin: "0px" }}
                                // style={{ fontSize: '2em', display: 'block', fontSize: "8vw", fontWeight: "400px", textAlign: "center" }}
                                repeat={Infinity}
                            />
                            from the small stuff to the big picture.</h1>
                        <br />    <br />
                        <h1 className='text-white' style={{ fontSize: "20px", }}>Vaar ensures </h1>
                        <h1 className='text-white' style={{ position: "absolute", marginTop: "32px", fontSize: "20px" }}>So, you can </h1>
                        <Carousel afterChange={onChange} ref={carouselRef} dots={true} >

                            {ValueData.map((item, index) => (

                                <div className="col-lg-6" key={index}>
                                    <div className='right-side-container'>
                                        <div>

                                            <h2 style={{ color: "#D4F604", fontWeight: "200" }}>{item.title}</h2>
                                            <br />
                                            <p style={{ color: "white", fontWeight: "200", fontSize: "20px", marginTop: "10px" }}><span style={{ fontWeight: "200", color: "#D4F604" }}>{item.colorText}</span> {item.Descriptions}</p>
                                        </div>


                                    </div>


                                </div>

                            ))}
                        </Carousel>


                    </div>


                    {/* <div className="padding-slite"></div> */}
                    {/* <div className="padding-slite"></div> */}
                    <div className='founder-info'>
                        <div className="row">
                            <div className="col-lg-6" style={{ display: "flex", justifyContent: "center", position: "relative" }}>
                                <div className='content-founder mt-5'>
                                    <i class="bi bi-quote quote-icon"></i>
                                    <div>
                                        <h1>New concepts are no longer intimidating, and challenges have become puzzles awaiting solutions. With this mindset, we are developing Vaar in the traditionally inaccessible realm of real estate. <br /> The ultimate goal? <b style={{ color: "#D4F604" }}> Digital access to income-generating real estate for ALL.</b></h1>
                                        <img src={founderPicture} alt="Not/loaded" className='owner-mobile-img' />
                                        <h3 style={{ color: "#475467" }}>Founder,</h3>
                                        <h2 style={{ color: "white" }}>Vidhi Kankaria</h2>
                                        <p style={{ fontWeight: "200" }}>New concepts are no longer intimidating, and challenges have become puzzles awaiting solutions. With this mindset, we are developing Vaar in the traditionally inaccessible realm of real estate. The ultimate goal?<br /> <b style={{ color: "#D4F604" }}> Digital access to income-generating real estate for ALL.</b></p>
                                        <span style={{ color: "#475467" }}>Founder, <br /><b style={{ color: "white" }}>Vidhi Kankaria</b></span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 owner-picture"  >
                                <img src={founderPicture} className='founder-img' style={{ borderRadius: "20px" }} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Founder;
