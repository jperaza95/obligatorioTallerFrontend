import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { guardarDepartamentos } from '../features/departamentosSlice';
import { useEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import {Link} from "react-router-dom";

const Registro = () => {

  const dpto = useRef(null);
  const city = useRef(null);
  const usuario = useRef(null);
  const pass = useRef(null);

  //Busca los departamentos en el store.
  const dispatch = useDispatch();
  const departamentos = useSelector(state => state.departamentos.departamentos);

  //Se usa un state para mostrar las ciudades correspondientes al departamento seleccionado
  const [ciudades, setCiudades] = useState([]);


  //Guarda los departamentos en el store
  useEffect(() => {
    fetch("https://dwallet.develotion.com/departamentos.php")
      .then(response => response.json())
      .then(result => {

        dispatch(guardarDepartamentos(result.departamentos));

      })
      .catch(error => console.log('error', error));

  }, [])


  //Obtiene las ciudades del departamento seleccionado
  const obtenerCiudades = () => {
    fetch(`https://dwallet.develotion.com/ciudades.php?idDepartamento=${dpto.current.value}`)
      .then(response => response.json())
      .then(result => {
        console.log(result.ciudades);
        setCiudades(result.ciudades);

      })
      .catch(error => console.log('error', error));
  }

  
  // Realiza el registro
  const realizarRegistro = () => {

    let objUsuario = {
      "usuario": usuario.current.value,
      "password": pass.current.value,
      "idDepartamento": dpto.current.value,
      "idCiudad": city.current.value
    }

    let requestOptions = {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(objUsuario),
      redirect: 'follow'
    };

    fetch("https://dwallet.develotion.com/usuarios.php", requestOptions)
      .then(response => response.json())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));

  }

  
  return (
    <div className="container">

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

      
    <div className="form-group col-md-4">
      <label htmlFor="inputDepartamento">Departamento</label>
      <select id="inputDepartamento" className="form-control" onChange={obtenerCiudades} ref={dpto}>
        {departamentos.map(dpto => <option key={dpto.id} value={dpto.id}>{dpto.nombre}</option>)}
      </select>

    </div>
      <div className="form-group col-md-4">
        <label htmlFor="inputCiudad">Ciudad</label>

        <select id="inputCiudad" className="form-control" ref={city}>
          {ciudades.map(ciudad => <option key={ciudad.id} value={ciudad.id}>{ciudad.nombre}</option>)}
        </select>

      </div>
    </div>


    <div>
      <input type="button" className="btn btn-primary" value="Registro" onClick={realizarRegistro} /><br />
    </div>

    <hr/>

    <Link to="/">Ir a Login</Link>

  </div>


)
}

export default Registro



