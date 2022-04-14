import React from 'react';
import logo from '../assets/images/logo-white.png';
import {Link, Routes, Route} from 'react-router-dom';
import ContentWrapper from './ContentWrapper';
import Services from './Services';

function Header(){
    return (        
        <React.Fragment>                 
        <body>
          <header>
            <div className="container">
            <Link className="logo" to="/"><img src={logo} alt="Petshop DH"/></Link>
            <nav>
                <ul>
                    <li><Link to="/sobre">Sobre</Link></li>
                    <li><Link to="/servicos">Serviços</Link></li>
                    <li><Link to="/contato">Contato</Link></li>
                    <li><Link to="/login">Login</Link></li>
                </ul>
            </nav>   
            </div>
          </header>
          <Routes>
              <Route exact path="/" element={ <ContentWrapper />} />
              <Route path="/servicos" element={ <Services />} />
          </Routes>
        </body>     

        </React.Fragment>        
    )
}

export default Header;