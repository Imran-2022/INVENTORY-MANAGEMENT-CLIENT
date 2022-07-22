import React from 'react';
import { Link } from 'react-router-dom';
import "./AboutUs.css"
const AboutUs = () => {
    return (
        <div>
            <div className="about-header d-flex justify-content-center align-items-center">
                <h1>About Us</h1>
            </div>

            <section>
                <div className=" pt-4 pb-5 text-center">
                    <img width="30%" src="https://assets.entrepreneur.com/content/3x2/2000/20151215195453-business-leader-group-front-leadership-team-professionals-businesspeople.jpeg" alt="" />
                    <p className=" py-2">OUR TEAM</p>
                </div>
            </section>
        </div>
    );
};

export default AboutUs;