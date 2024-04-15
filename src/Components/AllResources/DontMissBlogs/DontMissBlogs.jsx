import React, { useRef } from "react";
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
        {
            img: cardimg2,
            concept: "CONCEPT 5 - 15 MINUTE READ",
            cardTitle: "Access the Largest Asset Class in the US"
        },
        {
            img: cardimg3,
            concept: "CONCEPT 6 - 15 MINUTE READ",
            cardTitle: "Technology & Vaar"
        },
    ]
    return (
        <>
            <div className='all-resources-box for-pc'>
                <div className="row m-auto w-100">
                    <h1>Don’t miss these</h1>
                    <div className="padding-slite"></div>
                    {DontMissThese.map((item, index) => (
                        <div className="col-lg-4 mb-5">
                            {/* <Link to={`/SingleResource${index + 4}`}> */}
                            <div className='module-box'>
                                <img src={item.img} alt="" />
                                <h6>{item.concept}</h6>
                                <h4>{item.cardTitle}</h4>
                            </div>
                            {/* </Link> */}
                        </div>
                    ))}



                </div>

            </div>
            <div className='all-resources-box for-mobile'>
                <div className="row m-auto w-100">
                    <h1>Don’t miss these</h1>
                    <div className="padding-slite"></div>

                    <Carousel afterChange={onChange} ref={carouselRef} dots={true} autoplay>
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