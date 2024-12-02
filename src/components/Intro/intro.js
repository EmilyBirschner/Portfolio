import React from 'react';
import './intro.css';
import bg from '../../assets/image.png';
import btnImg from '../../assets/hireme.png'
import { Link } from 'react-scroll'

const Intro = () => {
    return (
        <section id="intro">
            <div className="introContent">
                <span className="hello">Olá,</span>
                <span className="introText">Eu sou <span className="introName">Emily, </span><br />Desenvolvedora</span>
                <p className="introPara"> com 1 ano de experiência em projetos front-end e back-end, especializada em JavaScript, CSS, HTML e React. Atualmente, curso Análise e Desenvolvimento de Sistemas, unindo conhecimento acadêmico a habilidades práticas, como desenvolvimento de soluções customizadas no Wix, integrações com APIs, geração de PDFs, construção de chatbots e manipulação de dados. Minha trajetória também inclui forte background em gestão de eventos, destacando minha versatilidade e foco em resultados.</p>
                <Link><button className="btn" onClick={() => {
                    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
                }}>
                    <img src={btnImg} alt="Me contrate" className='btnImg' />Entre em contato</button></Link>
            </div>
            <img src={bg} alt="Profile" className="bg" />
        </section>
    )
}

export default Intro;
