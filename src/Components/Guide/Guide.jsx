import React from 'react';
import "./Guide.css"
import GuideData from './GuideData';
import blobData from "../pictures/About-icons/Blob.svg"
import mobilePicture from "../pictures/About-icons/mobilePicture.svg"

function Guide() {
  return (
    <>
      <section className='Guide-section'>
        <div className="container">
          <h1 className='section-heading' style={{ color: "#D4F604" }}>A step guide to being a digital landlord</h1>
          <p className='guide-container-mobile-para'>Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.</p>
        </div>
        <div className='blob-mobile-img'>
          <div className='blob-container'><img src={blobData} alt="" /></div>
          <div className='mobile-image'><img src={mobilePicture} alt="" /></div>
        </div>
        <div className="container">
        <div className="row">
          {GuideData.map((item, index) => (
            <div key={index} className="col-lg-6">
              <div className="box">
                <div className='box-top-header'>
                  <img src={item.img} alt={item.title} />
                  <h3 className="box-title">{item.title}</h3>
                </div>
                <hr />
                <p className="paragraph">{item.description}</p>
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
