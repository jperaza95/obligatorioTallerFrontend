import { useRef, useState } from 'react';


const AgregarGasto = () => {
  const [error, setError] = useState(false);

  return (
    <div className="container mt-5">

      <div className="form-row">
        <div className="form-group col-md-8 " >
          <label htmlFor="inputConcepto">Concepto</label>
          <input type="text" className="form-control" id="inputConcepto" placeholder="Concepto" />
        </div>
      </div>


      <div className="form-row">

        <div className="form-group col-md-4">
          <label htmlFor="inputRubro">Rubro</label>
          <select id="inputRubro" className="form-control">
            <option key={-1} value={-1}>Seleccione un rubro...</option>
            {/* {rubros.map(rubro => <option key={rubro.id} value={rubro.id}>{rubro.nombre}</option>)} */}
          </select>

        </div>
        <div className="form-group col-md-4">
          <label htmlFor="inputMedio">Medio de pago</label>

          <select id="inputMedio" className="form-control">
            <option key={-1} value={-1}>Medio de pago...</option>
            <option value={0}>Efectivo</option>
            <option value={0}>Debito</option>
            <option value={0}>Credito</option>
          </select>
        </div>


      </div>

      <div className="form-row">
        <div className="form-group col-md-8 " >
          <label htmlFor="inputTotal">Total</label>
          <input type="text" className="form-control" id="inputTotal" placeholder="Total" />
        </div>
      </div>

      <div className="form-row">
          <input type="date" id="birthday" name="birthday"></input>
      </div>




      <div>
        <input type="button" className="btn btn-primary" value="Agregar" /><br />
      </div>



      {error && <div className="alert alert-danger col-md-8" role="alert" data-aria-autofocus="true">
        Error al agregar los datos. Verifique
      </div>}



    </div>

  )
}

export default AgregarGasto