import { useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import Rubros from './Rubros';

const AgregarGasto = () => {
  const [error, setError] = useState(false);
  const concepto = useRef(null);
  const rubro = useSelector(state=> state.rubros.rubro);
  const medio = useRef(null);
  const total = useRef(null);
  const fecha = useRef(null);
  
  const nuevoGasto = () =>{

    
    let objGasto = {
      "idUsuario": 1,
      "concepto": concepto.current.value,
      "categoria": 4,
      "total": 10,
      "medio": "Efectivo",
      "fecha": "2022-09-29"
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
      <div className='form-row justify-content-center'>
        <div className='form-group col-md-8'>
          <div className='form-row'>

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