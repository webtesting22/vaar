import React from 'react';
import "./Guide.css"
import GuideData from './GuideData';
function Guide() {
  return (
    <>
      <section className='Guide-section'>
        <div className="container">
          <h1 className='section-heading' style={{color:"#D4F604"}}>A step guide to being a digital landlord</h1>
          <div className="row">
            {GuideData.map((item, index) => (
              <div className="col-lg-6">
                <div className='box'>

                  <h3 className='box-title'>{item.title}</h3>
                  <hr />
                  <p className='paragraph'>{item.description}</p>

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
