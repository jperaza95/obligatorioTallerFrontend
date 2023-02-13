import { useEffect } from "react";
import {useRef} from "react";
import {useState} from "react";
import Ciudades from "./Ciudades";
import Departamentos from "./Departamentos";

const Registro = () => {

    const usuario = useRef(null);
    const password = useRef(null);
    const departamento = useRef(null);
    const ciudad = useRef(null);


    const [dptos, setDptos] = useState([]);

    useEffect(() => {
        cargarDepartamentos();
    }, [])


    const cargarDepartamentos = () => {

        fetch("https://dwallet.develotion.com/departamentos.php")
            .then(response => response.json())
            .then(result => {

                setDptos(result.departamentos);
                console.log(result.departamentos);
            })
            .catch(error => console.log('error', error));
    }

    const departamentoSeleccionado = e => {
        seleccionarDepartamento(departamento.current.value);
        //console.log(departamento);
    }



    const registrarUsuario = () => {
        let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        let objUsuario = {
            "usuario": usuario.current.value,
            "password": password.current.value,
            "idDepartamento": seleccionarDepartamento(),
            "idCiudad": ciudad.current.value
        }

        console.log("USUARIO " + usuario.current.value);
        console.log("PASSWORD " + password.current.value);



        let raw = JSON.stringify(objUsuario);

        let requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("https://dwallet.develotion.com/usuarios.php", requestOptions)
            .then(response => response.json())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
    }
    
    
    const seleccionarDepartamento = idDepartamento => idDepartamento;

    return (

        <div className="container ">

            <div className="form-row">
                <div className="form-group col-md-8 " >
                    <label htmlFor="inputUsuarioRegistro">Usuario</label>
                    <input type="text" ref={usuario} className="form-control" id="inputUsuarioRegistro" placeholder="Usuario" />
                </div>
            </div>

            <div className="form-row">
                <div className="form-group col-md-8">
                    <label htmlFor="inputPasswordRegistro">Password</label>
                    <input type="password" ref={password} className="form-control" id="inputPasswordRegistro" placeholder="Password" />
                </div>
            </div>

            <Departamentos departamentos={dptos}/>

            <Ciudades idDepartamento={seleccionarDepartamento()} />


            <button type="button" className="btn btn-primary" onClick={registrarUsuario}>Registrarse</button>

        </div>
    )
}

export default Registro