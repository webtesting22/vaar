import React,{useRef,useEffect} from "react";
import CommonResourceComponent from "../commonResourceComponent";
import ReactangleTopImage from "../Resources5/Rectangle.svg"
import CommonResourceLeftSide from "../CommonResourceLeftSide";
import { Row, Col, Carousel } from "antd"
import DontMissBlog from "../DontMissBlogs/DontMissBlogs";
import SignupSection from "../../SignUp/SignupSection";
import {Module1, Module2} from "../AllResourcesData"
function SingleResource5() {
    // const conclusionRef = useRef(null);
    const liList = [
        {
            list: "Overview of the Current Landscape",
            id:"Overviewofthe"
        },
        {
            list: "Economic Factors Impacting Residential Real Estate",
            id:"EconomicFactorsImpacting"
        },
        {
            list: "Housing Market Trends",
            id:"HousingMarket"
        },
        {
            list: "Financing and Mortgage Market",
            id:"FinancingandMortgage"
        },
        {
            list: "Emerging Trends in Residential Real Estate Investing",
            id:"EmergingTrendsinResidential"
        },
        {
            list: "Challenges and Opportunities",
            id:"Challengesand"
        },
        {
            list: "Risk Management in Residential Real Estate Investing",
            id:"RiskManagement"
        },
        {
            list: "Residential Real Estate Investment Trusts (REITs) and Market Dynamics",
            id:"ResidentialRealEstate"
        },
        {
            list: "Future Outlook and Predictions",
            id:"FutureOutlook"
        },
        {
            list: "Conclusion",
            id:"Conclusion"
        }
    ]
    const cardData = [
        {
            cardTitle: "Interest Rates",
            cardPoints: [
                {
                    cardSubtitle: "1. Current trends",
                    cardPointDescription: "With interest rates hovering near historic lows in 2023, the real estate landscape is characterized by increased affordability. For example, a 30-year fixed-rate mortgage might be available at around 3%."
                },
                {
                    cardSubtitle: "2. Influence on mortgage rates",
                    cardPointDescription: "This low-interest environment translates to favorable mortgage rates, encouraging both traditional homebuyers and real estate investors to capitalize on the market."
                }
            ]
        }
    ]
    const HousingcardData = [
        {
            cardTitle: "Supply and Demand Dynamics",
            cardPoints: [
                {
                    cardSubtitle: "1. Current trends",
                    cardPointDescription: "With interest rates hovering near historic lows in 2023, the real estate landscape is characterized by increased affordability. For example, a 30-year fixed-rate mortgage might be available at around 3%."
                },
                {
                    cardSubtitle: "2. Influence on mortgage rates",
                    cardPointDescription: "This low-interest environment translates to favorable mortgage rates, encouraging both traditional homebuyers and real estate investors to capitalize on the market."
                }
            ]
        }
    ]
    const FinancingcardData = [
        {
            cardTitle: "Mortgage Availability",
            cardPoints: [
                {
                    cardSubtitle: "1. Accessibility of loans",
                    cardPointDescription: "The accessibility of mortgages for investors varies. Online lenders and innovative financing models may provide alternatives for investors facing challenges with traditional lenders."
                },
                {
                    cardSubtitle: "2. Impact on strategies",
                    cardPointDescription: "Investors adapt their strategies based on the availability of financing, with some exploring creative financing options such as seller financing or partnerships."
                }
            ]
        }
    ]
    const EmergingTrendscardData = [
        {
            cardTitle: "Technology Integration",
            cardPoints: [
                {
                    cardSubtitle: "1. Role of technology",
                    cardPointDescription: "Technologies like blockchain and AI are transforming the investment landscape. For instance, platforms utilizing blockchain for property transactions are gaining traction, ensuring transparency and reducing fraud."
                },
                {
                    cardSubtitle: "2. Property management",
                    cardPointDescription: "AI-driven property management systems are streamlining processes, offering real-time insights into market trends, and enhancing tenant experiences."
                }
            ]
        }
    ]
    const ChallengesOppcardData = [
        {
            cardTitle: "Affordability Challenges",
            cardPoints: [
                {
                    cardSubtitle: "1. Escalating home prices",
                    cardPointDescription: "The continuous rise in home prices poses challenges to affordability, especially in sought-after markets like Los Angeles. Investors navigate this by exploring emerging markets with growth potential."
                },
                {
                    cardSubtitle: "2. Income disparities",
                    cardPointDescription: "Strategies for investors include creative financing options and identifying markets where income growth outpaces housing price increases."
                }
            ]
        }
    ]
    const RiskManagementcardData = [
        {
            cardTitle: "Market Volatility",
            cardPoints: [
                {
                    cardSubtitle: "1. Understanding risks",
                    cardPointDescription: "Investors employ strategies to understand and manage risks during economic uncertainty. Diversification across property types and geographic locations is a risk mitigation strategy."
                },
                {
                    cardSubtitle: "2. Strategies for risk-averse investors",
                    cardPointDescription: "Risk-averse investors may explore stable markets with consistent demand, adopting a conservative approach to mitigate potential downturns."
                }
            ]
        }
    ]


    const ResedencialRealInverstmentcardData = [
        {
            cardTitle: "Role of REITs in Residential Real Estate",
            cardPoints: [
                {
                    cardSubtitle: "1. Overview",
                    cardPointDescription: "REITs have become increasingly prominent in the residential real estate market, providing investors with a diversified and liquid way to invest in housing."
                },
                {
                    cardSubtitle: "2. Market impact",
                    cardPointDescription: "The presence of residential REITs contributes to market liquidity and allows individual investors to access a share of the residential real estate market without direct property ownership."
                }
            ]
        }
    ]
    const FutureOutlookcardData = [
        {
            cardTitle: "Expert Perspectives",
            cardPoints: [
                {
                    cardSubtitle: "1. Insights from industry experts",
                    cardPointDescription: "Experts anticipate continued growth in the residential real estate market, with a notable role played by REITs in shaping the investment landscape."
                },
                {
                    cardSubtitle: "2. Considerations for long-term investment",
                    cardPointDescription: "Long-term considerations involve identifying markets with strong fundamentals, such as Phoenix, where population growth and job opportunities support sustained real estate demand."
                }
            ]
        }
    ]
    const Conclusion = [
        {
            cardTitle: "Summarization of Current Market Conditions",
            cardPoints: [
                {
                    cardSubtitle: "1. Recap of key points",
                    cardPointDescription: "The current market conditions reflect a dynamic landscape influenced by economic factors, technological advancements, shifting preferences, and the growing role of REITs in residential real estate."
                },
                {
                    cardSubtitle: "2. Closing thoughts",
                    cardPointDescription: "Investors are encouraged to stay agile, adapt to emerging trends, leverage opportunities, and consider the diverse investment avenues provided by REITs in the evolving residential real estate market as of 2023."
                }
            ]
        }
    ]
    const onChange = (currentSlide) => {
        // console.log(currentSlide);
    };
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top when the component mounts or updates
      }, []);
    return (
        <>
            <CommonResourceComponent Resources="Resources" Module="Module 2" Chapter="Chapter 5" Date="February 17, 2023" ResourceHeading="CURRENT MARKET CONDITIONS FOR RESIDENTIAL REAL ESTATE INVESTING IN THE US (2023)" AuthorInfo="Stephanie Gordon, Content Manager, Vaar" topResourceImg={Module2[1].img} />
            <section>
                <div className="container p-0">
                    <Row>
                        <Col lg={6} md={6} className="hide-on-mobile">
                            <CommonResourceLeftSide MainLeftcontainerHeading="In this chapter" liList={liList} boxTitle="Try the product out for free." />
                        </Col>
                        <Col lg={18} md={18} className="full-width-on-mobile">
                            <div className="resources-right-container">
                                <h4 id="Overviewofthe">Overview of the Current Landscape</h4>
                                <ul>
                                    <li> As of 2023, the residential real estate market in the United States presents a nuanced picture, influenced by post-pandemic recovery, technological shifts, and evolving consumer preferences.</li>
                                    <li>This chapter aims to delve into the intricate dynamics that define the current state of residential real estate investing, including the growing role of Real Estate Investment Trusts (REITs).</li>
                                </ul>
                                <div className="padding-slite"></div>
                                <h4 id="EconomicFactorsImpacting">Economic Factors Impacting Residential Real Estate</h4>
                                {/* <div className="padding-slite"></div> */}
                                <div className="carousal-container">
                                    {/* Nested map for CarousalData inside Carousel */}
                                    <Carousel afterChange={onChange} dots={true} autoplay>
                                        {cardData.map((item, index) => (
                                            <div key={index}>
                                                <h6>{item.cardTitle}</h6>
                                                <hr style={{ opacity: "1" }} />
                                                {item.cardPoints.map((subitem, subIndex) => (
                                                    <>
                                                        <p key={subIndex}><b>{subitem.cardSubtitle}</b>: {subitem.cardPointDescription}</p>
                                                        <div className="padding-slite"></div>
                                                    </>
                                                ))}

                                            </div>
                                        ))}

                                    </Carousel>
                                </div>



                                <div className="padding-slite"></div>
                                <h4 id="HousingMarket">Housing Market Trends</h4>
                                {/* <div className="padding-slite"></div> */}
                                <div className="carousal-container">
                                    {/* Nested map for CarousalData inside Carousel */}
                                    <Carousel afterChange={onChange} dots={true} autoplay>
                                        {HousingcardData.map((item, index) => (
                                            <div key={index}>
                                                <h6>{item.cardTitle}</h6>
                                                <hr style={{ opacity: "1" }} />
                                                {item.cardPoints.map((subitem, subIndex) => (
                                                    <>
                                                        <p key={subIndex}><b>{subitem.cardSubtitle}</b>: {subitem.cardPointDescription}</p>
                                                        <div className="padding-slite"></div>
                                                    </>
                                                ))}

                                            </div>
                                        ))}

                                    </Carousel>
                                </div>
                               


                                <div className="padding-slite"></div>
                                <h4 id="FinancingandMortgage">Financing and Mortgage Market</h4>
                                {/* <div className="padding-slite"></div> */}
                                <div className="carousal-container">
                                    {/* Nested map for CarousalData inside Carousel */}
                                    <Carousel afterChange={onChange} dots={true} autoplay>
                                        {FinancingcardData.map((item, index) => (
                                            <div key={index}>
                                                <h6>{item.cardTitle}</h6>
                                                <hr style={{ opacity: "1" }} />
                                                {item.cardPoints.map((subitem, subIndex) => (
                                                    <>
                                                        <p key={subIndex}><b>{subitem.cardSubtitle}</b>: {subitem.cardPointDescription}</p>
                                                        <div className="padding-slite"></div>
                                                    </>
                                                ))}

                                            </div>
                                        ))}

                                    </Carousel>
                                </div>


                                <div className="padding-slite"></div>
                                <h4 id="EmergingTrendsinResidential">Emerging Trends in Residential Real Estate Investing</h4>
                                {/* <div className="padding-slite"></div> */}
                                <div className="carousal-container">
                                    {/* Nested map for CarousalData inside Carousel */}
                                    <Carousel afterChange={onChange} dots={true} autoplay>
                                        {EmergingTrendscardData.map((item, index) => (
                                            <div key={index}>
                                                <h6>{item.cardTitle}</h6>
                                                <hr style={{ opacity: "1" }} />
                                                {item.cardPoints.map((subitem, subIndex) => (
                                                    <>
                                                        <p key={subIndex}><b>{subitem.cardSubtitle}</b>: {subitem.cardPointDescription}</p>
                                                        <div className="padding-slite"></div>
                                                    </>
                                                ))}

                                            </div>
                                        ))}

                                    </Carousel>
                                </div>


                                <div className="padding-slite"></div>
                                <h4 id="Challengesand">Challenges and Opportunities</h4>
                                {/* <div className="padding-slite"></div> */}
                                <div className="carousal-container">
                                    {/* Nested map for CarousalData inside Carousel */}
                                    <Carousel afterChange={onChange} dots={true} autoplay>
                                        {ChallengesOppcardData.map((item, index) => (
                                            <div key={index}>
                                                <h6>{item.cardTitle}</h6>
                                                <hr style={{ opacity: "1" }} />
                                                {item.cardPoints.map((subitem, subIndex) => (
                                                    <>
                                                        <p key={subIndex}><b>{subitem.cardSubtitle}</b>: {subitem.cardPointDescription}</p>
                                                        <div className="padding-slite"></div>
                                                    </>
                                                ))}

                                            </div>
                                        ))}

                                    </Carousel>
                                </div>



                                <div className="padding-slite"></div>
                                <h4 id="RiskManagement">Risk Management in Residential Real Estate Investing</h4>
                                {/* <div className="padding-slite"></div> */}
                                <div className="carousal-container">
                                    {/* Nested map for CarousalData inside Carousel */}
                                    <Carousel afterChange={onChange} dots={true} autoplay>
                                        {RiskManagementcardData.map((item, index) => (
                                            <div key={index}>
                                                <h6>{item.cardTitle}</h6>
                                                <hr style={{ opacity: "1" }} />
                                                {item.cardPoints.map((subitem, subIndex) => (
                                                    <>
                                                        <p key={subIndex}><b>{subitem.cardSubtitle}</b>: {subitem.cardPointDescription}</p>
                                                        <div className="padding-slite"></div>
                                                    </>
                                                ))}

                                            </div>
                                        ))}

                                    </Carousel>
                                </div>



                                <div className="padding-slite"></div>
                                <h4 id="ResidentialRealEstate">Residential Real Estate Investment Trusts (REITs) and Market Dynamics</h4>
                                {/* <div className="padding-slite"></div> */}
                                <div className="carousal-container">
                                    {/* Nested map for CarousalData inside Carousel */}
                                    <Carousel afterChange={onChange} dots={true} autoplay>
                                        {ResedencialRealInverstmentcardData.map((item, index) => (
                                            <div key={index}>
                                                <h6>{item.cardTitle}</h6>
                                                <hr style={{ opacity: "1" }} />
                                                {item.cardPoints.map((subitem, subIndex) => (
                                                    <>
                                                        <p key={subIndex}><b>{subitem.cardSubtitle}</b>: {subitem.cardPointDescription}</p>
                                                        <div className="padding-slite"></div>
                                                    </>
                                                ))}

                                            </div>
                                        ))}

                                    </Carousel>
                                </div>




                                <div className="padding-slite"></div>
                                <h4 id="FutureOutlook">Future Outlook and Predictions</h4>
                                {/* <div className="padding-slite"></div> */}
                                <div className="carousal-container">
                                    {/* Nested map for CarousalData inside Carousel */}
                                    <Carousel afterChange={onChange} dots={true} autoplay>
                                        {FutureOutlookcardData.map((item, index) => (
                                            <div key={index}>
                                                <h6>{item.cardTitle}</h6>
                                                <hr style={{ opacity: "1" }} />
                                                {item.cardPoints.map((subitem, subIndex) => (
                                                    <>
                                                        <p key={subIndex}><b>{subitem.cardSubtitle}</b>: {subitem.cardPointDescription}</p>
                                                        <div className="padding-slite"></div>
                                                    </>
                                                ))}

                                            </div>
                                        ))}

                                    </Carousel>
                                </div>
                                <div className="padding-slite"></div>
                                <h4 id="Conclusion">Conclusion</h4>
                                {/* <div className="padding-slite"></div> */}
                                {/* <div className="carousal-container"> */}
                                    {/* Nested map for CarousalData inside Carousel */}
                                    {/* <Carousel afterChange={onChange} dots={false} autoplay> */}
                                        {Conclusion.map((item, index) => (
                                            <div key={index}>
                                                <h6>{item.cardTitle}</h6>
                                                {/* <hr style={{ opacity: "1" }} /> */}
                                                {item.cardPoints.map((subitem, subIndex) => (
                                                    <>
                                                        <p key={subIndex}><b>{subitem.cardSubtitle}</b>: {subitem.cardPointDescription}</p>
                                                        <div className="padding-slite"></div>
                                                    </>
                                                ))}

                                            </div>
                                        ))}

                                    {/* </Carousel>
                                </div> */}


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
export default SingleResource5;