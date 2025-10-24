import React, { useEffect, useState } from 'react'
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
                                        <img src="./src/assets/images/images/news.jpg" alt="post" />
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
    )
}

export default News