import React, { useRef, useState, useEffect } from "react";
import "./VaarBlogCommon.css"
import blogimg1 from "../VaarBlogs/blog-common.jpeg"
import bloginside1 from "./bloginside1.svg"
import Ellipse from "../../AllResources/Ellipse.svg"
import SignupSection from "../../SignUp/SignupSection";
import { useLocation } from "react-router-dom";
import BlogCarousal from "./BlogCarousal";
import { useParams } from "react-router-dom";
import { Row, Col } from "antd";
const VaarBlogCommon = (props) => {
    const location = useLocation();
    console.log("Location:", location); // Check the location object

    // Extract data from search string
    const params = new URLSearchParams(location.search);
    const image = params.get("image");
    const title = params.get('title');
    const Description = params.get('Description');
    const date = params.get('date');
    const Comment = params.get('Comment')
    console.log("hgvjchdvhcfvtayddfcxiytsafdytdxsyt", title);
    console.log("$$$$$", Description);
    // Access the state property if available
    // const { state } = props.location || {};
    // const { title, content, date } = state || {};

    // Alternatively, you can destructure directly in the function parameters
    // const VaarBlogCommon = ({ location: { state: { title, content, date } } }) => {

    // console.log(title, content, date);


    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top when the component mounts or updates
    }, []);

    return (
        <>
            <section style={{ backgroundColor: "black", padding: "2rem 0rem" }}>
                <div className="container">
                    {/* <div className="specific-div">
                        Render props data in the specific div
                        <h1>{title}</h1>
                        <p>{content}</p>
                        <p>{date}</p>
                    </div> */}
                    {/* <div className="blog-top-part" >
                        <h6 className="publishDate" style={{ color: "white" }}>Published 20 Jan 2024</h6>
                        <h1 style={{ color: "#d4f604", fontSize: "50px", fontWeight: "300" }}>{title}</h1>
                        <div className="blog-section-spacer"></div>
                        <img src={image} alt="" className="blog-common-image" />
                    </div> */}
                    <div className="blog-section-spacer"></div>
                    <div className="blog-section-spacer"></div>
                    <div className="blog-section-spacer"></div>
                    <Row

                        // className="blog-container-row"
                        // style={{ borderBottom: "1px solid rgb(196, 196, 196)" }}
                    >
                    <Col lg={12} md={12}>

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
                                    {title}
                                    {/* </a> */}
                                </h1>

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

                        <div className="img-style-container">
                            <img src={image} alt="" style={{ borderRadius: "5px" }} />
                            {/* {console.log("imagesfsfsfsfs", blog.image)} */}
                        </div>

                    </Col>
                    </Row>
                    <div className="blog-content-container text-white">
                        <div dangerouslySetInnerHTML={{ __html: Description }} />
                        {/* <div dangerouslySetInnerHTML={{ __html: Comment }} /> */}
                    </div>


                </div>

            </section>
            <div className="padding-slite"></div>
            {/* <BlogCarousal /> */}
            <SignupSection />
        </>
    )
}
export default VaarBlogCommon;