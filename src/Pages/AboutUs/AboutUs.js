import React from 'react';
import { Link } from 'react-router-dom';
import "./AboutUs.css"
const AboutUs = () => {
    return (
        <div>
            <div className="about-header d-flex justify-content-center align-items-center">
                <h1>About Us</h1>
            </div>

            <section className="d-flex w-75 m-auto pt-5 my-5">
                <div className="mt-5 d-flex justify-content-between">
                    <div className="about-col">
                        <h1>Lorem ipsum dolor, sit amet</h1>
                        <p className="pt-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos natus temporibus, quia vero voluptatem necessitatibus ex quis eius voluptas veritatis reiciendis eligendi quidem culpa ipsa nisi facere fugit porro perspiciatis praesentium non error magni nihil molestias pariatur. Maxime placeat quas cum sunt consequatur eveniet nesciunt dolorem deserunt amet perspiciatis eligendi consequuntur explicabo rem culpa et temporibus quis similique excepturi dolorum, sint, numquam at, odio delectus? Fuga assumenda magnam quae nulla dolores cumque in, digninisi facere fugit porro perspiciatis praesentium non error magni nihil molestias pariatur. Maxime placeat quas cum sunt consequatur eveniet nesciunt dolorem deserunt amet perspiciatis eligendi consequuntur explicabo rem culpa et temporibus quis similique excepturi dolorum, sint, numquam at, odio delectus? Fuga assumenda magnam quae nulla dolores cumque in, dignissimos esse officiis labo</p>
                        <Link className="btn btn-outline-primary w-100" to="/">Explore now</Link>
                    </div>
                    <div className="about-col pt-4 pb-5">
                        <img width="100%" src="https://assets.entrepreneur.com/content/3x2/2000/20151215195453-business-leader-group-front-leadership-team-professionals-businesspeople.jpeg" alt="" />
                        <p className="text-center py-2">OUR TEAM</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutUs;