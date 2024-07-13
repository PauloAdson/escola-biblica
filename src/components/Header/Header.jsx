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

                        <div className="menu-links">
                            <Botton estilo="btn-header login" link="./" texto="Entrar" />
                            <Botton estilo="btn-header cadastro" link="./" texto="Cadastrar-se" />
                        </div>
                       
                </nav>
            </header>
        );
    }
}