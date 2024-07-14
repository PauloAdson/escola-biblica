import React from "react";
import './styles.css';
import minusIcon from '../../assets/images/minus-icon.svg';
import plusIcon from '../../assets/images/plus-icon.svg';

export class Sanfona extends React.Component {
    constructor() {
        super();
        this.state = { active: false };
    };

    toggleClass = () => {
        this.setState({ active: !this.state.active });
    };

    render() {
        const { active } = this.state;

        return (
            <>
                <div onClick={this.toggleClass} className={active ? 'duvidas__sanfona active' : 'duvidas__sanfona'}>
                    <div className="duvidas__sanfona-titulo">
                        <h3><span className="duvidas__sanfona-titulo-numero">{this.props.tituloNumeroSanfona}</span>{this.props.tituloSanfona}</h3>
                        <img className="" src={active ? minusIcon : plusIcon} alt="" />
                    </div>
                    <div className="">
                        <p className={active ? 'conteudo conteudo-active' : 'conteudo'}>{this.props.duvidasResposta}</p>
                    </div>
                </div>
            </>
        );
    }
}