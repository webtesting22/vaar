import React,{useRef, useEffect} from "react";
import CommonResourceComponent from "../commonResourceComponent";
import CommonResourceLeftSide from "../CommonResourceLeftSide";
import { Row, Col } from "antd";
import ReactangleTopImage from "./Rectangle.svg"
import { CardTitle } from "react-bootstrap";
import DontMissBlog from "../DontMissBlogs/DontMissBlogs";
import SignupSection from "../../SignUp/SignupSection";
import {Module1, Module4} from "../AllResourcesData"
import linkIndex from "../utils/linkIndex";
function SingleResource10() {
    const conclusionRef = useRef(null);
    const liList = [
        {
            list: "Vaar addresses and mitigates risks"

        },
        {
            list: "Conclusion",
            id:"Conclusion"
        }
    ]
    const cardData = [
        {
            CardTitle: "Diversification",
            cardDetails: [
                {
                    cardMainText: "Traditional Challenge",
                    cardDescription: "Real estate investments typically require significant capital, limiting investors to a small number of properties. This lack of diversification exposes investors to the specific risks associated with each property."
                },
                {
                    cardMainText: "Vaar's Solution",
                    cardDescription: "By enabling fractional ownership, Vaar allows investors to diversify their real estate portfolio easily. Investors can spread their capital across multiple properties, reducing the impact of underperformance in any single asset. Diversification is a fundamental risk mitigation strategy, and Vaar makes it accessible to a broader range of investors."
                }
            ]
        },
        {
            CardTitle: "Thorough Due Diligence",
            cardDetails: [
                {
                    cardMainText: "Traditional Challenge",
                    cardDescription: "Conducting due diligence on a property can be time-consuming and costly. Lack of information may lead to unforeseen challenges or risks."
                },
                {
                    cardMainText: "Vaar's Solution",
                    cardDescription: "Vaar takes the onus of due diligence seriously. Before an asset is offered for fractional ownership, the platform conducts comprehensive research and due diligence on the property. This ensures that investors have access to clean and transparent information about the asset, including its potential returns, associated risks, and other crucial details. By providing thorough due diligence, Vaar empowers investors to make well-informed decisions, reducing the likelihood of unpleasant surprises."
                }
            ]
        },
        {
            CardTitle: "Transparency",
            cardDetails: [
                {
                    cardMainText: "Traditional Challenge",
                    cardDescription: " Real estate transactions often involve complex financial structures and hidden costs, leading to information asymmetry and increased risk for investors."
                },
                {
                    cardMainText: "Vaar's Solution",
                    cardDescription: "Transparency is a core principle of Vaar. The platform discloses and breaks down all costs and figures related to each asset, ensuring that investors are equipped with the necessary information to make informed decisions. This transparency extends to the entire investment process, from research and qualification to offering and ongoing management. By providing a clear and transparent view of the investment, Vaar helps investors understand the potential risks and rewards associated with each property."
                }
            ]
        },
        {
            CardTitle: "Quarterly Dividends and Annuity Income",
            cardDetails: [
                {
                    cardMainText: "Traditional Challenge",
                    cardDescription: " Real estate investments may have long periods without immediate returns, and income generation is often tied to the sale of the property."
                },
                {
                    cardMainText: "Vaar's Solution",
                    cardDescription: "Through fractional ownership, investors on Vaar receive a share of the rental income generated by the properties. This income is distributed in the form of quarterly dividends, providing investors with a regular and predictable stream of passive income. By offering a steady income flow, Vaar enhances the liquidity of the investment and helps mitigate the risk associated with prolonged periods without returns."
                }
            ]
        },
        {
            CardTitle: "Long-Term Investment Horizon",
            cardDetails: [
                {
                    cardMainText: "Traditional Challenge",
                    cardDescription: "Market fluctuations and short-term economic uncertainties can pose risks to real estate investments."
                },
                {
                    cardMainText: "Vaar's Solution",
                    cardDescription: "Vaar views real estate as a long-term investment, typically intending to hold assets for 3-10 years. This longer investment horizon allows properties to mature and potentially recover from short-term fluctuations. By encouraging a patient approach to real estate investment, Vaar helps investors weather short-term market volatility and focus on the long-term growth potential of their portfolios."
                }
            ]
        }
    ]
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top when the component mounts or updates
      }, []);
    return (
        <>
            <CommonResourceComponent Resources="Resources" Module="Module 4" Chapter="Concept 2" Date="February 17, 2023" ResourceHeading="Risk Mitigation and Vaar" AuthorInfo="Stephanie Gordon, Content Manager, Vaar" topResourceImg={Module4[1].img} />
            <section >
                <div className="container p-0">
                    <Row>
                        <Col lg={6} md={6} className="hide-on-mobile">
                            <CommonResourceLeftSide MainLeftcontainerHeading="In this chapter" liList={liList} boxTitle="Try the product out for free." />
                        </Col>
                        <Col lg={18} md={18} className="full-width-on-mobile">
                            <div className="resources-right-container">
                                <p>Vaar's approach to risk mitigation in real estate investment is multifaceted, utilizing various strategies and features to provide investors with a more secure and well-managed investment experience. Here's a breakdown of how Vaar addresses and mitigates risks:</p>

                                {cardData.map((item, index) => (
                                    <div key={index} className="RealEstate-Box">
                                        <h6>{item.CardTitle}</h6>
                                        <hr style={{ opacity: "1" }} />
                                        {item.cardDetails.map((card, cardIndex) => (
                                            <ul key={cardIndex}>
                                                <li><b>{card.cardMainText}</b> : {card.cardDescription}</li>

                                            </ul>
                                        ))}
                                    </div>
                                ))}
                                <div className="padding-slite"></div>
                                <h4 ref={conclusionRef} id="Conclusion">Conclusion</h4>
                                <p>In summary, Vaar employs a comprehensive set of strategies, including diversification, due diligence, transparency, steady income distribution, and a long-term investment perspective, to mitigate risks associated with real estate investments. Through these mechanisms, Vaar aims to provide investors with a more secure and accessible avenue for participating in the real estate market.</p>

                            </div>
                        </Col>
                    </Row>
                    <div className="padding-slite"></div>
                    <div className="padding-slite"></div>
                    <DontMissBlog index={[9,11]} />
                </div>
            </section>
            <SignupSection/>
        </>
    )
}
export default SingleResource10;