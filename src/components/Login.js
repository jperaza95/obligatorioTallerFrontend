import { useRef, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { seleccionarUsuario } from '../features/usuarioSlice';

const Login = () => {

    let navigate = useNavigate();

    let dispatch = useDispatch();

    const [error, setError] = useState(false);

    //const usuario = useRef(null);
    //const pass = useRef(null);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const botonLogin = useRef(null);

    const isDisabled = !username || !password;

    const realizarLogin = () => {


        let objUsuario = {
            "usuario": username,
            "password": password,
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
                    localStorage.setItem("idUsuario", result.id);

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

            <div className='form-row justify-content-center'>

                <h1 className="form-group col-md-8 ">Login</h1>

                <div className="form-group col-md-8 " >
                    <label htmlFor="inputEmail4">Usuario</label>
                    <input type="text" className="form-control" id="inputUsuario" placeholder="Usuario" value={username} onChange={handleUsernameChange} />
                </div>



                <div className="form-group col-md-8">
                    <label htmlFor="inputPassword4">Password</label>
                    <input type="password" className="form-control" id="inputPassword" placeholder="Password" value={password} onChange={handlePasswordChange}/>

                    {error && <div className="alert alert-danger col-md mt-3" role="alert" data-aria-autofocus="true">
                        Error en usuario y/o contraseña
                    </div>}
                        {<button type="button" className="btn btn-primary mt-4" onClick={realizarLogin} ref={botonLogin} disabled={isDisabled}>Login</button>}


                    <br />
                    <hr></hr>
                    <Link to="/registro">Ir a Registro</Link>

                </div>

            </div>

        </div>


    )
}

export default Login