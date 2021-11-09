import React from "react";

import { AreaFooter } from "./styled";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
    return (
        <AreaFooter>
            <div className="social">
                <p>
                    Desenvolvido por:&nbsp;
                    <a href="https://github.com/ArthurDeBellis" target="_blank" rel="noreferrer">
                    Arthur
                    </a>,&nbsp;
                    <a href="https://github.com/athenasaran" target="_blank" rel="noreferrer">
                    Athena
                    </a>,&nbsp;
                    <a href="https://github.com/juliacfaria" target="_blank" rel="noreferrer">
                    Júlia
                    </a>,&nbsp;
                    <a href="https://github.com/araujomel" target="_blank" rel="noreferrer">
                    Melissa
                    </a>,&nbsp;
                    <a href="https://github.com/WillyanGui" target="_blank" rel="noreferrer">
                    Willyan
                    </a>
                </p>
            </div>
            <a href="https://github.com/ArthurDeBellis/cidadeshistoricas" target='_blank' rel='noreferrer' className="link">
                <FaGithub /> Git do Projeto
            </a>
        </AreaFooter>
    );
}

export default Footer;