import React from "react";
import './styles.css'
import logo from '../../assets/images/logo.svg';
import { Button } from "../Button/Button";

export class Header extends React.Component {
    render() {
        return (
            <header>
                <nav className="menu">
                    <img src={logo} alt="Logo EBD" />

                    <div className="menu-links">
                        <Button estilo="btn-header login" link="./" texto="Entrar" />
                        <Button estilo="btn-header cadastro" link="./" texto="Cadastrar-se" />
                    </div>

                </nav>
            </header>
        );
    }
}