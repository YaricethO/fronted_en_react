import React from 'react';
import "./Menu.css";
import contrataciones from '../../assets/menu/contrataciones.jpg'
import cotizaciones from '../../assets/menu/cotizaciones.png'
import diseños from '../../assets/menu/diseños.jpg'
import envio from '../../assets/menu/envio.png'
import facturas from '../../assets/menu/facturas.jpg'
import inventario from '../../assets/menu/inventario.jpg'
import produccion from '../../assets/menu/produccion.jpg'
import solicitudes from '../../assets/menu/solicitudes.png'
const imagenes = [ solicitudes,produccion,inventario,facturas,envio,diseños,contrataciones, cotizaciones] 

const Menu = ()=>{
    return(
        <div  className="row mt-10 justify-content-center">
        <h4 className='men'>Menu</h4>
        <div className='row container-fluid'>
        {imagenes.map ((imagen,index) => ( 
            <div className="col-6">
            <div id="continfo" className="card mb-3 ">
                <div className="row g-0 ">
                    <div className="col-md-4">
                        <img className='images' key={index} src={imagen} alt={'Imagen ${index + 1}'}/> 
                    </div>
                    <div className="col-md-8">
                        <div className="card-body accordion-header">
                            <h4 className="card-title">Solicitudes</h4>
                            <p className="card-text">- Ver todas las
                                solicitudes</p>
                                
                            <button type="button"
                                className="btn btn-primary">Entrar</button>

                        </div>
                    </div>
                </div>
            </div>
        </div>

        ))
         
        }
    </div>
      </div>
    ) 
}

export default Menu;