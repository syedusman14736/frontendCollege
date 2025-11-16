

function Footer() {
    return (
        <footer style={{ backgroundColor: "#1F2C30" }} className="footer-section pt-120" data-background="">
            <div className="footer-top-wrap">
                <div className="container">
                    <div className="row footer-wrap">
                        <div className="col-lg-3 col-md-6">
                            <div className="footer-widget">
                                <h3 className="widget-header">Get in touch!</h3>
                                <p className="mb-30">Have questions about admissions or programs? Contact us anytime—we’re here to help.
                                </p>
                                <div className="footer-contact">
                                    <span className="number"><i className="fa-solid fa-phone"></i><a href="tel:021-99202133">021-99202133</a></span>
                                    <a href="mailto:info@company.com" className="mail">fgbckci@gmail.com</a>
                                </div>
                                <ul className="footer-social">
                                    <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                    <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                                    <li><a href="#"><i className="fab fa-behance"></i></a></li>
                                    <li><a href="#"><i className="fab fa-youtube"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="footer-widget widget-2">
                                <h3 className="widget-header">PAGES</h3>
                                <ul className="footer-list">
                                    <li><a href="/about">About Us</a></li>
                                    {/* <li><a href="#">Academics</a></li> */}
                                    <li><a href="/gallery">Gallery</a></li>
                                    <li><a href="/policies">Policies</a></li>
                                    {/* <li><a href="">Admission</a></li> */}
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="footer-widget widget-2">
                                <h3 className="widget-header">Useful as</h3>
                                <ul className="footer-list">
                                    <li><a href="/contact">Contact Us</a></li>
                                    {/* <li><a href="contact.html">Admission</a></li> */}
                                    {/* <li><a href="/news">News</a></li> */}
                                    <li><a href="/gallery">Gallery</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright-area">
                <div className="container">
                    <div className="copyright-content">
                        <p>Copyright © 2025 FG Boys Inter College Karachi Cantt All Rights Reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer