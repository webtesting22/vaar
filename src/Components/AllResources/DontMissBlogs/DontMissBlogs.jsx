import React from "react";
import { Link } from "react-router-dom";
import { Module1, Module2, Module3, Module4 } from "../AllResourcesData";
import "./DontMissBlogs.css"
function DontMissBlog(ind) {
    let data = [...Module1, ...Module2, ...Module3, ...Module4];
    console.log("hello", data)
    const finalData = [];

    if (ind.index.length === 1) {
        finalData.push(data[ind.index[0] - 1]);
    } else {
        finalData.push(data[ind.index[0] - 1]);
        finalData.push(data[ind.index[1] - 1]);
    }


    const icon = [
        {
            icons: "<< Prev"
        }
    ]
    const icons = [
        {
            icons: "Next >> "
        }
    ]
    return (
        <div className='all-resources-box'>

            <div className="row m-auto w-100" id="row-dont-miss">  <hr style={{ opacity: "0.5", border: "1px solid white" }} />
                {/* <h1 style={{ color: "white" }}></h1> */}
                <div className="padding-slite"></div>

                {finalData && finalData.map((item, index) => (
                    <>
                        <div className="col-lg-4" style={{ position: "relative" }} key={index}>
                            <Link to={`/SingleResource${index === 0 ? ind.index[0] : ind.index[1]}`}>
                                <div className='module-box'>
                                    <img src={item.img} alt="vaar resources" />
                                    <h6>{item.concept}</h6>
                                    <h4>{item.title}</h4>
                                    {/* Display the card title here */}
                                </div>
                            </Link>



                            <div id="hii">
                                {index === 0 ?
                                    <button
                                        style={{
                                            position: "absolute",
                                            right: "-70px",
                                            top: "30%",
                                            border: "none",
                                            width: "80px",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            borderRadius: "10px",
                                            backgroundColor: "transparent",
                                            color: "white",
                                            padding: "6px 0px"
                                        }}>
                                        {icon.map((item, index) => (
                                            <span key={index} style={{ color: "white", fontSize: "20px", color: "rgb(212, 246, 4)" }}>
                                                {item.icons}
                                            </span>
                                        ))}

                                    </button> : <button
                                        style={{
                                            position: "absolute",
                                            left: "-70px",
                                            top: "30%",
                                            border: "none",
                                            width: "80px",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            borderRadius: "10px",
                                            backgroundColor: "transparent",
                                            color: "white",
                                            padding: "6px 0px"
                                        }}>
                                        {icons.map((item, index) => (
                                            <span key={index} style={{ color: "white", fontSize: "20px", color: "rgb(212, 246, 4)" }}>
                                                {item.icons}
                                            </span>
                                        ))}
                                    </button>
                                }


                            </div>
                        </div>
                        <div className="col-lg-4 mb-5">


                        </div>
                    </>
                ))}
            </div>
            <div className="row m-auto w-100" id="row-dont-miss-mobile">  <hr style={{ opacity: "0.5", border: "1px solid white" }} />
                {/* <h1 style={{ color: "white" }}></h1> */}
                <div className="padding-slite"></div>
                <h1 style={{color:"white",color:"rgb(212, 246, 4)"}}>UP NEXT</h1>
                <div className="padding-slite"></div>
                {finalData && finalData.map((item, index) => (
                    <>
                        <div className="col-lg-4" style={{ position: "relative" }} key={index}>
                            <Link to={`/SingleResource${index === 0 ? ind.index[0] : ind.index[1]}`}>
                                <div className='module-box'>
                                    <img src={item.img} alt="vaar resources" />
                                    <h6>{item.concept}</h6>
                                    <h4>{item.title}</h4>
                                    {/* Display the card title here */}
                                </div>
                            </Link>



                            <div id="hii">
                                {index === 0 ?
                                    <button
                                        style={{
                                            position: "absolute",
                                            right: "-70px",
                                            top: "30%",
                                            border: "none",
                                            width: "80px",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            borderRadius: "10px",
                                            backgroundColor: "transparent",
                                            color: "white",
                                            padding: "6px 0px"
                                        }}>
                                        {icon.map((item, index) => (
                                            <span key={index} style={{ color: "white", fontSize: "20px", color: "rgb(212, 246, 4)" }}>
                                                {item.icons}
                                            </span>
                                        ))}

                                    </button> : <button
                                        style={{
                                            position: "absolute",
                                            left: "-70px",
                                            top: "30%",
                                            border: "none",
                                            width: "80px",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            borderRadius: "10px",
                                            backgroundColor: "transparent",
                                            color: "white",
                                            padding: "6px 0px"
                                        }}>
                                        {icons.map((item, index) => (
                                            <span key={index} style={{ color: "white", fontSize: "20px", color: "rgb(212, 246, 4)" }}>
                                                {item.icons}
                                            </span>
                                        ))}
                                    </button>
                                }


                            </div>
                        </div>
                        <div className="col-lg-4 mb-5">


                        </div>
                    </>
                ))}
            </div>
        </div>
    );
}

export default DontMissBlog;
