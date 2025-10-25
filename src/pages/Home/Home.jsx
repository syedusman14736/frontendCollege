import Navbar from "../../components/Navbar/Navbar"
import Topbar from "../../components/Topbar/Topbar"
import Hero from "../../components/Hero/Hero"
import Message from "../../components/Message/Message"
import Faq from "../../components/Faq/Faq"
import Staff from "../../components/Staff/Staff"
import Reviews from "../../components/Reviews/Reviews"
import News from "../../components/News/News"
import Footer from "../../components/Footer/Footer"
import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import Header from "../../components/Header/Header"


export const Home = () => {

    useEffect(() => {
        document.querySelectorAll("[data-count]").forEach(el => {
            const count = parseFloat(el.getAttribute("data-count"));
            if (!isNaN(count)) {
                let current = 0;
                const increment = count / 150;
                const interval = setInterval(() => {
                    current += increment;
                    if (current >= count) {
                        current = count;
                        clearInterval(interval);
                    }
                    el.textContent = current.toFixed(1);
                }, 30);
            }
        });
    }, []);

    return (
        <div>

            <Header>
                <Topbar />
                <Navbar />
            </Header>



            <Hero />

            <Message />
            <Faq />
            {/* <Staff /> */}
            <Reviews />
            <News />
            <Footer />
        </div>
    )
}