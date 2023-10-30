import React from 'react';
import { Link } from 'react-router-dom';
import "./Login.css";

const Login = ()=>{

    return(
        <div  className="row mt-10 justify-content-center">
        
        <div className="col-5">
          <div className="card">
            <div className="card-body mb-10">
              <h1 className="card-title text-center">Ingreso</h1>
              <div>
            <form>
                <div className="form-floating mb-3">
            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"></input>
            <label htmlFor="floatingInput">Identificacion</label>
            </div>
            <div className="form-floating">
            <input type="password" className="form-control" id="floatingPassword" placeholder="Password"></input>
            <label htmlFor="floatingPassword">Contraseña</label>
            </div>
            <div className="col-12 text-center">
            <Link to="/menu" className="btn ingreso me-3" id="btningresar">
              Ingresar
            </Link>
            <Link to="/" className="btn Cancelar me-3" id="btncancelar">
              Cancelar
            </Link>
                </div>
            </form>
            </div>             
          </div>
        </div>
      </div>
      </div>
    ) 
}

export default Login;