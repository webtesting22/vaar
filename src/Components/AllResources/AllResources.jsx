import React from 'react';
import { Select } from 'antd';
import "./Allresources.css"
import { Module1, Module2,Module3,Module4 } from './AllResourcesData';
function AllResources() {

    return (
        <>
            <div className="section-padding bg-white"></div>
            <section className='bg-white'>
                <div className="container">
                    <div>
                        <h1 style={{ fontSize: "55px" }}>All resources</h1>
                        <select class="form-select"  aria-label="Default select example">
                            <option selected>Topics</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                    {/* <div className="section-heading"></div> */}
                    <div className='moduls-data'>
                        <div className='mb-4 mt-5'>
                            <h4>Module 1</h4>
                            <hr />
                            <div className='all-resources-box'>
                                <div className="row">
                                    {Module1.map((item, index) => (
                                        <div className="col-lg-4 mb-5">
                                            <div className='module-box'>
                                                <img src={item.img} alt="" />
                                                <h6>{item.subtitle}</h6>
                                                <h4>{item.title}</h4>
                                            </div>
                                        </div>
                                    ))}

                                </div>

                            </div>

                        </div>
                        {/* <div className="section-padding"></div> */}
                        <div className='mb-4 mt-5'>
                            <h4>Module 2</h4>
                            <hr />
                            <div className='all-resources-box'>
                                <div className="row">
                                    {Module2.map((item, index) => (
                                        <div className="col-lg-4 mb-5">
                                            <div className='module-box'>
                                                <img src={item.img} alt="" />
                                                <h6>{item.subtitle}</h6>
                                                <h4>{item.title}</h4>
                                            </div>
                                        </div>
                                    ))}

                                </div>

                            </div>
                        </div>
                        {/* <div className="section-padding"></div> */}

                        <div className='mb-4 mt-5'>
                            <h4>Module 3</h4>
                            <hr />
                            <div className='all-resources-box'>
                                <div className="row">
                                    {Module3.map((item, index) => (
                                        <div className="col-lg-4 mb-5">
                                            <div className='module-box'>
                                                <img src={item.img} alt="" />
                                                <h6>{item.subtitle}</h6>
                                                <h4>{item.title}</h4>
                                            </div>
                                        </div>
                                    ))}

                                </div>

                            </div>
                        </div>
                        {/* <div className="section-padding"></div> */}

                        <div className='mb-4 mt-5'>
                            <h4>Module 4</h4>
                            <hr />
                            <div className='all-resources-box'>
                                <div className="row">
                                    {Module4.map((item, index) => (
                                        <div className="col-lg-4 mb-5">
                                            <div className='module-box'>
                                                <img src={item.img} alt="" />
                                                <h6>{item.subtitle}</h6>
                                                <h4>{item.title}</h4>
                                            </div>
                                        </div>
                                    ))}

                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    );
}

export default AllResources;
