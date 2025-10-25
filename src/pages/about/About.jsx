import React from 'react'
import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"
import Navbar from "../../components/Navbar/Navbar"
import Topbar from "../../components/topbar/Topbar"
import './about.css'

function About() {
    return (
        <>
            <Header>
                <Topbar />
                <Navbar />
            </Header>

            <section className="page-header">
                <div className="bg-item">
                    <div className="overlay"></div>
                    <div className="shapes">
                        <div className="shape shape-1"><img src="/src/assets/images/shapes/page-header-shape-1.png" alt="shape" /></div>
                        <div className="shape shape-2"><img src="/src/assets/images/shapes/page-header-shape-2.png" alt="shape" /></div>
                        <div className="shape shape-3"><img src="/src/assets/images/shapes/page-header-shape-3.png" alt="shape" /></div>
                    </div>
                </div>
                <div className="container">
                    <div className="page-header-content">
                        <h1 className="title">About  </h1>
                        <h4 className="sub-title"><a className="home" href="index.html">Home </a><span className="icon">/</span><a className="inner-page" href="contact.html"> About</a></h4>
                    </div>
                </div>
            </section>

            <section class="about-text">
                <h1>Best Educational Institution in Pakistan</h1>
                <p>FG College is a leading institution dedicated to providing quality education and holistic development for students. Since its establishment, the college has been committed to nurturing academic excellence, discipline, and values that prepare young minds for a successful future.


                    <br />
                    {/* <br/>   */}
                    {/* <br/>   */}
                    With a team of highly qualified faculty, modern classrooms, well-equipped laboratories, a rich library, and a strong focus on co-curricular activities, we ensure that our students receive both knowledge and skills to excel in life. FG College proudly serves students from across Pakistan and continues to inspire generations with its tradition of excellence.
                </p>
                <h1>Our Goals</h1>
                <ul>
                    <li>
                        <p>Focus on academic excellence and provide students with quality education that shapes their future./</p>
                    </li>

                    <li>
                        <p>Become a leading institution recognized for discipline, knowledge, and character-building.</p>
                    </li>

                    <li>
                        <p>Work together with parents, teachers, and the community to support and promote student success.</p>
                    </li>

                    <li>
                        <p>Encourage students to discover their talents and explore opportunities in academics, sports, and co-curricular activities.</p>
                    </li>

                    <li>
                        <p>Build long-term trust with students and families by ensuring the best learning environment and guidance.</p>
                    </li>
                </ul>
            </section>

            <section class="messages">
                <div class="message">
                    <h1>WHY FG COLLEGE?</h1>
                    <p>We firmly believe that the success of our students is the true measure of our achievement. To be recognized as one of the best educational institutions, our goal is to understand the needs of learners and provide opportunities that meet and exceed their expectations.</p>

                    <h2>ONE-STOP SOLUTION FOR YOUR EDUCATION</h2>
                    <p>With modern classrooms, science and computer labs, a well-stocked library, and experienced faculty, FG College provides all the resources students need for quality learning, growth, and career development.</p>

                    <h2>UNIQUE ACADEMIC AND CO-CURRICULAR PROGRAMS</h2>
                    <p>From academic excellence to sports, debates, cultural events, and leadership activities, our programs are carefully designed to help students develop confidence, knowledge, and essential life skills.
                    </p>

                    <h2>CONTINUOUS STUDENT SUPPORT</h2>
                    <p>Our dedicated faculty and administration are always available to guide and support students, whether it is in academics, career counseling, or personal development, ensuring a safe and nurturing environment.</p>

                    <h2>EXPERIENCED TEACHERS & STAFF</h2>
                    <p>FG College is proud to have a team of highly qualified and dedicated teachers who not only excel in their fields but also inspire and mentor students to reach their full potential.
                    </p>

                </div>
            </section>



            <Footer />
        </>
    )
}

export default About