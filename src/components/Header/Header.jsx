import React from "react";
import './styles.css'
import logo from '../../assets/images/logo.svg';

export class Header extends React.Component {
    render() {
        return (
            <header>
                <nav>
                    <img src={logo} alt="Logo EBD" />
                </nav>
            </header>
        );
    }
}