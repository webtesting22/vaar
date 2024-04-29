import React, { useEffect } from "react";
import CommonResourceComponent from "../commonResourceComponent";
import ReactangleTopImage from "./Rectangle.svg"
import CommonResourceLeftSide from "../CommonResourceLeftSide";
import { Row, Col } from "antd"
import { Module1, Module3 } from "../AllResourcesData"
import DontMissBlog from "../DontMissBlogs/DontMissBlogs";
import SignupSection from "../../SignUp/SignupSection";
import linkIndex from "../utils/linkIndex";
function SingleResource8() {
    const liList = [
        {
            list: "Introduction"
        },
        {
            list: "Cash"
        },
        {
            list: "Bonds"
        },
        {
            list: "Gold"
        },
        {
            list: "Bonds"
        },
        {
            list: "Real Estate"
        },
        {
            list: "Stocks"
        },
        {
            list: "Cryptocurrency"
        },
        {
            list: "Commodities"
        },
        {
            list: "Conclusion"
        }
    ]
    const CashData = [
        {
            CardrowTitle: "Risk Characteristics",
            cardDetails: [
                {
                    cardTitle: "Low Volatility",
                    cardDescription: "Cash is considered a low-volatility asset, with minimal price fluctuations."
                },
                {
                    cardTitle: "Inflation Risk",
                    cardDescription: "Cash holdings may be exposed to inflation risk, where the purchasing power diminishes over time."
                }
            ]
        },
        {
            CardrowTitle: "Return Potential",
            cardDetails: [
                {
                    cardTitle: "Low Returns",
                    cardDescription: "Cash typically offers lower returns compared to other asset classes."
                },
                {
                    cardTitle: "Liquidity",
                    cardDescription: "High liquidity allows for easy access to funds, making it suitable for short-term needs."
                }
            ]
        },
        {
            CardrowTitle: "Risk-Return Ranking",
            cardDetails: [
                {
                    cardTitle: "Low Risk, Low Return",
                    cardDescription: "Cash is a low-risk asset, providing stability but with limited potential for returns."
                }
            ]
        }
    ]
    const bondsData = [
        {
            CardrowTitle: "Risk Characteristics",
            cardDetails: [
                {
                    cardTitle: "Interest Rate Risk",
                    cardDescription: "Bond prices are inversely related to interest rates, exposing investors to interest rate risk."
                },
                {
                    cardTitle: "Credit Risk",
                    cardDescription: "Bonds carry credit risk, where the issuer may default on interest or principal payments."
                }
            ]
        },
        {
            CardrowTitle: "Return Potential",
            cardDetails: [
                {
                    cardTitle: "Regular Interest Income",
                    cardDescription: "Bonds provide regular interest payments, offering a stable income stream."
                },
                {
                    cardTitle: "Principal Preservation",
                    cardDescription: "Bonds are considered safer than equities, attracting investors looking to preserve capital."
                }
            ]
        },
        {
            CardrowTitle: "Risk-Return Ranking",
            cardDetails: [
                {
                    cardTitle: "Low to Moderate Risk, Moderate Return",
                    cardDescription: "Bonds typically fall into the category of low to moderate risk with a moderate return potential. They serve as a balance between stability and income."
                }
            ]
        }
    ]
    const goldData = [
        {
            CardrowTitle: "Risk Characteristics",
            cardDetails: [
                {
                    cardTitle: "Low Volatility",
                    cardDescription: "Gold is known for its relatively low volatility compared to equities or cryptocurrencies."
                },
                {
                    cardTitle: "Economic and Geopolitical Risks",
                    cardDescription: "Gold prices can be influenced by economic uncertainties and geopolitical events."
                }
            ]
        },
        {
            CardrowTitle: "Return Potential",
            cardDetails: [
                {
                    cardTitle: "Hedge Against Inflation",
                    cardDescription: "Gold is often seen as a hedge against inflation."
                },
                {
                    cardTitle: "Store of Value",
                    cardDescription: "Gold can act as a store of value during times of market turbulence."
                }
            ]
        },
        {
            CardrowTitle: "Risk-Return Ranking",
            cardDetails: [
                {
                    cardTitle: "Low to Moderate Risk, Variable Return",
                    cardDescription: "Gold is generally considered a low to moderate-risk asset with returns influenced by economic conditions and geopolitical factors."
                }
            ]
        }
    ]
    const realEstateData = [
        {
            CardrowTitle: "Risk Characteristics",
            cardDetails: [
                {
                    cardTitle: "Market Cycles",
                    cardDescription: "Real estate values can be influenced by economic cycles, impacting demand and property values."
                },
                {
                    cardTitle: "Property-Specific Risks",
                    cardDescription: "Individual properties may face risks such as vacancy, maintenance costs, and changes in local economic conditions."
                }
            ]
        },
        {
            CardrowTitle: "Return Potential",
            cardDetails: [
                {
                    cardTitle: "Rental Income",
                    cardDescription: "Real estate investments, particularly rental properties, provide a steady income stream through rental payments."
                },
                {
                    cardTitle: "Appreciation",
                    cardDescription: "Real estate has the potential for property value appreciation over time."
                }
            ]
        },
        {
            CardrowTitle: "Risk-Return Ranking",
            cardDetails: [
                {
                    cardTitle: "Moderate to High Risk, Moderate Return",
                    cardDescription: "Real estate investments fall into a moderate to high-risk category, depending on factors such as location and property type. Returns are often moderate, with income and appreciation potential."
                }
            ]
        }
    ]
    const stocksData = [
        {
            CardrowTitle: "Risk Characteristics",
            cardDetails: [
                {
                    cardTitle: "Market Volatility",
                    cardDescription: "Stocks are known for their price volatility, influenced by economic conditions, company performance, and geopolitical events."
                },
                {
                    cardTitle: "Market Risks",
                    cardDescription: "Equity investments expose investors to market risks, including systemic risk that affects entire sectors or markets."
                }
            ]
        },
        {
            CardrowTitle: "Return Potential",
            cardDetails: [
                {
                    cardTitle: "Capital Appreciation",
                    cardDescription: "Stocks have the potential for significant capital appreciation, especially in growing sectors or during bullish market conditions."
                },
                {
                    cardTitle: "Dividend Income",
                    cardDescription: "Some stocks offer dividend payments, providing investors with a source of income."
                }
            ]
        },
        {
            CardrowTitle: "Risk-Return Ranking",
            cardDetails: [
                {
                    cardTitle: "High Risk, High Potential Return",
                    cardDescription: "Equities generally fall into the category of high-risk, high-potential-return assets. The potential for substantial gains comes with the risk of significant losses."
                }
            ]
        }
    ]
    const cryptocurrencyData = [
        {
            CardrowTitle: "Risk Characteristics",
            cardDetails: [
                {
                    cardTitle: "Volatility",
                    cardDescription: " Cryptocurrencies, such as Bitcoin, are known for their extreme price volatility."
                },
                {
                    cardTitle: "Regulatory Risks",
                    cardDescription: "Evolving and uncertain regulatory environments can impact the value and acceptance of cryptocurrencies."
                }
            ]
        },
        {
            CardrowTitle: "Return Potential",
            cardDetails: [
                {
                    cardTitle: "High Potential Returns",
                    cardDescription: "Cryptocurrencies have demonstrated the potential for substantial gains, attracting investors seeking high returns."
                },
                {
                    cardTitle: "Speculative Nature",
                    cardDescription: "The speculative nature of cryptocurrencies makes them attractive for short-term trading."
                },

            ]
        },
        {
            CardrowTitle: "Risk-Return Ranking",
            cardDetails: [
                {
                    cardTitle: "Very High Risk, High Potential Return",
                    cardDescription: "Cryptocurrencies are considered very high-risk assets. While the potential for high returns exists, the extreme volatility requires careful consideration."
                }
            ]
        }

    ]
    const commoditiesData = [
        {
            CardrowTitle: "Risk Characteristics",
            cardDetails: [
                {
                    cardTitle: "Price Volatility",
                    cardDescription: "Commodities, such as gold and oil, can experience significant price volatility due to supply and demand dynamics."
                },
                {
                    cardTitle: "Geopolitical Factors",
                    cardDescription: "Global events and geopolitical tensions can impact commodity prices."
                }
            ]
        },
        {
            CardrowTitle: "Return Potential",
            cardDetails: [
                {
                    cardTitle: "Diversification Benefits",
                    cardDescription: "Commodities can provide diversification benefits, especially during times of economic uncertainty."
                },
                {
                    cardTitle: "Inflation Hedge",
                    cardDescription: "Certain commodities, like gold, are often considered hedges against inflation."
                }
            ]
        },
        {
            CardrowTitle: "Risk-Return Ranking",
            cardDetails: [
                {
                    cardTitle: "High Risk, Variable Return",
                    cardDescription: "Commodities typically fall into the high-risk category. Returns can be variable, with potential for gains during certain market conditions."
                }
            ]
        }
    ]
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top when the component mounts or updates
    }, []);
    return (
        <>
            <CommonResourceComponent Resources="Resources" Module="Module 3" Chapter="Chapter 9" Date="February 17, 2023" ResourceHeading="RISK AND RETURN ANALYSIS ACROSS INVESTMENT ASSETS" AuthorInfo="Stephanie Gordon, Content Manager, Vaar" topResourceImg={Module3[2].img} />
            <section >
                <div className="container p-0">
                    <Row>
                        <Col lg={6} md={6} className="hide-on-mobile">
                            <CommonResourceLeftSide MainLeftcontainerHeading="In this chapter" liList={liList} boxTitle="Try the product out for free." />
                        </Col>
                        <Col lg={18} md={18} className="full-width-on-mobile">
                            <div className="resources-right-container">
                                <h4>Introduction</h4>
                                <p>Investors navigate the financial landscape with the twin goals of maximizing returns and managing risk. This chapter explores the risk-return profiles of diverse investment assets, encompassing cash, bonds, gold, real estate, stocks, cryptocurrency, and commodities. Understanding how these assets rank in terms of risk, volatility, and potential returns is crucial for constructing well-balanced and resilient investment portfolios.</p>
                                <div className="padding-slite"></div>
                                <h4>1. Cash</h4>
                                <div className="padding-slite"></div>
                                {CashData.map((item, index) => (
                                    <div key={index}>
                                        <div className="heading-vertical-line-edit">
                                            {/* <span></span> */}
                                            <h6>{item.CardrowTitle}</h6> {/* Use item.heading instead of hardcoding */}
                                            <br />
                                        </div>

                                        {/* Assuming cardDetails is an array within each item */}
                                        <Row>
                                            {item.cardDetails.map((subitem, subIndex) => (
                                                <Col lg={12} md={12} key={subIndex}>
                                                    <div className="RealEstate-Box m-2">
                                                        <h6>{subitem.cardTitle}</h6> {/* Use subitem.cardTitle for card details */}
                                                        <hr style={{ opacity: "1" }} />
                                                        <p>{subitem.cardDescription}</p> {/* Use subitem.cardDescription for card details */}
                                                    </div>
                                                    <div className="padding-slite"></div>
                                                </Col>
                                            ))}
                                        </Row>
                                    </div>
                                ))}
                                <div className="padding-slite"></div>
                                <h4>2. Bond</h4>
                                <div className="padding-slite"></div>
                                {bondsData.map((item, index) => (
                                    <div key={index}>
                                        <div className="heading-vertical-line-edit">
                                            {/* <span></span> */}
                                            <h6>{item.CardrowTitle}</h6> {/* Use item.heading instead of hardcoding */}
                                            <br />
                                        </div>

                                        {/* Assuming cardDetails is an array within each item */}
                                        <Row>
                                            {item.cardDetails.map((subitem, subIndex) => (
                                                <Col lg={12} md={12} key={subIndex}>
                                                    <div className="RealEstate-Box m-2">
                                                        <h6>{subitem.cardTitle}</h6> {/* Use subitem.cardTitle for card details */}
                                                        <hr style={{ opacity: "1" }} />
                                                        <p>{subitem.cardDescription}</p> {/* Use subitem.cardDescription for card details */}
                                                    </div>
                                                    <div className="padding-slite"></div>
                                                </Col>
                                            ))}
                                        </Row>
                                    </div>
                                ))}
                                <div className="padding-slite"></div>
                                <h4>3. Gold</h4>
                                <div className="padding-slite"></div>
                                {goldData.map((item, index) => (
                                    <div key={index}>
                                        <div className="heading-vertical-line-edit">
                                            {/* <span></span> */}
                                            <h6>{item.CardrowTitle}</h6> {/* Use item.heading instead of hardcoding */}
                                            <br />
                                        </div>

                                        {/* Assuming cardDetails is an array within each item */}
                                        <Row>
                                            {item.cardDetails.map((subitem, subIndex) => (
                                                <Col lg={12} md={12} key={subIndex}>
                                                    <div className="RealEstate-Box m-2">
                                                        <h6>{subitem.cardTitle}</h6> {/* Use subitem.cardTitle for card details */}
                                                        <hr style={{ opacity: "1" }} />
                                                        <p>{subitem.cardDescription}</p> {/* Use subitem.cardDescription for card details */}
                                                    </div>
                                                    <div className="padding-slite"></div>
                                                </Col>
                                            ))}
                                        </Row>
                                    </div>
                                ))}
                                <div className="padding-slite"></div>
                                <h4>4. Real Estate</h4>
                                <div className="padding-slite"></div>
                                {realEstateData.map((item, index) => (
                                    <div key={index}>
                                        <div className="heading-vertical-line-edit">
                                            {/* <span></span> */}
                                            <h6>{item.CardrowTitle}</h6> {/* Use item.heading instead of hardcoding */}
                                            <br />
                                        </div>

                                        {/* Assuming cardDetails is an array within each item */}
                                        <Row>
                                            {item.cardDetails.map((subitem, subIndex) => (
                                                <Col lg={12} md={12} key={subIndex}>
                                                    <div className="RealEstate-Box m-2">
                                                        <h6>{subitem.cardTitle}</h6> {/* Use subitem.cardTitle for card details */}
                                                        <hr style={{ opacity: "1" }} />
                                                        <p>{subitem.cardDescription}</p> {/* Use subitem.cardDescription for card details */}
                                                    </div>
                                                    <div className="padding-slite"></div>
                                                </Col>
                                            ))}
                                        </Row>
                                    </div>
                                ))}
                                <div className="padding-slite"></div>
                                <h4>5. Stocks</h4>
                                <div className="padding-slite"></div>
                                {stocksData.map((item, index) => (
                                    <div key={index}>
                                        <div className="heading-vertical-line-edit">
                                            {/* <span></span> */}
                                            <h6>{item.CardrowTitle}</h6> {/* Use item.heading instead of hardcoding */}
                                            <br />
                                        </div>

                                        {/* Assuming cardDetails is an array within each item */}
                                        <Row>
                                            {item.cardDetails.map((subitem, subIndex) => (
                                                <Col lg={12} md={12} key={subIndex}>
                                                    <div className="RealEstate-Box m-2">
                                                        <h6>{subitem.cardTitle}</h6> {/* Use subitem.cardTitle for card details */}
                                                        <hr style={{ opacity: "1" }} />
                                                        <p>{subitem.cardDescription}</p> {/* Use subitem.cardDescription for card details */}
                                                    </div>
                                                    <div className="padding-slite"></div>
                                                </Col>
                                            ))}
                                        </Row>
                                    </div>
                                ))}
                                <div className="padding-slite"></div>
                                <h4>6. Cryptocurrency</h4>
                                <div className="padding-slite"></div>
                                {cryptocurrencyData.map((item, index) => (
                                    <div key={index}>
                                        <div className="heading-vertical-line-edit">
                                            {/* <span></span> */}
                                            <h6>{item.CardrowTitle}</h6> {/* Use item.heading instead of hardcoding */}
                                            <br />
                                        </div>

                                        {/* Assuming cardDetails is an array within each item */}
                                        <Row>
                                            {item.cardDetails.map((subitem, subIndex) => (
                                                <Col lg={12} md={12} key={subIndex}>
                                                    <div className="RealEstate-Box m-2">
                                                        <h6>{subitem.cardTitle}</h6> {/* Use subitem.cardTitle for card details */}
                                                        <hr style={{ opacity: "1" }} />
                                                        <p>{subitem.cardDescription}</p> {/* Use subitem.cardDescription for card details */}
                                                    </div>
                                                    <div className="padding-slite"></div>
                                                </Col>
                                            ))}
                                        </Row>
                                    </div>
                                ))}
                                <div className="padding-slite"></div>
                                <h4>7. Commodities</h4>
                                <div className="padding-slite"></div>
                                {commoditiesData.map((item, index) => (
                                    <div key={index}>
                                        <div className="heading-vertical-line-edit">
                                            {/* <span></span> */}
                                            <h6>{item.CardrowTitle}</h6> {/* Use item.heading instead of hardcoding */}
                                            <br />
                                        </div>

                                        {/* Assuming cardDetails is an array within each item */}
                                        <Row>
                                            {item.cardDetails.map((subitem, subIndex) => (
                                                <Col lg={12} md={12} key={subIndex}>
                                                    <div className="RealEstate-Box m-2">
                                                        <h6>{subitem.cardTitle}</h6> {/* Use subitem.cardTitle for card details */}
                                                        <hr style={{ opacity: "1" }} />
                                                        <p>{subitem.cardDescription}</p> {/* Use subitem.cardDescription for card details */}
                                                    </div>
                                                    <div className="padding-slite"></div>
                                                </Col>
                                            ))}
                                        </Row>
                                    </div>
                                ))}
                                <div className="padding-slite"></div>
                                <h4>Conclusion</h4>
                                <p>Understanding the risk-return profiles of different investment assets is vital for constructing a well-balanced investment portfolio. Investors should carefully assess their risk tolerance, investment goals, and time horizon to determine the optimal mix of assets that align with their financial objectives. A nuanced approach to portfolio construction, considering both risk and return, enables investors to navigate the complexities of the investment landscape and build portfolios that can weather various market conditions.</p>


                            </div>
                        </Col>
                    </Row>
                    <div className="padding-slite"></div>
                    <div className="padding-slite"></div>
                    <DontMissBlog index={[7,9]} />
                </div>
            </section>
            <SignupSection />
        </>
    )
}
export default SingleResource8;