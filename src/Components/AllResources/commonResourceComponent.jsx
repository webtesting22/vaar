import React from "react";
import { Row, Col } from "antd";
import "./commonResource.css"
import Ellipse from "./Ellipse.svg"
import ReactangleTopImage from "./Rectangle.svg"
import {Link} from "react-router-dom";

function CommonResourceComponent({ Resources, Module, Chapter, Date, ResourceHeading, AuthorInfo, topResourceImg }) {
    
    return (
        <>
            <section style={{ paddingTop: "6rem", paddingBottom: "0rem", backgroundColor: "black" }}>
                <div className="range-module-using-props container">
                    <Row>
                        <Col lg={12} md={12} className="order-lg-1 order-md-1">
                            <div className="left-side-content-container">
                                <div  className="top-range-container">
                                    <div><span><Link to="">{Resources}</Link></span>&nbsp;&nbsp;</div><i class='bx bx-right-arrow-alt'></i>&nbsp;&nbsp;
                                    <div><span><Link to="/AllResources#">{Module}</Link></span>&nbsp;&nbsp;</div><i class='bx bx-right-arrow-alt'></i>&nbsp;&nbsp;
                                    <div><span><Link to="">{Chapter}</Link></span></div>
                                </div>
                                <div className="resource-Date-container">
                                    <p>{Date}</p>
                                </div>
                                <div className="main-resource-heading">
                                    <h1>{ResourceHeading}</h1>
                                </div>
                                <div className="resourceAuthorName">
                                    <div>
                                        <img src={Ellipse} alt="" />
                                    </div>
                                    <div>
                                        <p>{AuthorInfo}</p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={12} md={12} className="order-lg-2 order-md-2">
                            <div>
                                <img src={topResourceImg} alt="" style={{ width: "100%", borderRadius:"20px" }} />
                            </div>
                        </Col>
                    </Row>

                </div>
            </section>
        </>
    )
}
export default CommonResourceComponent;