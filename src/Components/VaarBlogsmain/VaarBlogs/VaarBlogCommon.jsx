import React, { useRef, useState, useEffect } from "react";
import "./VaarBlogCommon.css"
import blogimg1 from "../VaarBlogs/blog-common.jpeg"
import bloginside1 from "./bloginside1.svg"
import Ellipse from "../../AllResources/Ellipse.svg"
import SignupSection from "../../SignUp/SignupSection";
import { useLocation } from "react-router-dom";
import BlogCarousal from "./BlogCarousal";
import { useParams } from "react-router-dom";
const VaarBlogCommon = (props) => {
    const location = useLocation();
    console.log("Location:", location); // Check the location object

    // Extract data from search string
    const params = new URLSearchParams(location.search);
    const image=params.get("image");
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
                    <div className="blog-top-part" >
                        <h6 className="publishDate" style={{ color: "white" }}>{date}</h6>
                        <h1 style={{ color: "#d4f604", fontSize: "50px", fontWeight: "300" }}>{title}</h1>
                        <div className="blog-section-spacer"></div>
                        <img src={image} alt="" />
                    </div>
                    <div className="blog-content-container text-white">
                        <div dangerouslySetInnerHTML={{ __html: Description }} />
                        {/* <div dangerouslySetInnerHTML={{ __html: Comment }} /> */}
                    </div>


                </div>

            </section>
            {/* <BlogCarousal /> */}
            <SignupSection />
        </>
    )
}
export default VaarBlogCommon;