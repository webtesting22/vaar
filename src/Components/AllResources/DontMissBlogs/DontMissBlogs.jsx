import React, { useRef, useState } from "react";
import cardimg1 from "../Resources2/card1.svg"
import cardimg2 from "../Resources2/card2.svg"
import cardimg3 from "../Resources2/card3.svg"
import { Link } from "react-router-dom";
import { Carousel } from "antd"
import "./DontMissBlogs.css"
function DontMissBlog() {
    const onChange = (currentSlide) => {
        // console.log(currentSlide);
    };

    const contentStyle = {
        margin: 0,
        height: '160px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
    };
    const carouselRef = useRef(null);

    const handlePrev = () => {
        carouselRef.current.prev();
    };

    const handleNext = () => {
        carouselRef.current.next();
    };
    

    const DontMissThese = [
        {
            img: cardimg1,
            concept: "CONCEPT 4 - 15 MINUTE READ",
            cardTitle: "Risk-Return Analysis & Vaar"
        },

        // {
        //     img: cardimg2,
        //     concept: "CONCEPT 5 - 15 MINUTE READ",
        //     cardTitle: "Access the Largest Asset Class in the US"
        // },
        // {
        //     img: cardimg3,
        //     concept: "CONCEPT 6 - 15 MINUTE READ",
        //     cardTitle: "Technology & Vaar"
        // },
    ]
    const index =[]
    
    return (
        <>
            <div className='all-resources-box for-pc'>
                <div className="row m-auto w-100" style={{ display: "flex", justifyContent: "center" }}>
                    <h1 className="text-white text-center">Don’t miss these</h1>
                    <div className="padding-slite"></div>
                    <div className="dont-miss-this-btn" style={{ display: "flex", justifyContent: "center", alignItems:"center" }}>
                        <button style={{padding:"2px 10px",margin:"0px 20px"}}><i class='bx bx-skip-previous' ></i> </button>
                        {DontMissThese.map((item, index) => (
                            <div className="col-lg-4 mb-5" key={index}>

                                <div className='module-box'>
                                    <img src={item.img} alt="" />
                                    <h6>{item.concept}</h6>
                                    <h4>{item.cardTitle}</h4>
                                </div>

                            </div>
                        ))}
                        <Link to={`/SingleResource${index+1}`}>
                        <button style={{padding:"2px 10px",margin:"0px 20px"}}> <i class='bx bx-skip-next' ></i> </button>
                        </Link>
                    </div>
                </div>

            </div>
            <div className='all-resources-box for-mobile'>
                <div className="row m-auto w-100">
                    <h1 className="text-white">Don’t miss these</h1>
                    <div className="padding-slite"></div>

                    <Carousel afterChange={onChange} ref={carouselRef} dots={true} >
                        {DontMissThese.map((item, index) => (
                            <div className="col-lg-4 mb-5">

                                <div className='module-box'>
                                    <img src={item.img} alt="" />
                                    <h6>{item.concept}</h6>
                                    <h4>{item.cardTitle}</h4>
                                </div>

                            </div>
                        ))}
                    </Carousel>



                </div>

            </div>
        </>
    )
};
export default DontMissBlog;