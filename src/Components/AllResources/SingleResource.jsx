import React from "react";
import "./SingleResources.css"
import { Row, Col, Input, Button } from "antd"
import img1 from "./Ellipse.svg"
import img2 from "./Rectangle.svg"
function SingleResource() {

    return (
        <>
            <section className="singleResource-section">
                <div className="container top-over-container">
                    <Row>
                        <Col lg={12} md={12}>
                            <div className="left-side-container">
                                <div className="top-lane"><span>Resources</span>&nbsp;&nbsp;&nbsp;<i class='bx bx-right-arrow-alt'></i>&nbsp;&nbsp;&nbsp;<span>Module 1</span>&nbsp;&nbsp;&nbsp;<i class='bx bx-right-arrow-alt'></i>&nbsp;&nbsp;&nbsp;<span>Chapter 1</span></div>
                                <div className="date-container"><span>February 17, 2023</span></div>
                                <div className="singleResources-card-main-heading"><h2>Real Estate Investments in the United States</h2></div>
                                <div className="resources-author">
                                    <div>
                                        <img src={img1} alt="" />
                                    </div>
                                    <div>
                                        <p>Stephanie Gordon, Content Manager, Discreit</p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={12} md={12}>
                            <div className="right-side-img-container">
                                <img src={img2} alt="" />
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className="section-padding"></div>
                <div className="container p-0">
                    <Row>
                        <Col lg={6} md={6}>
                            <div style={{ background: "red", height: "100%" }} className="resources-left-container">
                                <div>
                                    <h6>In this chapter</h6>
                                    <ul>
                                        <li>Definition and scope</li>
                                        <li>Types of real estate investments</li>
                                        <li>Importance of real estate investments in the current day and age</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4>Try the product out for free.</h4>
                                    <Input placeholder="What’s your email?" />
                                    <Button>Start free trial</Button>
                                </div>
                            </div>
                        </Col>
                        <Col lg={18} md={18}>
                            <div className="resources-right-container">
                                <p>Real estate investment in the United States has long been a cornerstone of wealth creation, financial stability, and economic growth. The allure of property ownership transcends generations, offering a tangible and enduring asset class. From residential homes to commercial complexes, the diverse landscape of real estate investments has attracted investors seeking both short-term gains and long-term stability. This chapter delves into the multifaceted realm of real estate investments in the U.S., exploring its definition, scope, types, historical context, milestones, and its paramount importance in the contemporary economic landscape.</p>
                            </div>
                        </Col>
                    </Row>

                </div>
            </section>
        </>
    )
}
export default SingleResource;