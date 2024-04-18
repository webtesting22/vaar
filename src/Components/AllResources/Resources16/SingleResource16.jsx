import React, {useEffect} from "react";
import CommonResourceComponent from "../commonResourceComponent";
import CommonResourceLeftSide from "../CommonResourceLeftSide";
import { Row, Col } from "antd";
import { Module1, Module4 } from "../AllResourcesData"
function SingleResource16() {
    const liList=[
        {
            list:"Concepts"
        },
        {
            list:"Conclusion"
        }
    ]
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top when the component mounts or updates
    }, []);
    return (
        <>
            <CommonResourceComponent Resources="Resources" Module="Module 4" Chapter="Concept 5" Date="February 17, 2023" ResourceHeading="Technology & Discreit" AuthorInfo="Stephanie Gordon, Content Manager, Vaar" topResourceImg={Module4[5].img} />
            <section>
                <div className="container p-0">
                    <Row>
                        <Col lg={6} md={6} className="hide-on-mobile">
                            <CommonResourceLeftSide MainLeftcontainerHeading="In this chapter" liList={liList} boxTitle="Try the product out for free." />
                        </Col>
                        <Col lg={18} md={18} className="full-width-on-mobile">
                            <div className="resources-right-container">

                            </div>
                        </Col>
                    </Row>
                </div>
            </section>

        </>
    )
}
export default SingleResource16;