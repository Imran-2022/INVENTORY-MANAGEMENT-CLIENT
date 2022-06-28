import React from 'react';
import Footer from './Shared/Footer/Footer';
import Navigation from './Shared/Navigation/Navigation';
import {
    Routes,
    Route,
} from "react-router-dom";
import AboutUs from './Pages/AboutUs/AboutUs';
import Blogs from './Pages/Blogs/Blogs';
import Main from './Pages/Main/Main';
const PageRoutes = () => {
    return (
        <div>
            <Navigation />
            <Routes>
                <Route exact path="/about-us" element={<AboutUs />} />
                <Route path="/blogs" element={<Blogs />} />
                <Route path="/" element={<Main />} />

            </Routes>
            <Footer />
        </div>
    );
};

export default PageRoutes;