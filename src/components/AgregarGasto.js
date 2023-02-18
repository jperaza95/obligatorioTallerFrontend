import { useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Rubros from './Rubros';
import { agregarMovimiento } from '../features/movimientosSlice';

const AgregarGasto = () => {
  const [error, setError] = useState(false);
  const concepto = useRef(null);
  const rubro = useSelector(state=> state.rubros.rubro);
  const medio = useRef(null);
  const total = useRef(null);
  const fecha = useRef(null);

  const dispatch = useDispatch();


  // const idUsuario = useSelector(state => state.usuario.usuario);
  const idUsuario = localStorage.getItem("idUsuario");
  
  const nuevoGasto = () =>{

    
    let objGasto = {
      "idUsuario": idUsuario,
      "concepto": concepto.current.value,
      "categoria": rubro,
      "total": total.current.value,
      "medio": medio.current.value,
      "fecha": fecha.current.value
    }

    let requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'apiKey': localStorage.getItem("apiKey"),

      },
      body: JSON.stringify(objGasto),
      redirect: 'follow'
    };

    fetch("https://dwallet.develotion.com/movimientos.php", requestOptions)
      .then(response => response.json())
      .then(result => {
        console.log(objGasto);
        console.log(result);
        dispatch(agregarMovimiento(result));

      })
      .catch(error => console.log('error', error));


  }

  return (
    <div className="container mt-5">
      <div className='form-row justify-content-center'>
        <div className='form-group col-md-8'>
          <div className='form-row'>

          <h1 className="form-group col-md-8 ">Agregar gasto</h1>
          

            <div className="form-group col-md-8 " >
              <label htmlFor="inputConcepto">Concepto</label>
              <input ref={concepto} type="text" className="form-control" id="inputConcepto" placeholder="Concepto" />
            </div>


            <Rubros />

            <div className="form-group col-md-8">
              <label htmlFor="inputMedio">Medio de pago</label>

              <select id="inputMedio" className="form-control" ref={medio}>
                <option value={"-1"}>Medio de pago...</option>
                <option value={"Efectivo"}>Efectivo</option>
                <option value={"Debito"}>Debito</option>
                <option value={"Credito"}>Credito</option>
              </select>
            </div>

            <div className="form-group col-md-8 " >
              <label htmlFor="inputTotal">Total</label>
              <input type="text" className="form-control" id="inputTotal" placeholder="Total" ref={total} />
            </div>


            <div className="form-group col-md-8 " >
              <input type="date" id="fecha" name="fecha" ref={fecha}></input>


              {error && <div className="alert alert-danger col-md-8" role="alert" data-aria-autofocus="true">
                Error al agregar los datos. Verifique

              </div>}

            </div>

            <div className="form-group col-md-8 " >

            <input type="button" className="btn btn-primary mt-4" value="Agregar" onClick={nuevoGasto}/>

            </div>





          </div>

        </div>

      </div>

    </div>





  )
}

export default AgregarGasto