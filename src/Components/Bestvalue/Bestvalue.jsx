import React, { useRef, useState, useEffect } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import "./Bestvalue.css"
import { BestvalueData, BestValueCardsData } from './BestvalueData';
import ownerQuoteimg from "../Bestvalue/blog-common.jpeg"
// import { FreeMode, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { Link } from 'react-router-dom'; // Import Link from React Router

import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import blogArrow from "../pictures/About-icons/blogarrow.svg"

function Bestvalue() {
    const [blogs, setBlogs] = useState([]);
    const pageLinks = ['/SingleResource3', '/SingleResource4', '/SingleResource11', '/SingleResource13'];
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    "https://vaarbackend-two.vercel.app/blogs",
                    {
                        method: "GET",
                        headers: {
                            "Content-Type": "application/json",
                        },
                    }
                );

                if (!response.ok) {
                    throw new Error(`Server responded with status: ${response.status}`);
                }

                const data = await response.json();
                setBlogs(data); // Update state with fetched data
                console.log("Show data", data);
                // message.success('Blogs fetched successfully.');
            } catch (error) {
                console.error("Error:", error.message);
                // message.error("An error occurred. Please try again later.");
            }
        };

        fetchData();
    }, []);
    return (
        <>
            <section style={{ backgroundColor: "#000000", color: "white" }}>
                <div className='container'>
                    <div className='top-section'>
                        <hr className='top-section-heading-hr' />
                        <h1 className='section-heading-best-value' style={{ fontWeight: "300", fontSize: "50px", textAlign: "start" }}>Resources</h1>
                        <p style={{ fontWeight: "200" }}>The first step towards better decisions is knowledge, especially about the stuff that seems daunting. We’ve collated, curated, and created quick 101s to light your real estate investing journey.  </p>
                        <div className="padding-slite"></div>
                        <p className=' text-start' style={{ textTransform: "uppercase", color: "#D4F604",marginBottom:"10px" }}>REAL ESTATE: A COURSE</p>

                    </div>

                    <Swiper
                        slidesPerView={1}
                        spaceBetween={30}
                        freeMode={true}
                        loop={true} // Enable infinite loop
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: true,
                        }}
                        breakpoints={{
                            768: {
                                slidesPerView: 4, // Slides per view for screens >= 768px (for mobile devices)
                            },
                        }}
                        style={{height:"50vh"}}
                        pagination={true}
                        // pagination={{ clickable: true }}
                        id="mySwiper"
                        modules={[Autoplay, Pagination, Navigation]}
                    >
                        <div className='cards-section'>
                            {/* <div className="row m-auto"> */}
                            {BestvalueData.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <Link to={pageLinks[index]}>
                                        <div className='content-section bg-white' id='content-section'>
                                            <img src={item.img} alt="vaar concepts" />
                                            <div className='footer-card' id='footer-card'>
                                                <h3 className='Card-title text-white'>{item.title}</h3>
                                                <div className='button-animation' id='button-animation'>
                                                    <a href="">Read More <i className='bx bx-chevron-right' style={{marginTop:"3px"}}></i></a>
                                                    <span></span>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </SwiperSlide>
                            ))}
                            {/* </div> */}

                        </div>
                        {/* <SwiperSlide style={{ height: "50vh", backgroundColor:"red" }}>Slide 1</SwiperSlide> */}

                    </Swiper>

                    <br />
                    {/* <div className='cards-section'>
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

                    </div> */}
                    <div className="padding-slite"></div>
                    <div className='blogs-section-pc'>

                        {/* <div className="section-padding"></div> */}
                        {/* <h1 style={{textAlign:"center", fontWeight:"300", fontSize:"50px"}}>Blogs</h1> */}

                        {/* <div className="section-padding"></div> */}
                        <p className=' text-start' style={{ textTransform: "uppercase", color: "#D4F604",marginBottom:"10px" }}>LEATEST IN THE INDUSTRY</p>
                        {/* <hr /> */}


                        <div className='owner-quote'>
                            <div>
                                <Link
                                    to={{
                                        pathname: "/VaarBlogCommon",
                                        search: `?title=${encodeURIComponent(blogs[0]?.blogTitle)}&Description=${encodeURIComponent(blogs[0]?.blogDescription)}&date=${encodeURIComponent(blogs[0]?.Date)}&Comment=${encodeURIComponent(blogs[0]?.blogComment)}&image=${encodeURIComponent(blogs[0]?.image)}`
                                    }}
                                >
                                    <div className="row m-auto">
                                        <div className="col-lg-6 col-md-6" style={{paddingLeft:"0px"}}>
                                            <div className='inside-content1 h-100'>
                                                <img src={blogs[0]?.image} className='w-100 h-100' alt="vaar img" />
                                            </div>
                                        </div>
                                        
                                        <div className="col-lg-6 col-md-6" id='Owner_info-content'>
                                            {/* <Link to="/VaarBlogCommon"> */}
                                            <div className='inside-content2'>
                                                <div className='parent-div'>
                                                    <div style={{ position: "relative" }}>
                                                        <span>Powered by Vaar</span>
                                                        <p style={{ color: "#D4F604" }}>{blogs[0]?.blogTitle}</p>
                                                        <div className='button-animation-without-absolute p-0'>
                                                            <a href="">Read More</a>
                                                            <span className='m-0'></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* </Link> */}
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div style={{ display: "flex", gap: "2rem" }}>
                                {blogs.map((blog, index) => {
                                    if (index === 0) {
                                        // Render the first blog in a separate row
                                        return null;
                                    } else if (index === 1 || index === 2) {
                                        // Render the remaining blogs in a separate row with a red background
                                        return (
                                            <div className='remaining-blog-container' key={index} >
                                                <Link
                                                    to={{
                                                        pathname: "/VaarBlogCommon",
                                                        search: `?title=${encodeURIComponent(blog.blogTitle)}&Description=${encodeURIComponent(blog.blogDescription)}&date=${encodeURIComponent(blog.Date)}&Comment=${encodeURIComponent(blog.blogComment)}&image=${encodeURIComponent(blog.image)}`
                                                    }}
                                                >
                                                    <div className='Infomation-cards' >
                                                        <div className="padding-slite"></div>
                                                        {/* <div className="section-padding"></div> */}


                                                        {/* <Link to="/VaarBlogCommon" className='text-white'> */}

                                                        <div data-aos="fade-up"
                                                            data-aos-anchor-placement="top-bottom">
                                                            <img src={blog.image} alt="" style={{ width: "100%" }} />
                                                            <div className="padding-slite"></div>
                                                            <h5 style={{ fontSize: "24px", color: "#D4F604" }}>{blog.blogTitle}</h5>

                                                            {/* <p style={{ fontSize: "16px", marginTop: "20px" }}>{blog.description}</p> */}
                                                            <br />
                                                            <div className='m-0 p-0 read-more-btn'>
                                                                <a href="">Read More</a>
                                                                <span></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* </Link> */}




                                                </Link>
                                            </div>
                                        );
                                    } else {
                                        return null; // Render nothing for other index numbers
                                    }
                                })}
                            </div>

                        </div>

                        {/* <div className='Infomation-cards'>
                            <div className="padding-slite"></div>
                            <div className="section-padding"></div>
                            <div className="row m-auto ">
                                {BestValueCardsData.map((item, index) => (
                                    <Link to="/VaarBlogCommon" className='text-white'>
                                        <div className="col-lg-6 col-md-6 " >
                                            <div data-aos="fade-up"
                                                data-aos-anchor-placement="top-bottom">
                                                <h5 style={{ fontSize: "24px" }}>{item.title}</h5>

                                                <p style={{ fontSize: "16px", marginTop: "20px" }}>{item.description}</p>
                                                <br />
                                                <div className='m-0 p-0 read-more-btn'>
                                                    <a href="">Read More</a>
                                                    <span></span>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>

                        </div> */}
                    </div>


                </div>

                <div className='Blog-section only-mobile ' >
                    <div className='container'>
                        {/* <hr  className='top-section-heading-hr'/> */}
                        <p style={{ color: "#D4F604", marginBottom:"10px" }}>LEATEST IN THE INDUSTRY</p>
                        {/* <h1 className='section-heading-best-value pb-0'>Our Blogs</h1> */}
                        <div className='container p-0'>

                            <Swiper
                                spaceBetween={30}
                                pagination={{
                                    clickable: true,
                                }}
                                autoplay={{
                                    delay: 2000,
                                    disableOnInteraction: false,
                                }}
                                modules={[Autoplay,Pagination]}
                                className="mySwiper"
                                style={{height:"43vh"}}
                            >
                                {blogs.map((blog, index) => (
                                    <SwiperSlide key={index}>
                                        {/* Update the Link component to include dynamic parameters */}
                                        <Link
                                            to={{
                                                pathname: "/VaarBlogCommon",
                                                search: `?title=${encodeURIComponent(blog.blogTitle)}&Description=${encodeURIComponent(blog.blogDescription)}&date=${encodeURIComponent(blog.Date)}&Comment=${encodeURIComponent(blog.blogComment)}&image=${encodeURIComponent(blog.image)}`
                                            }}
                                        >
                                            {console.log("apicol" ,blog.blogTitle)}
                                            <div className='blog-cards'>
                                                <img src={blog.image} alt="vaar blogs" style={{ marginBottom: "30px", width: "100%" }} />
                                                <div style={{ position: "relative", justifyContent: "space-between" }}>
                                                    <h5 style={{ fontSize: "20px", width: "100%", color: "rgb(212, 246, 4)" }}>{blog.blogTitle}</h5>
                                                    <img src={blogArrow} alt="vaar blogs" style={{ position: "absolute", top: "3px", right: "0" }} />
                                                </div>
                                                {/* <p style={{ fontSize: "16px", marginBottom: "0px", color: "white" }}>{blog.blogDescription}</p> */}
                                            </div>
                                        </Link>
                                    </SwiperSlide>
                                ))}


                            </Swiper>
                        </div>

                    </div>
                    <div className="padding-slite"></div>
                    <div className="padding-slite"></div>
                </div>

            </section>
        </>
    );
}

export default Bestvalue;
