// import { useSelector } from "react-redux";
// import { Link } from "react-router-dom";

// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend,
// } from 'chart.js';
// import { Bar } from 'react-chartjs-2';
// import { useSelector } from "react-redux";

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend
// );




const Analisis = () => {

  // const ingresos = useSelector(state=>state.movimientos.movimientos);


  return (
    <div>Analisis</div>
    // <div className="row">
    //   <div className="col">
    //     <h2>Análisis</h2>
    //     <p>Texto de prueba</p>
    //     <Link to="/">Ir al inicio</Link>
    //   </div>
    //   <div className="col">
    //     <Bar options={{
    //       responsive: true,
    //       plugins: {
    //         legend: {
    //           position: 'top',
    //         },
    //         title: {
    //           display: true,
    //           text: 'Pronóstico',
    //         },
    //       },
    //     }} data={{
    //       labels: pronostico.map((e, i) => i), //[0, 1, 2, 3, 4, 5, 6, 7]
    //       datasets: [
    //         {
    //           label: 'Temperatura',
    //           data: pronostico.map(t => t.main.temp), //[33, 32, 42]
    //           backgroundColor: 'rgba(255, 99, 132, 0.5)',
    //         }
    //       ],
    //     }} />
    //   </div>
    // </div>
  )
}

export default Analisis