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
import SignIn from './Auth/SignIn/SignIn';
import SignUp from './Auth/SignIn/SignUp';
import PrivateRoute from './Auth/Firebase/PrivateRoute';
import NoFound from './Pages/NoFound/NoFound';
const PageRoutes = () => {
    return (
        <div>
            <Navigation />
            <Routes>
                <Route  path="/about-us" element={<AboutUs />} />
                <Route path="/blogs" element={<Blogs />} />
                <Route path="/" element={<Main />} />
                <Route path="/manage-items" element={<PrivateRoute>< ManageItems/></PrivateRoute> } />
                <Route path="/my-items" element={<PrivateRoute><MyItems /></PrivateRoute>} />
                <Route path="/add-items" element={<PrivateRoute><AddItems /></PrivateRoute>} />
                <Route path="/update/:abc" element={<PrivateRoute><UpdateItems /></PrivateRoute>} />
                <Route path="/sign-in" element={<SignIn />} />
                <Route path="/sign-up" element={<SignUp />} />
                <Route path="*" element={<NoFound />} />
            </Routes>
            <Footer />
        </div>
    );
};

export default PageRoutes;