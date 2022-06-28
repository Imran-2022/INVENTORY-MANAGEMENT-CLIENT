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
import ManageItems from './Pages/ManageItems/ManageItems';
import MyItems from './Pages/MyItems/MyItems';
import AddItems from './Pages/AddItems/AddItems';
import UpdateItems from './Pages/UpdateItems/UpdateItems';
const PageRoutes = () => {
    return (
        <div>
            <Navigation />
            <Routes>
                <Route  path="/about-us" element={<AboutUs />} />
                <Route path="/blogs" element={<Blogs />} />
                <Route path="/" element={<Main />} />
                <Route path="/manage-items" element={< ManageItems/>} />
                <Route path="/my-items" element={<MyItems />} />
                <Route path="/add-items" element={<AddItems />} />
                <Route path="/update/:abc" element={<UpdateItems />} />
            </Routes>
            <Footer />
        </div>
    );
};

export default PageRoutes;