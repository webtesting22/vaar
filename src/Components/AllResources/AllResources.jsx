import { Select } from 'antd';
import { Link } from "react-router-dom"
import "./Allresources.css"
import { Module1, Module2, Module3, Module4 } from './AllResourcesData';
import SignupSection from '../SignUp/SignupSection';
import { useEffect } from 'react';
function AllResources() {
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top when the component mounts or updates
      }, []);
    return (
        
        <>
            <div className="section-padding "></div>
            <section>
                <div className="container">
                    <div>
                        <h1 style={{ fontSize: "50px",color:"white",fontWeight:"300" }}>101 Real Estate</h1>
                        {/* <select class="form-select" aria-label="Default select example">
                            <option selected>Topics</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select> */}
                    </div>
                    {/* <div className="section-heading"></div> */}
                    <div className='moduls-data'>
                        <div >
                            <h4>MODULE 1</h4>
                            <hr />
                            <div className='all-resources-box'>
                                <div className="row">
                                    {Module1.map((item, index) => (
                                        <div className="col-lg-3 col-md-6 col-md-6 mb-5">
                                            <Link to={`/SingleResource${index + 1}`}>
                                                <div className='module-box'>
                                                    <img src={item.img} alt="" />
                                                    <h6>{item.subtitle}</h6>
                                                    <h4>{item.title}</h4>
                                                    <span>{item.timing}</span>
                                                </div>
                                            </Link>
                                        </div>
                                    ))}

                                </div>

                            </div>

                        </div>
                        {/* <div className="section-padding"></div> */}
                        <div >
                            <h4>MODULE 2</h4>
                            <hr />
                            <div className='all-resources-box'>
                                <div className="row">
                                    {Module2.map((item, index) => (
                                        <div className="col-lg-3 col-md-6 mb-5">
                                            <Link to={`/SingleResource${index + 4}`}>
                                                <div className='module-box'>
                                                    <img src={item.img} alt="" />
                                                    <h6>{item.subtitle}</h6>
                                                    <h4>{item.title}</h4>
                                                    <span>{item.timing}</span>
                                                </div>
                                            </Link>

                                        </div>
                                    ))}

                                </div>

                            </div>
                        </div>
                        {/* <div className="section-padding"></div> */}

                        <div >
                            <h4>MODULE 3</h4>
                            <hr />
                            <div className='all-resources-box'>
                                <div className="row">
                                    {Module3.map((item, index) => {
                                        if (index == 1 || index == 2 || index) {
                                            return (
                                                <div className="col-lg-3 col-md-6 mb-5">
                                                    <Link to={`/SingleResource${index + 7}`}>
                                                        <div className='module-box'>
                                                            <img src={item.img} alt="" />
                                                            <h6>{item.subtitle}</h6>
                                                            <h4>{item.title}</h4>
                                                            <span>{item.timing}</span>
                                                        </div>
                                                    </Link>
                                                </div>
                                            )
                                        } else {
                                            return (
                                                <div className="col-lg-3 col-md-6 mb-5">
                                                    <Link to={`/SingleResource${index + 6}`}>
                                                        <div className='module-box'>
                                                            <img src={item.img} alt="" />
                                                            <h6>{item.subtitle}</h6>
                                                            <h4>{item.title}</h4>
                                                            <span>{item.timing}</span>
                                                        </div>
                                                    </Link>
                                                </div>
                                            )
                                        }
                                    })}

                                </div>

                            </div>
                        </div>
                        {/* <div className="section-padding"></div> */}

                        <div >
                            <h4>CONCEPTS</h4>
                            <hr />
                            <div className='all-resources-box'>
                                <div className="row">
                                    {Module4.map((item, index) => (
                                        <div className="col-lg-3 col-md-6 mb-5">
                                            <Link to={`/SingleResource${index + 11}`}>
                                                <div className='module-box'>
                                                    <img src={item.img} alt="" />
                                                    <h6>{item.subtitle}</h6>
                                                    <h4>{item.title}</h4>
                                                    <span>{item.timing}</span>
                                                </div>
                                            </Link>
                                        </div>
                                    ))}

                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </section>
            <SignupSection />
        </>
    );
}

export default AllResources;
