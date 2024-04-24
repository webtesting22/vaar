import React, { useEffect } from "react";
import CommonResourceComponent from "../commonResourceComponent";
import ReactangleTopImage from "../Resources4/Rectangle.svg";
import CommonResourceLeftSide from "../CommonResourceLeftSide";
import { Row, Col, Carousel, Descriptions } from "antd"
import CarousalImg from "../Resources4/carousalImg.svg"
import DontMissBlog from "../DontMissBlogs/DontMissBlogs";
import SignupSection from "../../SignUp/SignupSection";
import { Module1, Module2 } from "../AllResourcesData"
import linkIndex from "../utils/linkIndex";
import singleFamily from "../Resources4/Single-family.png"
import Condominium from "../Resources4/Condominium.png"
import Townhouse from "../Resources4/Townhome.png"
import Multifamily from "../Resources4/Multi-family.png"
import studentHousing from "../Resources4/StudentHousing.png"
import vacationRentals from "../Resources4/Vacationrentals.png"
import Coorperatives from "../Resources4/Cooperatives.png"

function SingleResource4() {
    const liList = [
        {
            list: "Definition of Residential Real Estate",
            id: "DefinitionofResidential"
        },
        {
            list: "Importance of Residential Real Estate",
            id: "ImportanceofResidential"
        },
        {
            list: "Types of Residential Real Estate",
            id: "TypesofResidential"
        },
        {
            list: "Real Estate Investment in Residential Properties",
            id: "RealEstateInvestment"
        }
    ]
    const ImportanceResidencial = [
        {
            mainTitle: "Economic Significance",
            Description: "Residential real estate holds a pivotal role in the economic landscape of any country. Its significance goes beyond being a market for buying and selling homes; it is a key driver of economic activity with profound effects on various sectors."
            , CarousalData: [
                {
                    carousalTitle: "GDP Contribution",
                    carousalDescription: "The construction and real estate industries contribute significantly to a nation's Gross Domestic Product (GDP). Residential real estate development, including construction, renovations, and home sales, stimulates economic growth."
                },
                {
                    carousalTitle: "GDP Contribution",
                    carousalDescription: "The construction and real estate industries contribute significantly to a nation's Gross Domestic Product (GDP). Residential real estate development, including construction, renovations, and home sales, stimulates economic growth."
                }
            ]

        },
        {
            mainTitle: "Social Implications",
            Description: "Beyond its economic impact, residential real estate plays a crucial role in shaping the social fabric of communities and influencing individual well-being.",
            CarousalData: [
                {
                    carousalTitle: "Stability and Community Building",
                    carousalDescription: "Residential areas provide a sense of stability and community. Homeownership fosters a sense of belonging and encourages residents to invest in their neighborhoods, contributing to the overall well-being of the community."
                },
                {
                    carousalTitle: "Stability and Community Building",
                    carousalDescription: "Residential areas provide a sense of stability and community. Homeownership fosters a sense of belonging and encourages residents to invest in their neighborhoods, contributing to the overall well-being of the community."
                }
            ]
        }
    ]

    const TypesResidentialData = [
        {
            image: singleFamily,
            heading: "Single-Family Homes",
            Description: "Detached, standalone structures designed for one family.",
            listData: [
                {
                    list: "Ownership of both the structure and land.",
                },
                {
                    list: "Private yard and outdoor space."
                },
                {
                    list: "Vary in size and architectural styles."
                }
            ]
        },
        {
            image:Condominium,
            heading:"Condominiums (Condos)",
            Descriptions:"Units within a larger building or complex that are individually owned.",
            listData:[
                {
                    list:"Shared common areas and facilities."
                },
                {
                    list:"Typically managed by a homeowners association (HOA)."
                },
                {
                    list:'Owners responsible for interior maintenance.'
                }
            ]
            
        },
        {
            image:Townhouse,
            heading:"Townhouses",
            Descriptions:"Multi-level homes that share walls with neighboring units.",
            listData:[
                {
                    list:"Ownership of both the structure and land."
                },
                {
                    list:"May have common areas maintained by an HOA."
                },
                {
                    list:"Varied architectural styles."
                }
            ]
        },
        {
            image:Multifamily,
            heading:"Multifamily Properties",
            Descriptions:"Buildings designed to accommodate multiple families.",
            listData:[
                {
                    list:"Duplexes: Two separate living units."
                },
                {
                    list:"Triplexes: Three separate living units."
                },
                {
                    list:"Apartment Buildings: Multiple units within a single structure."
                }
            ]
        },
        {
            image:studentHousing,
            heading:"Student Housing",
            Descriptions:"Properties specifically designed to accommodate students.",
            listData:[
                {
                    list:"Often furnished with communal spaces."
                },
                {
                    list:" Proximity to educational institutions."
                },
                {
                    list:"Leases may align with the academic calendar."
                }
            ]
        },
        {
            image:vacationRentals,
            heading:"Short-Term or Vacation Rentals",
            Descriptions:"Properties rented out for short durations, typically for vacations.",
            listData:[
                {
                    list:"Often facilitated through online platforms (e.g., Airbnb)."
                },
                {
                    list:"Flexibility in rental terms."
                },
                {
                    list:"Location and amenities attract tourists."
                }
            ]
        },
        {
            image:Coorperatives,
            heading:"Housing Cooperatives (Co-ops)",
            Descriptions:"Residents collectively own and manage the property.",
            listData:[
                {
                    list:"Members hold shares in the cooperative."
                },
                {
                    list:"Decision-making through a board of directors."
                },
                {
                    list:"Shared responsibility for maintenance and expenses."
                }
            ]
        }
    ]

    const RealstateInvestmentData = [
        {
            mainTitle: "A. Rental Property Investment",
            subtitle: [
                {
                    subtitleTitle: "1. Passive Income vs. Responsibilities",
                    subtitlePoints: [
                        {
                            listPoint: "Pros of Rental Income: Owning rental properties can provide a steady stream of passive income, allowing investors to build wealth through monthly rent payments."
                        },
                        {
                            listPoint: "Responsibilities: However, landlords also bear responsibilities such as property maintenance, tenant management, and dealing with potential issues."
                        }

                    ]
                },
                {
                    subtitleTitle: "2. Financing Investment Properties",
                    mainsubtitleTitle: [
                        {
                            mainsubtitleTitlePoint: "Different Loan Options",
                            subtitlePoints: [
                                {
                                    listPoint: "Traditional Mortgages: Investors often use traditional mortgages, which require a down payment and have fixed or adjustable interest rates."
                                },
                                {
                                    listPoint: "Federal Housing Administration (FHA) Loans: These loans are government-backed and may have lower down payment requirements."
                                },
                                {
                                    listPoint: "Private Financing: Some investors explore private financing or hard money loans for more flexible terms."
                                },
                            ]

                        }
                    ],

                },
                {
                    subtitleTitle: "3. Property Management",
                    mainsubtitleTitle: [
                        {
                            mainsubtitleTitlePoint: "DIY vs. Hiring a Property Manager",
                            subtitlePoints: [
                                {
                                    listPoint: "DIY Management: Investors can choose to manage properties themselves, saving on management fees but requiring more hands-on involvement.",

                                },
                                {
                                    listPoint: "Professional Property Managers: Hiring a property management company can relieve landlords of day-to-day tasks, including tenant screening, rent collection, and property maintenance."
                                }

                            ]
                        }
                    ]

                }
            ]

        },
        {
            mainTitle: "B. Flipping Houses",
            subtitle: [
                {
                    subtitleTitle: "1. Buying, Renovating, and Selling for Profit",
                    subtitlePoints: [
                        {
                            listPoint: "Acquisition: House flipping involves purchasing a property, often distressed or undervalued."
                        },
                        {
                            listPoint: "Renovation: Investors undertake renovations and improvements to enhance the property's value."
                        },
                        {
                            listPoint: "Profit Through Sale: The goal is to sell the property at a higher price, realizing a profit from the appreciation."
                        }

                    ]
                },
                {
                    subtitleTitle: "2. Market Fluctuations, Renovation Costs",
                    subtitlePoints: [
                        {
                            listPoint: "Market Risks: House flippers face the risk of market fluctuations affecting property values during the holding period."
                        },
                        {
                            listPoint: "Renovation Costs: Unforeseen issues during renovations can impact project costs, affecting potential profits."
                        },

                    ]
                },

            ]

        },
        {
            mainTitle: "C. Investing in Student Housing",
            subtitle: [
                {
                    subtitleTitle: "1. Considerations",
                    mainsubtitleTitle: [
                        {
                            mainsubtitleTitlePoint: "Proximity to Universities",
                            subtitlePoints: [
                                {
                                    listPoint: "Location Significance: Investing in student housing often emphasizes proximity to universities, ensuring appeal to the student demographic."
                                },
                            ]
                        },
                        {
                            mainsubtitleTitlePoint: "Lease Agreements Tied to the Academic Calendar",
                            subtitlePoints: [
                                {
                                    listPoint: "Academic Schedule Alignment: Lease agreements are often tied to the academic calendar to accommodate student turnover."
                                },
                            ]
                        }
                    ],





                },
                {
                    subtitleTitle: "2. Challenges",
                    mainsubtitleTitle: [
                        {
                            mainsubtitleTitlePoint: "Student Turnover and Potential Property Damage:",
                            subtitlePoints: [
                                {
                                    listPoint: "Tenant Turnover: Frequent turnover due to academic schedules can pose challenges for consistent rental income."
                                },
                                {
                                    listPoint: "Property Damage: Student living may involve wear and tear or potential property damage."
                                },

                            ]
                        }
                    ],


                },

            ]

        },
        {
            mainTitle: "D. Short-Term Rental Investments",
            subtitle: [
                {
                    subtitleTitle: "1. Advantages",
                    mainsubtitleTitle: [
                        {
                            mainsubtitleTitlePoint: "Higher Potential for Rental Income",
                            subtitlePoints: [
                                {
                                    listPoint: "Profit Potential: Short-term rentals can yield higher rental income, especially in popular tourist destinations."
                                },
                            ]
                        },
                        {
                            mainsubtitleTitlePoint: "Flexibility for Property Use:",
                            subtitlePoints: [
                                {
                                    listPoint: "Versatility: Owners have the flexibility to use the property for personal use or short-term rentals based on demand."
                                },
                            ]
                        }
                    ],





                },
                {
                    subtitleTitle: "2. Challenges",
                    mainsubtitleTitle: [
                        {
                            mainsubtitleTitlePoint: "Regulatory Uncertainties",
                            subtitlePoints: [
                                {
                                    listPoint: "Legislation Challenges: Short-term rentals may face regulatory uncertainties and evolving legislation.."
                                },

                            ]
                        },
                        {
                            mainsubtitleTitlePoint: "Seasonal Demand Fluctuations",
                            subtitlePoints: [
                                {
                                    listPoint: "Income Variability: Demand may fluctuate seasonally, affecting rental income."
                                },

                            ]
                        }
                    ],


                },

            ]

        },
        {
            mainTitle: "E. Co-op Investments",
            subtitle: [
                {
                    subtitleTitle: "1. Cooperative Structure",
                    mainsubtitleTitle: [
                        {
                            mainsubtitleTitlePoint: "Share Ownership and Governance",
                            subtitlePoints: [
                                {
                                    listPoint: "Collective Ownership: Co-op structures involve shared ownership, allowing residents to collectively govern the property."
                                },
                            ]
                        },
                        {
                            mainsubtitleTitlePoint: "Monthly Fees and Responsibilities",
                            subtitlePoints: [
                                {
                                    listPoint: "Financial Obligations: Residents pay monthly fees to cover shared expenses, and responsibilities are shared among co-op members."
                                },
                            ]
                        }
                    ],





                },
                {
                    subtitleTitle: "2. Advantages and Challenges",
                    mainsubtitleTitle: [
                        {
                            mainsubtitleTitlePoint: "Collective Decision-Making vs. Potential Conflicts:",
                            subtitlePoints: [
                                {
                                    listPoint: "Community Decision-Making: Co-ops emphasize collective decision-making, fostering a sense of community."
                                },
                                {
                                    listPoint: "Potential Conflicts: However, conflicts may arise due to differing opinions or management challenges."
                                },

                            ]
                        },
                        {
                            mainsubtitleTitlePoint: "Limited Equity in the Property:",
                            subtitlePoints: [
                                {
                                    listPoint: "Equity Limitations: Co-op residents have limited equity compared to traditional homeownership, as they don't own the physical property."
                                },

                            ]
                        }
                    ],


                },

            ]

        },



    ]

    const onChange = (currentSlide) => {
        // console.log(currentSlide);
    };
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top when the component mounts or updates
    }, []);
    return (
        <>
            <CommonResourceComponent Resources="Resources" Module="Module 2" Chapter="Chapter 4" Date="February 17, 2023" ResourceHeading="UP CLOSE & PERSONAL - RESIDENTIAL REAL ESTATE" AuthorInfo="Stephanie Gordon, Content Manager, Vaar" topResourceImg={Module2[0].img} />
            <section>
                <div className="container p-0">
                    <Row>
                        <Col lg={6} md={6} className="hide-on-mobile">
                            <CommonResourceLeftSide MainLeftcontainerHeading="In this chapter" liList={liList} boxTitle="Try the product out for free." />
                        </Col>
                        <Col lg={18} md={18} className="full-width-on-mobile">

                            <div className="resources-right-container">
                                <h4 id="DefinitionofResidential">Definition of Residential Real Estate</h4>
                                <div className="padding-slite"></div>
                                <ul>
                                    <li>1. Residential real estate refers to properties designed for people to live in.</li>
                                    <li>2.  It includes single-family homes, condominiums, townhouses, multifamily properties, student housing, short-term or vacation rentals, and co-ops.</li>
                                </ul>
                                <div className="padding-slite"></div>
                                <h4 id="ImportanceofResidential">Importance of Residential Real Estate</h4>
                                {ImportanceResidencial.map((item, index) => (
                                    <div key={index}>
                                        <div className="padding-slite"></div>
                                        {/* Render normal data outside the Carousel */}
                                        <h6>{item.mainTitle}</h6>
                                        <p>{item.Description}</p>

                                        <div className="carousal-container">
                                            {/* Nested map for CarousalData inside Carousel */}
                                            <Carousel afterChange={onChange} dots={true} >
                                                {item.CarousalData.map((carousalItem, carousalIndex) => (
                                                    <>
                                                        <div key={carousalIndex}>
                                                            <h6>{carousalItem.carousalTitle}</h6>
                                                            <p>{carousalItem.carousalDescription}</p>
                                                        </div>

                                                    </>

                                                ))}
                                            </Carousel>
                                        </div>
                                    </div>
                                ))}
                                <div className="padding-slite"></div>
                                <p>Understanding the economic and social importance of residential real estate is crucial for policymakers, urban planners, and community leaders. Balancing economic considerations with the creation of livable, inclusive communities is essential for sustainable development and a high quality of life for residents.</p>
                                <div className="padding-slite"></div>
                                <h4 id="TypesofResidential">Types of Residential Real Estate</h4>
                                <div className="padding-slite"></div>
                                <div className="carousal-container p-0">

                                    <Carousel afterChange={onChange} dots={true} >
                                        {TypesResidentialData.map((item, index) => (

                                            <div>
                                                <div style={{ width: '100%' }}>
                                                    <img src={item.image} alt="vaar image" style={{ width: "100%" }} />
                                                </div>

                                                {/* Second Column for Heading, Description, and List Data */}

                                                <div className="carousal-bottom-content-container">
                                                    <div>
                                                        <h4>{item.heading}</h4>
                                                        <p>{item.Description}</p>
                                                    </div>
                                                    <div>
                                                        <ul>
                                                            {item.listData.map((listItem, listIndex) => (
                                                                <li key={listIndex}>{listIndex + 1}. {listItem.list}</li>
                                                            ))}

                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>

                                        ))}
                                    </Carousel>

                                </div>
                                <div className="padding-slite"></div>
                                <h4 id="RealEstateInvestment">Real Estate Investment in Residential Properties</h4>
                                <p>Real estate investment in residential properties offers various avenues for investors, each with its own set of advantages and challenges.</p>
                                <div>
                                    {/* {RealstateInvestmentData.map((item, index) => (
                                        <div key={index} className="RealEstate-Box">
                                            <h6>{item.mainTitle}</h6>
                                            <hr style={{ opacity: "1" }} />
                                            {subtitle.map((item,index)=>{
                                                <p>{item.subtitleTitle}</p>
                                            })}
                                            
                                        </div>
                                    ))} */}
                                    {RealstateInvestmentData.map((item, index) => (
                                        <div key={index} className="RealEstate-Box">
                                            <h4>{item.mainTitle}</h4>
                                            <hr style={{ opacity: "1" }} />
                                            {item.subtitle.map((subItem, subIndex) => (
                                                <div key={subIndex}>
                                                    <h6>{subItem.subtitleTitle}</h6>
                                                    {/* Check if mainsubtitleTitle exists */}
                                                    {subItem.mainsubtitleTitle && (
                                                        <>
                                                            {subItem.mainsubtitleTitle.map((mainSubtitle, mainIndex) => (
                                                                <div key={mainIndex}>
                                                                    <ul style={{ listStyle: "none", padding: "0px" }}>
                                                                        <li>{mainSubtitle.mainsubtitleTitlePoint}</li>
                                                                    </ul>

                                                                    {mainSubtitle.subtitlePoints && (
                                                                        <ul>
                                                                            {mainSubtitle.subtitlePoints.map(
                                                                                (pointItem, pointIndex) => (
                                                                                    <li key={pointIndex}>{pointItem.listPoint}</li>
                                                                                )
                                                                            )}
                                                                        </ul>
                                                                    )}
                                                                </div>
                                                            ))}
                                                        </>
                                                    )}
                                                    {/* Check if subtitlePoints exists directly */}
                                                    {!subItem.mainsubtitleTitle && subItem.subtitlePoints && (
                                                        <ul>
                                                            {subItem.subtitlePoints.map((pointItem, pointIndex) => (
                                                                <li key={pointIndex}>{pointItem.listPoint}</li>
                                                            ))}
                                                        </ul>
                                                    )}
                                                </div>
                                            ))}
                                        </div>
                                    ))}




                                </div>
                                <div className="padding-slite"></div>
                                <p>Navigating the real estate market involves a nuanced understanding of the specific investment strategy chosen, whether it's rental property management or house flipping. Additionally, being cognizant of challenges and trends in the residential real estate landscape allows investors to make informed decisions and adapt their strategies to market dynamics.</p>
                            </div>

                        </Col>
                    </Row>
                    <div className="padding-slite"></div>
                    <div className="padding-slite"></div>
                    <DontMissBlog index ={[3,5]}/>
                </div>

            </section>
            <SignupSection />

        </>
    )
}
export default SingleResource4;