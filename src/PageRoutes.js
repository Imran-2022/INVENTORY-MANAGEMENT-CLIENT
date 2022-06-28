import React from 'react';
import Footer from './Shared/Footer/Footer';
import Navigation from './Shared/Navigation/Navigation';
import {
    Routes,
    Route,
} from "react-router-dom";
import AboutUs from './Pages/AboutUs/AboutUs';
const PageRoutes = () => {
    return (
        <div>
            <Navigation />
            <Routes>
                <Route exact path="/about-us" element={<AboutUs />} />
                {/* <Route path="/add-shops" element={<AddShops />} /> */}
            </Routes>
            <Footer />
        </div>
    );
};

export default PageRoutes;