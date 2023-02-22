import { useSelector } from "react-redux"

const MontosTotales = () => {
  const movimientos = useSelector(state => state.movimientos.movimientos);

  const gastosTotales = () =>{
    let total = 0;
    movimientos.filter(mov=>mov.categoria<=6).map(gasto=>total+=gasto.total);
    return total;
  }

  const ingresosTotales = () =>{
    let total = 0;
    movimientos.filter(mov=>mov.categoria>=7).map(ingreso=>total+=ingreso.total);
    return total;
  }



  return (

    <div className="container mt-5">
      <div className='form-row justify-content-center'>
        <div className='form-group col-md-10'>
          <div className='form-row'>

            <h1 className='mb-4 col-12'>Montos Totales</h1>

            <div className="col mb-4">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Gastos: ${gastosTotales()}</li>
                <li className="list-group-item">Ingresos: ${ingresosTotales()}</li>
                <li className="list-group-item">Saldo Final: ${ingresosTotales() - gastosTotales()}</li>
              </ul>
            </div>

          </div>

        </div>

      </div>
    </div>

  )
}

export default MontosTotales