import React from 'react'
import './hero.css'

function Hero() {
    return (
        <section className="hero-section-2 overflow-hidden py-2">
            {/* <div className="hero-bg-wrap">
                <div className="hero-bg"><img src="./src/assets/images/bg-img/hero-bg.png" alt="hero" /></div>
                <div className="hero-bg-shape"><img src="./src/assets/images/shapes/hero-bg-shape.png" alt="hero" /></div>
                <div className="faq-text-box">
                    <h4 className="student">Instructor</h4>
                    <div className="faq-thumb-list-wrap">
                        <ul className="faq-thumb-list">
                            <li><img src="./src/assets/images/images/faq-thumb-1.png" alt="faq" /></li>
                            <li><img src="./src/assets/images/images/faq-thumb-2.png" alt="faq" /></li>
                            <li><img src="./src/assets/images/images/faq-thumb-3.png" alt="faq" /></li>
                            <li><img src="./src/assets/images/images/faq-thumb-4.png" alt="faq" /></li>
                            <li><img src="./src/assets/images/images/faq-thumb-5.png" alt="faq" /></li>
                            <li className="number">+</li>
                        </ul>
                        <p><span>200+</span> <br />Instuctor</p>
                    </div>
                </div>
                <div className="hero-text-box">
                    <div className="icon"><i className="fa-solid fa-user"></i></div>
                    <div className="content">
                        <h5 className="text-title">150K</h5>
                        <span>Assisted Students</span>
                    </div>
                </div>
            </div> */}
            <div className="shapes">
                <div className="shape shape-1"><img src="./src/assets/images/shapes/hero-shape-11.png" alt="shape" /></div>
                <div className="shape shape-2"><img src="./src/assets/images/shapes/hero-shape-12.png" alt="shape" /></div>
            </div>
            <div className="container">
                <div className="row align-items-center">
                    {/* col-lg-7 col-md-12*/}
                    <div className="col-md-12 text-center"> 
                        <div className="hero-content-2">
                            <div className="section-heading mb-20">
                                <h4 className="sub-heading wow fade-in-bottom" data-wow-delay="200ms"><span
                                    className=" heading-icon"><i className="fa-sharp fa-solid fa-bolt"></i></span>Your Journey Starts Here</h4>
                                <h2 id='fontClass' className="section-title wow fade-in-bottom" data-wow-delay="400ms">FG Boys Inter College
                                    <br /><span>Karachi Cantt</span>
                                </h2>
                            </div>
                            <p className="desc">"Shaping futures with quality education, guidance, and opportunities for <br />every student to excel."
                                
                            </p>
                            {/* <div className="about-counter-items mb-0 wow fade-in-bottom" data-wow-delay="600ms">
                                <div className="about-counter-item">
                                    <div className="icon"><img src="./src/assets/images/icon/about-1.png" alt="about" /></div>
                                    <div className="content">
                                        <h3 className="title"><span className="odometer" data-count="9.5"></span><span
                                            className="number">K+</span></h3>
                                        <p>Lorem ipsum dolor sit. <br />Lorem, ipsum.</p>
                                    </div>
                                </div>
                                <div className="about-counter-item">
                                    <div className="icon"><img src="./src/assets/images/icon/about-2.png" alt="about" /></div>
                                    <div className="content">
                                        <h3 className="title"><span className="odometer" data-count="15.5">0</span><span
                                            className="number">K+</span></h3>
                                        <p>Lorem ipsum dolor sit. <br />Lorem, ipsum.</p>
                                    </div>
                                </div>
                            </div> */}
                            <div className="cta-btn-wrap wow fade-in-bottom flex justify-content-center" data-wow-delay="500ms">
                        <a href="contact.html" className="ed-primary-btn cta-btn">Contact Us<i
                            className="fa-solid fa-arrow-right"></i></a>
                    </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero