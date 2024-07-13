import React from "react";
import './styles.css';
import { Botton } from "../Botton/Botton";

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
                        <Botton estilo="btn-destaque cadastro" link="./" texto="Começar Agora" />
                    </section>
                </main>
            </>
        );
    }
}