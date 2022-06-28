import React from 'react';
import "./Home.css"
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className='home'>
            <div className='home-details'>
                <h1>WE ARE HERE <br/> TO HELP YOU</h1>
                <p>DEAR Dealership, Warehousing</p>
                <Link to="/add-items" className='btn btn-outline-primary'>Let's start !</Link>
            </div>
            <div className='home-img'>
                <img src="Assests/images/home.jpg" alt="" />
            </div>
        </div>
    );
};

export default Home;