import { useEffect, useState } from "react"
import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"
import Navbar from "../../components/Navbar/Navbar"
import Topbar from "../../components/Topbar/Topbar"
import { tablesDB } from "../../appwrite"
import { ID } from "appwrite"

function Admission() {
    const [category, setCategory] = useState('');
    const [board, setboard] = useState('');
    const [group, setgroup] = useState('');





    // console.log(document.querySelector('#board'))

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        board: "",
        group: "",
        result: "pending",
        fatherName: "",
        fatherOccupation: "",
        phoneNumber: "",
        sscMarks: "",
        sscPercentage: "",
        sscpassingYear: "",
        category: "",
        dob: "",
        address: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (formData.board == 'federal board') {
                console.log('federal');

                const data = await tablesDB.listRows({
                    databaseId: "68de1953002092b00b7e",
                    tableId: "admissions",
                });

                console.log(data);


                const response = await tablesDB.createRow({
                    databaseId: '68de1953002092b00b7e',
                    tableId: 'admissions',
                    rowId: ID.unique(),
                    data: {
                        rollNo: JSON.stringify(data.total + 1),
                        ...formData
                    }
                });

                alert("Added")

            } else {
                console.log('karachi');

                const data = await tablesDB.listRows({
                    databaseId: "68de1953002092b00b7e",
                    tableId: "karachi-admissions",
                });

                const response = await tablesDB.createRow({
                    databaseId: '68de1953002092b00b7e',
                    tableId: 'karachi-admissions',
                    rowId: ID.unique(),
                    data: {
                        rollNo: JSON.stringify(data.total + 1),
                        ...formData
                    }
                });

                alert('added');

            }


        } catch (error) {
            alert(error.message)
        }
        console.log(formData);


    };


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
                        <h1 className="title">Admission</h1>
                        <h4 className="sub-title"><a className="home" href="index.html">Home </a><span className="icon">/</span><a className="inner-page" href="contact.html"> Admission</a></h4>
                    </div>
                </div>
            </section>

            <section className="contact-section pt-120 pb-120">
                <div className="container">
                    <div className="row gy-lg-0 gy-5">
                        <div className="col-lg-12">
                            <div className="blog-contact-form contact-form">
                                <h2 className="title mb-0">Admission Form</h2>
                                <p className="mb-30 mt-10">Fill-up The Form</p>
                                <div className="request-form">
                                    <form onSubmit={handleSubmit} className="form-horizontal">
                                        <div className="form-group row">
                                            <div className="col-md-6">
                                                <div className="form-item">
                                                    <input type="text" required name="name" value={formData.name} onChange={handleChange} className="form-control" placeholder="Name" />
                                                    <div className="icon"><i className="fa-regular fa-user"></i></div>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-item">
                                                    <input type="text" required name="fatherName" value={formData.fatherName} onChange={handleChange} className="form-control" placeholder="Father Name" />
                                                    <div className="icon"><i className="fa-regular fa-user"></i></div>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-item">
                                                    <input type="text" required name="fatherOccupation" value={formData.fatherOccupation} onChange={handleChange} className="form-control" placeholder="Father Occupation" />
                                                    <div className="icon"><i style={{
                                                        color: 'var(--ed-color-text-body)',
                                                        fontSize: '1.4rem',
                                                    }} className="ri-creative-commons-by-line"></i></div>
                                                </div>
                                            </div>


                                            <div className="col-md-6">
                                                <div className="form-item">
                                                    <input type="text" required name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} className="form-control" placeholder="Phone Number" />
                                                    <div className="icon"><i style={{ color: 'var(--ed-color-text-body)' }} className="fa-sharp fa-solid fa-phone"></i></div>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-item">
                                                    <input type="email" required name="email" value={formData.email} onChange={handleChange} className="form-control" placeholder="Email" />
                                                    <div className="icon"><i className="fa-sharp fa-regular fa-envelope"></i></div>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-item">
                                                    <input type="text" required name="sscMarks" value={formData.sscMarks} onChange={handleChange} className="form-control" placeholder="SSC Marks" />
                                                    <div className="icon"><i style={{
                                                        color: 'var(--ed-color-text-body)',
                                                        fontSize: '1.3rem',
                                                    }} className="ri-mark-pen-line"></i></div>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-item">
                                                    <input type="text" required name="sscPercentage" value={formData.sscPercentage} onChange={handleChange} className="form-control" placeholder="SSC Percentage" />
                                                    <div className="icon"><i style={{ color: 'var(--ed-color-text-body)' }} className="ri-percent-line"></i></div>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-item">
                                                    <input type="text" required name="sscpassingYear" value={formData.sscpassingYear} onChange={handleChange} className="form-control" placeholder="SSC Passing Year" />
                                                    <div className="icon"><i style={{
                                                        color: 'var(--ed-color-text-body)',
                                                        fontSize: '1.3rem',
                                                    }} className="ri-pen-nib-line"></i></div>
                                                </div>
                                            </div>
                                            {/* <div className="col-md-6">
                                                <div className="form-item">
                                                    <input type="text" required name="board" value={formData.board} onChange={handleChange} className="form-control" placeholder="Board" />
                                                    <div className="icon"><i style={{
                                                        color: 'var(--ed-color-text-body)',
                                                        fontSize: '1.3rem',
                                                    }} className="ri-clipboard-line" ></i></div>
                                                </div>
                                            </div> */}
                                            <div className="col-md-6">
                                                <div id="board" className="form-item">
                                                    <select
                                                        name="board"
                                                        className="form-control"
                                                        value={formData.board}
                                                        onChange={handleChange}
                                                    >
                                                        <option value="" disabled>Select Board</option>
                                                        <option value="karachi board">Karachi Board</option>
                                                        <option value="federal board">Federal Board</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-item">
                                                    <select
                                                        name="group"
                                                        className="form-control"
                                                        value={formData.group}
                                                        onChange={handleChange}
                                                    >
                                                        <option value="" disabled>Select Group</option>
                                                        <option value="computer science">Computer Science</option>
                                                        <option value="pre engineering">Pre Engineering</option>
                                                        <option value="humanity">humanity</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-item">
                                                    <select
                                                        name="category"
                                                        className="form-control"
                                                        value={formData.category}
                                                        onChange={handleChange}
                                                    >
                                                        <option value="" disabled>Select Category</option>
                                                        <option value="civilian">Civilian</option>
                                                        <option value="fgei imployee">FGEI Employee</option>
                                                        <option value="defence paid">Defence Paid</option>
                                                        <option value="army">Army</option>
                                                    </select>
                                                </div>


                                            </div>
                                            {/* <div className="col-md-6">
                                                <div className="form-item">
                                                    <div className="nice-select niceSelect select-control form-control" tabindex="0">
                                                        <span className="current">Select Board</span>
                                                        <ul className="list">
                                                            <li data-value="2" value='karachi board' className="option">Karachi Board</li>
                                                            <li data-value="3" value='federal board' className="option">Federal Board</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div> */}


                                            <div className="col-md-6">
                                                <div className="form-item">
                                                    <input type="text" required name="dob" value={formData.dob} onChange={handleChange} className="form-control" placeholder="Date of Birth - DD/MM/YY" />
                                                    <div className="icon"></div>
                                                </div>
                                            </div>

                                            <div className="col-md-12">
                                                <div className="form-item">
                                                    <input type="text" required name="address" value={formData.address} onChange={handleChange} className="form-control" placeholder="Address" />
                                                    <div className="icon"><i style={{
                                                        color: 'var(--ed-color-text-body)',
                                                        fontSize: '1.3rem',
                                                    }} className="ri-map-pin-line"></i></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group row">

                                        </div>
                                        <div className="submit-btn">
                                            <button id="submit" className="ed-primary-btn" type="submit">Submit Form</button>
                                        </div>
                                    </form>
                                    <div id="form-messages" className="alert mt-20"></div>
                                </div>
                            </div>
                        </div>

                        {/* <div className="col-lg-5 col-md-12">
                            <div className="contact-content">
                                <div className="contact-top">
                                    <h3 className="title">Information</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, deleniti!.</p>
                                </div>
                                <div className="contact-list">
                                    <div className="list-item">
                                        <div className="icon">
                                            <i style={{ color: "var(--ed-color-theme-primary)" }} className="fa-sharp fa-solid fa-phone"></i>
                                        </div>
                                        <div className="content">
                                            <h4 className="title">Phone Number & Email</h4>
                                            <span><a href="tel:+65485965789">+92-1233423213</a></span>
                                            <span><a href="mailto:hello@edcare.com">hello@email.com</a></span>
                                        </div>
                                    </div>
                                    <div className="list-item">
                                        <div className="icon">
                                            <i className="fa-sharp fa-solid fa-location-dot"></i>
                                        </div>
                                        <div className="content">
                                            <h4 className="title">Our College Address</h4>
                                            <p>Lorem ipsum dolor sit amet. <br />Karachi, Pakistan</p>
                                        </div>
                                    </div>
                                    <div className="list-item">
                                        <div className="icon">
                                            <i className="fa-sharp fa-solid fa-clock"></i>
                                        </div>
                                        <div className="content">
                                            <h4 className="title">Official Work Time</h4>
                                            <span>Monday - Friday: 09:00 - 20:00</span>
                                            <span>Sunday & Saturday: 10:30 - 22:00</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div >
            </section >

            <Footer />
        </>
    )
}

export default Admission