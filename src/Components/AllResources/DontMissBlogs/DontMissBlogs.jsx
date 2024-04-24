import React from "react";
import { Link } from "react-router-dom";
import { Module1, Module2, Module3, Module4 } from "../AllResourcesData";

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

    return (
        <div className='all-resources-box'>
            <div className="row m-auto w-100">
                <h1 style={{ color: "white" }}>Don’t miss these</h1>
                <div className="padding-slite"></div>
                {finalData && finalData.map((item, index) => (
                    <>
                        <div className="col-lg-4 mb-5" style={{ position: "relative" }} key={index}>
                            <Link to={`/SingleResource${index === 0 ? ind.index[0] : ind.index[1]}`}>
                                <div className='module-box'>
                                    <img src={item.img} alt="vaar resources" />
                                    <h6>{item.concept}</h6>
                                    <h4>{item.title}</h4>
                                    {/* Display the card title here */}
                                </div>
                            </Link>

                            {(finalData.length === 1 && finalData[0].img === data[0].img) && (
                                <button
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
                                        backgroundColor: "#D4F604",
                                        padding: "6px 0px"
                                    }}>
                                    Next
                                    <i class='bx bx-right-arrow-alt' style={{ fontSize: "20px" }}>
                                    </i>
                                </button>
                            )}

                            {(finalData.length === 1 && finalData[0].img === data[data.length - 1].img) && (
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
                                        backgroundColor: "#D4F604",
                                        padding: "6px 0px"
                                    }}>

                                    <i class='bx bx-left-arrow-alt' style={{ fontSize: "20px" }}>

                                    </i>Prev
                                </button>
                            )}

                            {finalData.length > 1 &&
                                index === 0 ?
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
                                        backgroundColor: "#D4F604",
                                        padding: "6px 0px"
                                    }}>

                                    <i class='bx bx-left-arrow-alt' style={{ fontSize: "20px" }}>

                                    </i>Prev
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
                                        backgroundColor: "#D4F604",
                                        padding: "6px 0px"
                                    }}>
                                    Next
                                    <i class='bx bx-right-arrow-alt' style={{ fontSize: "20px" }}>
                                    </i>
                                </button>}

                            {/* {index === 0 ?
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
                                        backgroundColor: "#D4F604",
                                        padding: "6px 0px"
                                    }}>

                                    <i class='bx bx-left-arrow-alt' style={{ fontSize: "20px" }}>

                                    </i>Prev
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
                                        backgroundColor: "#D4F604",
                                        padding: "6px 0px"
                                    }}>
                                    Next
                                    <i class='bx bx-right-arrow-alt' style={{ fontSize: "20px" }}>
                                    </i>
                                </button>
                            } */}
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
