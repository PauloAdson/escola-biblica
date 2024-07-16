import React from "react";
import './styles.css'
import { Button } from "../Button/Button";

export class Cadastro extends React.Component {
    render() {
        return (
            <>
                <section className="cadastro">
                    <h2>Página em Desenvolvimento</h2>
                    <Button estilo="btn-destaque" link="./" texto="Voltar ao Início" />
                </section>
            </>
        );
    }
}