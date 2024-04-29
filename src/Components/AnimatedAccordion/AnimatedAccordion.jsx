import React, { useEffect, useState } from 'react';
import { Row, Col } from "antd";
import "./animatedAccordion.css"
import { Collapse } from 'antd';
import { Accordion } from "react-bootstrap";
import { ValueData } from '../Founder/Founder';
import { accordionData } from '../HowItWorks/HowItWorks';
import animatedAccordionImg from "../AnimatedAccordion/animatedAccordionImg.jpeg"
const AnimatedAccordion = () => {
    const allActiveKeys = ValueData.map((item) => item.id);
    const [isDisabled, setIsDisabled] = useState(false);

  const toggleDisabled = () => {
    setIsDisabled(!isDisabled);
  };

  const handleSelect = (eventKey) => {
    if (isDisabled) {
      eventKey = null; // Prevent accordion from collapsing when disabled
    }
  };
    return (
        <>

            <div className='animated-accordion bg-white'>
                <div>
                    <Row>
                        <Col lg={24}><img style={{ width: "100%" }} src={animatedAccordionImg} alt="" /></Col>
                    </Row>
                </div>
                <div>
                    <Row>
                        <Col lg={24}>
                            <div className='top-text-styling'>
                                <h1>We take care of it all,<br />
                                    from the small stuff to the big picture.</h1>
                            </div>
                            <div className='accordion-tabs-container'>
                                <Accordion activeKey={allActiveKeys} onSelect={handleSelect}>
                                    {ValueData.map((item) => (
                                        <Accordion.Item disabled={true}>
                                            {/* <h1 style={{ fontSize: "30px", fontWeight: "700" }} className='count-show'>0{item.id}</h1> */}
                                            <Accordion.Header className='accordion-title' >{item.title}</Accordion.Header>
                                            <Accordion.Body>{item.colorText}</Accordion.Body>
                                        </Accordion.Item>
                                    ))}
                                </Accordion>

                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </>
    )
}

export default AnimatedAccordion;