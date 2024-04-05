import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import BlogCommonImg from "../VaarBlogs/BlogCommonImg.svg"
import "./BlogCarousal.css"
import { Autoplay } from 'swiper/modules';
import blogArrow from "../../pictures/About-icons/blogarrow.svg"
import avtarr1 from "../../pictures/Avatar.svg"
function BlogCarousal() {
    const blogpostData = [
        {
            img: BlogCommonImg,
            blogDescription: "Lorem ipsum dolor sit amet consectetur adipiscing elit ultrices scelerisque mi sed interdum lacus tellus in mi orc, netus nisl laoreet.",
            authorName: "John Carter",
            position: "Designer at VAAR"
        },
        {
            img: BlogCommonImg,
            blogDescription: "Lorem ipsum dolor sit amet consectetur adipiscing elit ultrices scelerisque mi sed interdum lacus tellus in mi orc, netus nisl laoreet.",
            authorName: "John Carter",
            position: "Designer at VAAR"
        },
        {
            img: BlogCommonImg,
            blogDescription: "Lorem ipsum dolor sit amet consectetur adipiscing elit ultrices scelerisque mi sed interdum lacus tellus in mi orc, netus nisl laoreet.",
            authorName: "John Carter",
            position: "Designer at VAAR"
        },
        {
            img: BlogCommonImg,
            blogDescription: "Lorem ipsum dolor sit amet consectetur adipiscing elit ultrices scelerisque mi sed interdum lacus tellus in mi orc, netus nisl laoreet.",
            authorName: "John Carter",
            position: "Designer at VAAR"
        },
        {
            img: BlogCommonImg,
            blogDescription: "Lorem ipsum dolor sit amet consectetur adipiscing elit ultrices scelerisque mi sed interdum lacus tellus in mi orc, netus nisl laoreet.",
            authorName: "John Carter",
            position: "Designer at VAAR"
        },
    ]
    return (
        <>
            <section style={{ backgroundColor: "#F2F2F2" }}>

                <div className="blog-section-spacer"></div>
                <div className="container" id="blog-carousal">
                    <h1>More like this</h1>
                    <div className="blog-section-spacer"></div>
                    <Swiper
                        slidesPerView={2} 
                        spaceBetween={30}
                        freeMode={true}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[FreeMode, Pagination]}
                        className="mySwiper"

                    >
                        {blogpostData.map((item, index) => (
                            <SwiperSlide key={index}>
                                <div className="blog-carousal-card">
                                    <div className="left-side-img-blog">
                                        <img src={item.img} alt="" />
                                    </div>
                                    <div className="right-side-content-container">
                                        <div>
                                            <p>{item.blogDescription}</p>
                                            <h6>{item.authorName}</h6>
                                            <span>{item.position}</span>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                   
                </div>
                <div className='Blog-section only-mobile ' style={{ padding: "1rem 0rem" }}>
                    <h1 className='section-heading-best-value pb-4'>Our Blogs</h1>
                    <div className='container'>

                        <Swiper
                            spaceBetween={30}
                            pagination={{
                                clickable: true,
                            }}
                            autoplay={{
                                delay: 2000,
                                disableOnInteraction: false,
                            }}
                            modules={[Autoplay]}
                            className="mySwiper"
                        >
                            {blogpostData.map((item, index) => (
                                <SwiperSlide>
                                    <div className='blog-cards'>
                                        <img src={item.img} alt="" style={{ marginBottom: "30px", width: "100%" }} />
                                        <div style={{ position: "relative", display: "flex", justifyContent: "space-between" }}>
                                            <h5 style={{ fontSize: "20px", color: "black", width: "80%" }}>{item.title}</h5>
                                            <img src={blogArrow} alt="" style={{ position: "absolute", top: "3px", right: "0" }} />
                                        </div>
                                        <p style={{ fontSize: "16px", color: "#475467", marginBottom: "0px" }}>{item.blogDescription}</p>
                                        <div className='Posted'>
                                            <div><img src={avtarr1} alt="Not Found" /></div>
                                            <div className='ps-3'>
                                                <h6 style={{ marginBottom: "3px", color: "black" }}>Vidhi Kanaria</h6>
                                                <span>15 Jan 2024</span>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}

                        </Swiper>
                    </div>
                </div>
            </section>
        </>
    )
}
export default BlogCarousal;