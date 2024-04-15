import React, { useState, useRef } from "react";
import CommonResourceComponent from "../commonResourceComponent";
import ReactangleTopImage from "../Resources2/Rectangle.svg"
import CommonResourceLeftSide from "../CommonResourceLeftSide";
import { Row, Col, Carousel } from "antd"
import { Link } from "react-router-dom"
import "../Resources1/SingleResources.css"

import DontMissBlog from "../DontMissBlogs/DontMissBlogs";
import SignupSection from "../../SignUp/SignupSection";
function SingleResource2() {
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
    const liList = [
        {
            list: "Defining Asset Classes",
            id:"DefiningAssetClasses"
        },
        {
            list: "Basics of Asset Classes",
            id:"BasicsofAssetClasses"
        },
        {
            list: "Common Asset Classes",
            id:"CommonAssetClasses"
        },
        {
            list: "Real Estate as an Asset Class",
            id:"RealEstateas"
        },
    ]
    const boxContent = [
        {
            boxtitle: "Risk and Return",
            description: "The risk-return tradeoff is a fundamental concept when exploring asset classes. Generally, investments with higher potential returns tend to come with higher levels of risk. For example, stocks are considered high-risk, high-return assets, while government bonds are typically lower-risk, lower-return investments."
        },
        {
            boxtitle: "Liquidity",
            description: "Liquidity refers to how easily an asset can be bought or sold in the market without significantly impacting its price. Stocks are highly liquid, allowing investors to swiftly enter or exit positions, while certain alternative investments, like private equity or real estate, may have lower liquidity, requiring a more strategic approach to buying and selling."
        },
        {
            boxtitle: "Income and Growth",
            description: "Asset classes can be categorized based on their primary function within an investment portfolio. Some are income-oriented, providing regular payouts such as dividends or interest (e.g., bonds, real estate investment trusts - REITs), while others are growth-focused, aiming for capital appreciation over time (e.g., stocks, certain alternative investments like venture capital)."
        },
    ]
    const boxContentTwo = [
        {
            boxtitle: "Diversification",
            description: "Diversification is a cornerstone of sound investment strategy, and asset classes play a crucial role in achieving it. By spreading investments across different types of assets, investors aim to reduce the impact of poor performance in any single asset class. For instance, during a stock market downturn, a well-diversified portfolio with exposure to bonds or real assets may experience less severe losses."
        },
        {
            boxtitle: "Spreading Risks Across Asset Classes",
            pointsDetails: [
                {
                    pointTitle: "Market and Economic Conditions",
                    pointDescription: "Economic and market conditions affect asset classes differently. For example, during periods of economic expansion, stocks may thrive, while in downturns, bonds or gold may act as safe-haven assets. Diversification allows investors to weather diverse market conditions, ensuring that the performance of one asset class does not overly impact the entire portfolio."
                },
                {
                    pointTitle: "Risk Reduction",
                    pointDescription: "Each asset class carries its unique set of risks. By diversifying, investors can reduce the impact of specific risks, such as interest rate risk in bonds or sector-specific risks in stocks. A well-diversified portfolio provides a buffer against unexpected market events and enhances the likelihood of achieving more consistent returns."
                },

            ],
        },
        {
            boxtitle: "Portfolio Construction",
            description: "Constructing a well-balanced investment portfolio involves strategically combining various asset classes to align with an investor's financial objectives and risk tolerance. Asset allocation, the process of determining the proportion of assets allocated to different classes, is a key driver of portfolio performance. An example could be an investor with a long-term horizon allocating a significant portion to growth-oriented assets like stocks."
        },
        {
            boxtitle: "Market Exposure",
            description: "Different asset classes provide exposure to various sectors of the economy and global markets. For instance, technology stocks offer exposure to the innovation sector, government bonds provide exposure to the debt market, and real estate investments offer ownership in physical properties. A diverse portfolio allows investors to capture opportunities and manage risks associated with different economic sectors."
        },
    ]
    const CommonAssetsClasses = [
        {
            carousalTitle: "Equities (Stocks)",
            carousalDescription: "Equities represent ownership in a company, entitling the shareholder to a portion of the company's assets and earnings. Investing in individual stocks allows for targeted exposure to specific industries or companies. For example, investing in technology stocks like Apple or Google provides ownership in these companies, with potential returns driven by their performance in the stock market. Equities are known for their growth potential but come with higher volatility compared to some other asset classes."
        },
        {
            carousalTitle:"Fixed Income (Bonds)",
            carousalDescription:"Bonds are debt instruments issued by governments, municipalities, or corporations to raise capital. When an investor buys a bond, they are essentially lending money to the issuer in exchange for periodic interest payments and the return of the principal at maturity. U.S. Treasury bonds, municipal bonds, and corporate bonds are common examples. Bonds are considered more conservative than stocks and are often included in portfolios to provide income and stability. Investors can choose bonds with varying maturities and credit ratings based on their risk tolerance and income needs."
        },
        {
            carousalTitle:"Cash and Cash Equivalents ",
            carousalDescription:"Cash and cash equivalents are highly liquid assets that include Treasury bills, money market funds, and short-term certificates of deposit. These assets provide stability and high liquidity, offering a safe haven for investors seeking to preserve capital. While returns on cash and cash equivalents are typically lower than those from other asset classes, they serve as a crucial component of a well-diversified portfolio, providing a buffer against market volatility and immediate access to funds."
        },
        {
            carousalTitle:"Real Assets ",
            carousalDescription:"Real assets include physical, tangible assets such as real estate, commodities, and infrastructure. Investing in real assets provides exposure to assets with intrinsic value, often serving as a hedge against inflation. Besides direct ownership of physical properties, real assets also encompass commodities like gold or oil. Commodities are traded on futures markets, allowing investors to gain exposure to the price movements of these essential resources. Real assets offer diversification benefits, as their returns may not always align with traditional financial markets."
        },
        {
            carousalTitle:"Alternative Investments",
            carousalDescription:"Alternative investments extend beyond traditional asset classes and include hedge funds, private equity, venture capital, and real assets like timberland or farmland. These investments often have lower correlation with traditional markets, providing diversification and unique risk-return profiles. Hedge funds employ various strategies, including long-short positions and derivatives, to achieve returns. Private equity involves investing in private companies, typically with longer investment horizons. Venture capital funds focus on early-stage companies with high growth potential. While alternative investments can enhance portfolio diversification, they often require a higher level of expertise and may have longer lock-up periods. "
        },
    

    ]

    const RealEstateData = [
        {
            boxtitle: "Tangibility and Intrinsic Value",
            description: "Unlike financial securities, real estate represents physical properties with intrinsic value. An example could be investing in residential real estate, where the property can generate rental income and potentially appreciate over time."
        },
        {
            boxtitle: "Diversification Benefits",
            description: "Real estate often exhibits low correlation with traditional financial assets, offering valuable diversification benefits. An example is during a stock market downturn, real estate investments may remain stable or even appreciate, providing a counterbalance to equity market volatility."
        },
        {
            boxtitle: "Income Generation",
            description: "Investors can generate income through rental properties or real estate investment trusts (REITs). An example would be investing in a residential property and earning rental income from tenants, contributing to the overall return of the investment."
        },
        {
            boxtitle: "Potential for Appreciation",
            description: "Real estate has the potential for long-term capital appreciation, driven by factors such as location, infrastructure development, and overall market conditions. For example, investing in real estate in a rapidly growing urban area may lead to property value appreciation over time."
        },
    ]

   
    return (
        <>
            <CommonResourceComponent Resources="Resources" Module="Module 1" Chapter="Chapter 2" Date="February 17, 2023" ResourceHeading="Understanding Asset Classes in Investment" AuthorInfo="Stephanie Gordon, Content Manager, Vaar" topResourceImg={ReactangleTopImage} />

            <section style={{ backgroundColor: "white" }}>
                <div className="container p-0 resourcestwo">
                    <Row>
                        <Col lg={6} md={6} className="hide-on-mobile">
                            <CommonResourceLeftSide MainLeftcontainerHeading="In this chapter" liList={liList} boxTitle="Try the product out for free." />
                        </Col>
                        <Col lg={18} md={18} className="full-width-on-mobile">
                            <div className="resources-right-container">
                                <h4 id="DefiningAssetClasses">Defining Asset Classes</h4>
                                <p>Asset classes are broad categories of investments that share similar characteristics, risk profiles, and behavior in the financial markets. Investors allocate their capital across various asset classes to diversify their portfolios and achieve a balance between risk and return. Each asset class has distinct features that influence its performance, making it essential for investors to comprehend the nuances of different classes to make informed investment decisions.</p>
                                <div className="padding-slite"></div>
                                <div>
                                    <div className="only-for-pc-view">
                                        <h4>Basics of Asset Classes</h4>
                                        <div>
                                            {boxContent.map((item, index) => (
                                                <div key={index} className="RealEstate-Box">
                                                    <h6>{index + 1}.&nbsp;{item.boxtitle}</h6>
                                                    <hr style={{ opacity: "1" }} />
                                                    <p>{item.description}</p>
                                                </div>
                                            ))}

                                        </div>
                                    </div>
                                    <div className="only-for-mobile-view">
                                        <h4 id="BasicsofAssetClasses">Basics of Asset Classes</h4>
                                        <Carousel afterChange={onChange} ref={carouselRef} dots={true} autoplay>
                                            {boxContent.map((item, index) => (
                                                <div key={index} className="RealEstate-Box">
                                                    <h6>{index + 1}.&nbsp;{item.boxtitle}</h6>
                                                    <hr style={{ opacity: "1" }} />
                                                    <p>{item.description}</p>
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
                                    <div className="only-for-pc-view">
                                        <h4>Role of Asset Classes in Investments</h4>
                                        <p>Understanding the historical milestones in the US real estate market provides crucial insights into its current structure and trends.</p>
                                        <div>
                                            {boxContentTwo.map((item, index) => (
                                                <div key={index} className="RealEstate-Box">
                                                    <h6>{item.boxtitle}</h6>
                                                    <hr style={{ opacity: "1" }} />
                                                    <p>{item.description}</p>
                                                    {item.pointsDetails && item.pointsDetails.length > 0 && (
                                                        <>
                                                            {item.pointsDetails.map((point, pointIndex) => (
                                                                <div key={pointIndex}>
                                                                    <p>{pointIndex + 1}. &nbsp;{point.pointTitle}</p>
                                                                    <p>{point.pointDescription}</p>
                                                                    <br />
                                                                </div>
                                                            ))}
                                                        </>
                                                    )}
                                                </div>
                                            ))}
                                        </div>


                                    </div>
                                    <div className="only-for-mobile-view">
                                        <h4>Role of Asset Classes in Investments</h4>
                                        <p>Understanding the historical milestones in the US real estate market provides crucial insights into its current structure and trends.</p>
                                        <div>
                                            <Carousel afterChange={onChange} ref={carouseltwoRef} dots={true} autoplay>
                                                {boxContentTwo.map((item, index) => (
                                                    <div key={index} className="RealEstate-Box">
                                                        <h6>{item.boxtitle}</h6>
                                                        <hr style={{ opacity: "1" }} />
                                                        <p>{item.description}</p>
                                                        {item.pointsDetails && item.pointsDetails.length > 0 && (
                                                            <ul>
                                                                {item.pointsDetails.map((point, pointIndex) => (
                                                                    <li key={pointIndex}>
                                                                        <strong>{point.pointTitle}</strong>: {point.pointDescription}
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        )}
                                                    </div>
                                                ))}
                                            </Carousel>
                                            {/* <div>
                                                <div className="carousal-btn-styling">
                                                    <button onClick={handlePrevtwo}><i className='bx bx-left-arrow-alt'></i></button>
                                                    <button onClick={handleNexttwo}><i className='bx bx-right-arrow-alt'></i></button>
                                                </div>
                                            </div> */}
                                        </div>


                                    </div>
                                </div>

                                <div className="padding-slite"></div>

                                <div id="commonassetscontainer">
                                    <h4 id="CommonAssetClasses">Common Asset Classes</h4>
                                    <div style={{ position: "relative" }}>
                                        <div className="carousal-container">
                                            <Carousel afterChange={onChange} ref={carousalthreeRef} dots={false} autoplay>
                                                {CommonAssetsClasses.map((item, index) => (
                                                    <div key={index}>
                                                        <h6 style={{ fontWeight: "700" }}>{item.carousalTitle}</h6>
                                                        <hr style={{ opacity: "1" }} />
                                                        <p>{item.carousalDescription}</p>

                                                    </div>
                                                ))}
                                            </Carousel>
                                        </div>
                                        <div>
                                            <div className="carousal-btn-styling">
                                                <button onClick={handlePrevthree}><i class='bx bx-chevron-left'></i></button>
                                                <button onClick={handleNextthree}><i class='bx bx-chevron-right'></i></button>
                                            </div>
                                        </div>
                                    </div>
                                    <p>In summary, each common asset class plays a specific role in constructing a diversified investment portfolio. Equities offer growth potential but come with higher volatility, while fixed income provides stability and income. Cash and cash equivalents act as a safe haven, and real assets and alternative investments contribute to diversification. The strategic combination of these asset classes depends on an investor's risk tolerance, financial goals, and investment horizon.</p>

                                </div>



                                <div className="padding-slite"></div>

                                <div>
                                    <div className="only-for-pc-view">
                                        <h4 style={{ marginTop: "20px" }}>Real Estate as an Asset Class</h4>
                                        <p>Real estate stands out as a unique and tangible asset class within an investment portfolio.</p>
                                        <div>
                                            {RealEstateData.map((item, index) => (
                                                <div key={index} className="RealEstate-Box">
                                                    <h6>{index + 1}.&nbsp;{item.boxtitle}</h6>
                                                    <hr style={{ opacity: "1" }} />
                                                    <p>{item.description}</p>
                                                </div>
                                            ))}

                                        </div>
                                    </div>
                                    <div className="only-for-mobile-view">
                                        <h4 style={{ marginTop: "20px" }}>Real Estate as an Asset Class</h4>
                                        <p id="RealEstateas">Real estate stands out as a unique and tangible asset class within an investment portfolio.</p>
                                        <div>
                                            <div>
                                                <Carousel afterChange={onChange} ref={carousalfourRef} dots={false} autoplay>
                                                    {RealEstateData.map((item, index) => (
                                                        <div key={index} className="RealEstate-Box">
                                                            <h6>{index + 1}.&nbsp;{item.boxtitle}</h6>
                                                            <hr style={{ opacity: "1" }} />
                                                            <p>{item.description}</p>
                                                        </div>
                                                    ))}
                                                </Carousel>
                                            </div>




                                            <div>
                                                <div className="carousal-btn-styling">
                                                    <button onClick={handlePrevfour}><i class='bx bx-chevron-left'></i></button>
                                                    <button onClick={handlenextfour}><i class='bx bx-chevron-right'></i></button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <p>In conclusion, understanding the intricacies of different asset classes is fundamental to building a resilient and well-performing investment portfolio. Each class brings its own set of characteristics, risk-return profiles, and growth prospects. By strategically allocating capital across diverse asset classes, investors can enhance the stability of their portfolios and pursue their financial goals with a more balanced and informed approach.</p>
                                </div>

                            </div>

                        </Col>
                    </Row>
                    <div className="padding-slite"></div>
                    <div className="padding-slite"></div>
                    <DontMissBlog/>
                </div>
            </section>
            <SignupSection/>
        </>
    )
}
export default SingleResource2;