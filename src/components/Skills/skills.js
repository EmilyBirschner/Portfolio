import React from 'react'
import './skills.css'
import JavaScript from '../../assets/js.webp'
import ReactImg from '../../assets/react.webp'
import CriacaoSite from '../../assets/site.webp'

const Skills = () => {
    return (
        <section id="skills">
            <span className="skillTitle">O que faço</span>
            <span className="skillDesc">Desenvolvedora com experiência em JavaScript, HTML, CSS e React. Crio soluções práticas e personalizadas, unindo eficiência técnica e criatividade para entregar projetos que fazem a diferença.</span>
            <div className="skillBars">
                <div className="skillBar">
                    <img src={JavaScript} alt="UIDesign" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Javascript</h2>
                        <p>Linguagem de programação versátil e essencial para o desenvolvimento de aplicações web interativas, com foco em funcionalidades dinâmicas no front-end e lógica no back-end.</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={ReactImg} alt="WebDesign" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>React</h2>
                        <p>Biblioteca JavaScript moderna para criar interfaces de usuário eficientes e reutilizáveis, ideal para o desenvolvimento de aplicações web escaláveis e responsivas.</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={CriacaoSite} alt="AppDesign" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Criação de sites</h2>
                        <p>Habilidade em desenvolver sites completos e responsivos, combinando design intuitivo e funcionalidade robusta para proporcionar experiências de usuário únicas.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills
