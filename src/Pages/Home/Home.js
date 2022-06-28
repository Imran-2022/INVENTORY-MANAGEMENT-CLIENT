import React from 'react';
import "./Home.css"
const Home = () => {
    return (
        <div className='home'>
            <div className='home-details'>
                <h1>WE ARE HERE <br/> TO HELP YOU</h1>
                <p>DEAR Dealership, Warehousing</p>
                <button className='btn btn-outline-primary'>Let's start !</button>
            </div>
            <div className='home-img'>
                <img src="https://www.supplychainquarterly.com/ext/resources/2022/04/08/SCQ22_Q3_inventory_dilemma.jpg?t=1649432993&width=696" alt="" />
            </div>
        </div>
    );
};

export default Home;