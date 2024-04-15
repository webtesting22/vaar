import React, { useState, useRef } from "react";
import CommonResourceComponent from "../commonResourceComponent";
import ReactangleTopImage from "../Resources3/Rectangle.svg"
import CommonResourceLeftSide from "../CommonResourceLeftSide";
import { Row, Col, Carousel, Tabs } from "antd"
import { Link } from "react-router-dom"
import "../Resources1/SingleResources.css"
import cardimg1 from "../Resources2/card1.svg"
import cardimg2 from "../Resources2/card2.svg"
import cardimg3 from "../Resources2/card3.svg"
import DontMissBlog from "../DontMissBlogs/DontMissBlogs";
import SignupSection from "../../SignUp/SignupSection";
function SingleResource3() {
    const conclusionRef = useRef(null);
    const contentStyle = {
        margin: 0,
        height: '160px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
    };
    const carouselRef = useRef(null);
    const carouseltwoRef = useRef(null);
    const carousalthreeRef = useRef(null)
    const carousalfourRef = useRef(null)
    const { TabPane } = Tabs;
    const liList = [
        {
            list: "What Sets Real Estate Apart",
            id:"WhatSets"
        },
        {
            list: "Why Real Estate Investments Should Be Considered Seriously",
            id:"WhyRealEstate"
        },
        {
            list: "Evaluating Real Estate Investments: Pros and Cons",
            id:"EvaluatingRealEstate"
        },
        {
            list: "Comparing Real Estate Risks and Returns with Traditional Asset Classes",
            id:"ComparingRealEstate"
        },
    ]

    // carousal 1
    const handlePrev = () => {
        carouselRef.current.prev();
    };

    const handleNext = () => {
        carouselRef.current.next();
    };

    // carousal 2
    const handlePrevtwo = () => {
        carouseltwoRef.current.prev();
    };

    const handleNexttwo = () => {
        carouseltwoRef.current.next();
    };

    // carousal 3
    const handleNextthree = () => {
        carousalthreeRef.current.next();
    }
    const handlePrevthree = () => {
        carousalthreeRef.current.prev();
    }
    // carousal 4
    const handlePrevfour = () => {
        carousalfourRef.current.prev();
    }
    const handlenextfour = () => {
        carousalfourRef.current.next();
    }


    const onChange = (currentSlide) => {
        // console.log(currentSlide);
    };

    const WhatSetRealStateData = [
        {
            boxTitle: "Tangible and Intrinsic Value",
            boxDescription: "Real estate's tangibility makes it a standout asset, representing physical properties with inherent and tangible value. This characteristic provides investors with a concrete and visible investment, standing in contrast to intangible financial instruments like stocks or bonds."
        },
        {
            boxTitle: "Income Generation through Rental Yields",
            boxDescription: "The potential for a steady income stream through rental yields is a defining feature of real estate. Leasing residential or commercial properties allows investors to enjoy regular rental income, providing financial stability and a consistent cash flow independent of broader economic conditions."
        },
        {
            boxTitle: "Potential for Capital Appreciation",
            boxDescription: "Real estate offers the potential for long-term capital appreciation. Factors such as location, infrastructure development, and market demand contribute to the increase in a property's value over time, aligning with both short-term income goals and long-term wealth-building objectives."
        },
    ]

    const WhyRealStateData = [
        {
            cardTitle: "Diversification and Risk Mitigation",
            cardDescription: "Real estate investments offer diversification benefits, helping investors spread risks across different asset classes. Its low correlation with traditional financial instruments makes real estate an effective buffer against market volatility, contributing to a well-balanced portfolio."
        },
        {
            cardTitle: "Inflation Hedge",
            cardDescription: "Real estate historically acts as a hedge against inflation. As the cost of living rises, property values and rental income tend to increase. Real estate's resilience during inflationary periods makes it a valuable component for preserving and potentially increasing wealth."
        },
        {
            cardTitle: "Control and Active Management",
            cardDescription: "Real estate investments provide a level of control and active management not often found in other asset classes. Investors can influence property value through strategic improvements, efficient management, and adaptation to market trends, allowing for a hands-on approach to investment performance."
        },
    ]
    const EvalutionRealStatepros = [
        {
            cardTitle: "Stable Income",
            cardDescription: "Real estate provides a reliable income stream through rental yields, ensuring ongoing financial stability."
        },
        {
            cardTitle: "Potential for Appreciation",
            cardDescription: "The potential for property values to appreciate over time can lead to long-term capital gains."
        },
        {
            cardTitle: "Tax Advantages",
            cardDescription: "Various tax benefits, including deductions for mortgage interest and property taxes, enhance after-tax returns."
        },
        {
            cardTitle: "Portfolio Diversification",
            cardDescription: "Real estate offers diversification benefits, reducing overall portfolio risk."
        },
        {
            cardTitle: "Inflation Hedge",
            cardDescription: "Real estate values and rental income historically show resilience against the impact of inflation."
        },
        {
            cardTitle: "Leverage Opportunities",
            cardDescription: "Real estate allows for the strategic use of leverage, amplifying potential returns."
        },
        {
            cardTitle: "Control and Active Management",
            cardDescription: "Investors can actively manage properties, influencing their value and performance."
        },
        {
            cardTitle: "Tangible Asset with Utility",
            cardDescription: "Real estate is a tangible asset serving a fundamental purpose, providing both intrinsic and functional value."
        },
        {
            cardTitle: "Diverse Investment Opportunities",
            cardDescription: "A wide range of real estate types allows for diverse and tailored investment opportunities."
        },
    ]
    const EvalutionRealStatecons = [
        {
            cardTitle: "Illiquidity",
            cardDescription: "Real estate is relatively illiquid compared to some other asset classes."
        },
        {
            cardTitle: "High Entry Costs",
            cardDescription: "Acquiring real estate often requires a significant upfront investment."
        },
        {
            cardTitle: "Market Sensitivity",
            cardDescription: "Real estate values can be influenced by local market conditions and economic trends."
        },
        {
            cardTitle: "Management Challenges",
            cardDescription: "Active management is required for maintenance and property improvements."
        },
        {
            cardTitle: "Market Timing",
            cardDescription: "Real estate investments may be subject to cyclical market trends."
        }
    ]

    const ComparingRealStatesPointsData = [
        {
            // mainTitle: "Returns",
            pointTitle: "Real Estate",
            pointsData: [


                "Income Generation: Rental yields provide a steady income stream.",
                "Potential for Appreciation: Real estate has the potential for long-term capital appreciation."

            ]
        },
        {
            // mainTitle: "",
            pointTitle: "Stocks",
            pointsData: [


                "High Growth Potential: Stocks offer the potential for significant capital appreciation.",
                "Dividend Income: Many stocks pay dividends, contributing to income generation."

            ]
        },
        {
            // mainTitle: "",
            pointTitle: "Bonds",
            pointsData: [


                "Stable Income: Bonds provide regular interest payments.",
                "Preservation of Capital: Bonds are considered a more conservative option, preserving capital."

            ]
        },


    ]
    return (
        <>
            <CommonResourceComponent Resources="Resources" Module="Module 1" Chapter="Chapter 3" Date="February 17, 2023" ResourceHeading="The Allure of Real Estate Investment" AuthorInfo="Stephanie Gordon, Content Manager, Vaar" topResourceImg={ReactangleTopImage} />

            <section style={{ backgroundColor: "white" }}>
                <div className="container p-0 resourcestwo">
                    <Row>
                        <Col lg={6} md={6} className="hide-on-mobile">
                            <CommonResourceLeftSide MainLeftcontainerHeading="In this chapter" liList={liList} boxTitle="Try the product out for free." />
                        </Col>
                        <Col lg={18} md={18} className="full-width-on-mobile">
                            <div className="resources-right-container">
                                <p>Real estate investment possesses a unique and enduring allure that distinguishes it from traditional financial instruments. In this chapter, we explore the distinctive features that set real estate apart, the reasons why it merits serious consideration, and conduct a comprehensive evaluation of real estate investments, examining both the pros and cons.</p>

                                <div className="padding-slite"></div>
                                <div>
                                    <div className="only-for-pc-view">
                                        <h4 id="WhatSets">What Sets Real Estate Apart</h4>
                                        <div>
                                            {WhatSetRealStateData.map((item, index) => (
                                                <div key={index} className="RealEstate-Box">
                                                    <h6>{item.boxTitle}</h6>
                                                    <hr style={{ opacity: "1" }} />
                                                    <p>{item.boxDescription}</p>
                                                </div>
                                            ))}

                                        </div>
                                    </div>
                                    <div className="only-for-mobile-view">
                                        <h4>Basics of Asset Classes</h4>
                                        <Carousel afterChange={onChange} ref={carouselRef} dots={true} autoplay>
                                            {WhatSetRealStateData.map((item, index) => (
                                                <div key={index} className="RealEstate-Box">
                                                    <h6>{item.boxTitle}</h6>
                                                    <hr style={{ opacity: "1" }} />
                                                    <p>{item.boxDescription}</p>
                                                </div>
                                            ))}
                                        </Carousel>
                                        {/* <div>
                                            <div className="carousal-btn-styling">
                                                <button onClick={handlePrev}><i className='bx bx-left-arrow-alt'></i></button>
                                                <button onClick={handleNext}><i className='bx bx-right-arrow-alt'></i></button>
                                            </div>
                                        </div> */}
                                    </div>
                                </div>


                                <div className="padding-slite"></div>
                                <div>
                                    <h4>Why Real Estate Investments Should Be Considered Seriously</h4>
                                    <div className="padding-slite"></div>
                                    <div>
                                        {WhyRealStateData.map((item, index) => (
                                            <div key={index} className="only_bottom_border">
                                                <h6>{item.cardTitle}</h6>
                                                <p>{item.cardDescription}</p>
                                                {/* <hr /> */}
                                            </div>
                                        ))}

                                    </div>
                                </div>


                                <div className="padding-slite"></div>


                                <div className="pros-cons" id="pros-cons">
                                    <h4 id="EvaluatingRealEstate">Evaluating Real Estate Investments: Pros and Cons</h4>
                                    <Tabs defaultActiveKey="1">
                                        <TabPane tab="Pros" key="1">
                                            <Row>
                                                {EvalutionRealStatepros.map((item, index) => (
                                                    <Col lg={12} md={24} key={index} style={{ margin: "10px 0px" }}>
                                                        <div className="EvalutionCardbox">
                                                            <h6>{item.cardTitle}</h6>
                                                            <hr />
                                                            <p>{item.cardDescription}</p>
                                                        </div>
                                                    </Col>
                                                ))}
                                            </Row>
                                        </TabPane>
                                        <TabPane tab="Cons" key="2">
                                            <Row>
                                                {EvalutionRealStatecons.map((item, index) => (
                                                    <Col lg={12} md={24} key={index} style={{ margin: "10px 0px" }}>
                                                        <div className="EvalutionCardbox">
                                                            <h6>{item.cardTitle}</h6>
                                                            <hr />
                                                            <p>{item.cardDescription}</p>
                                                        </div>
                                                    </Col>
                                                ))}
                                            </Row>
                                        </TabPane>
                                    </Tabs>
                                    <p>In conclusion, real estate's allure lies in its tangible nature, income-generating potential, and diversification benefits. Thoroughly evaluating the pros and cons, considering financial goals, risk tolerance, and investment horizon, allows investors to harness the unique advantages of real estate within a well-rounded investment strategy. When approached thoughtfully, real estate serves as a pivotal component, providing stability, income, and growth potential to an investment portfolio.</p>
                                </div>

                                <div className="padding-slite"></div>


                                <div id="ComparingRealEstate">
                                    <h4>Comparing Real Estate Risks and Returns with Traditional Asset Classes</h4>
                                    <p>Understanding how real estate compares to traditional asset classes in terms of risks and returns is crucial for investors seeking to construct a balanced and effective investment portfolio. Let's delve into the comparative analysis of real estate against commonly considered traditional asset classes: stocks and bonds.</p>
                                    <div id="commonassetscontainer">
                                        <div style={{ position: "relative" }}>
                                            <div className="carousal-container">
                                                <div>
                                                    <h6>Returns</h6>
                                                    <hr />
                                                    {ComparingRealStatesPointsData.map((item, index) => (
                                                        <Carousel afterChange={onChange} ref={carouseltwoRef} dots={false} autoplay>


                                                            <div key={index}>
                                                                {/* <h6>{item.mainTitle}</h6> */}
                                                                <p>{item.pointTitle}</p>
                                                                <ul>
                                                                    {item.pointsData.map((point, pointIndex) => (
                                                                        <li key={pointIndex}>{point}</li>
                                                                    ))}
                                                                </ul>
                                                            </div>

                                                        </Carousel>
                                                    ))}
                                                </div>


                                            </div>
                                            <div>
                                                <div className="carousal-btn-styling">
                                                    <button onClick={handlePrevtwo}><i class='bx bx-chevron-left'></i></button>
                                                    <button onClick={handleNexttwo}><i class='bx bx-chevron-right'></i></button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <p>In crafting an investment strategy, investors should carefully consider their risk tolerance, investment goals, and time horizon. Real estate, stocks, and bonds each offer unique advantages and drawbacks, and the optimal portfolio may involve a combination of these asset classes to achieve a well-balanced and diversified investment approach.</p>
                                </div>



                            </div>

                        </Col>
                    </Row>
                    <div className="padding-slite"></div>
                    <div className="padding-slite"></div>
                    <DontMissBlog />

                </div>
            </section>
            <SignupSection />
        </>
    )
}
export default SingleResource3;