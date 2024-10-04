import React from 'react'
import './contact.css';
import Walmart from '../../assets/walmart.png'
import Microsoft from '../../assets/microsoft.png'
import Facebook from '../../assets/facebook.png'
import Adobe from '../../assets/adobe.png'

const Contact = () => {
    return (
        <section id="contactPage">
            <div id="clients">
                <h1 className="contactPageTitle">Meus Clientes</h1>
                <p className="clientDesc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea eligendi aspernatur magni architecto laboriosam ut distinctio.
                </p>
                <div className="clientImgs">
                    <img src={Walmart} alt="Client" className="clientImg" />
                    <img src={Microsoft} alt="Client" className="clientImg" />
                    <img src={Facebook} alt="Client" className="clientImg" />
                    <img src={Adobe} alt="Client" className="clientImg" />
                </div>
            </div>
            <div id="contact">
                <h1 className="contactPageTitle">Fale Comigo</h1>
                <span className="contactDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. </span>
                <form action="" className="contacForm">
                    <input type="text" className="name" placeholder='Seu Nome' />
                    <input type="email" className="email" placeholder='Seu Email' />
                    <textarea className="msg" name="message" rows="5" placeholder='Sua mensagem'></textarea>
                    <button type='submit' value='Send' className="submitBtn">Enviar</button>
                </form>
            </div>
        </section>
    )
}

export default Contact

