import { useEffect } from 'react';
import { useState } from 'react';
import { useRef } from "react";
import { useSelector } from 'react-redux';

const Ciudades = () => {

  const dpto = useSelector(state => state.ciudades.dpto);


  useEffect(() => {
    cargarCiudades();
  }, [dpto])


  const [ciudades, setCiudades] = useState([]);



  const cargarCiudades = e => {

    fetch(`https://dwallet.develotion.com/ciudades.php?idDepartamento=${dpto}`)
      .then(response => response.json())
      .then(result => {

        setCiudades(result.ciudades);
        console.log(result.ciudades);
      })
      .catch(error => console.log('error', error));

  }

  return (

    <div className="form-group col-md-5">
      <label htmlFor="inputCiudad">Ciudad</label>

      <select id="inputCiudad" className="form-control" onChange={cargarCiudades}>
        <option key={-1} value={-1}>Seleccione una ciudad...</option>
        {ciudades.map(ciudad => <option key={ciudad.id} value={ciudad.id}>{ciudad.nombre}</option>)}
      </select>

    </div>


  )
}

export default Ciudades






