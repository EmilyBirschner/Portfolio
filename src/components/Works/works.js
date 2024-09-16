import React from 'react'
import './works.css'
import Portifolio1 from '../../assets/portfolio-1.png'
import Portifolio2 from '../../assets/portfolio-2.png'
import Portifolio3 from '../../assets/portfolio-3.png'
import Portifolio4 from '../../assets/portfolio-4.png'
import Portifolio5 from '../../assets/portfolio-5.png'
import Portifolio6 from '../../assets/portfolio-6.png'

function Works() {
    return (
        <section id="works">
            <h2 className="worksTitle">Meu Portfólio</h2>
            <span className="worksDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius alias laudantium consequuntur perferendis a neque cumque iusto doloribus distinctio consectetur.Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius alias laudantium consequuntur perferendis a neque cumque iusto doloribus distinctio consectetur.</span>
            <div className="worksImgs">
                <img src={Portifolio1} alt="" className="worksImg" />
                <img src={Portifolio2} alt="" className="worksImg" />
                <img src={Portifolio3} alt="" className="worksImg" />
                <img src={Portifolio4} alt="" className="worksImg" />
                <img src={Portifolio5} alt="" className="worksImg" />
                <img src={Portifolio6} alt="" className="worksImg" />
            </div>
            <button className="worksBtn">Veja Mais</button>
        </section>
    )
}

export default Works
