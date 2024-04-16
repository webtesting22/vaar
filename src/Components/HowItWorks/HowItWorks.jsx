import React from "react";
import Guide from "../Guide/Guide";
import { Accordion } from "react-bootstrap";
function HowItWorks(){
    const accordionData = [
        {
            id: 1,
            title: 'Who can invest in VAAR?',
            content: 'VAAR was built for anybody that wants to participate in the wealth creation by investing in income-generating real estate. VARR makes investment in real estate accessible to all investors - both retail and accredited.',
        },
        {
            id: 2,
            title: 'How much money do I need to invest with VAAR?',
            content: 'second accordion item content goes here.',
        },
        {
            id: 3,
            title: 'Why should I invest in real estate?',
            content: 'Third accordion item content goes here.',
        },
        {
            id: 4,
            title: 'How much do I make?',
            content: 'Fourth accordion item content goes here.',
        },
    ];
    return(
        <>
        <div className="section-padding"></div>
        <Guide/>
        <section>
                    <div className='container'>

                        <Accordion defaultActiveKey="0" id='accordion'>
                            <h6 className='FAQS-heading-mobile'>FAQs</h6>
                            <h1 id='FAQS-heading-pc' className="text-white">Frequently Asked Questions</h1>
                            <span className='FAQS-tagline-mobile'>Have questions? We’re here to help.</span>
                            <div className='input-group'>
                                <i class='bx bx-search'></i>
                                <input type="text"  placeholder='Search'/>
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