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
const valueDataPc=[
    {
        title:"Asset Quality",
        colorText:"The idea is to invest in assets that grow with what surrounds them. We don’t buy into what was or what will be. We buy what is here to stay."
    },
    {
        title:"Transparency",
        colorText:"Transparency is our top priority. We disclose all costs related to each asset, ensuring our investors have the necessary information to make well-informed decisions."
    },
    {
        title:"Intuitive UI & UX",
        colorText:"The complexities of real estate transactions often deter smaller investors. However, Vaar prides itself on making real assets accessible at a users' fingertips."
    },
    {
        title:"Diversification",
        colorText:"Vaar is being built with a vision to offer investments in real assets that work for one's future. Diversification in these assets can be capital intensive and challenging to manage. We solve for both of these issues."
    },
    {
        title:"Feasibility",
        colorText:"Fractionally own what suits your portfolio"
    }

]
    return (
        <>

            <div className='animated-accordion bg-white'>
                <div>
                    <Row>
                        <Col lg={24}><img style={{ width: "100%",height:"100vh", objectFit:"cover" }} src={animatedAccordionImg} alt="" /></Col>
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
                                    {valueDataPc.map((item) => (
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