import React from "react";
import './styles.css'
import logo from '../../assets/images/logo.svg';

export class Footer extends React.Component {
    render() {
        return (
            <>
                <footer>
                    <div className="footer__content">
                        <div className="footer__content-logo footer__content-height">
                            <a href="/"><img src={logo} alt="Logo EBD" /></a>
                            <p>Os céus e a terra passarão, mas as minhas palavras jamais passarão.</p>
                        </div>

                        <div className="footer__content-links footer__links-rapidos footer__content-height">
                            <h4>Links Rápidos</h4>

                            <p><a href="">Voltar ao topo</a></p>
                            <p><a href="#duvidas">Dúvidas</a></p>
                        </div>

                        <div className="footer__content-links footer__content-height">
                            <h4>Contatos</h4>

                            <p>WhatsApp: <a href="https://wa.me/5562995132226" target="_blank">(62)99513-2226</a></p>
                            <p>E-mail: <a href="mailto:paulo.alves200581@gmail.com">paulo.alves200581@gmail.com</a></p>
                        </div>
                    </div>

                </footer>
                <div className="footer__copyright"><p> Desenvolvido por <a href="https://portfolio-pauloadson.vercel.app/" target="_blank">Paulo Adson</a></p>
                </div>
            </>
        );
    }
}