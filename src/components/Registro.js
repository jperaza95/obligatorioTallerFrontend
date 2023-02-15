import React from 'react'
import { useSelector } from 'react-redux'
import Ciudades from './Ciudades';
import { useRef } from 'react';
import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import Departamentos from './Departamentos';
import Usuario from './Usuario';

const Registro = () => {

  const dpto = useSelector(state=> state.ciudades.dpto);
  const city = useSelector(state => state.ciudades.ciudadSeleccionada);
  const usuario = useRef(null);
  const pass = useRef(null);

  const [error, setError] = useState(false);

  let navigate = useNavigate();

  // Realiza el registro
  const realizarRegistro = () => {

    let objUsuario = {
      "usuario": usuario.current.value,
      "password": pass.current.value,
      "idDepartamento": dpto,
      "idCiudad": city
    }

    let requestOptions = {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(objUsuario),
      redirect: 'follow'
    };

    fetch("https://dwallet.develotion.com/usuarios.php", requestOptions)
      .then(response => response.json())
      .then(result => {
        console.log(result);

        if (result.codigo === 200) {
          localStorage.setItem("apiKey", result.apiKey);
          navigate("/");
        } else {
          setError(true);
        }
      })
      .catch(error => console.log('error', error));

  }


  return (
    <div className="container mt-5">
      <h1>Registro</h1>    

    <div className="form-row">
        <div className="form-group col-md-8 " >
          <label htmlFor="inputUsuarioRegistro">Usuario</label>
          <input type="text" ref={usuario} className="form-control" id="inputUsuarioRegistro" placeholder="Usuario" />
        </div>
      </div> 


      <div className="form-row">
        <div className="form-group col-md-8">
          <label htmlFor="inputPasswordRegistro">Password</label>
          <input type="password" ref={pass} className="form-control" id="inputPasswordRegistro" placeholder="Password" />
        </div>
      </div>




      <div className="form-row">

        <Departamentos/>

        <Ciudades/>
        
        {error && <div className="alert alert-danger col-md-8" role="alert" data-aria-autofocus="true">
          Error al ingresar los datos. Verifique
        </div>}
      </div>


      <div>
        <input type="button" className="btn btn-primary" value="Registro" onClick={realizarRegistro} /><br />
      </div>

      <hr />

      <Link to="/login">Ir a Login</Link>

    </div>


  )
}

export default Registro



