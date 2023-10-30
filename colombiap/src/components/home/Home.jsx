// eslint-disable-next-line no-unused-vars
import React from 'react';
import "./home.css";
const Home = ()=>{
    return (
      <div className="row justify-content-center">
        <div className="col-xs-12 col-md-5 pb-5 pt-5">
          <div className="card">
            <div className="card-body mb-10">
              <h1 className="card-title text-center pb-2">Bienvenidos</h1>
              <h5 className="card-title text-center pb-2">
                {" "}
                Para iniciar en cualquier tarea, presione el boton de menu
              </h5>
              <h5 className="card-title text-center">
                {" "}
                A continuacion digite sus credenciales de <em> Empleado</em>
              </h5>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-xs-12 col-md-10 pb-5">
            <div className="card">
              <div className="card-body mb-9">
                <h1 className="card-title text-center ">Acerca de Nosotros </h1>
                <h5 className=" card-title text-center ">
                  Somos una empresa de imprenta lider en la industria, dedicada
                  a brindar soluciones de impresion de alta calidad y servicios
                  relacionados. con mas de 10 años de experiencia, nos hemos
                  posicionado como un referente en el mercado, ofreciendo
                  resultados sobresalientes y satisfaciendo las necesidades de
                  nuestros clientes. En nuestra empresa, nos apasiona el arte de
                  la impresion y nos orgullece ofrecer una amplia gama de
                  servicios impresos, desde tarjetas de presentacion y folletos,
                  hasta grandes formatos y material publicitario. Nuestro equipo
                  de profesionales altamente capacitados y equipados con
                  tecnologia de vanguardia estan comprometidos en entregar
                  productos impresos de la mas alta calidad, superando las
                  expectativas de nuestros clientes en cada proyecto. Ademas,
                  nos preocupamos por el medio ambiente y nos esforzamos por
                  operar de manera sostenible. utilizamos materiales ecologicos
                  y adoptamos practicas respetuosas con el medio ambiente en
                  nuestro proceso de produccion, minimizando nuestro impacto en
                  el entorno.
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    );
}

export default Home;