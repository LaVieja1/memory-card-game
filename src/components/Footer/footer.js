import React from "react";
import { FaGithub } from 'react-icons/fa';

import './footer.css';

const Footer = () => {
    return (
        <footer className="footer-wrapper">
            <p>Santiago Cano 2023</p>
            <a className="github-link" href="https://github.com/LaVieja1" target="_blank" rel="noreferrer">
                <FaGithub />
            </a>
        </footer>
    )
}

export default Footer;