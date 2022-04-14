import React from 'react';
import iconBlack from '../assets/images/icon-black.png'

function Footer(){
    return (
        <React.Fragment>
            <div className="container">
                <div className="logo-icon">
                    <img src={iconBlack} alt="Icone Petshop DH" />
                </div>
                <div className="info">
                    <p><a href="mailto:contato@petshopdh.com.br">contato@petshopdh.com.br</a> 
                        <a href="tel:+5511984848484">(11) 98484-8484 (whatsapp)</a>
                    </p>

                    <p>
                        AVENIDA PAULISTA, 4242 
                        BAIRRO CONSOLAÇÃO 
                        SÃO PAULO- SP
                    </p>
                </div>
            <div className="mapa">
                <iframe title="principal"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14631.954336743434!2d-46.7724023!3d-23.532913!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x739f0ddb0439cf94!2sDigital%20House%20Brasil!5e0!3m2!1spt-BR!2sbr!4v1621457988095!5m2!1spt-BR!2sbr"
                    width="600" height="450" style={{ border: 0}} allowFullScreen="" loading="lazy"></iframe>
            </div>
        </div>
        </React.Fragment>
    )
}

export default Footer;