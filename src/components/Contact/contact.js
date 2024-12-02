import React, { useRef } from 'react';
import './contact.css';

import FacebookIcon from '../../assets/facebook-icon.png';
import InstagramIcon from '../../assets/instagram.png';
import TwitterIcon from '../../assets/twitter.png';
import YoutubeIcon from '../../assets/youtube.png';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_bwc0589', 'template_kf07t82', form.current, { publicKey: '_w-sv6TVqbZaLmIWT' })
            .then(() => {
                console.log('Email enviado!');
                e.target.reset();
                alert('Email enviado com sucesso!');
            }, (error) => {
                console.log('Falha ao enviar o email', error.text);
            },
            );
    };

    return (
        <section id="contactPage">

            <div id="contact">
                <h1 className="contactPageTitle">Fale Comigo</h1>
                <span className="contactDesc">Digite os dados dos campos abaixo e me envie um email </span>
                <form action="" className="contacForm" ref={form} onSubmit={sendEmail}>
                    <input type="text" className="name" placeholder='Seu Nome' name='your_name' required />
                    <input type="email" className="email" placeholder='Seu Email' name='your_email' required />
                    <textarea className="msg" name="message" rows="5" placeholder='Sua mensagem' required></textarea>
                    <div><button type='submit' value='Send' className="submitBtn">Enviar</button></div>
                    {/* <div className="links">
                        <img src={FacebookIcon} alt="Linkedin" className="link" />
                        <img src={TwitterIcon} alt="Twitter" className="link" />
                        <img src={YoutubeIcon} alt="Youtube" className="link" />
                        <img src={InstagramIcon} alt="Instagram" className="link" />

                    </div> */}
                </form>
            </div>
        </section>
    )
}

export default Contact

