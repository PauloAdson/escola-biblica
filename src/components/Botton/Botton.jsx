import React from "react";
import './styles.css';

export class Botton extends React.Component {
    render() {
        return (
            <a className={this.props.estilo} href={this.props.link}>{this.props.texto}</a>
        );
    }
}