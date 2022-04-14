import React, { useEffect, useState } from 'react';

function Services(){    
    const [servicesList, setServicesList] = useState([]);
    useEffect(() => {
        const uri = `http://localhost:8000/services/`;

        fetch(uri)
            .then(response => response.json())
            .then(data => {
                if (!data.Error){
                    setServicesList(data);
                }else{
                    setServicesList([]);
                }
                
            })
            .catch(error => console.log(error))
    }, [])
    return (
        <main>
        <section className="servicos-lista">
            <div className="container">
                <h1>Serviços</h1>
                {/*<!-- Aqui onde é necessario implementar o list do controller--> */}
                { servicesList.length > 0  && servicesList.map((service, i) => {
                    return(
                        <article>                    
                        <div className="thumb" key={i}></div>
                            <div className="info" key={i+1}>
                                <h2>{service.name}</h2>
                                <p>R$ {service.price}</p>
                                <p>{service.text}</p>
                                <p>{service.categoria.name}</p>
                            </div>
                        </article>
                    )
                })}                   
            </div>
        </section>
    </main>
    )
}

export default Services;