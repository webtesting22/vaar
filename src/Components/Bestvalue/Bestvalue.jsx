import React from 'react';
import "./Bestvalue.css"
import BestvalueData from './BestvalueData';

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
                </div>
            </section>
        </>
    );
}

export default Bestvalue;
