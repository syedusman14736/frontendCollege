import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Contact } from "./pages/Contact/Contact";
import Admission from "./pages/Admission/Admission";
import Gallery from "./pages/Gallery/Gallery";
import About from "./pages/about/About";
import News from "./pages/News/News";
import Policies from './pages/Policies/Policies'
import 'remixicon/fonts/remixicon.css';
import './styles/bootstrap.min.css';
import './styles/fontawesome.min.css'
import './styles/animate.min.css';
import './styles/venobox.min.css';
import './styles/keyframe-animation.css';
import './styles/odometer.min.css';
import './styles/nice-select.css';
import './styles/daterangepicker.css';
import './styles/swiper.min.css';
import './styles/main.css';
import './styles/index.css';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/admission" element={<Admission />}></Route>
        <Route path="/gallery" element={<Gallery />}></Route>
        <Route path="/policies" element={<Policies />}></Route>
        <Route path="/news" element={<News />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </>
  )
}

export default App