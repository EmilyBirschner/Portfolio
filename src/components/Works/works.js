import React from 'react'
import './works.css'
import ClimaApp from '../../assets/clima.webp'
import Todo from '../../assets/to-do.webp'


function Works() {
    return (
        <section id="works">
            <h2 className="worksTitle">Meus Projetos</h2>
            <span className="worksDesc">Bem-vindo à seção de projetos! Aqui você pode explorar algumas das soluções que desenvolvi, combinando tecnologia e criatividade para resolver problemas e criar experiências únicas. Cada projeto reflete meu crescimento como desenvolvedora e minha dedicação em entregar resultados funcionais e inovadores.</span>
            <div className="worksImgs">
                <img src={ClimaApp} alt="" className="worksImg" />
                <img src={Todo} alt="" className="worksImg" />
            </div>
            {/* <button className="worksBtn">Veja Mais</button> */}
        </section>
    )
}

export default Works
