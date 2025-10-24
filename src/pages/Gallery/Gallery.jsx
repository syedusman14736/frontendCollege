import React from 'react'
import Footer from "../../components/Footer/Footer"
import Header from "../../components/header/Header"
import Navbar from "../../components/Navbar/Navbar"
import Topbar from "../../components/topbar/Topbar"
import './gallery.css'

function Gallery() {
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
                        <h1 className="title">Gallery</h1>
                        <h4 className="sub-title"><a className="home" href="index.html">Home </a><span className="icon">/</span><a className="inner-page" href="contact.html"> Gallery</a></h4>
                    </div>
                </div>
            </section>

            <section class="gallery-section">
                <h1>Our Gallery</h1>

                <div className="gallery-grid">
                    <img src="/src/assets/images/gallery/images/Athelitsics/atheletistics-1.jpg" alt="image" />
                    <img src="/src/assets/images/gallery/images/Athelitsics/atheletistics-2.jpg" alt="image" />
                    <img src="/src/assets/images/gallery/images/bhu/bhu1.jpeg" alt="image" />
                    <img src="/src/assets/images/gallery/images/bhu/bhu2.jpeg" alt="image" />
                    <img src="src/assets/images/gallery/images/edited/1.jpg" alt="image" />
                    <img src="src/assets/images/gallery/images/edited/2.jpg" alt="image" />
                    <img src="/src/assets/images/gallery/images/edited/3.jpg" alt="image" />
                    <img src="/src/assets/images/gallery/images/edited/4.jpg" alt="image" />
                    <img src="/src/assets/images/gallery/images/pics/1.jpg" alt="image" />
                    <img src="/src/assets/images/gallery/images/pics/2.jpg" alt="image" />
                    <img src="/src/assets/images/gallery/images/pics/3.jpeg" alt="image" />
                    <img src="/src/assets/images/gallery/images/pics/4.jpeg" alt="image" />
                    <img src="/src/assets/images/gallery/images/1.jpg" alt="image" />
                    <img src="/src/assets/images/gallery/images/2.jpg" alt="image" />
                    <img src="/src/assets/images/gallery/images/3.jpeg" alt="image" />
                    <img src="/src/assets/images/gallery/images/4.jpeg" alt="image" />
                    <img src="/src/assets/images/gallery/images/5.jpeg" alt="image" />
                    <img src="/src/assets/images/gallery/images/6.jpg" alt="image" />
                    <img src="/src/assets/images/gallery/images/7.jpg" alt="image" />
                    <img src="/src/assets/images/gallery/images/8.jpeg" alt="image" />
                </div>
            </section>



            <Footer />
        </>
    )
}

export default Gallery