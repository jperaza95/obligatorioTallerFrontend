import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { guardarRubros } from '../features/rubrosSlice';

const Rubros = () => {

    const dispatch = useDispatch();

    const rubros = useSelector(state => state.rubros.rubros);



    useEffect(() => {
        fetch("https://dwallet.develotion.com/rubros.php", {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'apiKey': localStorage.getItem("apiKey"),

        }})
            .then(response => response.json())
            .then(result => {
                console.log(result.rubros);
                dispatch(guardarRubros(result.rubros));

            })
            .catch(error => console.log('error', error));

    }, [])




    return (

        <div className="form-group col-md-8 ">
            <label htmlFor="inputRubro">Rubro</label>
            <select id="inputRubro" className="form-control">
                <option key={-1} value={-1}>Seleccione un rubro...</option>
                {rubros.map(rubro => rubro.tipo==="gasto" && <option key={rubro.id} value={rubro.id}>{rubro.nombre}</option>)}
            </select>

        </div>
    )
}

export default Rubros