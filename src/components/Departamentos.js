import React from 'react'

const Departamentos = ({dptos}) => {
  return (
    <div className="form-group col-md-4">
      <label htmlFor="inputDepartamento">Departamento</label>
       <select id="inputDepartamento" className="form-control" >
        {dptos.map(dpto => <option key={dpto.id} value={dpto.id}>{dpto.nombre}</option>)}
      </select> 



    </div>
  )
}

export default Departamentos





/*import { useEffect } from 'react';
import { useState } from 'react';
import { useRef } from "react";


const Departamentos = ({seleccionarDepartamento}) => {


  const [dptos, setDptos] = useState([]);
  const departamento = useRef(null);

  useEffect(() => {
    cargarDepartamentos();
  }, [])

  const departamentoSeleccionado = e =>{
    seleccionarDepartamento(departamento.current.value);
    //console.log(departamento);
  }


  const cargarDepartamentos = () => {

    fetch("https://dwallet.develotion.com/departamentos.php")
      .then(response => response.json())
      .then(result => {

        setDptos(result.departamentos);
        console.log(result.departamentos);
      })
      .catch(error => console.log('error', error));
  }

  return (
    <div className="form-group col-md-4">
      <label htmlFor="inputDepartamento">Departamento</label>
      { <select id="inputDepartamento" ref={departamento} className="form-control" onChange={departamentoSeleccionado}>
        {dptos.map(dpto => <option key={dpto.id} value={dpto.id}>{dpto.nombre}</option>)}
      </select> }



    </div>
  )
}

export default Departamentos
*/