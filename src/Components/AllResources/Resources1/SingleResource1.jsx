import React, { useRef } from "react";
import "./SingleResources.css"
import { Row, Col, Input, Button } from "antd"
import img1 from "../Ellipse.svg"
import CommonResourceComponent from "../commonResourceComponent";
import ReactangleTopImage from "../Rectangle.svg"
import CommonResourceLeftSide from "../CommonResourceLeftSide";
import { Carousel } from 'antd';
import DontMissBlog from "../DontMissBlogs/DontMissBlogs";
import SignupSection from "../../SignUp/SignupSection";
function SingleResource1() {
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

    const handlePrev = () => {
        carouselRef.current.prev();
    };

    const handleNext = () => {
        carouselRef.current.next();
    };

    const onChange = (currentSlide) => {
        // console.log(currentSlide);
    };
    const liList = [
        {
            list: "Definition and scope",
            id:"Definitionandscope"
        },
        {
            list: "Types of real estate investments",
            id:"Typesofrealestateinvestments"
        },
        {
            list: "Importance of real estate investments in the current day and age",
            id:"importanceofrealestate"
        },
    ]

    const boxContent = [
        {
            boxtitle: "Residential Real Estate",
            description: "Residential real estate investment involves the purchase and management of properties primarily for housing purposes. This category includes single-family homes, condominiums, townhouses, and apartment complexes. Investors can earn returns through rental income or capital appreciation when property values rise."
        },
        {
            boxtitle: "Commercial Real Estate",
            description: "Commercial real estate encompasses properties used for business and income-generating purposes. This includes office buildings, retail spaces, hotels, and industrial facilities. The returns in commercial real estate often stem from lease agreements with businesses occupying the space."
        },
        {
            boxtitle: "Real Estate Investment Trusts (REITs)",
            description: "REITs are investment vehicles that pool funds from multiple investors to invest in a diversified portfolio of real estate assets. These publicly traded entities provide a way for individuals to invest in real estate without direct property ownership. They often focus on specific property types or geographical regions."
        },
        {
            boxtitle: "Real Estate Crowdfunding",
            description: "With the advent of technology, real estate crowdfunding platforms allow individuals to invest small amounts of money in specific real estate projects. This democratization of real estate investment provides access to opportunities that were traditionally reserved for larger investors."
        }
    ]

    const HistoricalContextBox = [
        {
            boxtitle: "Homestead Act of 1862",
            description: "The Homestead Act, signed into law by President Abraham Lincoln, provided 160 acres of public land to settlers for a small fee, provided they improve the land by building a dwelling and cultivating crops. This act facilitated westward expansion and property ownership."
        },
        {
            boxtitle: "Great Depression and the New Deal",
            description: "The Great Depression of the 1930s led to widespread economic hardship. The New Deal, a series of programs initiated by President Franklin D. Roosevelt, introduced measures to stabilize the economy, including the creation of the Federal Housing Administration (FHA) and the Federal National Mortgage Association (Fannie Mae), promoting homeownership."
        },
        {
            boxtitle: "Post-World War II Suburbanization",
            description: "The GI Bill, enacted after World War II, facilitated homeownership for veterans, contributing to a suburban housing boom. Levittown, a planned suburban community, became a symbol of this era."
        },
        {
            boxtitle: "1970s Stagflation and High Interest Rate",
            description: "The 1970s witnessed economic challenges with stagflation and soaring interest rates. Real estate markets experienced fluctuations, impacting property values and financing."
        },
        {
            boxtitle: "Housing Bubble and Financial Crisis (2007-2008)",
            description: "The housing bubble, characterized by inflated home prices and risky lending practices, culminated in the 2007-2008 financial crisis. The ensuing recession had profound effects on the real estate market, leading to a significant downturn."
        }
    ]

    const CurrentUsData = [
        {
            boxtitle: "Low Interest Rates",
            description: "Historically low interest rates have stimulated demand for real estate, making borrowing more accessible and encouraging both homebuyers and investors to enter the market."
        },
        {
            boxtitle: "Urban Revitalization",
            description: "Urban areas are experiencing revitalization, with a trend toward mixed-use developments and a renewed interest in city living. This shift is driven by changing demographic preferences and the desire for proximity to amenities."
        },
        {
            boxtitle: "Technology Impact",
            description: "Technological advancements have transformed the real estate landscape, with innovations like virtual tours, blockchain in property transactions, and data analytics shaping how investors and consumers engage with the market."
        },
        {
            boxtitle: "Supply and Demand Dynamics",
            description: "Supply shortages in certain markets contribute to increased property values, creating opportunities for investors. Understanding regional variations in supply and demand is crucial for making informed investment decisions."
        }
    ]
    const ImportanceOfRealStateData = [
        {
            boxtitle: "Wealth Building Potential",
            pointTitle: [
                {
                    boxSubtitle: "1. Appreciation and Equity",
                    boxSubDescription: "Real estate investments offer the potential for property appreciation, where the value of a property increases over time. This appreciation, coupled with mortgage payments that contribute to equity, forms a powerful wealth-building strategy.",
                    ExampleData: "Imagine Alex purchasing a home in a neighborhood undergoing revitalization. Over the years, as the area becomes more desirable, the value of Alex's property appreciates, contributing to his overall net worth. Additionally, with each mortgage payment, Alex builds equity in the property."
                },
                {
                    boxSubtitle: "2. Cash Flow Opportunities",
                    boxSubDescription: "Real estate investments, particularly rental properties, provide a consistent income stream through rental payments. Positive cash flow from rental income can offer financial stability and serve as a reliable source of funds for other investments or personal expenses.",
                    ExampleData: "Sarah decides to invest in a duplex, renting out one unit while residing in the other. The rental income she receives each month not only covers her mortgage but also generates positive cash flow, allowing her to reinvest in the property or pursue other investment opportunities."
                }
            ]
        },
        {
            boxtitle: "Diversification Benefits",
            pointTitle: [
                {
                    boxSubtitle: "1. Real Estate as a Portfolio Diversifier",
                    boxSubDescription: "Including real estate in an investment portfolio can enhance diversification by reducing overall risk. Real estate often exhibits a low correlation with other asset classes, such as stocks and bonds, providing a buffer against market volatility.",
                    ExampleData: "Consider David, whose investment portfolio consists of stocks and bonds. To diversify, he allocates a portion of his portfolio to real estate by investing in a Real Estate Investment Trust (REIT). As the real estate market behaves independently of stocks, David minimizes the impact of market fluctuations on his overall portfolio."
                },
                {
                    boxSubtitle: "2. Risk Mitigation through Property Investment",
                    boxSubDescription: "Investing in physical properties can act as a hedge against economic downturns. Unlike paper assets, real estate investments allow for direct control and adaptation to market conditions.",
                    ExampleData: "During a recession, property values may decrease, but rental demand often remains steady or increases as individuals opt for renting over homeownership. Mary, an investor with rental properties, experiences a more stable income stream despite economic uncertainties."
                }
            ]
        },
        {
            boxtitle: "Economic Impact",
            pointTitle: [
                {
                    boxSubtitle: "1. Role of Real Estate in the US Economy",
                    boxSubDescription: "Real estate is a cornerstone of the US economy, contributing significantly to GDP. Property development, construction, and related industries create jobs and stimulate economic growth.",
                    ExampleData: "John, a construction worker, finds employment on a large-scale housing development project. This project not only provides John with a job but also contributes to the local economy by creating opportunities for suppliers, contractors, and other businesses."
                },
                {
                    boxSubtitle: "2. Job Creation and Economic Stimulus",
                    boxSubDescription: "Real estate investments, especially large-scale developments, have a ripple effect on job creation. From architects and construction workers to property managers and service providers, the real estate sector generates employment opportunities across various industries.",
                    ExampleData: "A real estate developer initiates a mixed-use development, incorporating residential, commercial, and recreational spaces. The project not only enhances the local community but also creates jobs in construction, property management, and retail, contributing to overall economic stimulus."
                }
            ]
        },

    ]
    return (
        <>
            <CommonResourceComponent Resources="Resources" Module="Module 1" Chapter="Chapter 1" Date="February 17, 2023" ResourceHeading="REAL ESTATE INVESTMENTS IN THE UNITED STATES" AuthorInfo="Stephanie Gordon, Content Manager, Vaar" topResourceImg={ReactangleTopImage} />



            <section style={{ backgroundColor: "white" }}>
                <div className="container p-0">
                    <Row>
                        <Col lg={6} md={6} className="hide-on-mobile">
                            <CommonResourceLeftSide MainLeftcontainerHeading="In this chapter" liList={liList} boxTitle="Try the product out for free." />
                        </Col>
                        <Col lg={18} md={18} className="full-width-on-mobile">
                            <div className="resources-right-container">
                                <p>Real estate investment in the United States has long been a cornerstone of wealth creation, financial stability, and economic growth.
                                    The allure of property ownership transcends generations, offering a tangible and enduring asset class. From residential homes to commercial
                                    complexes, the diverse landscape of real estate investments has attracted investors seeking both short-term gains and long-term stability.
                                    This chapter delves into the multifaceted realm of real estate investments in the U.S., exploring its definition, scope, types, historical
                                    context, milestones, and its paramount importance in the contemporary economic landscape.</p>
                                <div className="padding-slite"></div>
                                <div>
                                    <h4 id="Definitionandscope">Definition and Scope</h4>
                                    <p>Real estate investment involves the acquisition, ownership, management, rental, or sale of real property for the purpose of generating profit.
                                        Real property includes land and any permanent improvements attached to it, such as buildings and infrastructure. The scope of real estate
                                        investments extends beyond mere ownership of residential homes; it encompasses commercial properties, industrial spaces, retail establishments,
                                        and even raw land.</p>
                                </div>
                                <div className="padding-slite"></div>
                                <div className="only-for-pc-view">
                                    <h4 id="Typesofrealestateinvestments">Types of Real Estate Investments</h4>
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
                                            <button onClick={handlePrev}><i class='bx bx-left-arrow-alt' ></i></button>
                                            <button onClick={handleNext}><i class='bx bx-right-arrow-alt'></i></button>
                                        </div>
                                    </div> */}
                                </div>

                                <div className="padding-slite"></div>
                                <div>
                                    <h4>Historical Context and Key Milestones</h4>
                                    <p>Understanding the historical milestones in the US real estate market provides crucial insights into its current structure and trends.</p>
                                    <div className="padding-slite"></div>
                                    <div>
                                        {HistoricalContextBox.map((item, index) => (
                                            <>
                                                <div key={index} className="historicalContextBox">
                                                    <h6>{item.boxtitle}</h6>
                                                    <p>{item.description}</p>

                                                </div>
                                                <hr />
                                            </>

                                        ))}

                                    </div>
                                </div>
                                <div className="padding-slite"></div>
                                <div>
                                    <h4>Current US Real Estate Market Context</h4>
                                    <p>As of the most recent data available, the US real estate market continues to display resilience and adaptability. Despite challenges, the market has rebounded from the effects of the 2008 financial crisis, with steady growth observed in both residential and commercial sectors.</p>
                                    <div className="padding-slite"></div>
                                    <div>
                                        {CurrentUsData.map((item, index) => (
                                            <>
                                                <div key={index} className="CurrentUsBox">
                                                    <h6>{item.boxtitle}</h6>
                                                    <p>{item.description}</p>
                                                </div>
                                                <hr />
                                            </>
                                        ))}
                                    </div>
                                </div>
                                <div className="padding-slite"></div>
                                <div id="importanceofrealestate">
                                    <h4>Importance of Real Estate Investments in the Current Day and Age</h4>
                                    <h6>Real Estate as an Investment Tool </h6>
                                    <p>Real estate, as an investment tool, goes beyond the mere ownership of physical properties; it is a strategic financial instrument used to generate income, build wealth, and diversify investment portfolios. This section delves into the various dimensions of real estate as an investment tool, detailing its characteristics and how investors leverage it for financial gain.</p>
                                    <div className="padding-slite"></div>
                                    <div className="hide-on-mobile">
                                        {ImportanceOfRealStateData.map((item, index) => (
                                            <div key={index} className="RealEstate-Box">
                                                <h6>{item.boxtitle}</h6>
                                                <hr />
                                                {/* Rendering nested pointTitle */}
                                                {item.pointTitle.map((point, pointIndex) => (
                                                    <div key={pointIndex} className="ImpotanceOfRealState">
                                                        <p>{point.boxSubtitle}</p>
                                                        <p>{point.boxSubDescription}</p>
                                                        <p><span style={{ fontWeight: "600" }}>Example: </span>{point.ExampleData}</p>
                                                        <br />
                                                    </div>
                                                ))}
                                            </div>
                                        ))}
                                    </div>
                                    <div className="only-for-mobile-view">
                                        {ImportanceOfRealStateData.map((item, index) => (
                                            <Carousel key={index} afterChange={onChange} ref={carouselRef} dots={true} autoplay>
                                                {item.pointTitle.map((point, pointIndex) => (
                                                    <div key={pointIndex}>
                                                        <div className="RealEstate-Box">
                                                            <h6>{item.boxtitle}</h6>
                                                            <hr />
                                                            <div className="ImpotanceOfRealState">
                                                                <p>{point.boxSubtitle}</p>
                                                                <p>{point.boxSubDescription}</p>
                                                                <p><span style={{ fontWeight: "600" }}>Example: </span>{point.ExampleData}</p>
                                                                <br />
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </Carousel>
                                        ))}


                                    </div>
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
export default SingleResource1;