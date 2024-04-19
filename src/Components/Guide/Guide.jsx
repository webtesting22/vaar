import React from 'react';
import "./Guide.css"
import GuideData from './GuideData';
import blobData from "../pictures/About-icons/Blob.svg"
import mobilePicture from "../pictures/About-icons/mobilePicture.svg"
import { Row, Col } from "antd"
import teamposter from "../pictures/teamheroimage.png"
import teamheroimage2 from "../pictures/teamheroimage2.jpg"
import HowItWorks from "/HowItWorks.jpeg"
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
                    <h1 className='section-heading' style={{ color: "#D4F604", paddingBottom: "0px" }}>A STEP GUIDE TO BEING A DIGITAL LANDLORD</h1>
                    {/* <p>Meet our team members and learn more about their work at VAAR Holding.</p> */}
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
        <div className="container">
          <div className="row">
            {GuideData.map((item, index) => (
              <div key={index} className="col-lg-4 col-md-6">
                <div className="box" >
                  <div className='box-top-header'>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <img src={item.img} alt={item.title} />
                      <h3 className="box-title">{item.title}</h3>
                    </div>
                    <div className='numbering'><span>{index + 1}</span></div>

                  </div>
                  <hr />
                  <span className="paragraph" style={{ fontWeight: "300", fontSize: "16px" }}>{item.description}</span>
                </div>
              </div>
            ))}
          </div>
        </div>



      </section>
    </>
  );
}

export default Guide;
