import React from 'react';
import "./Guide.css"
import GuideData from './GuideData';
import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/swiper-bundle.min.css';
import blobData from "../pictures/About-icons/Blob.svg"
import mobilePicture from "../pictures/About-icons/mobilePicture.svg"
import { Row, Col } from "antd"
import teamposter from "../pictures/teamheroimage.png"
import teamheroimage2 from "../pictures/teamheroimage2.jpg"
import HowItWorks from "/HowItWorks.jpeg"
import { Autoplay, Pagination } from 'swiper/modules';
function Guide() {
  // const HowItWorks =  "./HowItWorks.jpeg";
  return (
    <>
      <section style={{ color: "white", paddingBottom: "0px" }}>
        <div>
          <div className="container">
            <Row>

              <Col lg={12} md={12}>
                <div className='team-section-hero2' style={{ padding: "0px" }}>
                  <img src={HowItWorks} alt="" />
                  <img src={HowItWorks} alt="" />
                </div>
              </Col>
              <Col lg={12} md={12}>
                <div className='team-section-hero'>
                  <div>
                    {/* <hr className='top-section-heading-hr mobile-hide' /> */}
                    <h1 id='howitworks-heading'>A Step Guide To Being A Digital Landlord</h1>
                    <p className='mobile-hide'>Learn about the process</p>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>

      </section>
      <section className='Guide-section '>
        {/* <div className="container">

          <p className='guide-container-mobile-para text-white'>Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.</p>
        </div> */}
        {/* <div className='blob-mobile-img'>
          <div className='blob-container'><img src={blobData} alt="" /></div>
          <div className='mobile-image'><img src={mobilePicture} alt="" /></div>
        </div> */}
        <div className="container guide-only-pc">
          <div className="row">
            {GuideData.map((item, index) => (
              <div key={index} className="col-lg-4 col-md-6">
                <div className="box" >
                  <div className='box-top-header'>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <img src={item.img} alt={item.title} style={{ backgroundColor: "#00C2FF" }} />
                      <h3 className="box-title" style={{ color: "#00C2FF" }}>{item.title}</h3>
                    </div>
                    <div className='numbering'><span>{index + 1}</span></div>

                  </div>
                  <hr style={{ backgroundColor: "rgb(0, 194, 255)" }} />
                  <span className="paragraph" style={{ fontWeight: "300", fontSize: "16px" }}>{item.description}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="container guide-only-mobile" >
          <Swiper spaceBetween={30} slidesPerView={1}
          pagination={{
            clickable: true,
        }}
        // autoplay={{
        //     delay: 2500,
        //     disableOnInteraction: true,
        // }}
        // navigation={true}
        modules={[Pagination, Autoplay, ]}>
            {GuideData.reduce((acc, item, index) => {
              if (index % 2 === 0) {
                acc.push(
                  <SwiperSlide key={index}>
                    <div className="row">
                      <div className="col-lg-6 col-md-6">
                        <div className="box">
                          <div className='box-top-header'>
                            <div style={{ display: "flex", alignItems: "center" }}>
                              <img src={item.img} alt={item.title} style={{ backgroundColor: "#00C2FF" }} />
                              <h3 className="box-title" style={{ color: "#00C2FF" }}>{item.title}</h3>
                            </div>
                            <div className='numbering'><span>{index + 1}</span></div>
                          </div>
                          <hr style={{ backgroundColor: "rgb(0, 194, 255)" }} />
                          <span className="paragraph" style={{ fontWeight: "300", fontSize: "16px" }}>{item.description}</span>
                        </div>
                      </div>
                      {GuideData[index + 1] && (
                        <div className="col-lg-6 col-md-6">
                          <div className="box">
                            <div className='box-top-header'>
                              <div style={{ display: "flex", alignItems: "center" }}>
                                <img src={GuideData[index + 1].img} alt={GuideData[index + 1].title} style={{ backgroundColor: "#00C2FF" }} />
                                <h3 className="box-title" style={{ color: "#00C2FF" }}>{GuideData[index + 1].title}</h3>
                              </div>
                              <div className='numbering'><span>{index + 2}</span></div>
                            </div>
                            <hr style={{ backgroundColor: "rgb(0, 194, 255)" }} />
                            <span className="paragraph" style={{ fontWeight: "300", fontSize: "16px" }}>{GuideData[index + 1].description}</span>
                          </div>
                        </div>
                      )}
                    </div>
                  </SwiperSlide>
                );
              }
              return acc;
            }, [])}
          </Swiper>
        </div>






      </section>
    </>
  );
}

export default Guide;
