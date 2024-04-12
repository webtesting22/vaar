import React from "react";
import CommonResourceComponent from "../commonResourceComponent";
import CommonResourceLeftSide from "../CommonResourceLeftSide";
import { Row, Col } from "antd";
import ReactangleTopImage from "../Resources8/Rectangle.svg"
function SingleResource8() {
    const liList = [
        {
            list: "Introduction"
        },
        {
            list: "Age: Balancing Risk and Responsibilities"
        },
        {
            list: "Income + Savings: Building a Financial Foundation"
        },
        {
            list: "Psychological Factors: Understanding Investor Behavior"
        },
        {
            list: "Risk-Taking Ability: Defining Investment Choices"
        },
        {
            list: "Financial Goals: Defining the Investment Purpose"
        },
        {
            list: "Liquidity Needs: Balancing Accessibility and Returns"
        },
        {
            list: "Area of Work: Tailoring Investments to Profession"
        },
        {
            list: "Time: Active vs. Passive Investing"
        },
        {
            list: "Geography: Cost of Living and Investment Motivation"
        },
        {
            list: "Market Conditions: Adapting to Economic Environments"
        },
        {
            list: "Technological Adoption: Embracing Fintech Solutions"
        }
    ]
    const AgeBalancingData = [
        {
            cardTitle: "Appetite for Risk",
            cardDescription: "Generally, younger investors may have a higher risk appetite. With fewer responsibilities and dependents, they can afford to take on riskier investments such as stocks or cryptocurrencies."
        },
        {
            cardTitle: "Long-Term Horizon",
            cardDescription: "Younger individuals often have a longer investment horizon, allowing them to withstand market fluctuations and capitalize on the compounding effect over time."
        }
    ]
    const OlderInvestors = [
        {
            cardTitle: "Risk Aversion",
            cardDescription: "As age increases, responsibilities like mortgages, education expenses, and healthcare costs may rise. Older investors tend to prioritize capital preservation, favoring safer assets like bonds or real estate."
        },
        {
            cardTitle: "Income Stability",
            cardDescription: "Dependence on investment income may also rise, making older investors more cautious and inclined towards stable, income-generating assets."
        }
    ]
    const IncomeSaving = [
        {
            cardTitle: "Diversification Opportunities",
            cardDescription: "Individuals with higher incomes may diversify across various asset classes. Real estate or private equity investments might complement traditional investment portfolios."
        },
        {
            cardTitle: "Risk Tolerance",
            cardDescription: "A higher income might afford greater risk tolerance, allowing for exposure to potentially higher-yield but riskier investments."
        }
    ]
    const MiddleToLower = [
        {
            cardTitle: "Focus on Stability",
            cardDescription: "Individuals with more limited financial resources might prioritize stability and steady returns. Savings may go into less volatile assets such as savings accounts, bonds, or dividend-paying stocks."
        }
    ]
    const psychological = [
        {
            cardTitle: "Behavioral Biases",
            cardDescription: "Cognitive biases like loss aversion or overconfidence can impact risk tolerance and influence investment decisions."
        },
        {
            cardTitle: "Risk Assessment Tools",
            cardDescription: "Some investors use risk assessment tools to objectively evaluate their risk tolerance."
        }

    ]
    const Emotiaonal = [
        {
            cardTitle: "Market Volatility Response",
            cardDescription: "Emotional resilience plays a role in how investors react to market fluctuations."
        },
        {
            cardTitle: "Active Trading",
            cardDescription: "A risk-tolerant investor might engage in frequent trading to capitalize on short-term market movements."
        }
    ]
    const riskTolerant = [
        {
            cardTitle: "High-Risk Assets",
            cardDescription: "Those comfortable with risk may venture into high-risk, high-reward assets like cryptocurrencies, growth stocks, or venture capital."
        },
        {
            cardTitle: "Active Trading",
            cardDescription: "A risk-tolerant investor might engage in frequent trading to capitalize on short-term market movements."
        }
    ]
    const riskAverse = [
        {
            cardTitle: "Stable Assets",
            cardDescription: "Risk-averse individuals may gravitate towards stable assets like government bonds, real estate investment trusts (REITs), or blue-chip stocks with a history of consistent returns."
        }
    ]
    const ShortTerm = [
        {
            cardTitle: "Emergency Funds",
            cardDescription: " Investors with short-term goals may prioritize low-risk, liquid assets. Long-term investors may embrace a diversified portfolio with a higher allocation to growth-oriented assets."
        }
    ]
    const specificFinancial = [
        {
            cardTitle: "Education Funds",
            cardDescription: "Parents saving for their children's education might consider tax-advantaged accounts and stable investments to ensure capital preservation."
        },
        {
            cardTitle: "Homeownership",
            cardDescription: "Individuals saving for a home might explore real estate investments or low-risk securities."
        }
    ]
    const liquidVSlliquid = [
        {
            cardTitle: "Emergency Liquidity",
            cardDescription: "Individuals with higher liquidity needs may prioritize investments that can be easily converted to cash in emergencies."
        },
        {
            cardTitle: "Lock-in Investments",
            cardDescription: "Illiquid investments like real estate or private equity may be suitable for those with a longer investment horizon."
        }
    ]
    const specificFinancialObjectives = [
        {
            cardTitle: "Education Funds",
            cardDescription: "Parents saving for their children's education might consider tax-advantaged accounts and stable investments to ensure capital preservation."
        },
        {
            cardTitle: "Homeownership",
            cardDescription: "Individuals saving for a home might explore real estate investments or low-risk securities."
        }
    ]
    const Entrepreneurs = [
        {
            cardTitle: "Risk-Taking Ability",
            cardDescription: "Entrepreneurs, accustomed to risk in their professional lives, may exhibit a higher risk tolerance in investments. They might explore ventures like startups or venture capital."
        },
        {
            cardTitle: "Sector Expertise",
            cardDescription: "Professionals in specific industries may leverage their expertise, investing in sectors they understand well."
        }
    ]
    const salaried = [
        {
            cardTitle: "Steady Income",
            cardDescription: "Salaried individuals may prioritize stability and steady income streams. Investments may lean towards conventional options such as mutual funds, 401(k), or real estate for long-term growth."
        }
    ]
    const BusyProfessionals = [
        {
            cardTitle: "Passive Investing",
            cardDescription: "Those with demanding careers may prefer passive investing, relying on options like 401(k) plans or index funds. This approach requires less time and active involvement."
        },
        {
            cardTitle: "Financial Advisors",
            cardDescription: "Professionals may seek the guidance of financial advisors to manage their investments efficiently."
        }
    ]
    const ActiveManagement = [
        {
            cardTitle: "Active Management",
            cardDescription: "Individuals with more time and interest may engage in active management, directly trading stocks, managing a real estate portfolio, or exploring alternative investments."
        }
    ]
    const Geography = [
        {
            cardTitle: "Higher Living Costs",
            cardDescription: "Individuals in high-cost cities like NYC may invest with the aim of wealth multiplication, seeking higher returns to offset elevated living expenses."
        },
        {
            cardTitle: "Real Estate as an Investment",
            cardDescription: "Urban residents might view real estate as both a place to live and an investment, given the potential for property value appreciation."
        }
    ]
    const ruralResidents = [
        {
            cardTitle: "Lower Living Costs",
            cardDescription: "Those in rural areas with lower living costs may have different investment goals, possibly focusing on more conservative options to secure their financial future."
        },
        {
            cardTitle: "Local Opportunities",
            cardDescription: "Investments might be driven by local opportunities, such as agricultural ventures or community-based projects."
        }
    ]
    return (
        <>
            <CommonResourceComponent Resources="Resources" Module="Module 2" Chapter="Chapter 8" Date="February 17, 2023" ResourceHeading="Comprehensive Factors Influencing Investment Decision-Making" AuthorInfo="Stephanie Gordon, Content Manager, Vaar" topResourceImg={ReactangleTopImage} />
            <section style={{ backgroundColor: "white" }}>
                <div className="container p-0">
                    <Row>
                        <Col lg={6} md={6} className="hide-on-mobile">
                            <CommonResourceLeftSide MainLeftcontainerHeading="In this chapter" liList={liList} boxTitle="Try the product out for free." />
                        </Col>
                        <Col lg={18} md={18} className="full-width-on-mobile">
                            <div className="resources-right-container">
                                <h4>Introduction</h4>
                                <p>Investing is a process shaped by a diverse set of personal, financial, and contextual factors. A thorough understanding of these elements empowers investors to navigate the complexities of financial markets and make informed decisions that align with their goals, risk tolerance, and unique circumstances. </p>
                                <br />
                                <p>This chapter explores a comprehensive range of factors that significantly impact investment choices, building upon the previously discussed aspects:</p>
                                <div className="padding-slite"></div>
                                <h4>1. Age: Balancing Risk and Responsibilities</h4>
                                <div className="padding-slite"></div>
                                <div className="heading-vertical-line-edit">
                                    <span></span>
                                    <h6>Young Investors</h6>
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
                                </Row>
                                <div className="padding-slite"></div>
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
                                </Row>
                                <div className="padding-slite"></div>
                                <h4>2.Income + Savings: Building a Financial Foundation</h4>
                                <div className="padding-slite"></div>
                                <div className="heading-vertical-line-edit">
                                    <span></span>
                                    <h6>High Income Earners</h6>
                                    <br />
                                </div>
                                <Row>
                                    {IncomeSaving.map((item, index) => (
                                        <Col lg={12} md={24}>
                                            <div key={index} className="RealEstate-Box m-2">
                                                <h6>{item.cardTitle}</h6>
                                                <hr style={{ opacity: "1" }} />
                                                <p>{item.cardDescription}</p>
                                            </div>
                                        </Col>
                                    ))}
                                </Row>


                                <div className="padding-slite"></div>
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
                                </Row>
                                <div className="padding-slite"></div>
                                <h4>Psychological Factors: Understanding Investor Behavior</h4>
                                <div className="padding-slite"></div>
                                <div className="heading-vertical-line-edit">
                                    <span></span>
                                    <h6>Risk Tolerance and Risk Aversion</h6>
                                    <br />

                                </div>
                                <Row>
                                    {psychological.map((item, index) => (
                                        <Col lg={12} md={24}>
                                            <div key={index} className="RealEstate-Box m-2">
                                                <h6>{item.cardTitle}</h6>
                                                <hr style={{ opacity: "1" }} />
                                                <p>{item.cardDescription}</p>
                                            </div>
                                        </Col>
                                    ))}
                                </Row>
                                <div className="padding-slite"></div>
                                <div className="heading-vertical-line-edit">
                                    <span></span>
                                    <h6>Emotional Resilience</h6>
                                    <br />

                                </div>
                                <Row>
                                    {psychological.map((item, index) => (
                                        <Col lg={12} md={24}>
                                            <div key={index} className="RealEstate-Box m-2">
                                                <h6>{item.cardTitle}</h6>
                                                <hr style={{ opacity: "1" }} />
                                                <p>{item.cardDescription}</p>
                                            </div>
                                        </Col>
                                    ))}
                                </Row>
                                <div className="padding-slite"></div>
                                <h4>4. Risk-Taking Ability: Defining Investment Choices</h4>
                                <div className="padding-slite"></div>
                                <div className="heading-vertical-line-edit">
                                    <span></span>
                                    <h6>Risk-Tolerant Investors</h6>
                                    <br />

                                </div>
                                <Row>
                                    {riskTolerant.map((item, index) => (
                                        <Col lg={12} md={24}>
                                            <div key={index} className="RealEstate-Box m-2">
                                                <h6>{item.cardTitle}</h6>
                                                <hr style={{ opacity: "1" }} />
                                                <p>{item.cardDescription}</p>
                                            </div>
                                        </Col>
                                    ))}
                                </Row>
                                <div className="padding-slite"></div>

                                <div className="heading-vertical-line-edit">
                                    <span></span>
                                    <h6>Risk-Averse Investors</h6>
                                    <br />

                                </div>
                                <Row>
                                    {riskAverse.map((item, index) => (
                                        <Col lg={12} md={24}>
                                            <div key={index} className="RealEstate-Box m-2">
                                                <h6>{item.cardTitle}</h6>
                                                <hr style={{ opacity: "1" }} />
                                                <p>{item.cardDescription}</p>
                                            </div>
                                        </Col>
                                    ))}
                                </Row>
                                <div className="padding-slite"></div>
                                <h4>5. Financial Goals: Defining the Investment Purpose</h4>
                                <div className="padding-slite"></div>
                                <div className="heading-vertical-line-edit">
                                    <span></span>
                                    <h6>Short-Term vs. Long-Term Goals</h6>
                                    <br />

                                </div>
                                <Row>
                                    {ShortTerm.map((item, index) => (
                                        <Col lg={12} md={24}>
                                            <div key={index} className="RealEstate-Box m-2">
                                                <h6>{item.cardTitle}</h6>
                                                <hr style={{ opacity: "1" }} />
                                                <p>{item.cardDescription}</p>
                                            </div>
                                        </Col>
                                    ))}
                                </Row>

                                <div className="padding-slite"></div>
                                <div className="heading-vertical-line-edit">
                                    <span></span>
                                    <h6>Specific Financial Objectives</h6>
                                    <br />

                                </div>
                                <Row>
                                    {specificFinancial.map((item, index) => (
                                        <Col lg={12} md={24}>
                                            <div key={index} className="RealEstate-Box m-2">
                                                <h6>{item.cardTitle}</h6>
                                                <hr style={{ opacity: "1" }} />
                                                <p>{item.cardDescription}</p>
                                            </div>
                                        </Col>
                                    ))}
                                </Row>
                                <div className="padding-slite"></div>
                                <h4>Liquidity Needs: Balancing Accessibility and Returns</h4>
                                <div className="padding-slite"></div>
                                <div className="heading-vertical-line-edit">
                                    <span></span>
                                    <h6>Liquid vs. Illiquid Assets</h6>
                                    <br />

                                </div>
                                <Row>
                                    {liquidVSlliquid.map((item, index) => (
                                        <Col lg={12} md={24}>
                                            <div key={index} className="RealEstate-Box m-2">
                                                <h6>{item.cardTitle}</h6>
                                                <hr style={{ opacity: "1" }} />
                                                <p>{item.cardDescription}</p>
                                            </div>
                                        </Col>
                                    ))}
                                </Row>
                                <div className="padding-slite"></div>
                                <div className="heading-vertical-line-edit">
                                    <span></span>
                                    <h6>Specific Financial Objectives</h6>
                                    <br />

                                </div>
                                <Row>
                                    {specificFinancialObjectives.map((item, index) => (
                                        <Col lg={12} md={24}>
                                            <div key={index} className="RealEstate-Box m-2">
                                                <h6>{item.cardTitle}</h6>
                                                <hr style={{ opacity: "1" }} />
                                                <p>{item.cardDescription}</p>
                                            </div>
                                        </Col>
                                    ))}
                                </Row>
                                <div className="padding-slite"></div>
                                <h4>Area of Work: Tailoring Investments to Profession</h4>
                                <div className="padding-slite"></div>
                                <div className="heading-vertical-line-edit">
                                    <span></span>
                                    <h6>Entrepreneurs or Business Owners</h6>
                                    <br />

                                </div>
                                <Row>
                                    {Entrepreneurs.map((item, index) => (
                                        <Col lg={12} md={24}>
                                            <div key={index} className="RealEstate-Box m-2">
                                                <h6>{item.cardTitle}</h6>
                                                <hr style={{ opacity: "1" }} />
                                                <p>{item.cardDescription}</p>
                                            </div>
                                        </Col>
                                    ))}
                                </Row>
                                <div className="padding-slite"></div>
                                <div className="heading-vertical-line-edit">
                                    <span></span>
                                    <h6>Salaried Professionals</h6>
                                    <br />

                                </div>
                                <Row>
                                    {salaried.map((item, index) => (
                                        <Col lg={12} md={24}>
                                            <div key={index} className="RealEstate-Box m-2">
                                                <h6>{item.cardTitle}</h6>
                                                <hr style={{ opacity: "1" }} />
                                                <p>{item.cardDescription}</p>
                                            </div>
                                        </Col>
                                    ))}
                                </Row>
                                <div className="padding-slite"></div>
                                <h4>8. Time: Active vs. Passive Investing</h4>
                                <div className="padding-slite"></div>
                                <div className="heading-vertical-line-edit">
                                    <span></span>
                                    <h6>Busy Professionals</h6>
                                    <br />

                                </div>
                                <Row>
                                    {BusyProfessionals.map((item, index) => (
                                        <Col lg={12} md={24}>
                                            <div key={index} className="RealEstate-Box m-2">
                                                <h6>{item.cardTitle}</h6>
                                                <hr style={{ opacity: "1" }} />
                                                <p>{item.cardDescription}</p>
                                            </div>
                                        </Col>
                                    ))}
                                </Row>
                                <div className="padding-slite"></div>
                                <div className="heading-vertical-line-edit">
                                    <span></span>
                                    <h6>Investment Enthusiasts</h6>
                                    <br />

                                </div>
                                <Row>
                                    {ActiveManagement.map((item, index) => (
                                        <Col lg={12} md={24}>
                                            <div key={index} className="RealEstate-Box m-2">
                                                <h6>{item.cardTitle}</h6>
                                                <hr style={{ opacity: "1" }} />
                                                <p>{item.cardDescription}</p>
                                            </div>
                                        </Col>
                                    ))}
                                </Row>
                                <div className="padding-slite"></div>
                                <h4>9. Geography: Cost of Living and Investment Motivation</h4>
                                <div className="padding-slite"></div>
                                <div className="heading-vertical-line-edit">
                                    <span></span>
                                    <h6>Urban Dwellers</h6>
                                    <br />

                                </div>
                                <Row>
                                    {Geography.map((item, index) => (
                                        <Col lg={12} md={24}>
                                            <div key={index} className="RealEstate-Box m-2">
                                                <h6>{item.cardTitle}</h6>
                                                <hr style={{ opacity: "1" }} />
                                                <p>{item.cardDescription}</p>
                                            </div>
                                        </Col>
                                    ))}
                                </Row>
                                <div className="padding-slite"></div>
                                <div className="heading-vertical-line-edit">
                                    <span></span>
                                    <h6>Rural Residents</h6>
                                    <br />

                                </div>
                                <Row>
                                    {Geography.map((item, index) => (
                                        <Col lg={12} md={24}>
                                            <div key={index} className="RealEstate-Box m-2">
                                                <h6>{item.cardTitle}</h6>
                                                <hr style={{ opacity: "1" }} />
                                                <p>{item.cardDescription}</p>
                                            </div>
                                        </Col>
                                    ))}
                                </Row>


                            </div>
                        </Col>
                    </Row>
                </div>
            </section>
        </>
    )
}
export default SingleResource8