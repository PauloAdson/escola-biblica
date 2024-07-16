import React from "react";
import './styles.css'
import logo from '../../assets/images/logo.svg';
import { Button } from "../Button/Button";

export class Header extends React.Component {
    render() {
        return (
            <header id="inicio">
                <nav className="menu">
                    <a href="./">
                        <img src={logo} alt="Logo EBD" />
                    </a>

                    <div className="menu-links">
                        <Button estilo="btn-header login" link="/cadastro" texto="Entrar" />
                        <Button estilo="btn-header cadastro" link="./cadastro" texto="Cadastrar-se" />
                    </div>

                </nav>
            </header>
        );
    }
}