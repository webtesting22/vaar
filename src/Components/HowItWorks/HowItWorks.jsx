import React, { useEffect } from "react";
import Guide from "../Guide/Guide";
import { Accordion } from "react-bootstrap";

function HowItWorks() {
    const accordionData = [
        {
            id: 1,
            title: "Isn't it safer to invest in REITs since they are managed by well-known asset managers?",
            content: [
                "Investing in a REIT carries the risk of average performance because it represents a diverse array of assets. You are exposed to all the assets in the portfolio - the profitable, the underperforming, and the ones in between. This variety can lead to average returns.",
                <br />, <br />,
                " Consider this: The largest REIT for Commercial Real Estate in the U.S. is down about 45% from its peak and has returned a loss over the past 4 years.",
                <br />, <br />,
                "On the other hand, we specialize in selecting proven, high-quality assets, and enable each investor to create a portfolio that aligns with their individual investment thesis.",
                <br />,
                "Thus, making each portfolio capable of changing with the changing times."
            ]

        },
        {
            id: 2,
            title: "What is the moat?",
            content: [
                "Brokerage platforms like Schwab and Fidelity should have never existed.People were already trading stocks on the exchange floors, yelling orders, right?",
                <br />, <br />,
                "And by that logic, the new-age brokerages - Robinhood and Zerodha, are even more redundant because they facilitated what had long existed with Schwab. However, today, Robinhood (2013) and Zerodha (2010) are both in the top 3 brokerages of large nations - US and India respectively",
                <br />, <br />,
                "Not everything is about “invention”. With the fast pace of technology and knowledge that we see right now, there in merit in improving the existing systems in place; a need for refinement to bring them up to speed. In a sense, that is what we are doing at Vaar for real estate investing."
            ],
        },
        {
            id: 3,
            title: 'Why now?',
            content: [
                "1. Because the best time to buy real estate was yesterday. ",
                <br />, <br />,
                "2. The U.S. real estate market is undergoing a correction. Assets previously inflated by what is known as ''demand premium' are now adjusting to reflect their true value. As this happens, assets are aligning with their most efficient prices, which reflects their actual utility.",
                <br />, <br />,
                "3. Rental income is the one thing that keeps pace with inflation, making it an essential store of value and hence wealth.",
                <br />, <br />,
                "4. Real estate can offer stability during economic uncertainties. Although not all markets are immune to fluctuations, our thesis aims to identify those that are generally unaffected."
            ],
        },
        {
            id: 4,
            title: 'How is well is Vaar positioned in the market?',
            content: [
                '1. "The first one through the wall always gets bloody." Due to this, we at Vaar want to correct many mistakes made by our predecessors and first-movers.',
                <br />,   <br />,
                "2. Furthermore, most platforms (including the largest player in the space) that enable fractional investments in individual RE have covid-inflated assets on their books, which have since returned to normal. This means, a bulk of assets that they own are principally at a loss.While we are not catching price bottoms, we do believe there is merit in being on-time, as even the regulations in the industry have gotten refined since."

            ],
        },
        {
            id: 5,
            title: 'Why real estate?',
            content: [
                "Real estate is called “real” for a reason.",
                <br />,   <br />,
                "1. It is literally the only finite asset that doesn't need marketing for its importance to be understood.",
                <br />,   <br />,
                "2. Diversification into real estate helps spread risk as it often has a low correlation with other asset classes like stocks and bonds.",
                "3. It has potential to offer reliable returns in the form of rental income + asset appreciation."
            ],
        },
        {
            id: 6,
            title: 'What if an investor wants to sell their investment?',
            content: [
                "We view real estate as a long-term investment vehicle and select assets with a vision to hold them for a period of 3-8 years. Obviously, if we happen to stumble upon a lucrative exit deal, we'll go ahead and sell sooner.",
                <br />,   <br />,
                "Moreover:",
                <br />,   <br />,
                "1. We intend to offer Annual Redemption Windows to our paid-members eventually. The plan is currently in the works.",
                <br />,   <br />,
                "2. We are also planning to build a Secondary Sale Marketplace on our platform, where an investor can list their shares for sale at any time (obviously, we won't be able to ensure liquidity in this case.)",
    
            ],
        },
        {
            id: 7,
            title: 'Why should an investor trust Vaar?',
            content: [
               "1. We do not invest in the past or potential future; instead, we focus on acquiring assets that have enduring value and are located in areas with robust economic activity & favorable demographics.",
               <br />,<br />,
               "2. We are transparent about costs and report it in public filings to the SEC to help you make a value decision. ",
               <br />,<br />,
               "3. We are regulated by the SEC and strive to maintain the highest level of cleanliness in our books and transparency in our business.",
               <br />,<br />,
               "4. We maintain high standards of KYC and AML checks using 3rd party broker-dealers to make sure our compliance fool-proof"
    
            ],
        },
    ];
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top when the component mounts or updates
    }, []);
    return (
        <>
            <div className="section-padding"></div>
            <Guide />
            <section>
                <div className='container'>

                    <Accordion defaultActiveKey="0" id='accordion'>
                        <h6 className='FAQS-heading-mobile'>FAQs</h6>
                        <hr />
                        <h1 id='FAQS-heading-pc' className="text-white">Frequently Asked Questions</h1>
                        <span className='FAQS-tagline-mobile'>Have questions? We’re here to help.</span>
                        <div className='input-group'>
                            <i class='bx bx-search'></i>
                            <input type="text" placeholder='Search' />
                        </div>
                        {accordionData.map((item, index) => (
                            <Accordion.Item key={item.id} eventKey={item.id.toString()}>
                                <h1 style={{ fontSize: "30px", fontWeight: "700" }} className='count-show'>0{index + 1}</h1>
                                <Accordion.Header className='accordion-title'>{item.title}</Accordion.Header>
                                <Accordion.Body>{item.content}</Accordion.Body>
                            </Accordion.Item>
                        ))}

                    </Accordion>

                </div>
            </section>
        </>
    )
}
export default HowItWorks