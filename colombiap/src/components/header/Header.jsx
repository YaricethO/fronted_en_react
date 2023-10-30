import React from 'react';
import { Link } from 'react-router-dom';
import "./header.css";
import LOGO from '../../assets/IMG/LOGO .jpg'
import perfil from '../../assets/IMG/perfil.png'

const Header = ()=>{
    return(
        <div>
            <nav className="navbar bg-light navbar-expand-lg">
                <div className="container-fluid ">
                <img id='logo' src={LOGO} alt="" />
                    <div className="row">
                        <div className="col justify-content-end">
                            <Link to="/" className="btn btn-outline-primary me-3" id="btninicio">
                                Inicio
                            </Link>
                            <Link to="/login" className="btn btn-outline-primary me-2" id= "botonsesion">
                                Iniciar Sesion
                            </Link>
                            <img id='perfil' src={perfil} alt="" />
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header;
