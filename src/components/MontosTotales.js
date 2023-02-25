import { useSelector } from "react-redux"
import IrAlInicio from "./IrAlInicio";

const MontosTotales = () => {
  const movimientos = useSelector(state => state.movimientos.movimientos);

  const gastosTotales = () => {
    let total = 0;
    movimientos.filter(mov => mov.categoria <= 6).map(gasto => total += gasto.total);
    return total;
  }

  const ingresosTotales = () => {
    let total = 0;
    movimientos.filter(mov => mov.categoria >= 7).map(ingreso => total += ingreso.total);
    return total;
  }



  return (
    // <>
    //   <div className="container mt-5">
    //     <div className='form-row justify-content-center'>
    //       <div className='form-group col-md-10'>
    //         <div className='form-row'>

    //           <IrAlInicio titulo={"Montos Totales"} descripcion="Resumen de gastos e ingresos"></IrAlInicio>

    //           <div className="col mb-4 mt-4">
    //             <ul className="list-group list-group-flush">
    //               <li className="list-group-item"><h3>Gastos:</h3> <h2 className="lead text-danger">${gastosTotales()}</h2></li>
    //               <li className="list-group-item"><h3>Ingresos:</h3> <h2 className="lead text-success">${ingresosTotales()}</h2></li>
    //               {(ingresosTotales() - gastosTotales()) < 0 ? <li className="list-group-item text-danger">Saldo Final: ${ingresosTotales() - gastosTotales()}</li> :
    //                 <li className="list-group-item text-success">Saldo Final: ${ingresosTotales() - gastosTotales()}</li>
    //               }
    //             </ul>
    //           </div>

    //         </div>

    //       </div>

    //     </div>
    //   </div>

    <div className="container mt-5">

      <IrAlInicio titulo={"Montos Totales"} descripcion="Resumen de gastos e ingresos"></IrAlInicio>
      <div className="card border-danger mb-3">

        <div className="card-header">Gastos:</div>
        <div className="card-body text-danger">
          <h5 className="card-title">Total de gastos</h5>
          <p className="card-text"  >${gastosTotales()}</p>
        </div>
      </div>
      <div className="card border-primary mb-3">
        <div className="card-header">Ingresos:</div>
        <div className="card-body text-primary">
          <h5 className="card-title">Total de ingresos</h5>
          <p className="card-text">${ingresosTotales()}</p>
        </div>
      </div>
      {ingresosTotales() - gastosTotales() < 0 ?
        <div className="card border-danger mb-3" >
          <div className="card-header">Saldo final</div>
          <div className="card-body text-danger">
            <h5 className="card-title">Resultado</h5>
            <p className="card-text " >${ingresosTotales() - gastosTotales()}</p>
          </div>
        </div> :
        <div className="card border-success mb-3" >
          <div className="card-header">Saldo final</div>
          <div className="card-body text-success">
            <h5 className="card-title">Resultado</h5>
            <p className="card-text">${ingresosTotales() - gastosTotales()}</p>
          </div>
        </div>}

    </div>

  )
}

export default MontosTotales;