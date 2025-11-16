import { Link } from "react-router-dom"
import "./Navbar.css"
import { useState } from "react"

function Navbar() {

    const [isActive, setIsActive] = useState(false);

    return (
        <div className="primary-header py-3 border position-relative">
            <div className="container">
                <div className="primary-header-inner">
                    <div className="header-logo d-flex align-items-center mb-0">
                        <Link href="/">
                            {/* <img src="./src/assets/images/logo/logo-1.png" alt="Logo" /> */}
                            <h3>FG College</h3>
                        </Link>
                    </div>
                    <div className="header-right-wrap ">
                        <div className="header-menu-wrap">
                            <div className="mobile-menu-items hidden">
                                <ul className="sub-menu d-flex gap-3">
                                    <a href="/" end className="mega-menu">
                                        Home
                                    </a>
                                    <a href="/about" className="">
                                        About
                                    </a>
                                    <a href="/gallery" className="">
                                        Gallery
                                    </a>
                                    <a href="/policies" className="">
                                        Policies
                                    </a>
                                    {/* <a href="/news" className="">
                                        News
                                    </a> */}
                                    {/* <a href="/admission" className="">
                                        Admission
                                    </a> */}
                                    <a href="/contact">
                                        Contact
                                    </a>
                                </ul>
                            </div>
                        </div>
                        {/* <!-- /.header-menu-wrap --> */}
                        <div className="header-right">
                            <div className="header-right-item d-lg-none d-md-block" onClick={() => setIsActive(!isActive)}>
                                <a href="#" className="mobile-side-menu-hrefggle"><i
                                    className="fa-sharp fa-solid fa-bars"></i></a>
                            </div>
                            {isActive ? (<div style={{ width: '100%' }} className="bg-white px-4 py-2 border  position-absolute top-100 end-0">
                                <ul className="d-flex flex-column">
                                    <a href="/" end className="mega-menu p-1">
                                        Home
                                    </a>
                                    <a href="/about" className="p-1">
                                        About
                                    </a>
                                    <a href="/gallery" className="p-1">
                                        Gallery
                                    </a>
                                    <a href="/policies" className="p-1">
                                        Policies
                                    </a>
                                    {/* <a href="/news" className="p-1">
                                        News
                                    </a>
                                    <a href="/admission" className="p-1">
                                        Admission
                                    </a> */}
                                    <a href="/contact" className="p-1">
                                        Contact
                                    </a>
                                </ul>
                            </div>) : (
                                <div style={{ width: '100%' }} className="bg-white px-4 py-2 border d-none  position-absolute hrefp-100 end-0">
                                    <ul className="d-flex hidden flex-column">
                                        <a href="/" end className="mega-menu p-1">
                                            Home
                                        </a>
                                        <a href="/about" className="p-1">
                                            About
                                        </a>
                                        <a href="/gallery" className="p-1">
                                            Gallery
                                        </a>
                                        <a href="/policies" className="p-1">
                                            Policies
                                        </a>
                                        {/* <a href="/news" className="p-1">
                                            News
                                        </a>
                                        <a href="/admission" className="p-1">
                                            Admission
                                        </a> */}
                                        <a href="/contact" className="p-1">
                                            Contact
                                        </a>
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