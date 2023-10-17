import React from 'react';
import './Piegraph.css';
import {Chart as ChartJS, ArcElement, Tooltip, Legend} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(
    ArcElement, Tooltip, Legend
);
const Piegraph = () => {
    const data = {
        datasets:[
            {
                data: [3,6],
                backgroundColor: ["blue", "red"],
                borderColor: ['blue', 'red']
            }
        ]
    }

    const options = {};
  return (
    <>
        <div className='pie-text'>
            <h3>Customers</h3>
            <p>Customers that buy products</p>
        </div>
    <div className='pie-graph' >
        <Doughnut data={data} options={options} style={{height:"50px", width:"50px"}}></Doughnut>
    </div>
    </>
  )
}

export default Piegraph