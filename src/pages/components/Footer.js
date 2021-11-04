import React from 'react'
import './Footer.css'
import { FaGithub } from "react-icons/fa"

const Footer = () => {
    return (
        <footer className="app-footer">
            <p className="footer_copyright">
                Desenvolvido por:&nbsp;
                <a href="https://github.com/ArthurDeBellis" target="_blank" rel="noreferrer" className="link">
                Arthur
                </a>,&nbsp;
                <a href="https://github.com/athenasaran" target="_blank" rel="noreferrer" className="link">
                 Athena
                </a>,&nbsp;
                <a href="https://github.com/juliacfaria" target="_blank" rel="noreferrer" className="link">
                Júlia
                </a>,&nbsp;
                <a href="https://github.com/araujomel" target="_blank" rel="noreferrer" className="link">
                Melissa
                </a>,&nbsp;
                <a href="https://github.com/WillyanGui" target="_blank" rel="noreferrer" className="link">
                Willyan
                </a>
            </p>
            <div className="footer_social">
                <a href="https://github.com/ArthurDeBellis/Projeto-FullStack" target="_blank" rel="noreferrer">
                        <FaGithub size="30" color="#fff"/>
                </a>
            </div>
        </footer>

    )
}

export default Footer
