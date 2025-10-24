import { NavLink } from "react-router-dom"
import "./Navbar.css"
import { useState } from "react"

function Navbar() {

    const [isActive, setIsActive] = useState(false);

    return (
        <div className="primary-header py-3 border position-relative">
            <div className="container">
                <div className="primary-header-inner">
                    <div className="header-logo d-flex align-items-center mb-0">
                        <a href="index.html">
                            {/* <img src="./src/assets/images/logo/logo-1.png" alt="Logo" /> */}
                            <h3>FG College</h3>
                        </a>
                    </div>
                    <div className="header-right-wrap">
                        <div className="header-menu-wrap">
                            <div className="mobile-menu-items">
                                <ul className="sub-menu d-flex gap-3">
                                    <NavLink to="/" end className="mega-menu">
                                        Home
                                    </NavLink>
                                    <NavLink to="/about" className="">
                                        About
                                    </NavLink>
                                    <NavLink to="/gallery" className="">
                                        Gallery
                                    </NavLink>
                                    <NavLink to="/policies" className="">
                                        Policies
                                    </NavLink>
                                    <NavLink to="/news" className="">
                                        News
                                    </NavLink>
                                    <NavLink to="/admission" className="">
                                        Admission
                                    </NavLink>
                                    <NavLink to="/contact">
                                        Contact
                                    </NavLink>
                                </ul>
                            </div>
                        </div>
                        {/* <!-- /.header-menu-wrap --> */}
                        <div className="header-right">
                            <div className="header-right-item d-lg-none d-md-block" onClick={() => setIsActive(!isActive)}>
                                <a href="#" className="mobile-side-menu-toggle"><i
                                    className="fa-sharp fa-solid fa-bars"></i></a>
                            </div>
                            {isActive ? (<div style={{ width: '100%' }} className="bg-white px-4 py-2 border  position-absolute top-100 end-0">
                                <ul className="d-flex flex-column">
                                    <NavLink to="/" end className="mega-menu p-1">
                                        Home
                                    </NavLink>
                                    <NavLink to="/about" className="p-1">
                                        About
                                    </NavLink>
                                    <NavLink to="/gallery" className="p-1">
                                        Gallery
                                    </NavLink>
                                    <NavLink to="/policies" className="p-1">
                                        Policies
                                    </NavLink>
                                    <NavLink to="/news" className="p-1">
                                        News
                                    </NavLink>
                                    <NavLink to="/admission" className="p-1">
                                        Admission
                                    </NavLink>
                                    <NavLink to="/contact" className="p-1">
                                        Contact
                                    </NavLink>
                                </ul>
                            </div>) : (
                                <div style={{ width: '100%' }} className="bg-white px-4 py-2 border d-none  position-absolute top-100 end-0">
                                    <ul className="d-flex hidden flex-column">
                                        <NavLink to="/" end className="mega-menu p-1">
                                            Home
                                        </NavLink>
                                        <NavLink to="/about" className="p-1">
                                            About
                                        </NavLink>
                                        <NavLink to="/gallery" className="p-1">
                                            Gallery
                                        </NavLink>
                                        <NavLink to="/policies" className="p-1">
                                            Policies
                                        </NavLink>
                                        <NavLink to="/news" className="p-1">
                                            News
                                        </NavLink>
                                        <NavLink to="/admission" className="p-1">
                                            Admission
                                        </NavLink>
                                        <NavLink to="/contact" className="p-1">
                                            Contact
                                        </NavLink>
                                    </ul>
                                </div>
                            )}

                        </div>
                        {/* <!-- /.header-right --> */}
                    </div>
                </div>
                {/* <!-- /.primary-header-inner --> */}
            </div>
        </div >
    )
}

export default Navbar