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
                <span className="introText">Eu sou <span className="introName">Emily</span><br />Estudante de Desenvolvimento</span>
                <p className="introPara">Lorem ipsum dolor, sit amet. Dolorum voluptates eum atque voluptate non magni qui,<br /> id ex obcaecati assumenda aliquam sunt.</p>
                <Link><button className="btn" onClick={() => {
                    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
                }}>
                    <img src={btnImg} alt="Me contrate" className='btnImg' />Me contrate</button></Link>
            </div>
            <img src={bg} alt="Profile" className="bg" />
        </section>
    )
}

export default Intro;
