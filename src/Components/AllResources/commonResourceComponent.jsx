import React from "react";
import { Row, Col } from "antd";
import "./commonResource.css"
import Ellipse from "./Ellipse.svg"
import ReactangleTopImage from "./Rectangle.svg"
function CommonResourceComponent() {
    return (
        <>
            <section style={{ paddingTop: "6rem", paddingBottom: "0rem", backgroundColor: "white" }}>
                <div className="range-module-using-props container">
                    <Row>
                        <Col lg={12} md={12}>
                            <div className="left-side-content-container">
                                <div style={{ display: "flex", alignItems: "center" }} className="top-range-container">
                                    <div><span>Resources</span>&nbsp;&nbsp;</div><i class='bx bx-right-arrow-alt'></i>&nbsp;&nbsp;
                                    <div><span>Module 1</span>&nbsp;&nbsp;</div><i class='bx bx-right-arrow-alt'></i>&nbsp;&nbsp;
                                    <div><span>Chapter 1</span></div>
                                </div>
                                <div className="resource-Date-container">
                                    <p>February 17, 2023</p>
                                </div>
                                <div className="main-resource-heading">
                                    <h1>Real Estate Investments in the United States</h1>
                                </div>
                                <div className="resourceAuthorName">
                                    <div>
                                        <img src={Ellipse} alt="" />
                                    </div>
                                    <div>
                                        <p>Stephanie Gordon, Content Manager, Discreit</p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={12} md={12}>
                                
                                <div>
                                    <img src={ReactangleTopImage} alt="" style={{width:"100%"}} />
                                </div>
                        </Col>
                    </Row>
                </div>
            </section>
        </>
    )
}
export default CommonResourceComponent;