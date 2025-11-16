import React, { useEffect, useState } from 'react'
import Header from '../../components/Header/Header'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'

function News() {


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
                        <h1 className="title">Policies</h1>
                        <h4 className="sub-title"><a className="home">Home </a><span className="icon">/</span><a className="inner-page" href="#"> Policies</a></h4>
                    </div>
                </div>
            </section>




            <section className="blog-section pt-60 pb-60">
                <div className="container">

                    <p style={{ color: '#162726', fontSize: '1.3rem' }}>Excellence is a journey, Discipline is the vehicle”; being mindful of this actuality, FGEIs instill the much desired discipline into its pupil, leading them to the road of excellence. For this purpose, a befitting Code of Conduct is applicable to all concerned. The Code of Conduct guidelines that are rigorously followed at all FGEIs are as follows</p>

                    <ol style={{ color: '#050301', fontSize: '1.1rem' }}>
                        <li>Use of cell phone by the teachers in the classroom is strictly prohibited.</li>
                        <li>Corporeal punishment and abusive language is strictly prohibited.</li>
                        <li>Possession of any unlawful item by the students will be dealt in as a disciplinary case forwarded to the Disciplinary Committee for further action as per rules.</li>
                        <li>
                            <ul>On possession of cell phone by a student, the following actions will be ensured:
                                <li>1st incident PKR 100 fine/intimation to parents.</li>
                                <li>2nd incident PKR 500 fine and undertaking by parents that their son / daughter be expelled as recommended by discipline committee.</li>
                            </ul>
                        </li>
                        <li>Late-comers will be warned first time and for the second time a fine of PKR 05/- will be charged per day.</li>
                        <li>The students wearing improper uniform will be warned first time and for the second time a fine of PKR 05 will be charged.</li>
                        <li>In case of any quarrel/dispute, a fine of PKR 100 will be charged from both the students involved.</li>
                    </ol>

                    <p style={{ color: '#162726', fontSize: '1.3rem' }}>Furthermore, the students may be advised to launch a complaint against any misbehaviour by any student to the respective Class Incharge / Authorities and parents</p>

                    <ol style={{ color: '#050301', fontSize: '1.1rem' }}>
                        <li>In case of any breakage/damage to property of the institution by the student, the estimated cost will be charged from the students involved.</li>
                        <li>If the discipline committee recommends expulsion of any student from the institution on the basis of his/her involvement in any kind of immoral activity, the said afore shall be unpardonably expelled from the institution under rules, in consultation with the Head of the Institution under intimation to the respective Director/ Deputy Director/ GSO-I.
                        </li>
                        <li>Misbehaviour of a student with any teacher/staff will be taken up as a disciplinary case by the disciplinary committee, which may dispose off the case with a fine, punishment or both or even expulsion from the institution. The expulsion will be carried out after having consultation with respective GSO-1.</li>
                    </ol>

                    <p style={{ color: '#162726', fontSize: '1.3rem' }}>The record of amount charged as fine will be maintained by the respective PTI / Discipline Incharge and the same will be deposited in Student Fund of the institution at the end of each month.</p>

                </div>
            </section >








            <Footer />
        </>
    )
}

export default News