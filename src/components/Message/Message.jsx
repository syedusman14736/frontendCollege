import React from 'react'

function Message() {
    return (
        <section className="cta-section pt-140 pb-140">
            <div className="shapes">
                <div className="shape-1"><img src="./src/assets/images/shapes/dot-shape.png" alt="shape" /></div>
            </div>
            <div className="container text-center">
                <div className="cta-content" >
                    <h2 className="title wow fade-in-bottom" data-wow-delay="200ms">Principal's Message</h2>
                    <p className="wow fade-in-bottom" data-wow-delay="400ms">At FG, we are dedicated to providing quality education that not only focuses on academic excellence but also builds character, confidence, and values among students. Our aim is to create a nurturing environment where young minds are encouraged to learn, explore, and grow into responsible individuals who can contribute positively to society and excel in their future endeavors.
                        
                    </p>
                    <div className="cta-btn-wrap wow fade-in-bottom flex justify-content-center" data-wow-delay="500ms">
                        <a href="contact.html" className="ed-primary-btn cta-btn">Explore More<i
                            className="fa-solid fa-arrow-right"></i></a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Message