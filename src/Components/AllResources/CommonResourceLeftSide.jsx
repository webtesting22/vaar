import React,{useState} from "react";
import { Row, Col, Input, Button } from "antd";
import "./left-side-menu.css"

function CommonResourceLeftSide({ MainLeftcontainerHeading, liList, boxTitle }) {
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            const yOffset = -100; // Offset from the top
            const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: "smooth" });
        }
    };
    const [email, setEmail] = useState('');

    const handleInputChange = (e) => {
        setEmail(e.target.value);
    };
    const validateEmail = () => {
        const isValid = /^[A-Za-z0-9._\-]+@[A-Za-z]+\.[A-Za-z]+$/.test(email);
        if (isValid) {
            emailSend(); // Call emailSend function if email is valid
        } else {
            // Handle invalid email input, such as displaying an error message
            console.log('Invalid email address');
            alert(`Please enter a valid email address. For example, try 'demo@gmail.com'.`)
        }
    };
    const emailSend = async () => {
        try {
            if (!email) {
                alert("Please provide an email");
                clearAlerts();
                return; // Exit the function if email is empty
            }
    
            const response = await fetch('https://vaarbackend-two.vercel.app/email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ text: email }) // Send email data in the body
            });
    
            if (!response.ok) {
                throw new Error(`Server responded with status: ${response.status}`);
            }
            
            setEmail('');
            alert("Email submitted. Thank you!")
            const responseData = await response.json();
    
            if (responseData.error === "Email already exists") {
                alert("Email already exists");
            } else {
                message.success(responseData.message);
            }
        } catch (error) {
            console.error('Error:', error.message);
            message.error('An error occurred. Please try again later.');
        }
    };
    
    return (
        <div style={{ height: "100%" }} className="resources-left-container">
            <div >
                <h6>{MainLeftcontainerHeading}</h6>
                <hr style={{ opacity: "1", color: "rgb(51, 51, 51)", margin: "15px 0px" }} />
                <ul style={{ border: "2px solid rgb(51 51 51)", padding: "10px ", borderRadius: "20px" }}>
                    {liList.map((item, index) => (
                        <li key={index} style={{ cursor: "pointer", fontWeight: "600", fontSize: "14px" }} onClick={() => scrollToSection(item.id)} className="hover-effect">{item.list}</li>
                    ))}
                </ul>
            </div>
            <div className="Botom-body-edit bg-dark">
                <h4 className="text-white">{boxTitle}</h4>
                <Input placeholder="What’s your email?"  onChange={(e) => setEmail(e.target.value)}/>
                <button onClick={() => {
                    if (validateEmail()) { // Check if email is valid before sending
                        emailSend(); // Call emailSend function when button is clicked
                    }
                }}>Start free trial</button>
            </div>
        </div>
    );
}

export default CommonResourceLeftSide;
