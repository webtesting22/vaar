import React from "react";
import { Row, Col, Input, Button } from "antd";

function CommonResourceLeftSide({ MainLeftcontainerHeading, liList, boxTitle }) {
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            const yOffset = -100; // Offset from the top
            const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: "smooth" });
        }
    };

    return (
        <div style={{ height: "100%" }} className="resources-left-container">
            <div >
                <h6>{MainLeftcontainerHeading}</h6>
                <hr style={{ opacity: "1", color: "black" }} />
                <ul style={{border:"2px solid rgb(51 51 51)", padding:"10px ", borderRadius:"20px"}}>
                    {liList.map((item, index) => (
                        <li key={index} style={{cursor:"pointer", fontWeight:"600",fontSize:"14px", color:"white"}} onClick={() => scrollToSection(item.id)}>{item.list}</li>
                    ))}
                </ul>
            </div>
            <div className="Botom-body-edit bg-dark">
                <h4 className="text-white">{boxTitle}</h4>
                <Input placeholder="What’s your email?" />
                <Button>Start free trial</Button>
            </div>
        </div>
    );
}

export default CommonResourceLeftSide;
