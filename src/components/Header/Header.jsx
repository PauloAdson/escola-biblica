import React from "react";
import './styles.css'
import logo from '../../assets/images/logo.svg';
import { Botton } from "../Botton/Botton";

export class Header extends React.Component {
    render() {
        return (
            <header>
                <nav className="menu">
                    <img src={logo} alt="Logo EBD" />
                    <ul>
                        <Botton estilo="" link="./" texto="Entrar" />
                        <Botton estilo="" link="./" texto="Cadastrar-se" />
                    </ul>
                </nav>
            </header>
        );
    }
}