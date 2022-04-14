import React from 'react';
import ilustraPark from '../assets/images/ilustra-park.png';
import ilustraCity from '../assets/images/ilustra-city.png';

function LandingPage(){
    return (
        <React.Fragment>
            <main>
            <section className="banner">
                <div className="container">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt </p>
                    <img src={ilustraPark} alt="ilustração de pessoa passeando com o cachorro na praça" />
                </div>
            </section>
            <section className="servicos">
                <div className="container">
                    <h2>serviços</h2>
                    <div className="items">
                        <article>
                            <div className="thumb"></div>
                            <h3>banho completo</h3>
                            <h4>R$40,00</h4>
                        </article>
                        <article>
                            <div className="thumb"></div>
                            <h3>banho completo</h3>
                            <h4>R$40,00</h4>
                        </article>
                        <article>
                            <div className="thumb"></div>
                            <h3>banho completo</h3>
                            <h4>R$40,00</h4>
                        </article>
                    </div>
                </div>
            </section>
            <section className="sobre">
                <div className="container">
                    <img src={ilustraCity} alt="Ilustração de pessoa passeando com um cachorro na cidade" />
                    <div className="text">
                        <h3>Sed ut perspiciatis unde iste natus error sit voluptatem accusantium doloremque laudantium,
                        </h3>
                        <p>Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae
                            vitae
                            dicta
                            sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
                            sed
                            quia
                            consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. </p>
                    </div>
                </div>
            </section>
            </main>
        </React.Fragment>
    )
}

export default LandingPage;