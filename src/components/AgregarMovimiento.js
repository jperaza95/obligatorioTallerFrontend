import { useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Rubros from './Rubros';
import { agregarMovimiento } from '../features/movimientosSlice';
import { seleccionarRubro } from '../features/rubrosSlice';

const AgregarMovimiento = ({ tipo }) => {

  //Errores:
  const [errorUsuario, setErrorUsuario] = useState(false);
  const [errorConcepto, setErrorConcepto] = useState(false);
  const [errorRubro, setErrorRubro] = useState(false);
  const [errorMedio, setErrorMedio] = useState(false);
  const [errorTotal, setErrorTotal] = useState(false);
  const [errorFecha, setErrorFecha] = useState(false);



  const concepto = useRef(null);
  const rubro = useSelector(state => state.rubros.rubro);
  const medio = useRef(null);
  const total = useRef(null);
  const fecha = useRef(null);


  const dispatch = useDispatch();


  const idUsuario = localStorage.getItem("idUsuario");

  const existeError = () => {

    if (idUsuario === null) {
      setErrorUsuario(true);
      return true;
    }

    else {
      setErrorUsuario(false);
      if (concepto.current.value === "") {
        setErrorConcepto(true);
        return true;
      } else {
        setErrorConcepto(false);
        if (rubro === -1 || rubro === null) {
          setErrorRubro(true);
          return true;

        } else {
          setErrorRubro(false);
          if (medio.current.value === "-1") {
            setErrorMedio(true);
            return true;

          } else {
            setErrorMedio(false);

            if (total.current.value === "") {
              setErrorTotal(true);
              return true;

            } else {
              setErrorTotal(false);

              if (fecha.current.value === "") {
                setErrorFecha(true);
                return true;

              } else {
                setErrorFecha(false);

                return false;
              }
            }
          }
        }
      }
    }


  }



  const nuevoMovimiento = () => {

    if (!existeError()) {

      let objMovimiento = {
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
        body: JSON.stringify(objMovimiento),
        redirect: 'follow'
      };

      fetch("https://dwallet.develotion.com/movimientos.php", requestOptions)
        .then(response => response.json())
        .then(result => {
          console.log(objMovimiento);
          console.log(result);
          dispatch(agregarMovimiento(result));
          //limpia el rubro seleccionado
          dispatch(seleccionarRubro(-1));


        })
        .catch(error => console.log('error', error));
    }
  }







  const hayError = () => errorUsuario || errorConcepto || errorRubro || errorMedio || errorTotal || errorFecha;

  const mostrarError = () => {
    if (errorConcepto) {
      return "Ingrese Concepto"
    }
    else if (errorUsuario) {
      return "Ingrese Usuario";
    } else if (errorRubro) {
      return "Ingrese Rubro";
    } else if (errorTotal) {
      return "Ingrese Total";
    } else if (errorFecha) {
      return "Ingrese Fecha";

    } else if (errorMedio) {
      return "Ingrese Medio";

    } else {

      return "";
    }


  }


  return (
    <div className="container mt-5">
      <div className='form-row justify-content-center'>
        <div className='form-group col-md-8'>
          <div className='form-row'>

            {tipo === "gasto" ? <h1 className="form-group col-md-8 ">Agregar gasto</h1> :

              <h1 className="form-group col-md-8 ">Agregar ingreso</h1>}


            <div className="form-group col-md-8 " >
              <label htmlFor="inputConcepto">Concepto</label>
              <input ref={concepto} type="text" className="form-control" id="inputConcepto" placeholder="Concepto" />
            </div>


            <Rubros tipoRubro={tipo} />

            <div className="form-group col-md-8">
              <label htmlFor="inputMedio">Medio de pago</label>
              {tipo === "gasto" ? <select id="inputMedio" className="form-control" ref={medio}>
                <option value={"-1"}>Medio de pago...</option>
                <option value={"Efectivo"}>Efectivo</option>
                <option value={"Debito"}>Debito</option>
                <option value={"Credito"}>Credito</option>
              </select> :

                <select id="inputMedio" className="form-control" ref={medio}>
                  <option value={"-1"}>Medio de pago...</option>
                  <option value={"Efectivo"}>Efectivo</option>
                  <option value={"Banco"}>Banco</option>

                </select>}
            </div>

            <div className="form-group col-md-8 " >
              <label htmlFor="inputTotal">Total</label>
              <input type="text" className="form-control" id="inputTotal" placeholder="Total" ref={total} />
            </div>


            <div className="form-group col-md-8 " >
              <input type="date" id="fecha" name="fecha" ref={fecha}></input>


              {(hayError()) && <div className="alert alert-danger col-md-8" role="alert" data-aria-autofocus="true">
                {mostrarError()}
              </div>}

            </div>

            <div className="form-group col-md-8 " >

              <input type="button" className="btn btn-primary mt-4" value="Agregar" onClick={nuevoMovimiento} />

            </div>





          </div>

        </div>

      </div>

    </div>





  )
}



export default AgregarMovimiento