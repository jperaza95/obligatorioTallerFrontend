import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { seleccionarRubro } from '../features/rubrosSlice';


import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);




const Analisis = () => {

  const movimientos = useSelector(store => store.movimientos.movimientos);
  const listarGastos = () => movimientos.filter(mov => mov.categoria > 0 && mov.categoria <= 6);
  const listarIngresos = () => movimientos.filter(mov => mov.categoria >= 7 && mov.categoria <= 12);

  const dispatch = useDispatch();

  const rubros = useSelector(state => state.rubros.rubros);

  const rubroElegido = useRef(null);

  const seleccionarRubroHandler = () => {
    dispatch(seleccionarRubro(rubroElegido.current.value))
    console.log(rubroElegido.current.value);
    console.log(gastos);
    setMensajeAnalisis(compararGastosPorRubro(rubroElegido.current.value));
  }

  const [gastos, setGastos] = useState([]);
  const [ingresos, setIngresos] = useState([]);
  const [totalGM2023, setTotalGM2023] = useState([]);
  const [totalGM2022, setTotalGM2022] = useState([]);

  const [mensajeAnalisis, setMensajeAnalisis] = useState([]);



  const obtenerRubro = (idRubro) => {

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
  };

  const totalGastosPorMes = (gastos) => {
    console.log(gastos);

    let montoTotalPorMes2023 = [
      {
        Mes: "Enero",
        Total: 0
      },
      {
        Mes: "Febrero",
        Total: 0
      },
      {
        Mes: "Marzo",
        Total: 0
      },
      {
        Mes: "Abril",
        Total: 0
      },
      {
        Mes: "Mayo",
        Total: 0
      },
      {
        Mes: "Junio",
        Total: 0
      },
      {
        Mes: "Julio",
        Total: 0
      },
      {
        Mes: "Agosto",
        Total: 0
      },
      {
        Mes: "Setiembre",
        Total: 0
      },
      {
        Mes: "Octubre",
        Total: 0
      },
      {
        Mes: "Noviembre",
        Total: 0
      },
      {
        Mes: "Diciembre",
        Total: 0
      },
    ]
    let montoTotalPorMes2022 = [
      {
        Mes: "Enero",
        Total: 0
      },
      {
        Mes: "Febrero",
        Total: 0
      },
      {
        Mes: "Marzo",
        Total: 0
      },
      {
        Mes: "Abril",
        Total: 0
      },
      {
        Mes: "Mayo",
        Total: 0
      },
      {
        Mes: "Junio",
        Total: 0
      },
      {
        Mes: "Julio",
        Total: 0
      },
      {
        Mes: "Agosto",
        Total: 0
      },
      {
        Mes: "Setiembre",
        Total: 0
      },
      {
        Mes: "Octubre",
        Total: 0
      },
      {
        Mes: "Noviembre",
        Total: 0
      },
      {
        Mes: "Diciembre",
        Total: 0
      },
    ]
    for (const gasto of gastos) {
      console.log(gasto.fecha);
      let fechaDelGasto = new Date(gasto.fecha);
      console.log(fechaDelGasto);
      let mesDelGasto = parseInt(fechaDelGasto.getMonth());
      let yearGasto = parseInt(fechaDelGasto.getFullYear());
      console.log(mesDelGasto);
      console.log(yearGasto);
      if (yearGasto === 2023) {
        if (mesDelGasto === 0) {
          montoTotalPorMes2023[0].Total += gasto.total;
        } else if (mesDelGasto === 1) {
          montoTotalPorMes2023[1].Total += gasto.total;
        } else if (mesDelGasto === 2) {
          montoTotalPorMes2023[2].Total += gasto.total;
        } else if (mesDelGasto === 3) {
          montoTotalPorMes2023[3].Total += gasto.total;
        } else if (mesDelGasto === 4) {
          montoTotalPorMes2023[4].Total += gasto.total;
        } else if (mesDelGasto === 5) {
          montoTotalPorMes2023[5].Total += gasto.total;
        } else if (mesDelGasto === 6) {
          montoTotalPorMes2023[6].Total += gasto.total;
        } else if (mesDelGasto === 7) {
          montoTotalPorMes2023[7].Total += gasto.total;
        } else if (mesDelGasto === 8) {
          montoTotalPorMes2023[8].Total += gasto.total;
        } else if (mesDelGasto === 9) {
          montoTotalPorMes2023[9].Total += gasto.total;
        } else if (mesDelGasto === 10) {
          montoTotalPorMes2023[10].Total += gasto.total;
        } else if (mesDelGasto === 11) {
          montoTotalPorMes2023[11].Total += gasto.total;
        }
      } else if (yearGasto === 2022) {
        if (mesDelGasto === 0) {
          montoTotalPorMes2022[0].Total += gasto.total;
        } else if (mesDelGasto === 1) {
          montoTotalPorMes2022[1].Total += gasto.total;
        } else if (mesDelGasto === 2) {
          montoTotalPorMes2022[2].Total += gasto.total;
        } else if (mesDelGasto === 3) {
          montoTotalPorMes2022[3].Total += gasto.total;
        } else if (mesDelGasto === 4) {
          montoTotalPorMes2022[4].Total += gasto.total;
        } else if (mesDelGasto === 5) {
          montoTotalPorMes2022[5].Total += gasto.total;
        } else if (mesDelGasto === 6) {
          montoTotalPorMes2022[6].Total += gasto.total;
        } else if (mesDelGasto === 7) {
          montoTotalPorMes2022[7].Total += gasto.total;
        } else if (mesDelGasto === 8) {
          montoTotalPorMes2022[8].Total += gasto.total;
        } else if (mesDelGasto === 9) {
          montoTotalPorMes2022[9].Total += gasto.total;
        } else if (mesDelGasto === 10) {
          montoTotalPorMes2022[10].Total += gasto.total;
        } else if (mesDelGasto === 11) {
          montoTotalPorMes2022[11].Total += gasto.total;
        }
      }



    }
    let montosTotalesPorMes = [montoTotalPorMes2023, montoTotalPorMes2022];
    console.log(montosTotalesPorMes);
    return montosTotalesPorMes;
  };

  const compararGastosPorRubro = (rubro) => {

    const rubroInt = parseInt(rubro);
    let mensaje = "";
    if (rubroInt > 0) {
      let gastosDelRubro = [];
      let palabra = "";

      for (const gasto of gastos) {
        if (rubroInt === gasto.categoria) {
          gastosDelRubro.push(gasto);

        }
      }
      if (gastosDelRubro.length > 1) {
        let gastosDelRubroSorted = gastosDelRubro.sort((a, b) => new Date(a.fecha).getTime() - new Date(b.fecha).getTime());
        console.log(gastosDelRubroSorted);
        console.log(gastosDelRubroSorted[gastosDelRubroSorted.length - 1].total);
        console.log(gastosDelRubroSorted[gastosDelRubroSorted.length - 2].total);
        let diferenciaMonto = gastosDelRubroSorted[gastosDelRubroSorted.length - 1].total - gastosDelRubroSorted[gastosDelRubroSorted.length - 2].total;
        if (diferenciaMonto < 0) {
          palabra = "menos";
        } else {
          palabra = "más";
        }

        mensaje += `Para el rubro ${obtenerRubro(rubroInt)}, en la última compra has gastado $ ${Math.abs(diferenciaMonto)} pesos ${palabra} que en la penúltima.`;
        console.log(mensaje);
      } else {
        mensaje += "No hay 2 gastos para ese rubro";
      }


    }
    return mensaje;

  };
  useEffect(() => {

    setGastos(listarGastos());
    setIngresos(listarIngresos());


  }, []);

  useEffect(() => {
    let montosTotalesPorMes = totalGastosPorMes(gastos);
    console.log(montosTotalesPorMes);
    console.log(montosTotalesPorMes[0]);
    console.log(montosTotalesPorMes[1]);
    setTotalGM2023(montosTotalesPorMes[0]);
    setTotalGM2022(montosTotalesPorMes[1]);


  }, [gastos]);


  const options3 = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Gráfico de evolución de gasto',
      },

    },
  };
  const data3 = {

    labels: totalGM2023.map(t => t.Mes),
    datasets: [
      {
        label: 'Monto en pesos 2023',
        data: totalGM2023.map(t => t.Total),
        backgroundColor: 'rgba(255, 26, 104, 0.2)',
        borderColor: 'rgba(255, 26, 104,1)'

      },
      {
        label: 'Monto en pesos 2022',
        data: totalGM2022.map(t => t.Total),
        backgroundColor: 'rgba(44, 230, 104, 0.2)',
        borderColor: 'rgba(44, 230, 104,1)'

      }
    ],
  };



  return (
    <div className="container mt-5">
      <div className='form-row justify-content-center'>
        <div className='form-group col-md-10'>
          <div className='form-row'>


            <div className="col-12">
              <h2>Análisis</h2>
              <p>Gráficas relativas a los movimientos</p>
              <Link to="/">Ir al inicio</Link>

            </div>



            <div className="col">
              <Bar options={{
                responsive: true,
                plugins: {
                  legend: {
                    position: 'top',
                  },
                  title: {
                    display: true,
                    text: 'Gráfico de ingresos por rubro',
                  },
                  scales: {
                    x: {
                      stacked: true,
                    },
                    y: {
                      stacked: true,
                    },
                  }
                },
              }} data={{
                labels: ingresos.map(i => obtenerRubro(i.categoria)),
                datasets: [
                  {
                    label: 'Monto en pesos',
                    data: ingresos.map(i => i.total),
                    backgroundColor: 'rgba(54, 162, 235, 0.2)',
                  }
                ],
              }} />
            </div>



            <div className="col">
              <Bar options={{
                responsive: true,
                plugins: {
                  legend: {
                    position: 'top',
                  },
                  title: {
                    display: true,
                    text: 'Gráfico de gastos por rubro',
                  },
                  scales: {
                    x: {
                      stacked: true,
                    },
                    y: {
                      stacked: true,
                    },
                  }
                },
              }} data={{
                labels: gastos.map(g => obtenerRubro(g.categoria)),
                datasets: [
                  {
                    label: 'Monto en pesos',
                    data: gastos.map(g => g.total),
                    backgroundColor: 'rgba(88, 111, 192, 0.2)',
                  }
                ],
              }} />
            </div>
          </div>


          
          <div className="row">
            <div className="col">
              {<Line options={options3} data={data3} />}
            </div>
          </div>
          <div className="form-group col-md-8 ">
            <label htmlFor="inputRubro">Rubro</label>
            <select id="inputRubro" className="form-control" onChange={seleccionarRubroHandler} ref={rubroElegido}>
              <option key={-1} value={-1}>Seleccione un rubro...</option>
              {rubros.map(rubro => <option key={rubro.id} value={rubro.id}>{rubro.nombre}</option>)}
            </select>

            <div className="form-group col-md-8 " >

              <h5>{mensajeAnalisis}</h5>

            </div>
          </div>
        </div>
      </div>
    </div>

  )

}

export default Analisis