import React, { useRef, useState, useEffect } from "react";
import "./VaarBlogCommon.css"
import blogimg1 from "../VaarBlogs/blog-common.jpeg"
import bloginside1 from "./bloginside1.svg"
import Ellipse from "../../AllResources/Ellipse.svg"
import SignupSection from "../../SignUp/SignupSection";

import BlogCarousal from "./BlogCarousal";
const  VaarBlogCommon=({ title, content, date })=> {
    console.log(title,content,date)
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
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top when the component mounts or updates
    }, []);
    return (
        <>
            <section style={{ backgroundColor: "black", padding: "2rem 0rem" }}>
                <div className="container">
                    <div>
                        title: {title},
                        date: {date},
                        content:{content}
                    </div>
                    <div className="blog-top-part" >
                        <h6 className="publishDate" style={{ color: "white" }}>Published 19 April 2024</h6>
                        <h1 style={{ color: "white", fontSize: "50px", fontWeight: "300" }}>CONCEPT: Real Estate x Fractional Investing</h1>
                        <div className="blog-section-spacer"></div>
                        <img src={blogimg1} alt="" />
                    </div>
                    <div className="blog-content-container text-white">
                        <p style={{color:"#D4F604"}}>1. Why Should I Invest in Real Estate?</p>
                        <p>The long-term red turns are incredible. Investing in real estate offers several benefits for your investment portfolio:</p>
                        <div className="padding-slite"></div>
                        <div className="padding-slite"></div>
                        <ul>
                            <li> <p><b>Stable Returns:</b> Real estate investments have historically provided steady rental income alongside potential appreciation in property value.</p></li>
                            <li><p><b>Inflation Hedge:</b> Real estate often appreciates in value at a rate that outpaces inflation, making it an excellent tool to protect your purchasing power over time.</p></li>
                            <li><p><b>Tax Advantages:</b> Real estate investors can benefit from various tax deductions, such as depreciation, mortgage interest, and property tax deductions, potentially lowering their tax burden.</p></li>
                            <li><p><b>Tangible Asset:</b> Real estate is a physical asset that provides utility and has intrinsic value, offering a layer of security that isn't available with all types of investments — putting the “real” in real estate.</p></li>
                        </ul>

                    <div className="padding-slite"></div>

                        <p style={{color:"#D4F604"}}>2. What is Fractional Investing?</p>
                        <p>Fractional investing is an innovative approach that allows multiple investors to share ownership in a single asset. This method breaks down expensive assets into smaller, more affordable segments, often referred to as "shares." Everyone gets access to, and a slice of, the real estate pie. In this segment, fractional investing means you can own a part of a property without the need to buy the entire asset yourself. By democratizing investment opportunities, this makes it possible for individuals to invest in high-quality real estate, previously out of reach due to high costs.</p>


                        <div className="padding-slite"></div>

                        <p style={{color:"#D4F604"}}>3. Is Fractional Investing Worth It?</p>
                        <p>Here's why we think fractional investing is a game-changer:</p>
                        <ul>
                            <li><p><b>Affordability:</b> Fractional ownership drastically reduces the financial barrier to entry, allowing you to invest in properties that would otherwise require substantial capital.</p></li>
                            <li><p><b>Diversification:</b> With the ability to invest as per your abilities, you can spread your investment across multiple properties or different types of real estate, reducing risk and increasing potential returns.</p></li>
                            <li><p><b>Simplicity:</b> Managing a fractional investment is typically handled by us, removing the complexity of property management, maintenance, and other logistical issues.</p></li>
                            <li><p><b>Accessibility:</b> Fractional investing platforms provide detailed insights and analyses, leveling the playing field and offering transparency that individual investors often don't have access to in traditional real estate markets.</p></li>
                        </ul>
                        <div className="blogAuthorDetails">
                            <div>
                                <img src={Ellipse} alt="" />
                            </div>
                            <div>
                                <h6>Vidhi Kankaria</h6>
                                <p style={{ color: "white" }}>Founder, VAAR</p>
                            </div>

                        </div>
                    </div>

                </div>

            </section>
            {/* <BlogCarousal /> */}
            <SignupSection />
        </>
    )
}
export default VaarBlogCommon;