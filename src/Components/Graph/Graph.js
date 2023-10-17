import React from 'react'
import './Graph.css';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    BarElement, CategoryScale, LinearScale, Tooltip, Legend
)

const Graph = () => {
    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [
            {
                label: '474',
                data: [3, 6, 9, 5, 6, 9, 4, 5, 3, 10, 7.8, 10.9],
                backgroundColor: '#5454d4',
                borderRadius: 5,
                borderWidth: 1,
            }
        ]
    }

    const options = {}
    return (
        <>
            <div className='graph-section'>
                <div className='bargrpah-container'>
                    <div className='graph_container'>
                        <div className='top-nav'>
                                <div className='text'>
                                    <p>Overview</p>
                                </div>
                                <div className="custom-select">
                                    <select>
                                        <option value="0">Quarterly</option>
                                        <option value="1">Yearly</option>
                                    </select>
                            </div>
                        </div>
                        <div className='graph'>
                            <Bar
                                style={{ paddingLeft: "20px" }}
                                data={data}
                                options={options}
                            ></Bar>
                        </div>
                    </div>
                </div>
                <div className='piechart-container'></div>
            </div>
        </>
    )
}

export default Graph