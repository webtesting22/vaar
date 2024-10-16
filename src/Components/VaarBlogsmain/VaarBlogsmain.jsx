import React, { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import "./VaarBlogsmain.css";
import { Link } from "react-router-dom";
import blogimage from "../pictures/blogHomeBaneer.svg";
import { Row, Col, message, Card } from "antd";
import BlogDatamain from "./VaarBlogData";
import { BestValueCardsData } from "../Bestvalue/BestvalueData";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper React components
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import topimg from "../VaarBlogsmain/blog-top-img.jpeg";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import blogArrow from "../pictures/About-icons/blogarrow.svg";
import SignupSection from "../SignUp/SignupSection";
function VaarBlogs() {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top when the component mounts or updates
  }, []);

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
      <section className="blog-section-change-back bg-black">
        <div className="container">
          <section style={{ color: "white", backgroundColor: "black" }}>
            <div>
              <div className="container">
                <Row>
                  <Col lg={12} md={12}>
                    <div className="team-section-hero2">
                      <img src={topimg} alt="" />
                      <img src={topimg} alt="" />
                      <h2
                        style={{
                          fontWeight: "200",
                          fontSize: "50px",
                          color: "#D4F604",
                        }}
                        id="mobile-heading-show"
                      >
                        Blogs & Concepts{" "}
                      </h2>
                    </div>
                  </Col>
                  <Col lg={12} md={12}>
                    <div className="team-section-hero" id="team-section-hero">
                      <div>
                        <h2
                          style={{
                            fontWeight: "200",
                            fontSize: "50px",
                            color: "#D4F604",
                          }}
                        >
                          Blogs & Concepts{" "}
                        </h2>
                        <p>Latest insights into the world of real estate </p>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          </section>
          {/* <Row className='row-for-pc'>
                        <Col lg={8} md={8}>
                            <div className='blog-top-img'>
                                <img src={blogimage} alt="" />
                            </div>
                        </Col>
                        <Col lg={16} md={16}>
                            <div className='content-parent-container'>
                                <div className='blog-inside-container'>
                                    <h6 className='owner-tagline-name'>Vidhi Kankaria</h6>
                                    <h1 className='owner-quote-text'>Beyond the Walls: Keeping Up the Potential with Real Estate Management</h1>
                                    <div className='button-animation'>
                                        <br />
                                        <a href="">Read More<i class='bx bx-chevron-right'></i></a>
                                        <span></span>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row> */}
          <div className="Blog-section only-mobile ">
            <div className="container">
              <hr className="top-section-heading-hr" />
              <h1
                className="section-heading-best-value pb-2"
                style={{ color: "#D4F604" }}
              >
                Our Blogs
              </h1>
            </div>
            <div className="container">
              {blogs.map((blog, index) => {
                return (
                  <Link
                  to={{
                    pathname: "/VaarBlogCommon",
                    search: `?title=${encodeURIComponent(blog.blogTitle)}&Description=${encodeURIComponent(blog.blogDescription)}&date=${encodeURIComponent(blog.Date)}&Comment=${encodeURIComponent(blog.blogComment)}&image=${encodeURIComponent(blog.image)}`
                  }}
                >
                  <div className="blog-cards">
                    <img
                      src={blog.image}
                      alt=""
                      style={{ marginBottom: "30px", width: "100%", borderRadius:"5px" }}
                    />
                    <div
                      style={{
                        position: "relative",
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <h5
                        style={{
                          fontSize: "20px",
                          width: "80%",
                          color: "rgb(212, 246, 4)",
                        }}
                      >
                        {blog.blogTitle}
                      </h5>
                      <img
                        src={blogArrow}
                        alt=""
                        style={{ position: "absolute", top: "3px", right: "0" }}
                      />
                    </div>
                    <p style={{ color: "rgb(212, 246, 4)" }}>{blog.subtitle}</p>
                    {/* <p
                      style={{
                        fontSize: "16px",
                        marginBottom: "0px",
                        color: "white",
                      }}
                    >
                      <div>
                        {blog.blogDescription.length > 50
                          ? blog.blogDescription.substring(0, 50) + "..."
                          : blog.blogDescription}
                      </div>

                    </p> */}
                    <div className="Posted">
                      <div>
                        {/* <img src={blog.avtar} alt="Not Found" /> */}
                      </div>
                      <div className="ps-3">
                        <h6 style={{ marginBottom: "3px", color: "white" }}>
                          Vidhi Kanaria
                        </h6>
                        <span>15 Jan 2024</span>
                      </div>
                    </div>
                    <div className="padding-slite"></div>
                    <div className="padding-slite"></div>
                  </div>
                    </Link>
                )
              })}

            </div>
          </div>
        </div>



        {/* blogcards container */}


        <div className="blogs-block text-white ">
          <div className="container">
            {blogs.map((blog, index) => {
              return (


                <Row
                  key={index}
                  className="blog-container-row"
                  style={{ borderBottom: "1px solid rgb(196, 196, 196)" }}
                >
                  {index % 2 === 0 ? (
                    <>
                      <Col lg={12} md={12}>
                        <Link
                          to={{
                            pathname: "/VaarBlogCommon",
                            search: `?title=${encodeURIComponent(blog.blogTitle)}&Description=${encodeURIComponent(blog.blogDescription)}&date=${encodeURIComponent(blog.Date)}&Comment=${encodeURIComponent(blog.blogComment)}&image=${encodeURIComponent(blog.image)}`
                          }}
                        >
                          <div
                            className="blog-title-container"
                            style={{
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              height: "100%",
                              width: "100%",
                            }}
                          >
                            <div>

                              <h1 className="main-blog-heading" style={{ color: "#D4F604" }}>
                                {/* <a
                                  // href="./VaarBlogCommon"
                                  style={{ fontWeight: "400", color: "#D4F604" }}
                                > */}
                                {blog.blogTitle}
                                {/* </a> */}
                              </h1>
                              <p style={{ color: "white" }}>
                                {blog.blogSubtitle.length > 50
                                  ? blog.blogSubtitle.substring(0, 50) + "..."
                                  : blog.blogSubtitle}
                              </p>

                              {/* <p className="text-white">{item.blogContent}</p> */}
                              <div
                                style={{ display: "flex", alignItems: "center" }}
                              >
                                <span
                                  style={{
                                    marginRight: "10px",
                                    display: "flex",
                                    alignItems: "center",
                                    color: "white",
                                  }}
                                >
                                  <i
                                    class="bx bxs-calendar"
                                    style={{ fontSize: "20px" }}
                                  ></i>
                                </span>
                                <p
                                  style={{
                                    margin: "0px",
                                    color: "white",
                                    fontSize: "14px",
                                  }}
                                >
                                  Published 20 Jan 2024
                                  {/* {item.Date} */}
                                </p>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </Col>
                      <Col
                        lg={12}
                        md={12}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Link
                          to={{
                            pathname: "/VaarBlogCommon",
                            search: `?title=${encodeURIComponent(blog.blogTitle)}&Description=${encodeURIComponent(blog.blogDescription)}&date=${encodeURIComponent(blog.Date)}&Comment=${encodeURIComponent(blog.blogComment)}&image=${encodeURIComponent(blog.image)}`
                          }}
                        >
                          <div className="img-style-container">
                            <img src={blog.image} alt=""  style={{ borderRadius:"5px"}}/>
                            {console.log("imagesfsfsfsfs", blog.image)}
                          </div>
                        </Link>
                      </Col>
                    </>
                  ) : (
                    <>
                      <Col
                        lg={12}
                        md={12}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Link
                          to={{
                            pathname: "/VaarBlogCommon",
                            search: `?title=${encodeURIComponent(blog.blogTitle)}&Description=${encodeURIComponent(blog.blogDescription)}&date=${encodeURIComponent(blog.Date)}&Comment=${encodeURIComponent(blog.blogComment)}&image=${encodeURIComponent(blog.image)}`
                          }}
                        >
                          <div className="img-style-container">
                            <img src={blog.image} alt="" style={{ borderRadius:"5px"}}/>
                          </div>
                        </Link>
                      </Col>
                      <Col lg={12} md={12}>
                        <Link
                          to={{
                            pathname: "/VaarBlogCommon",
                            search: `?title=${encodeURIComponent(blog.blogTitle)}&Description=${encodeURIComponent(blog.blogDescription)}&date=${encodeURIComponent(blog.Date)}&Comment=${encodeURIComponent(blog.blogComment)}&image=${encodeURIComponent(blog.image)}`
                          }}
                        >
                          <div
                            className="blog-title-container"
                            style={{
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              height: "100%",
                              width: "100%",
                            }}
                          >
                            <div>
                              <h1 className="main-blog-heading" style={{ color: "#D4F604" }}>
                                {blog.blogTitle}
                              </h1>
                              <p style={{ color: "white" }}>
                                {blog.blogSubtitle.length > 50
                                  ? blog.blogSubtitle.substring(0, 50) + "..."
                                  : blog.blogSubtitle}
                              </p>

                              <div
                                style={{ display: "flex", alignItems: "center" }}
                              >
                                <span
                                  style={{
                                    margin: "0px 10px",
                                    display: "flex",
                                    alignItems: "center",
                                    color: "white",
                                  }}
                                >
                                  <i
                                    class="bx bxs-calendar"
                                    style={{ fontSize: "20px" }}
                                  ></i>
                                </span>
                                <p
                                  style={{
                                    margin: "0px",
                                    fontSize: "14px",
                                    color: "white",
                                  }}
                                >
                                  Published 20 Jan 2024
                                  {/* {item.Date} */}
                                </p>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </Col>
                    </>
                  )}
                </Row>
              )
            })}
          </div>
        </div>
      </section>
      {/* <Row gutter={[16, 16]}>
        {blogs.map((blog, index) => {
          console.log("Blog array:", blogs); // Log the blogs array
          console.log("Current blog:", blog); // Log the current blog object
          return (
            <Col key={index} xs={24} sm={12} md={8} lg={6}>
              <Link
                to={{
                  pathname: "/VaarBlogCommon",
                  search: `?title=${encodeURIComponent(blog.blogTitle)}&content=${encodeURIComponent(blog.blogDescription)}&date=${encodeURIComponent(blog.Date)}`
                }}
              >
                <Card
                  title={blog.blogTitle}
                  cover={<img alt="Blog Cover" src={blog.blogImg} />}
                  style={{ marginBottom: 16 }}
                >
                  <p>{blog.title}</p>
                  <p>{blog.blogContent}</p>
                  <p>Date: {blog.Date}</p>
                </Card>
              </Link>
            </Col>
          );
        })}
      </Row> */}
      <SignupSection />
    </>
  );
}

export default VaarBlogs;
