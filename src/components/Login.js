import { useRef, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {

    let navigate = useNavigate();

    const [error, setError] = useState(false);

    const usuario = useRef(null);
    const pass = useRef(null);

    const realizarLogin = () => {


        let objUsuario = {
            "usuario": usuario.current.value,
            "password": pass.current.value,
        }

        let requestOptions = {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(objUsuario),
            redirect: 'follow'
        };

        fetch("https://dwallet.develotion.com/login.php", requestOptions)
            .then(response => response.json())
            .then(result => {
                console.log(result)
                if (result.codigo === 200) {
                    localStorage.setItem("apiKey", result.apiKey);
                    navigate("/");
                } else {
                    setError(true);
                }
            })
            .catch(error => {
                setError(true);
                console.log('error', error)
            });

    }


    return (
        <div className="container mt-5">

            <div className="form-row">
                <div className="form-group col-md-8 " >
                    <label htmlFor="inputEmail4">Usuario</label>
                    <input type="text" className="form-control" id="inputUsuario" placeholder="Usuario" ref={usuario} />
                </div>
            </div>

            <div className="form-row">
                <div className="form-group col-md-8">
                    <label htmlFor="inputPassword4">Password</label>
                    <input type="password" className="form-control" id="inputPassword" placeholder="Password" ref={pass} />
                </div>


            </div>
            <div>
                <button type="button" className="btn btn-primary" onClick={realizarLogin}>Login</button>

                {error && <div className="alert alert-danger col-md-8" role="alert" data-aria-autofocus="true">
                    Error en usuario y/o contraseña
                </div>}
                <br />
            </div>




            <Link to="/registro">Ir a Registro</Link>

        </div>


    )
}

export default Login