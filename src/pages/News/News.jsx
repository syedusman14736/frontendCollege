import React, { useEffect, useState } from 'react'
import Header from '../../components/Header/Header'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import { tablesDB } from '../../appwrite'

function News() {
    const [newsList, setNewsList] = useState([]);
    const fetchNews = async () => {
        try {
            const news = await tablesDB.listRows({
                databaseId: "68de1953002092b00b7e",
                tableId: "news",
            });
            console.log(news);
            const reversedArr = news.rows.reverse();
            console.log(reversedArr);

            setNewsList(reversedArr);
        } catch (error) {
            alert(error.message)
        }
    }

    useEffect(() => {
        fetchNews();
    }, [])

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
                        <h1 className="title">News</h1>
                        <h4 className="sub-title"><a className="home">Home </a><span className="icon">/</span><a className="inner-page" href="#"> News</a></h4>
                    </div>
                </div>
            </section>




            <section className="blog-section pt-120 pb-120">
                <div className="container">
                    <div className="section-heading text-center">
                        <h4 className="sub-heading wow fade-in-bottom" data-wow-delay="200ms"><span className="heading-icon"><i
                            className="fa-sharp fa-solid fa-bolt"></i></span>News & Announcements</h4>
                        <h2 className="section-title wow fade-in-bottom" data-wow-delay="400ms">Latest News Updates</h2>
                    </div>
                    <div className="row gy-lg-0 gy-4 justify-content-center post-card-2-wrap">
                        <div className="col-xs-12 w-full">

                            {newsList.length > 0 ? (
                                newsList.map((news, index) => (
                                    <div key={index} className="post-card-2 wow fade-in-bottom" data-wow-delay="400ms">
                                        <div className="post-thumb">
                                            <img src="./images/images/news.jpg" alt="post" />
                                        </div>

                                        <div className="post-content-wrap">
                                            <div className="post-content">
                                                <ul className="post-meta">
                                                    <li>
                                                        <i className="fa-sharp fa-regular fa-clock"></i> {news['$createdAt'].split('T')[0]}
                                                    </li>
                                                </ul>
                                                <h3 className="title">
                                                    <a href="blog-details.html">{news.title}</a>
                                                </h3>
                                                <p>
                                                    {news.content}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <p>Fetching News Please Wait.</p>
                            )}


                        </div>
                    </div>

                </div>
            </section >








            <Footer />
        </>
    )
}

export default News