import React from "react";
import './styles.css';
import { Button } from "../Button/Button";

export class Home extends React.Component {
    render() {
        return (
            <>
                <main className="bg-main">
                    <section className="main-inicio">
                        <h1 className="uppercase">Venha aprender mais<br />
                            sobre a Bíblia
                        </h1>
                        <p className="uppercase">Através de lições Bíblicas</p>
                        <Button estilo="btn-destaque cadastro" link="./" texto="Começar Agora" />
                    </section>
                </main>
                <section className="visao-geral-curso">
                    <h2>Descubra a Profundidade das Escrituras</h2>
                    <div className="visao-geral-curso__conteudo">
                        <p>
                            Nosso curso de estudo bíblico foi desenvolvido para todos aqueles que desejam aprofundar seu conhecimento e entendimento da Bíblia Sagrada. Seja você um iniciante ou alguém que já possui um conhecimento sólido das Escrituras, nosso curso  oferece um ambiente enriquecedor para explorar a Palavra de Deus de maneira profunda e significativa.
                        </p>
                        <img src="./algo" alt="imagem" />
                    </div>
                </section>
            </>
        );
    }
}