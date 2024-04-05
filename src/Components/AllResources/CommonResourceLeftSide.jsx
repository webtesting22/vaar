import React from "react";
import { Row, Col, Input, Button } from "antd";

function CommonResourceLeftSide({ MainLeftcontainerHeading, liList,boxTitle }) {
    console.log(liList);
    return (
        <div style={{ height: "100%" }} className="resources-left-container">
            <div>
                <h6>{MainLeftcontainerHeading}</h6>
                <hr style={{ opacity: "1", color: "black" }} />
                <ul>
                    {liList.map((item, index) => (
                        <li key={index}>{item.list}</li>
                    ))}
                </ul>
            </div>
            <div className="Botom-body-edit">
                <h4>{boxTitle}</h4>
                <Input placeholder="What’s your email?" />
                <Button>Start free trial</Button>
            </div>
        </div>
    );
}

export default CommonResourceLeftSide;