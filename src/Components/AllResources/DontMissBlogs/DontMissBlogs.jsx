import React from "react";
import { Link } from "react-router-dom";
import { Module1, Module2, Module3, Module4 } from "../AllResourcesData";

function DontMissBlog(ind) {
    let data = [...Module1, ...Module2, ...Module3, ...Module4];
    const finalData = [];

    if (ind.index.length === 1) {
        finalData.push(data[ind.index[0] - 1]);
    } else {
        finalData.push(data[ind.index[0] - 1]);
        finalData.push(data[ind.index[1] - 1]);
    }
    
    return (
        <div className='all-resources-box'>
            <div className="row m-auto w-100">
                <h1 style={{ color: "white" }}>Don’t miss these</h1>
                <div className="padding-slite"></div>
                {finalData && finalData.map((item, index) => (
                    <div className="col-lg-4 mb-5" key={index}>
                        <Link to={`/SingleResource${index === 0 ? ind.index[0] : ind.index[1]}`}>
                            <div className='module-box'>
                                <img src={item.img} alt="" />
                                <h6>{item.concept}</h6>
                                <h4>{item.title}</h4>
                                {/* Display the card title here */}
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default DontMissBlog;
