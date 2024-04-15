import React from "react";
import CommonResourceComponent from "../commonResourceComponent";
import CommonResourceLeftSide from "../CommonResourceLeftSide";
import ReactangleTopImage from "../Resources11/Rectangle.svg"
import { Row, Col, Descriptions } from "antd"
import DontMissBlog from "../DontMissBlogs/DontMissBlogs";
import SignupSection from "../../SignUp/SignupSection";
function SingleResource11() {

    const liList = [
        {
            list: "Concepts"
        },
        {
            list: "Conclusion"
        }
    ]
    const boxData = [
        {
            heading: "Elimination of Large Upfront Capital",
            Description: "One of the primary challenges in real estate investment is the significant amount of capital required to purchase a property. Vaar addresses this by enabling fractional ownership, allowing investors to buy and own a fraction of a property. This means that instead of having to fund the entire property purchase, investors can now contribute a smaller amount proportional to their desired ownership percentage."
        },
        {
            heading: "Diversification Within Real Assets",
            Description: "Real estate diversification is essential for risk management, but it has traditionally been challenging for individual investors with limited capital. Vaar's fractionalization model enables investors to diversify their real estate portfolio by owning fractions of multiple properties. This portfolio approach helps spread the risk across different assets, reducing the impact of underperformance in any single property."
        },
        {
            heading: "Access to Annuity Income and Passive Returns",
            Description: "Fractional ownership on Vaar goes beyond merely owning a piece of a property; it also grants investors access to annuity income generated by the property. This income, often in the form of rental returns, is distributed to investors in proportion to their ownership. By providing a steady stream of passive income, Vaar transforms real estate into an accessible and attractive option for a broader range of investors."
        }
    ]
    return (
        <>
            <CommonResourceComponent Resources="Resources" Module="Module 4" Chapter="Concept 1" Date="February 17, 2023" ResourceHeading="Fractionalization & Vaar " AuthorInfo="Stephanie Gordon, Content Manager, Vaar" topResourceImg={ReactangleTopImage} />
            <section style={{ backgroundColor: "white" }}>
                <div className="container p-0">
                    <Row>
                        <Col lg={6} md={6} className="hide-on-mobile">
                            <CommonResourceLeftSide MainLeftcontainerHeading="In this chapter" liList={liList} boxTitle="Try the product out for free." />
                        </Col>
                        <Col lg={18} md={18} className="full-width-on-mobile">
                            <div className="resources-right-container">
                                <p>Vaar's innovative approach to real estate investment revolves around the concept of fractionalization, a game-changing mechanism that transforms the traditional real estate investment model. Fractionalization, in the context of Vaar, refers to the division of ownership of a property into smaller, more manageable units, allowing multiple investors to collectively own a share of the asset.
                                    <br /><br />
                                    Traditionally, investing in real estate required a substantial upfront capital investment, often limiting participation to high-net-worth individuals or institutional investors. Vaar disrupts this norm by breaking down the barriers to entry through fractionalization. Here's how the concept works:</p>
                                <div className="padding-slite"></div>
                                {boxData.map((item, index) => (
                                    <div key={index}>
                                        <h4>{item.heading}</h4>
                                        <p>{item.Description}</p>
                                        <hr />
                                    </div>

                                ))}
                                <div className="padding-slite"></div>
                                <h4>Conclusion</h4>
                                <p>In essence, Vaar's fractionalization model transforms the landscape of real estate investment by making it more accessible, affordable, and diversified. Through this innovative approach, the platform empowers individual investors to participate in the wealth-building potential of real estate without the traditional barriers that have historically excluded them from this lucrative asset class.</p>
                            </div>
                        </Col>
                    </Row>
                    <DontMissBlog/>
                </div>
            </section>
            <SignupSection/>
        </>
    )
}
export default SingleResource11;