import { NavLink } from "react-router-dom";



const Movimiento = ({ movim, cargarMovimientos }) => {
  //const rubros = useSelector(state => state.rubros.rubros);
  //console.log(rubros);




  const obtenerRubro = (idRubro) => {
    //return rubros[0];
    switch (idRubro) {
      case 1:
        return "Alimentación";
      case 2:
        return "Combustible";
      case 3:
        return "Educación";
      case 4:
        return "Paseos";
      case 5:
        return "Alquiler";
      case 6:
        return "Otros";
      case 7:
        return "Aguinaldo";
      case 8:
        return "Sueldo";
      case 9:
        return "Honorarios";
      case 10:
        return "Salario Vacacional";
      case 11:
        return "Rentas";
      case 12:
        return "Otros";


      default:
        break;
    }
  }


  const eliminarMovimiento = () => {

    fetch(`https://dwallet.develotion.com/movimientos.php`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'apiKey': localStorage.getItem("apiKey"),
      },
      body: JSON.stringify({
        "idMovimiento": movim.id
      })
    })
      .then(response => response.json())
      .then(result => {
        console.log(result);
        cargarMovimientos();


      })
      .catch(error => console.log('error', error));

  }



  return (



    <>
      <tr>
        <th scope="row">{movim.id}</th>
        <td>{movim.concepto}</td>
        <td>{obtenerRubro(movim.categoria)}</td>
        <td>{movim.medio}</td>
        <td>{movim.total}</td>
        <td>{movim.fecha}</td>
        <td>

          <NavLink href="#"  data-toggle="modal" data-target="#exampleModalCenter" >Eliminar</NavLink>

        </td>

      </tr>


      <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">Eliminar movimiento</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              ...
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary" onClick={eliminarMovimiento}>Save changes</button>
            </div>
          </div>
        </div>
      </div>
    </>


  )
}

export default Movimiento