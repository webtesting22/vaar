import React, { useEffect, useState } from 'react';
import { Row, Col } from "antd";
const AnimatedAccordion = () => {
    const [isSticky, setIsSticky] = useState(true);
    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            if (scrollPosition >= window.innerHeight * 3) {
                setIsSticky(false);
            } else {
                setIsSticky(true);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <div className="app" style={{ position: isSticky ? 'sticky' : 'static', top: '0', display: 'flex' }}>
                <div style={{ width: '50%', height: '300vh', backgroundColor: 'red' }}>
                    <img
                        src="https://images.unsplash.com/photo-1713480841794-1f7774609b36?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt=""
                        style={{ width: '100%' }}
                    />
                </div>
                <div style={{ width: '50%', height: '300vh', backgroundColor: 'green' }}>
                    <h1>hello</h1>
                    <h1>hello</h1>
                    <h1>hello</h1>
                    <h1>hello</h1>
                    <h1>hello</h1>
                    <h1>hello</h1>
                </div>
            </div>
        </>
    )
}

export default AnimatedAccordion;