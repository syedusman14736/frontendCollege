import React from 'react'

function Faq() {
    return (
        <section className="faq-section pt-120 pb-120 overflow-hidden">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12">
                        <div className="faq-img-wrap-2 wow fade-in-left" data-wow-delay="400ms">
                            <div className="faq-img-1"><img src="images/gallery/images/1.jpg" alt="faq" /></div>
                            <div className="faq-img-2"><img src="images/gallery/images/3.jpeg" alt="faq" /></div>
                            <div className="faq-img-3"><img src="images/gallery/images/5.jpeg" alt="faq" /></div>

                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <div className="faq-content">
                            <div className="section-heading mb-30">
                                <h4 className="sub-heading wow fade-in-bottom" data-wow-delay="200ms"><span
                                    className="heading-icon"><i className="fa-sharp fa-solid fa-bolt"></i></span>FAQs</h4>
                                <h2 className="section-title wow fade-in-bottom" data-wow-delay="400ms">Common Questions from Students</h2>
                            </div>
                            <div className="faq-accordion">
                                <div className="accordion" id="accordionExample">
                                    <div className="accordion-item wow fade-in-bottom p-3" data-wow-delay="400ms">
                                        <h2 className="accordion-header" id="headingOne">
                                            <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                                data-bs-target="#collapseOne" aria-expanded="true"
                                                aria-controls="collapseOne"><span>01.</span>What are the eligibility criteria for admission in Intermediate?</button>
                                        </h2>
                                        <div id="collapseOne" className="accordion-collapse collapse show"
                                            aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                Students who have passed their Matriculation/SSC or equivalent examination from a recognized board are eligible to apply. However, a minimum of 50% marks is required for admission in Arts subjects and 60% marks for admission in Science subjects.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item wow fade-in-bottom p-3" data-wow-delay="200ms">
                                        <h2 className="accordion-header" id="headingTwo">
                                            <button className="accordion-button collapsed" type="button"
                                                data-bs-toggle="collapse" data-bs-target="#collapseTwo"
                                                aria-expanded="false" aria-controls="collapseTwo"><span>02.</span>What documents are required for admission?</button>
                                        </h2>
                                        <div id="collapseTwo" className="accordion-collapse collapse"
                                            aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                Applicants need to submit their Matric mark sheet, character certificate, recent passport-size photographs, and a copy of their CNIC/B-Form.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item wow fade-in-bottom p-3" data-wow-delay="200ms">
                                        <h2 className="accordion-header" id="headingThree">
                                            <button className="accordion-button collapsed" type="button"
                                                data-bs-toggle="collapse" data-bs-target="#collapseThree"
                                                aria-expanded="false" aria-controls="collapseThree"><span>03.</span>What are the class timings for Intermediate students?</button>
                                        </h2>
                                        <div id="collapseThree" className="accordion-collapse collapse"
                                            aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                Classes usually start in the morning shift from 8:00 AM to 2:00 PM. Exact timings are announced at the beginning of the academic session.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Faq