import React, { useEffect, useState } from 'react';
import "./Home.css"
import "../../Components/globalcontent.css"
import { TypeAnimation } from 'react-type-animation';
import homeCard from "../pictures/home-card-img.png"
// import homeMobile from "../pictures/Rectangle.png"
import Founder from '../Founder/Founder';
import Guide from '../Guide/Guide';
import Bestvalue from '../Bestvalue/Bestvalue';
import SignupSection from '../SignUp/SignupSection';
import img1 from "../pictures/About-icons/homePageMobile.svg"
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS
import first from "../Home/first1.jpeg"
import second from "../Home/second2.jpeg"
// import third from "../Home/third.jpeg"
// import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination, Autoplay } from 'swiper/modules';

// import four from "../Home/four.png"
import { Row, Col } from "antd";
function Home() {
    const [email, setEmail] = useState('');

    const handleInputChange = (e) => {
        setEmail(e.target.value);
    };
    useEffect(() => {
        AOS.init({
            duration: 1000, // Animation duration
            once: true, // Whether animation should only happen once
            easing: 'ease-out', // Easing option
            // You can customize other options here
        });
    }, []);
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top when the component mounts or updates
    }, []);

    const dynamicWords = ['easy', 'accessible', 'transparent', 'democratized'];


    const [inputVisible, setInputVisible] = useState();


    const handleButtonClick = () => {
        if (!inputVisible) {
            setInputVisible(true); // Open the input box only if it's not already open
            setArrowVisible(false); // Hide the right arrow
        }
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
            const data = await response.json();
            message.success(data.message);
        } catch (error) {
            console.error('Error:', error.message);
            message.error('An error occurred. Please try again later.');
        }
    };
    return (
        <>
            <div className='parent-section'>
                <Row className='pc-device-view'>
                    <Col lg={14} md={12}>
                        <section id='Home_section'>
                            <div className='container text-center'>

                                <div className='content-container-responsive' id='hello'>
                                    <h4 style={{display: 'block', fontSize: "50px", fontWeight: "400", textAlign: "start"}}>It’s time to level the playing field.</h4>
                                    {/* <TypeAnimation
                                        sequence={[
                                            Same substring at the start will only be typed out once, initially
                                            'It’s time to level the playing field.',
                                            // 6000, // wait 1s before replacing "Mice" with "Hamsters"

                                        ]}
                                        wrapper="p"
                                        speed={200}
                                        style={{ display: 'block', fontSize: "50px", fontWeight: "400px", textAlign: "start" }}
                                        repeat={Infinity}
                                    /> */}
                                    {/* <h1 className='main-global-heading ' style={{ fontWeight: "300", textAlign: "start", fontSize: "50px" }} data-aos="fade-down">Real-estate, simplified</h1> */}
                                    {/* <p data-aos="fade-up" style={{ fontWeight: "200", textAlign: "start" }}>Vaar enables portfolio investment in <span><i>prime, income-generating</i></span> real estate. We believe diversification in real assets should be easy and that it has a place in portfolios of all sizes.</p> */}
                                    {/* <h1 className='main-global-heading' id='mobile' style={{ fontWeight: "400", textAlign: "start", fontSize: "50px" }} data-aos="fade-down">It’s time to level the playing field.</h1> */}
                                    {/* <p style={{ fontWeight: "200", textAlign: "start" }}>Despite being the world's largest store of value, <span style={{ color: "#d4f604" }}>Real estate</span>  as an investment is only accessible to a small fraction of the population.</p> */}

                                    <br />
                                    <div>
                                        <h3 style={{ display: "flex", justifyContent: "start", fontWeight: "300", fontSize: "35px" }}>Vaar makes real estate
                                            <Swiper direction={'vertical'} loop={true}
                                                autoplay={{
                                                    delay: 1000,
                                                    disableOnInteraction: false,
                                                }}
                                                modules={[Autoplay]}
                                                style={{ height: "50px", margin: "0px", textAlign: "start", marginLeft: "10px" }} className="mySwiper">
                                                {dynamicWords.map((item, index) => (
                                                    <SwiperSlide key={index}>
                                                        <h3 style={{ color: "#D4F604", fontSize: "35px", fontWeight: "300" }}>{item}</h3>
                                                    </SwiperSlide>
                                                ))}
                                            </Swiper>
                                        </h3>
                                    </div>
                                    <br />
                                    <h3 style={{ textAlign: "start", fontSize: "25px", fontWeight: "200" }}>Real estate is the world’s largest store of value, yet inaccessible to most. </h3>
                                    <br />
                                    <h3 style={{ textAlign: "start", fontSize: "25px", fontWeight: "400" }}>We’re here to change that</h3>
                                    {/* <h1 className='main-global-heading' id='pc' style={{ fontWeight: "300", textAlign: "start",  }} data-aos="fade-down"><span style={{ color: "#d4f604" }}>Vaar</span> levels the playing field.</h1> */}

                                    <div className="email-collect" style={{ position: 'relative' }}>
                                        <button className='click-dynamic-btn' style={{ backgroundColor: "#D4F604", fontSize: "16px", fontWeight: "500" }} onClick={handleButtonClick}>
                                            Join the waitlist
                                        </button>
                                        <div className={`input-box ${inputVisible ? '' : 'input-visible'}`}>
                                            <input
                                                type="text"
                                                placeholder="Enter your email"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}// Handle input change
                                                style={{ opacity: inputVisible ? '1' : '0' }}
                                                pattern="^[A-Za-z0-9._\-]+@[A-Za-z]+\.[A-Za-z]+$"
                                                required
                                            />
                                            <button className='input-btn' style={{ backgroundColor: email ? '#D4F604' : 'white', opacity: inputVisible ? '1' : '0' }}
                                           onClick={() => {
                                            if (validateEmail()) { // Check if email is valid before sending
                                                emailSend(); // Call emailSend function when button is clicked
                                            }
                                        }}>
                                                <Link to="" style={{ color: "black", display: "flex", alignItems: "center" }}>
                                                    <i className='bx bx-right-arrow-alt' style={{ color: 'black', padding: '5px' }}></i>
                                                </Link>
                                            </button>
                                        </div>
                                    </div>
                                    <div className='mobile-view-home' data-aos="fade-up"
                                        data-aos-anchor-placement="bottom-center">
                                        <button><Link to="" style={{ color: "black" }}>Join&nbsp;Our</Link></button>
                                    </div>
                                </div>

                            </div>
                        </section>
                    </Col>
                    <Col lg={10} md={12} style={{ display: "flex", alignItems: "center" }}>
                        <div className='grid-images'>
                            <Row>
                                <Col lg={24} md={24} sm={8} style={{ display: "flex" }}>
                                    <div><img src={second} alt="" data-aos="fade-right" /></div>
                                    <div><img src={first} alt="" data-aos="fade-left" /></div>
                                </Col>
                                {/* <Col lg={12} md={12} sm={8}>
                              
                            </Col> */}

                                {/* <Col lg={4} md={12} sm={8}>
                                <div><img src={third} alt="" /></div>
                            </Col> */}
                                {/* <Col lg={6} md={12}>
                            <div><img src={four} alt="" /></div>
                        </Col> */}

                            </Row>
                        </div>
                    </Col>
                </Row>
                <Row className='mobile-device-view'>


                    <Col lg={12} md={12}>
                        <section id='Home_section'>
                            <div className='container text-center'>

                                <div className='content-container-responsive' id='hello'>
                                    {/* <h1 className='main-global-heading' id='mobile' style={{ fontWeight: "400", textAlign: "center", fontSize: "8vw" }} data-aos="fade-down">It’s time to level the playing field.</h1> */}
                                    {/* <p data-aos="fade-up" style={{ fontWeight: "200", textAlign: "start" }}>Vaar enables portfolio investment in <span><i>prime, income-generating</i></span> real estate. We believe diversification in real assets should be easy and that it has a place in portfolios of all sizes.</p> */}
                                    <h4  style={{
                                            fontSize: '2em',

                                            display: 'block',
                                            // fontSize: '10vw',
                                            fontWeight: '400',
                                            // lineHeight: '50px',
                                            textAlign: 'center',
                                        }}>It’s time to level the playing field.</h4>
                                    {/* <TypeAnimation
                                        sequence={[
                                            Same substring at the start will only be typed out once, initially
                                            'It’s time to level the playing field.',
                                            6000, wait 1s before replacing "Mice" with "Hamsters"

                                        ]}
                                        wrapper="p"
                                        speed={200}

                                        style={{
                                            fontSize: '2em',

                                            display: 'block',
                                            fontSize: '10vw',
                                            fontWeight: '400px',
                                            lineHeight: '50px',
                                            textAlign: 'center',
                                        }}
                                        repeat={Infinity}
                                    hideCursor={true}
                                    /> */}

                                    <br />
                                    <div >
                                        <h3 style={{ textAlign: "center", fontWeight: "300", fontSize: "30px" }}>Vaar makes real estate

                                        </h3>
                                        <Swiper direction={'vertical'} loop={true}
                                            autoplay={{
                                                delay: 1000,
                                                disableOnInteraction: false,
                                            }}
                                            modules={[Autoplay]}
                                            style={{ height: "50px", margin: "0px", textAlign: "center", marginLeft: "10px" }} className="mySwiper">
                                            {dynamicWords.map((item, index) => (
                                                <SwiperSlide key={index}>
                                                    <h3 style={{ color: "#D4F604", fontSize: "30px", fontWeight: "300" }}>{item}</h3>
                                                </SwiperSlide>
                                            ))}
                                        </Swiper>
                                    </div>
                                    <div className='grid-images'>
                                        <Row>
                                            <Col lg={24} md={24} style={{ display: "flex" }}>
                                                <div><img src={second} alt="" data-aos="fade-right" /></div>
                                                <div><img src={first} alt="" data-aos="fade-left" /></div>
                                            </Col>

                                        </Row>
                                    </div>
                                    <h3 style={{ textAlign: "center", fontSize: "25px", fontWeight: "200", marginTop: "20px" }}>Real estate is the world’s largest store of value, yet inaccessible to most. </h3>
                                    <br />
                                    <h3 style={{ textAlign: "center", fontSize: "25px", fontWeight: "400" }}>We’re here to change that</h3>

                                    <div className="email-collect" style={{ position: 'relative', display: "flex", justifyContent: "center" }}>
                                        <button className='click-dynamic-btn' style={{ backgroundColor: "#D4F604", fontSize: "16px", fontWeight: "500" }} onClick={handleButtonClick}>
                                            Join the waitlist
                                        </button>
                                        <div className={`input-box ${inputVisible ? '' : 'input-visible'}`}>
                                            <input
                                                type="text"
                                                placeholder="Enter your email"
                                                value={email}
                                                onChange={handleInputChange}
                                                style={{ opacity: inputVisible ? '1' : '0' }}
                                            />
                                            <button className='input-btn' style={{ backgroundColor: email ? '#D4F604' : 'white', opacity: inputVisible ? '1' : '0' }}>
                                                <Link to="" style={{ color: "black", display: "flex", alignItems: "center" }}>
                                                    <i className='bx bx-right-arrow-alt' style={{ color: 'black', padding: '5px' }}></i>
                                                </Link>
                                            </button>
                                        </div>
                                    </div>
                                    <div className='mobile-view-home' data-aos="fade-up"
                                        data-aos-anchor-placement="bottom-center">
                                        <button><Link to="/ContactUs" style={{ color: "black" }}>Join&nbsp;Our</Link></button>
                                    </div>
                                </div>

                            </div>
                        </section>
                    </Col>
                    <Col lg={12} md={12} style={{ display: "flex", alignItems: "center" }}>

                    </Col>
                </Row>
                {/* <div id='second-part-section'>
                    <div className="container">
                        <div className="row w-100 m-auto">
                            <div className="col-lg-4">
                                <div className='inside-container'>
                                    <div>
                                        <div className='top-header'>
                                            <h4 className='card-title'>Invest</h4>
                                            <span>According to your individual needs</span>
                                        </div>
                                        <div className='middle-body'>
                                            <img src={homeCard} alt="" className='w-100 h-100' />
                                        </div>
                                        <div className='botton-footer d-flex justify-content-between'>
                                        <div>
                                            <span>NewYork, NY</span>
                                            <p>75 wall St, New York, NY 10005</p>
                                            <button>$ 678,000</button>
                                        </div>
                                        <div>
                                            img
                                        </div>
                                </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className='parent-section'>
                                    <div className='child-first'>
                                        <div className='top-header'>
                                            <h4 className='card-title'>Manage Digitally</h4>
                                            <span>Diversified assets in your portfolio</span>

                                            <h5>Linked Account</h5>
                                            <div className='connect'>
                                                <h6>Regular Saving</h6>
                                                <span>Chase</span>
                                                <hr style={{ margin: "3px" }} />
                                                <h6>Regular Checking</h6>
                                                <span>Chase</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='child-second'>
                                        <img src={homeMobile} alt="" className='w-100 h-100' />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className='inside-container'>
                                    <div>
                                        <div className='top-header'>
                                            <h4 className='card-title'>Earn & Track</h4>
                                            <span>Your rental income and assets efficiently</span>
                                        </div>
                                        <div className='middle-body'>
                                            <br /><br />
                                            <h4>Wallet</h4>
                                            <div>
                                                <div className='parent-content-container'>
                                                    <div className='child-content-container'>
                                                        <b>$17,500</b><br />
                                                        <span>Portfolio Value</span>
                                                    </div>
                                                    <div className='child-content-container'>
                                                        <b>8%</b><br />
                                                        <span>Expected Return 2023</span>
                                                    </div>
                                                </div>
                                                <div className='parent-content-container'>
                                                    <div className='child-content-container'>
                                                        <b>3</b><br />
                                                        <span>Assets Owner</span>
                                                    </div>
                                                    <div className='child-content-container'>
                                                        <b>$1,400</b><br />
                                                        <span>Expected Rent 2023</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='botton-footer d-flex justify-content-between'>
                                        <div>
                                            <span>NewYork, NY</span>
                                            <p>75 wall St, New York, NY 10005</p>
                                            <button>$ 678,000</button>
                                        </div>
                                        <div>
                                            img
                                        </div>
                                </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div> */}
                {/* <div className='mobile-show-img'>
                    <img src={img1} alt="" />

                </div> */}
                {/* <br /> */}

                {/* <div className="m-scroll">
                    <div className="m-scroll__title">
                        <div>
                            {marquee.map((item, index) => (
                                <h1 key={index}>
                                    <span>{item}</span>
                                </h1>
                            ))}
                        </div>
                    </div>
                </div> */}
                <div class="marquee">
                    <div class="track">
                        <div class="content">New York&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Boston&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Las Vegas&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; San Francisco&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Seattle&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; San Diego&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Miami&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Washington&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Baltimore&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Orlando&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Austin&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Dallas&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; New York&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Boston&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Las Vegas&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; San Francisco&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Seattle&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; San Diego&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Miami&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Washington&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Baltimore&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Orlando&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Austin&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Dallas&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; New York&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Boston&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Las Vegas&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; San Francisco&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Seattle&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; San Diego&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Miami&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Washington&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Baltimore&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Orlando&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Austin&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Dallas</div>
                    </div>
                </div>
                {/* <marquee class="marquee" loop={10000}>
                    <div class="track">
                        <div class="content"><span>New York</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span>Boston</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span>Las Vegas</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span>San Francisc</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span>Seattle</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span>San Diego</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span>Miami</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span>Washington</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span> Baltimore</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span>Orlando</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span>Austin</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span>Dallas</span></div>
                    </div>
                </marquee> */}
                {/* <marquee behavior="scroll" direction="left" ><h4 style={{ color: "white", fontWeight: "300", fontSize: "3rem" }}><span>New York</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span>Boston</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span>Las Vegas</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span>San Francisc</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span>Seattle</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span>San Diego</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span>Miami</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span>Washington</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span> Baltimore</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span>Orlando</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span>Austin</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span>Dallas</span></h4> </marquee> */}
                <br />

            </div>
            <Founder />
            {/* <Guide /> */}
            <Bestvalue />

            {/* <VaarBlogs/> */}
            <SignupSection />

        </>
    )
}

export default Home;
