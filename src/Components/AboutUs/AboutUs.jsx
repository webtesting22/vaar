import React from 'react';
import "./About.css"
import AboutCard from './AboutCardData';
import { Container, Row, Col } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
function AboutUs() {
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
    return (
        <>

            <section id='About-section'>
                <div className="section-padding"></div>
                <div className="section-padding"></div>
                <div className="container">
                    <div className='top-about-section'>
                        <div>
                            <h1>Vaar is your gateway to the world of real estate</h1>
                            <p>The platform enables you to invest in prime, income-generating real estate through fractional ownership, eliminating the need for substantial upfront capital. Through Vaar, you can create a diversified portfolio of residential assets that vary in their risk and return profile.</p>
                            <br />
                            <a href="" className='btn-styling'>Get Started</a>
                        </div>
                    </div>
                    <div className="section-pading"></div>

                </div>
                <section className='bg-white'>
                    <div className="container">
                        <div className='section-top-content'>
                            <div className="top-span">Our values</div>
                            <div><h2>How we work at VAAR</h2></div>
                            <div className='about-tagline'><p>Our shared values keep us connected and guide us as one team.</p></div>
                        </div>
                        {/* <div className="section-padding padding-section"></div> */}
                        <div className="container first">
                            <Row>
                                {AboutCard.map((item, index) => (
                                    <Col key={index} lg={6} md={6} sm={12}>
                                        <div className="about-card text-center">
                                            <div className='about-icon-container'>
                                                <img src={item.image} alt={item.title} width={100} />

                                            </div>
                                            <h3>{item.title}</h3>
                                            <p>{item.description}</p>
                                        </div>
                                    </Col>
                                ))}
                            </Row>
                        </div>
                        <div className="container second">
                            <Swiper
                                spaceBetween={30}
                                pagination={{
                                    clickable: true,
                                }}
                                autoplay={{
                                    delay: 2500,
                                    disableOnInteraction: true,
                                }}
                                modules={[Autoplay]}
                                className="mySwiper"
                            >
                                {AboutCard.map((item, index) => (
                                    <SwiperSlide>
                                        <div className="about-card text-center">
                                            <div className='about-icon-container'>
                                                <img src={item.image} alt={item.title} width={100} />

                                            </div>
                                            <h3>{item.title}</h3>
                                            <p>{item.description}</p>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>

                </section>
                <section>
                    <div className='container'>

                        <Accordion defaultActiveKey="0" id='accordion'>
                            <h6 className='FAQS-heading-mobile'>FAQs</h6>
                            <h1 id='FAQS-heading-pc'>Frequently Asked Questions</h1>
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
            </section>

        </>
    );
}

export default AboutUs;
