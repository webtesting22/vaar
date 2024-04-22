import { Select } from 'antd';
import { Link } from "react-router-dom"
import "./Allresources.css"
import { Module1, Module2, Module3, Module4 } from './AllResourcesData';
import SignupSection from '../SignUp/SignupSection';
import { Row, Col } from "antd"
import { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import guideimg from "../AllResources/guideimg.jpeg"
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
function AllResources() {
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top when the component mounts or updates
    }, []);
    const module1Ref = useRef(null);
    const module2Ref = useRef(null);
    const module3Ref = useRef(null);
    const module4Ref = useRef(null);

    useEffect(() => {
        if (module1Ref.current) {
            const element = module1Ref.current;
            const yOffset = -100; // Offset from the top
    
            // Check if element is visible and has valid dimensions
            if (element.offsetHeight > 0 && element.offsetTop > 0) {
                const y = element.offsetTop + yOffset;
                window.scrollTo({ top: y, behavior: 'smooth' });
            } else {
                console.error('Element dimensions or position are invalid.');
            }
        }
       
      
    }, []);
    
    
    
    
    return (

        <>
            <div className="section-padding "></div>
            <section style={{ color: "white", backgroundColor: "black" }}>
                <div>
                    <div className="container">
                        <Row>

                            <Col lg={12} md={12}>
                                <div className='team-section-hero' id='team-section-hero'>
                                    <div>
                                        <h2 style={{ fontWeight: "200", fontSize: "50px", color: "#D4F604" }}>101 Real Estate</h2>
                                        <p>An introduction to real estate and other asset classes</p>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={12} md={12}>
                                <div className='team-section-hero2'>
                                    <img src={guideimg} alt="" />
                                    <img src={guideimg} alt="" />
                                    <h2 style={{ fontWeight: "200", fontSize: "50px", color: "#D4F604" }} id='mobile-heading-show'>101 Real Estate</h2>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>

            </section>
            <section>
                <div className="container">
                    <div>
                        {/* <hr className='top-section-heading-hr' /> */}
                        {/* <h1 style={{ fontSize: "50px", color: "#D4F604", fontWeight: "300" }}>101 Real Estate</h1> */}
                        {/* <select class="form-select" aria-label="Default select example">
                            <option selected>Topics</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select> */}
                    </div>
                    {/* <div className="section-heading"></div> */}
                    <div className='moduls-data' >
                        <div className='only-for-pc'>
                            <h4 id="module1" ref={module1Ref} >MODULE 1</h4>
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
                        <div className='container only-for-mobile'>
                            <h4>MODULE 1</h4>
                            <hr />
                            <Swiper
                                spaceBetween={30}
                                pagination={{
                                    clickable: true, // Enable clickable dots
                                }}
                                // modules={[Pagination,Autoplay]}
                                modules={[Pagination]}
                                className="mySwiper"
                            >
                                {Module1.map((item, index) => (
                                    <SwiperSlide>
                                        {/* {.map((item, index) => ( */}
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
                                        {/* ))} */}
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                        {/* <div className="section-padding"></div> */}
                        <div className='only-for-pc'>
                            <h4 >MODULE 2</h4>
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
                        <div className='container only-for-mobile'>
                            <h4>MODULE 2</h4>
                            <hr />
                            <Swiper
                                spaceBetween={30}
                                pagination={{
                                    clickable: true, // Enable clickable dots
                                }}
                                // modules={[Pagination,Autoplay]}
                                modules={[Pagination]}
                                className="mySwiper"
                            >
                                {Module2.map((item, index) => (
                                    <SwiperSlide>
                                        {/* {.map((item, index) => ( */}
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
                                        {/* ))} */}
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                        {/* <div className="section-padding"></div> */}

                        <div className=' only-for-pc'>
                            <h4>MODULE 3</h4>
                            <hr />
                            <div className='all-resources-box'>
                                <div className="row">
                                    {Module3.map((item, index) => {
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

                                    })}

                                </div>

                            </div>
                        </div>
                        <div className='container only-for-mobile'>
                            <h4>MODULE 3</h4>
                            <hr />
                            <Swiper
                                spaceBetween={30}
                                pagination={{
                                    clickable: true, // Enable clickable dots
                                }}
                                modules={[Pagination]}
                                className="mySwiper"
                            >
                                {Module3.map((item, index) => (
                                    <SwiperSlide key={index}>
                                        <div className="col-lg-3 col-md-6 mb-5">
                                            {/* Conditional rendering based on index */}
                                            <Link to={`/SingleResource${index + 1}`}>
                                                <div className='module-box'>
                                                    <img src={item.img} alt="" />
                                                    <h6>{item.subtitle}</h6>
                                                    <h4>{item.title}</h4>
                                                    <span>{item.timing}</span>
                                                </div>
                                            </Link>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                        {/* <div className="section-padding"></div> */}

                        <div className='only-for-pc'>
                            <h4 id="module4" ref={module4Ref}>CONCEPTS</h4>
                            <hr />
                            <div className='all-resources-box'>
                                <div className="row">
                                    {Module4.map((item, index) => (
                                        <div className="col-lg-3 col-md-6 mb-5">
                                            <Link to={`/SingleResource${index + 9}`}>
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
                        <div className='container only-for-mobile'>
                            <h4>CONCEPTS</h4>
                            <hr />
                            <Swiper
                                spaceBetween={30}
                                pagination={{
                                    clickable: true, // Enable clickable dots
                                }}
                                // modules={[Pagination,Autoplay]}
                                modules={[Pagination]}
                                className="mySwiper"
                            >
                                {Module4.map((item, index) => (
                                    <SwiperSlide>
                                        {/* {Module4.map((item, index) => ( */}
                                        <div className="col-lg-3 col-md-6 mb-5">
                                            <Link to={`/SingleResource${index + 9}`}>
                                                <div className='module-box'>
                                                    <img src={item.img} alt="" />
                                                    <h6>{item.subtitle}</h6>
                                                    <h4>{item.title}</h4>
                                                    <span>{item.timing}</span>
                                                </div>
                                            </Link>
                                        </div>
                                        {/* ))} */}
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                </div>

            </section>
            <SignupSection />
        </>
    );
}

export default AllResources;
