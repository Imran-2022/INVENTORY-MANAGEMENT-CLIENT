import React from 'react';
import "./Home.css"
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className='home d-flex flex-wrap px-2'>
            <div className='home-details'>
                <h2 style={{ fontWeight:'100'}} className="home-d"> WELCOME TO  OUR<br/> LARGEST MACHINARY </h2>
                <h3>WORLD LARGEST INVENTORY MANAGEMENT</h3>
                <Link to="/add-items" className='btn btn-primary w-50 my-2'>Let's start !</Link>
            </div>
            <div className='home-img'>
                <img width='100%' src="Assests/images/home.jpg" alt="" />
            </div>
        </div>
    );
};

export default Home;