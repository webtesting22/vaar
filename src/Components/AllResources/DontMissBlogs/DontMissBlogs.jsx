import React from "react";
import cardimg1 from "../Resources2/card1.svg"
import cardimg2 from "../Resources2/card2.svg"
import cardimg3 from "../Resources2/card3.svg"
import { Link } from "react-router-dom";
function DontMissBlog() {
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
            <div className='all-resources-box'>
                <div className="row m-auto w-100">
                    <h1 style={{color:"white"}}>Don’t miss these</h1>
                    <div className="padding-slite"></div>
                    {DontMissThese.map((item, index) => (
                        <div className="col-lg-4 mb-5">
                            <Link to={`/SingleResource${index+1}`}>
                            <div className='module-box'>
                                <img src={item.img} alt="" />
                                <h6>{item.concept}</h6>
                                <h4>{item.cardTitle}</h4>
                            </div>
                            </Link>
                        </div>
                    ))}

                </div>

            </div>
        </>
    )
};
export default DontMissBlog;