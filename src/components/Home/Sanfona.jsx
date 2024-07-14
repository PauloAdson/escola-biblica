import React from "react";
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
        return (
            <>
                <div className="duvidas__sanfona">
                    <h3><span>{this.props.tituloNumeroSanfona}</span>{this.props.tituloSanfona}</h3>
                    <img className="" src="" alt="" />
                    <p>{this.props.duvidasResposta}</p>
                </div>
            </>
        );
    }
}