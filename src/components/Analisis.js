import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);




const Analisis = () => {

  const [pronostico, setPronostico] = useState([])

  useEffect(() => {
    
    fetch("https://api.openweathermap.org/data/2.5/forecast?lat=-34&lon=-56&appid=e62b2530fdb5f4ba3559c07c8634e5c7&units=metric")
      .then(r => r.json())
      .then(datos => {
        setPronostico(datos.list);

      });



  }, []);


  return (
    <div className="row">
      <div className="col">
        <h2>Pronóstico</h2>
        <p>Texto de prueba</p>
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
              text: 'Pronóstico',
            },
          },
        }} data={{
          labels: pronostico.map((e, i) => i), //[0, 1, 2, 3, 4, 5, 6, 7]
          datasets: [
            {
              label: 'Temperatura',
              data: pronostico.map(t => t.main.temp), //[33, 32, 42]
              backgroundColor: 'rgba(255, 99, 132, 0.5)',
            }
          ],
        }} />
      </div>
    </div>
  )
}

export default Analisis