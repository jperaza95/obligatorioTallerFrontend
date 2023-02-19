import { Link, Outlet, useNavigate } from "react-router-dom"
import { useEffect } from "react";


const Dashboard = () => {
  let navigate = useNavigate();
  useEffect(() => {
    console.log(localStorage.getItem("apiKey"));
    if (localStorage.getItem("apiKey") === null) {
      navigate("/login");
    }


  }, [])

  const cerrarSesion = () => {
    localStorage.clear();
  }


  return (
    <div className="container-fluid">
      <div className="row">

        <div className="col-md-2" >

          <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <a className="navbar-brand" href="#">Bienvenido</a>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">

              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  {/* <a className="nav-link" href="/agregargasto">Agregar gasto <span className="sr-only">(current)</span></a> */}
                  <Link to="/agregargasto" className="nav-link">Agregar gasto<span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item">
                  <Link to="/agregaringreso" className="nav-link">Agregar ingreso</Link>
                </li>
                <li className="nav-item">
                  <Link to="/movimientos" className="nav-link">Movimientos</Link>
                </li>
                <li className="nav-item">
                  <Link to="/totales" className="nav-link">Montos totales</Link>
                </li>

                <li className="nav-item">
                  <Link to="/analisis" className="nav-link">Analisis</Link>
                </li>
              </ul>
              <span className="navbar-text">
                <Link to="/login" className="nav-link" onClick={cerrarSesion}>Cerrar Sesion</Link>
              </span>
            </div>
          </nav>
        </div>
        <div className="col-md-8">
          <Outlet />

        </div>
      </div>

    </div>


  )
}

export default Dashboard