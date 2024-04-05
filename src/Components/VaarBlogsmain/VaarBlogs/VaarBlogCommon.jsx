import React, { useRef, useState } from "react";
import "./VaarBlogCommon.css"
import blogimg1 from "../VaarBlogs/Image.svg"
import bloginside1 from "./bloginside1.svg"
import Ellipse from "../../AllResources/Ellipse.svg"
import SignupSection from "../../SignUp/SignupSection";

import BlogCarousal from "./BlogCarousal";
function VaarBlogCommon() {
    const blogPointsData = [

        {
            blogTitle: "Standing Out vs. Fitting In",
            blogDescription: "Sure, standing out can be great, but in the housing market, fitting in could mean a quicker sale and a more stable investment. Here’s why:",
            blogPoints: [
                "- Community Consistency: Homes that mirror their community tend to be more attractive to buyers",
                "- Value Stability: A home that fits the neighborhood mold is more likely to retain its value",
                "- Patterns: The human brain sees uniformity as pleasing and safe, thus assigning such houses more value.",

            ]
        },
        {
            blogTitle: "The Conformity Principle at Work ",
            blogDescription: "This doesn't mean you can't be unique, but when it comes to major changes or choosing a home, consider:",
            blogPoints: [
                "- Neighborhood Norms: If the local standard is craftsman bungalows, that ultra-modern glass house might not be the best fit",
                "- Wise Renovations: Before adding that towering second story, remember that the best renovations are those that align with what's common in the area",
                "- HOA/Legal Guidelines: Always find out what the committees/laws say when it comes to major changes, otherwise they’ll have to be undone!"
            ]
        },
        {
            blogTitle: "The Bottom Line",
            blogDescription: [
                "The Conformity Principle advises that to maintain and increase a home's value, it should align with popular preferences. Finding the balance between personal taste and mass appeal is key.",
                "When buying or selling a home, remember that simplicity is often the winning strategy. Homes that blend in with the market tend to stand out when it comes to benefitting your finances.",
                "But hey, it’s all about smart choices — that doesn’t mean they all have to be boring! "
            ],
            blogPoints: ""
        }
    ]
   
    return (
        <>
            <section style={{ backgroundColor: "white", padding: "8rem 0rem" }}>
                <div className="container">
                    <div className="blog-top-part">
                        <h6 className="publishDate">Published 20 Jan 2024</h6>
                        <h1>Beyond the Walls: The Power of Conformity in Real Estate</h1>
                        <div className="blog-section-spacer"></div>
                        <img src={blogimg1} alt="" />
                    </div>
                    <div className="blog-content-container">
                        <p>Have you ever wondered why some houses sell faster and for better prices than the unique gems that stand out with their quirky features? Enter the Conformity Principle, your real estate compass pointing towards what sells.</p>
                        <div className="blog-section-spacer"></div>
                        <h4>The Real Estate Magnet</h4>
                        <div className="blog-section-spacer"></div>
                        <p>In the world of property, blending in isn't just safe; it's smart. Buyers tend to gravitate towards homes that reflect the overall vibe of the neighborhood. It's about harmony, and in real estate, harmony translates to value.</p>
                        <div className="blog-section-spacer"></div>
                        <img src={bloginside1} alt="" />
                        <div className="blog-section-spacer"></div>
                        <div>
                            {blogPointsData.map((item, index) => (
                                <div key={index}>
                                    <h6>{item.blogTitle}</h6>
                                    {Array.isArray(item.blogDescription) ? (
                                        item.blogDescription.map((desc, idx) => (
                                            <p key={idx}>{desc}</p>
                                        ))
                                    ) : (
                                        <p>{item.blogDescription}</p>
                                    )}
                                    {item.blogPoints !== "" && (
                                        <ul style={{ listStyle: "none", padding: "0px" }}>
                                            {item.blogPoints.map((point, idx) => (
                                                <li key={idx}>{point}</li>
                                            ))}
                                        </ul>

                                    )}
                                    <div className="blog-section-spacer"></div>
                                </div>
                            ))}


                        </div>
                        <div className="blogAuthorDetails">
                            <div>
                                <img src={Ellipse} alt="" />
                            </div>
                            <div>
                                <h6>Vidhi Kankaria</h6>
                                <p>Founder, VAAR</p>
                            </div>

                        </div>
                    </div>

                </div>
                
            </section>
            <BlogCarousal/>
            <SignupSection />
        </>
    )
}
export default VaarBlogCommon;