import React from 'react';
import { FaFacebookSquare, FaLinkedin, FaGithubSquare, FaYoutubeSquare } from "react-icons/fa";
import "./Footer.css"
const Footer = () => {
    const date = new Date().getFullYear();
    return (
        <div className="footer flex-row-reverse" style={{minHeight:"35vh",display:"flex",justifyContent:"center", alignItems:"center"}}>
            
            <div className="footer-2">
                <p>&copy;{date}, All Right Reserved by `MACHINERY</p>
            </div>
            <div className="footer-3">
                <a href="https://www.facebook.com/profile.php?id=100071106706650" target="_blank" rel="noreferrer"><FaFacebookSquare /></a>
                <a href="https://www.linkedin.com/in/md-imranul-haque/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
                <a href="https://github.com/Imran-2022" target="_blank" rel="noreferrer"><FaGithubSquare /></a>
                <a href="https://www.youtube.com/channel/UCF7WyIjmmYdD1l3fp4egycQ/featured" target="_blank" rel="noreferrer"><FaYoutubeSquare /></a>
            </div>
        </div>
    );
};

export default Footer;