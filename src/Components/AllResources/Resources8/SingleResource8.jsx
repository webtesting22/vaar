import React, {useEffect} from "react";
import CommonResourceComponent from "../commonResourceComponent";
import CommonResourceLeftSide from "../CommonResourceLeftSide";
import { Row, Col } from "antd";
import ReactangleTopImage from "../Resources8/Rectangle.svg"
import DontMissBlog from "../DontMissBlogs/DontMissBlogs";
import SignupSection from "../../SignUp/SignupSection";
function SingleResource8() {
    const liList = [
        {
            list: "Introduction",
            id:"Introduction"
        },
        {
            list: "Age: Balancing Risk and Responsibilities",
            id:"AgeBalancingRisk"
        },
        {
            list: "Income + Savings: Building a Financial Foundation",
            id:"IncomeSavings"
        },
        {
            list: "Psychological Factors: Understanding Investor Behavior",
            id:"PsychologicalFactors"
        },
        {
            list: "Risk-Taking Ability: Defining Investment Choices",
            id:"RiskTaking"
        },
        {
            list: "Financial Goals: Defining the Investment Purpose",
            id:"FinancialGoals"
        },
        {
            list: "Liquidity Needs: Balancing Accessibility and Returns",
            id:"LiquidityNeeds"
        },
        {
            list: "Area of Work: Tailoring Investments to Profession",
            id:"AreaofWork"
        },
        {
            list: "Time: Active vs. Passive Investing",
            id:"TimeActive"
        },
        {
            list: "Geography: Cost of Living and Investment Motivation",
            id:"GeographyCost"

        },
        {
            list: "Market Conditions: Adapting to Economic Environments",
            id:"MarketConditions"
        },
        {
            list: "Technological Adoption: Embracing Fintech Solutions",
            id:"TechnologicalAdoption"
        }
    ]
    const AgeBalancingData = [
        {
            CardrowTitle: "Young Investors",
            cardDetails: [
                {
                    cardTitle: "Appetite for Risk",
                    cardDescription: "Generally, younger investors may have a higher risk appetite. With fewer responsibilities and dependents, they can afford to take on riskier investments such as stocks or cryptocurrencies."
                },
                {
                    cardTitle: "Long-Term Horizon",
                    cardDescription: "Younger individuals often have a longer investment horizon, allowing them to withstand market fluctuations and capitalize on the compounding effect over time."
                }
            ]
        },
        {
            CardrowTitle: "Older Investors",
            cardDetails: [
                {
                    cardTitle: "Risk Aversion",
                    cardDescription: "As age increases, responsibilities like mortgages, education expenses, and healthcare costs may rise. Older investors tend to prioritize capital preservation, favoring safer assets like bonds or real estate."
                },
                {
                    cardTitle: "Income Stability",
                    cardDescription: "Dependence on investment income may also rise, making older investors more cautious and inclined towards stable, income-generating assets."
                }
            ]
        }


    ]

    const IncomeSaving = [
        {
            CardrowTitle: "High Income Earners",
            cardDetails: [
                {
                    cardTitle: "Diversification Opportunities",
                    cardDescription: "Individuals with higher incomes may diversify across various asset classes. Real estate or private equity investments might complement traditional investment portfolios."
                },
                {
                    cardTitle: "Risk Tolerance",
                    cardDescription: "A higher income might afford greater risk tolerance, allowing for exposure to potentially higher-yield but riskier investments."
                }
            ]
        },
        {
            CardrowTitle: "Middle to Lower Income Earners",
            cardDetails: [
                {
                    cardTitle: "Focus on Stability",
                    cardDescription: "Individuals with more limited financial resources might prioritize stability and steady returns. Savings may go into less volatile assets such as savings accounts, bonds, or dividend-paying stocks."
                }
            ]
        }

    ]

    const psychological = [
        {
            CardrowTitle: "Risk Tolerance and Risk Aversion",
            cardDetails: [
                {
                    cardTitle: "Behavioral Biases",
                    cardDescription: "Cognitive biases like loss aversion or overconfidence can impact risk tolerance and influence investment decisions."
                },
                {
                    cardTitle: "Risk Assessment Tools",
                    cardDescription: "Some investors use risk assessment tools to objectively evaluate their risk tolerance."
                }
            ]
        },
        {
            CardrowTitle: "Emotional Resilience",
            cardDetails: [
                {
                    cardTitle: "Market Volatility Response",
                    cardDescription: "Emotional resilience plays a role in how investors react to market fluctuations."
                },
            ]
        }


    ]

    const riskTolerant = [
        {
            CardrowTitle: "Risk-Tolerant Investors",
            cardDetails: [
                {
                    cardTitle: "High-Risk Assets",
                    cardDescription: "Those comfortable with risk may venture into high-risk, high-reward assets like cryptocurrencies, growth stocks, or venture capital."
                },
                {
                    cardTitle: "Active Trading",
                    cardDescription: "A risk-tolerant investor might engage in frequent trading to capitalize on short-term market movements."
                }
            ]
        },
        {
            CardrowTitle: "Risk-Averse Investors",
            cardDetails: [
                {
                    cardTitle: "Stable Assets",
                    cardDescription: "Risk-averse individuals may gravitate towards stable assets like government bonds, real estate investment trusts (REITs), or blue-chip stocks with a history of consistent returns."
                }
            ]
        }

    ]

    const ShortTerm = [
        {
            CardrowTitle: "Short-Term vs. Long-Term Goals",
            cardDetails: [
                {
                    cardTitle: "Emergency Funds",
                    cardDescription: " Investors with short-term goals may prioritize low-risk, liquid assets. Long-term investors may embrace a diversified portfolio with a higher allocation to growth-oriented assets."
                }
            ]
        },
        {
            CardrowTitle: "Specific Financial Objectives",
            cardDetails: [
                {
                    cardTitle: "Education Funds",
                    cardDescription: "Parents saving for their children's education might consider tax-advantaged accounts and stable investments to ensure capital preservation."
                },
                {
                    cardTitle: "Homeownership",
                    cardDescription: "Individuals saving for a home might explore real estate investments or low-risk securities."
                }
            ]
        }

    ]

    const liquidVSlliquid = [
        {
            CardrowTitle: "Liquid vs. Illiquid Assets",
            cardDetails: [
                {
                    cardTitle: "Emergency Liquidity",
                    cardDescription: "Individuals with higher liquidity needs may prioritize investments that can be easily converted to cash in emergencies."
                },
                {
                    cardTitle: "Lock-in Investments",
                    cardDescription: "Illiquid investments like real estate or private equity may be suitable for those with a longer investment horizon."
                }
            ]
        },
        {
            CardrowTitle: "Specific Financial Objectives",
            cardDetails: [
                {
                    cardTitle: "Education Funds",
                    cardDescription: "Parents saving for their children's education might consider tax-advantaged accounts and stable investments to ensure capital preservation."
                },
                {
                    cardTitle: "Homeownership",
                    cardDescription: "Individuals saving for a home might explore real estate investments or low-risk securities."
                }
            ]
        }


    ]

    const Entrepreneurs = [
        {
            CardrowTitle: "Entrepreneurs or Business Owners",
            cardDetails: [
                {
                    cardTitle: "Risk-Taking Ability",
                    cardDescription: "Entrepreneurs, accustomed to risk in their professional lives, may exhibit a higher risk tolerance in investments. They might explore ventures like startups or venture capital."
                },
                {
                    cardTitle: "Sector Expertise",
                    cardDescription: "Professionals in specific industries may leverage their expertise, investing in sectors they understand well."
                }
            ]
        },
        {
            CardrowTitle: "Salaried Professionals",
            cardDetails: [
                {
                    cardTitle: "Steady Income",
                    cardDescription: "Salaried individuals may prioritize stability and steady income streams. Investments may lean towards conventional options such as mutual funds, 401(k), or real estate for long-term growth."
                }
            ]
        }

    ]

    const BusyProfessionals = [
        {
            CardrowTitle: "Entrepreneurs or Business Owners",
            cardDetails: [
                {
                    cardTitle: "Passive Investing",
                    cardDescription: "Those with demanding careers may prefer passive investing, relying on options like 401(k) plans or index funds. This approach requires less time and active involvement."
                },
                {
                    cardTitle: "Financial Advisors",
                    cardDescription: "Professionals may seek the guidance of financial advisors to manage their investments efficiently."
                }
            ]
        },
        {
            CardrowTitle: "Investment Enthusiasts",
            cardDetails: [
                {
                    cardTitle: "Active Management",
                    cardDescription: "Individuals with more time and interest may engage in active management, directly trading stocks, managing a real estate portfolio, or exploring alternative investments."
                }
            ]
        }

    ]

    const Geography = [
        {
            CardrowTitle: "Urban Dwellers",
            cardDetails: [
                {
                    cardTitle: "Higher Living Costs",
                    cardDescription: "Individuals in high-cost cities like NYC may invest with the aim of wealth multiplication, seeking higher returns to offset elevated living expenses."
                },
                {
                    cardTitle: "Real Estate as an Investment",
                    cardDescription: "Urban residents might view real estate as both a place to live and an investment, given the potential for property value appreciation."
                }
            ]
        },
        {
            CardrowTitle: "Rural Residents",
            cardDetails: [
                {
                    cardTitle: "Lower Living Costs",
                    cardDescription: "Those in rural areas with lower living costs may have different investment goals, possibly focusing on more conservative options to secure their financial future."
                },
                {
                    cardTitle: "Local Opportunities",
                    cardDescription: "Investments might be driven by local opportunities, such as agricultural ventures or community-based projects."
                }
            ]
        }

    ]
    const MarketCondition =[
        {
            CardrowTitle:"Bull vs. Bear Markets",
            cardDetails:[
                {
                    cardTitle:"Bull Markets",
                    cardDescription:"During periods of economic growth, investors might lean towards riskier assets for higher returns."
                },
                {
                    cardTitle:"Bear Markets",
                    cardDescription:"Economic downturns may prompt a shift towards defensive assets like gold, government bonds, or dividend-paying stocks."
                }
            ]
        },
        {
            CardrowTitle:"Inflation Considerations",
            cardDetails:[
                {
                    cardTitle:"Inflation-Adjusted Investments",
                    cardDescription:"Investors may choose assets with potential returns that outpace inflation to preserve purchasing power."
                }
            ]
        }
    ]

    const MarketConditionAdaoting = [
        {
            CardrowTitle:"Bull vs. Bear Markets",
            cardDetails:[
                {
                    cardTitle:"Bull Markets",
                    cardDescription:"During periods of economic growth, investors might lean towards riskier assets for higher returns."
                },
                {
                    cardTitle:"Bear Markets",
                    cardDescription:"Economic downturns may prompt a shift towards defensive assets like gold, government bonds, or dividend-paying stocks."
                }
            ]
        },
        {
            CardrowTitle:"Inflation Considerations",
            cardDetails:[
                {
                    cardTitle:"Inflation-Adjusted Investments",
                    cardDescription:"Investors may choose assets with potential returns that outpace inflation to preserve purchasing power."
                }
            ]
        }
    ]
    const MarketKnowledge=[
        {
            CardrowTitle:"Financial Literacy",
            cardDetails:[
                {
                    cardTitle:"Continuous Learning",
                    cardDescription:"Well-informed investors may regularly update their financial knowledge through books, courses, and financial news sources. "
                },
                {
                    cardTitle:"Hands-On Approach",
                    cardDescription:"Investors with an inclination to learn may actively manage their portfolios, staying informed about market trends and economic indicators."
                },
                {
                    cardTitle:"Market Analysis",
                    cardDescription:"Analyzing market trends, economic indicators, and company fundamentals."
                }
            ]
        },
        {
            CardrowTitle:"Professional Advice",
            cardDetails:[
                {
                    cardTitle:"Financial Advisors",
                    cardDescription:"Seeking guidance from financial professionals for personalized advice based on individual financial situations."
                }
            ]
        }
    ]
    const technologicalAdoptive =[
        {
            CardrowTitle:"Tech-Savvy Investors",
            cardDetails:[
                {
                    cardTitle:"Digital Platforms",
                    cardDescription:"Comfort with technology may lead investors to use robo-advisors, peer-to-peer lending platforms, or cryptocurrency exchanges."
                },
                {
                    cardTitle:"Blockchain Investments",
                    cardDescription:"Tech enthusiasts might explore blockchain-based assets and decentralized finance (DeFi) opportunities."
                }
            ]
        }
    ]
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top when the component mounts or updates
      }, []);
    return (
        <>
            <CommonResourceComponent Resources="Resources" Module="Module 2" Chapter="Chapter 8" Date="February 17, 2023" ResourceHeading="COMPREHENSIVE FACTORS INFLUENCING INVESTMENT DECISION-MAKING" AuthorInfo="Stephanie Gordon, Content Manager, Vaar" topResourceImg={ReactangleTopImage} />
            <section>
                <div className="container p-0">
                    <Row>
                        <Col lg={6} md={6} className="hide-on-mobile">
                            <CommonResourceLeftSide MainLeftcontainerHeading="In this chapter" liList={liList} boxTitle="Try the product out for free." />
                        </Col>
                        <Col lg={18} md={18} className="full-width-on-mobile">
                            <div className="resources-right-container">
                                <h4 id="Introduction">Introduction</h4>
                                <p>Investing is a process shaped by a diverse set of personal, financial, and contextual factors. A thorough understanding of these elements empowers investors to navigate the complexities of financial markets and make informed decisions that align with their goals, risk tolerance, and unique circumstances. </p>
                                <br />
                                <p>This chapter explores a comprehensive range of factors that significantly impact investment choices, building upon the previously discussed aspects:</p>
                                <div className="padding-slite"></div>
                                <h4 id="AgeBalancingRisk">1. Age: Balancing Risk and Responsibilities</h4>
                                <div className="padding-slite"></div>

                                {AgeBalancingData.map((item, index) => (
                                    <div key={index}>
                                        <div className="heading-vertical-line-edit">
                                            <span></span>
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


                                {/* <div className="padding-slite"></div>
                                <div className="heading-vertical-line-edit">
                                    <span></span>
                                    <h6>Older Investors</h6>
                                    <br />
                                </div>
                                <Row>
                                    {AgeBalancingData.map((item, index) => (
                                        <Col lg={12} md={24}>
                                            <div key={index} className="RealEstate-Box m-2">
                                                <h6>{item.cardTitle}</h6>
                                                <hr style={{ opacity: "1" }} />
                                                <p>{item.cardDescription}</p>
                                            </div>
                                        </Col>
                                    ))}
                                </Row> */}
                                <div className="padding-slite"></div>
                                <h4 id="IncomeSavings">2.Income + Savings: Building a Financial Foundation</h4>
                                <div className="padding-slite"></div>

                                {IncomeSaving.map((item, index) => (
                                    <div key={index}>
                                        <div className="heading-vertical-line-edit">
                                            <span></span>
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


                                {/* <div className="padding-slite"></div>
                                <div className="heading-vertical-line-edit">
                                    <span></span>
                                    <h6>Middle to Lower Income Earners</h6>
                                    <br />
                                </div>
                                <Row>
                                    {MiddleToLower.map((item, index) => (
                                        <Col lg={12} md={24}>
                                            <div key={index} className="RealEstate-Box m-2">
                                                <h6>{item.cardTitle}</h6>
                                                <hr style={{ opacity: "1" }} />
                                                <p>{item.cardDescription}</p>
                                            </div>
                                        </Col>
                                    ))}
                                </Row> */}
                                <div className="padding-slite"></div>
                                <h4 id="PsychologicalFactors">3. Psychological Factors: Understanding Investor Behavior</h4>
                                <div className="padding-slite"></div>
                                {psychological.map((item, index) => (
                                    <div key={index}>
                                        <div className="heading-vertical-line-edit">
                                            <span></span>
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
                                <h4 id="RiskTaking">4. Risk-Taking Ability: Defining Investment Choices</h4>
                                <div className="padding-slite"></div>

                                {riskTolerant.map((item, index) => (
                                    <div key={index}>
                                        <div className="heading-vertical-line-edit">
                                            <span></span>
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
                                <h4 id="FinancialGoals">5. Financial Goals: Defining the Investment Purpose</h4>
                                <div className="padding-slite"></div>
                                {ShortTerm.map((item, index) => (
                                    <div key={index}>
                                        <div className="heading-vertical-line-edit">
                                            <span></span>
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
                                <h4 id="LiquidityNeeds">6. Liquidity Needs: Balancing Accessibility and Returns</h4>
                                <div className="padding-slite"></div>
                                {liquidVSlliquid.map((item, index) => (
                                    <div key={index}>
                                        <div className="heading-vertical-line-edit">
                                            <span></span>
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
                                <h4 id="AreaofWork">7. Area of Work: Tailoring Investments to Profession</h4>
                                <div className="padding-slite"></div>
                                {Entrepreneurs.map((item, index) => (
                                    <div key={index}>
                                        <div className="heading-vertical-line-edit">
                                            <span></span>
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
                                <h4 id="TimeActive">8. Time: Active vs. Passive Investing</h4>
                                <div className="padding-slite"></div>
                                {BusyProfessionals.map((item, index) => (
                                    <div key={index}>
                                        <div className="heading-vertical-line-edit">
                                            <span></span>
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
                                <h4 id="GeographyCost">9. Geography: Cost of Living and Investment Motivation</h4>
                                <div className="padding-slite"></div>
                                {Geography.map((item, index) => (
                                    <div key={index}>
                                        <div className="heading-vertical-line-edit">
                                            <span></span>
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
                                <h4 id="MarketConditions">10. Market Conditions: Adapting to Economic Environments</h4>
                                <div className="padding-slite"></div>
                                {MarketConditionAdaoting.map((item, index) => (
                                    <div key={index}>
                                        <div className="heading-vertical-line-edit">
                                            <span></span>
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
                                <h4 >11. Market Knowledge and Information Sources: Staying Informed</h4>
                                <div className="padding-slite"></div>
                                {MarketKnowledge.map((item, index) => (
                                    <div key={index}>
                                        <div className="heading-vertical-line-edit">
                                            <span></span>
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
                                <h4 id="TechnologicalAdoption">12. Technological Adoption: Embracing Fintech Solutions</h4>
                                <div className="padding-slite"></div>
                                {technologicalAdoptive.map((item, index) => (
                                    <div key={index}>
                                        <div className="heading-vertical-line-edit">
                                            <span></span>
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

                            </div>
                        </Col>
                    </Row>
                    <div className="padding-slite"></div>
                    <DontMissBlog />
                </div>
            </section>
            <SignupSection />
        </>
    )
}
export default SingleResource8