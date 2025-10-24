import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import '@fortawesome/fontawesome-free/css/all.min.css';
import { BrowserRouter } from 'react-router-dom';
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

createRoot(document.getElementById('root')).render(

  <BrowserRouter>
    <App />
  </BrowserRouter>
)
