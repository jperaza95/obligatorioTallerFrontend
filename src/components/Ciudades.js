import { useEffect } from 'react';
import { useState } from 'react';
import { useRef } from "react";
import { useSelector } from 'react-redux';

const Ciudades = () => {

  const dpto = useSelector(state => state.ciudades.dpto);

  
  useEffect(() => {
    cargarCiudades();
  }, [dpto])


  const ciudad = useRef(null);

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
    <div className="form-row">
      <div className="form-group col-md-4">
        <label htmlFor="inputCiudad">Ciudad</label>

        <select id="inputCiudad" ref={ciudad} className="form-control" onChange={cargarCiudades}>
          {ciudades.map(ciudad => <option key={ciudad.id} value={ciudad.id}>{ciudad.nombre}</option>)}
        </select>

      </div>
    </div>

  )
}

export default Ciudades







// const Departamentos = ({seleccionarDepartamento}) => {


//   const [dptos, setDptos] = useState([]);
//   const departamento = useRef(null);

//   useEffect(() => {
//     cargarDepartamentos();
//   }, [])

//   const departamentoSeleccionado = e =>{
//     seleccionarDepartamento(departamento.current.value);
//     //console.log(departamento);
//   }


//   const cargarDepartamentos = () => {

//     fetch("https://dwallet.develotion.com/departamentos.php")
//       .then(response => response.json())
//       .then(result => {

//         setDptos(result.departamentos);
//         console.log(result.departamentos);
//       })
//       .catch(error => console.log('error', error));
//   }

//   return (
//     <div className="form-group col-md-4">
//       <label htmlFor="inputDepartamento">Departamento</label>
//       { <select id="inputDepartamento" ref={departamento} className="form-control" onChange={seleccionarDepartamento}>
//         {dptos.map(dpto => <option key={dpto.id} value={dpto.id}>{dpto.nombre}</option>)}
//       </select> }



//     </div>
//   )
// }

// export default Departamentos