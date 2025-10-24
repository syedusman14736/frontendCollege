

function Topbar() {
    return (
        <div className="top-bar">
            <div className="container">
                <div className="top-bar-inner">
                    <div className="top-bar-left">
                        <ul className="top-bar-list">
                            <li><i className="fa-solid fa-phone"></i><a href="tel:256214203215">012 345 678 90</a></li>
                            <li><i className="fa-solid fa-location-dot fa-phone"></i><span>282 abc Street, Pakistan</span></li>
                            <li><i className="fa-regular fa-clock"></i><span>Mon - Sat: 8:00 - 15:00</span></li>
                        </ul>
                    </div>
                    <div className="top-bar-right">
                        <div className="register-box">
                            <div className="icon"><i className="fa-regular fa-user"></i></div>
                            <a href="#">Login</a>
                        </div>
                        <div className="top-social-wrap">
                            <span>Follow Us</span>
                            <ul className="social-list">
                                <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                                <li><a href="#"><i className="fab fa-behance"></i></a></li>
                                <li><a href="#"><i className="fab fa-skype"></i></a></li>
                                <li><a href="#"><i className="fab fa-youtube"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Topbar