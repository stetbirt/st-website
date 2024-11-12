import Navbar from "./Components/Navbar/Navbar.jsx";
import './App.css'
import {Route, Routes} from 'react-router-dom';
import { Home, About, ContactMe, Tutorials} from './Components/Pages'
import './Components/Utils/ScrollToTop.jsx'
import ScrollToTop from "./Components/Utils/ScrollToTop.jsx";


const App = () => {
    return (

            <div className="App">

                <ScrollToTop></ScrollToTop>

                <div className="navbar">
                    <Navbar/>
                </div>

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/contactme" element={<ContactMe />} />
                    <Route path="/tutorials" element={<Tutorials />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </div>

    );
};

export default App;