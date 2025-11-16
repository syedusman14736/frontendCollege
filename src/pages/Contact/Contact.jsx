import { useEffect } from "react"
import Header from "../../components/Header/Header"
import Navbar from "../../components/Navbar/Navbar"
import Footer from "../../components/Footer/Footer"

export const Contact = () => {
    return (
        <>
            <Header>
                <Navbar />
            </Header>

            <section className="page-header">
                <div className="bg-item">
                    <div className="overlay"></div>
                    <div className="shapes">
                        <div className="shape shape-1"><img src="/images/shapes/page-header-shape-1.png" alt="shape" /></div>
                        <div className="shape shape-2"><img src="/images/shapes/page-header-shape-2.png" alt="shape" /></div>
                        <div className="shape shape-3"><img src="/images/shapes/page-header-shape-3.png" alt="shape" /></div>
                    </div>
                </div>
                <div className="container">
                    <div className="page-header-content">
                        <h1 className="title">Contact Us</h1>
                        <h4 className="sub-title"><a className="home" href="index.html">Home </a><span className="icon">/</span><a className="inner-page" href="contact.html"> Contact Us</a></h4>
                    </div>
                </div>
            </section>

            <section class="contact-section pt-120 pb-120">
                <div class="container">
                    <div class="row gy-lg-0 gy-5">
                        <div class="col-lg-7">
                            <div class="blog-contact-form contact-form">
                                <h2 class="title mb-0">Leave A Reply</h2>
                                <p class="mb-30 mt-10">Fill-up The Form and Message us of your amazing question</p>
                                <div class="request-form">
                                    <form action="mail.php" method="post" id="ajax_contact" class="form-horizontal">
                                        <div class="form-group row">
                                            <div class="col-md-6">
                                                <div class="form-item">
                                                    <input type="text" id="fullname" name="fullname" class="form-control" placeholder="Your Name" />
                                                    <div class="icon"><i class="fa-regular fa-user"></i></div>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-item">
                                                    <input type="email" id="email" name="email" class="form-control" placeholder="Your Email" />
                                                    <div class="icon"><i class="fa-sharp fa-regular fa-envelope"></i></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <div class="col-md-12">
                                                <div class="form-item">
                                                    <input type="email" id="subject" name="subject" class="form-control" placeholder="Your Subject" />
                                                    <div class="icon"><i class="fa-light fa-messages"></i></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <div class="col-md-12">
                                                <div class="form-item message-item">
                                                    <textarea id="message" name="message" cols="30" rows="5" class="form-control address" placeholder="Message"></textarea>
                                                    <div class="icon"><i class="fa-light fa-messages"></i></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="submit-btn">
                                            <button id="submit" class="ed-primary-btn" type="submit">Submit Message</button>
                                        </div>
                                    </form>
                                    <div id="form-messages" class="alert mt-20"></div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-5 col-md-12">
                            <div class="contact-content">
                                <div class="contact-top">
                                    <h3 class="title">Information</h3>
                                    <p>Have questions? Fill out the form below and we will get back to you as soon as possible.</p>
                                </div>
                                <div class="contact-list">
                                    <div class="list-item">
                                        <div class="icon">
                                            <i style={{ color: "var(--ed-color-theme-primary)" }} class="fa-sharp fa-solid fa-phone"></i>
                                        </div>
                                        <div class="content">
                                            <h4 class="title">Phone Number & Email</h4>
                                            <span><a href="tel:+65485965789">021-99202133</a></span>
                                            <span><a href="mailto:hello@edcare.com">fgbckci@gmail.com</a></span>
                                        </div>
                                    </div>
                                    <div class="list-item">
                                        <div class="icon">
                                            <i class="fa-sharp fa-solid fa-location-dot"></i>
                                        </div>
                                        <div class="content">
                                            <h4 class="title">Our College Address</h4>
                                            <p>Fg Boys Inter College, Dr Daud Pota Road Near Abdul Sattar Edhi Hockey Stadium, Karachi Cantt</p>
                                        </div>
                                    </div>
                                    <div class="list-item">
                                        <div class="icon">
                                            <i class="fa-sharp fa-solid fa-clock"></i>
                                        </div>
                                        <div class="content">
                                            <h4 class="title">Official Work Time</h4>
                                            <span>Monday - Thursday: 08:00 - 02:00 PM</span>
                                            <span>Friday: 08:00 - 12:30 PM</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>

    )
}
