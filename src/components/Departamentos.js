import { useDispatch, useSelector } from 'react-redux'
import { seleccionarDpto } from '../features/ciudadesSlice';
import { useRef } from 'react';
import { useEffect } from 'react';
import { guardarDepartamentos } from '../features/departamentosSlice';
import { useNavigate } from 'react-router-dom';

const Departamentos = () => {

    //Busca los departamentos en el store.
    const departamentos = useSelector(state => state.departamentos.departamentos);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const dpto = useRef(null);

    //Obtiene las ciudades del departamento seleccionado
    const obtenerCiudades = () => {
        dispatch(seleccionarDpto(dpto.current.value));
    }


    //Guarda los departamentos en el store
    useEffect(() => {
        fetch("https://dwallet.develotion.com/departamentos.php")
            .then(response => response.json())
            .then(result => {

                if(result.codigo === 401){
                    alert("Sesion caduco");
                    localStorage.clear();
                    navigate("/login");          
                  }else{
                      dispatch(guardarDepartamentos(result.departamentos));             
                  }


            })
            .catch(error => console.log('error', error));

    }, [])
    return (
        <div className="form-group col-md-6">
            <label htmlFor="inputDepartamento">Departamento</label>
            <select id="inputDepartamento" className="form-control" onChange={obtenerCiudades} ref={dpto}>
                <option key={-1} value={-1}>Seleccione un departamento...</option>
                {departamentos.map(dpto => <option key={dpto.id} value={dpto.id}>{dpto.nombre}</option>)}
            </select>

        </div>
    )
}

export default Departamentos