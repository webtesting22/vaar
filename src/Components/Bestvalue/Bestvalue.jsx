import React from 'react';
import "./Bestvalue.css"
import { BestvalueData, BestValueCardsData } from './BestvalueData';
import ownerQuoteimg from "../pictures/ownerQuote.png"

function Bestvalue() {
    return (
        <>
            <section style={{ backgroundColor: "#F2F2F2" }}>
                <div className='container'>
                    <div className='top-section'>
                        <h1 className='section-heading'>Your Best Value Proposition</h1>
                        <p className='section-para text-center'>Learn more about the real-estate industry through our quick courses</p>

                    </div>
                    <br /><br />
                    <div className='cards-section'>
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

                    </div>
                    <div className="section-padding"></div>
                    <div className='owner-quote'>
                        <div className="row m-auto">
                            <div className="col-lg-4 col-md-4">
                                <div className='inside-content1'>
                                    <img src={ownerQuoteimg} className='w-100' alt="" />
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
                    <div className="section-padding"></div>
                    <div className='Infomation-cards'>
                        <div className="row m-auto">
                            {BestValueCardsData.map((item, index) => (
                                <div className="col-lg-6 col-md-6">
                                    <div>
                                        <h5>{item.title}</h5>
                                        <p>{item.description}</p>
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
            </section>
        </>
    );
}

export default Bestvalue;
