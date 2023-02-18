import { useDispatch, useSelector } from "react-redux";
import { guardarMovimientos } from "../features/movimientosSlice";
import { useEffect } from "react";

const Movimientos = () => {

  const idUsuario = localStorage.getItem("idUsuario");
  const dispatch = useDispatch();
  const movimientos = useSelector(store => store.movimientos.movimientos);

  useEffect(() => {
    fetch(`https://dwallet.develotion.com/movimientos.php?idUsuario=${idUsuario}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'apiKey': localStorage.getItem("apiKey"),

      }
    })
      .then(response => response.json())
      .then(result => {
        console.log(result);
        dispatch(guardarMovimientos(result.movimientos));


      })
      .catch(error => console.log('error', error));

  }, [])



  return (

    <div className="container mt-5">
      <div className='form-row justify-content-center'>
        <div className='form-group col-md-10'>
          <div className='form-row'>

            <h1 className='mb-4'>Movimientos</h1>

            <table className="table table-striped">
              <thead>
                <tr>
                  <th scope="col">Id</th>
                  <th scope="col">Concepto</th>
                  <th scope="col">Rubro</th>
                  <th scope="col">Medio</th>
                  <th scope="col">Total</th>
                  <th scope="col">Fecha</th>
                  <th scope="col">Accion</th>

                </tr>
              </thead>
              <tbody>

                {movimientos.map(mov =>
                  <tr>
                    <th scope="row">{mov.id}</th>
                    <td>{mov.concepto}</td>
                    <td>{mov.categoria}</td>
                    <td>{mov.medio}</td>
                    <td>{mov.total}</td>
                    <td>{mov.fecha}</td>
                    <td><a href="#">Eliminar</a></td>

                  </tr>)}

              </tbody>
            </table>




          </div>





        </div>

      </div>

    </div>


  )
}

export default Movimientos

