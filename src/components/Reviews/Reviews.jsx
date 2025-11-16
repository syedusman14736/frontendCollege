import React from 'react'

function Reviews() {
    return (
        <section className="testimonial-section pt-120 pb-120">
            <div className="shapes">
                <div className="shape-1"><img src="/images/shapes/testi-shape-1.png" alt="testi" /></div>
                <div className="shape-2"><img src="/images/shapes/testi-shape-2.png" alt="testi" /></div>
            </div>
            <div className="container">
                <div className="section-heading white-content text-center">
                    <h4 className="sub-heading wow fade-in-bottom" data-wow-delay="200ms"><span className="heading-icon"><i
                        className="fa-sharp fa-solid fa-bolt"></i></span>Our Reviews</h4>
                    <h2 className="section-title wow fade-in-bottom" data-wow-delay="400ms">What Students Think and Say About
                        Us</h2>
                </div>
                <div className="testi-carousel-3 swiper">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            <div className="testi-item">
                                <h3 className="title">Exceptional Academic Experience</h3>
                                <p>The college provides a perfect balance of theory and practical learning. Teachers are always supportive and make learning engaging and effective."</p>

                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="testi-item">
                                <h3 className="title">Supportive Faculty and Environment</h3>
                                <p>"The faculty members are dedicated and approachable. Along with studies, we get opportunities in sports and activities that boost our confidence."</p>

                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="testi-item">
                                <h3 className="title">Opportunities for Growth</h3>
                                <p>"Modern facilities, a rich library, and co-curricular activities make this college a great place for both academic success and personal development."</p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Reviews