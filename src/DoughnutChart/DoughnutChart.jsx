import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = ({ goal, progress, deficit }) => {

    const isEmpty = progress <= 0 && deficit <= 0;

    const data = {
        labels: isEmpty ? [] : deficit > 0 ? ['Burned', 'Deficit'] : ['Burned'],
        datasets: [
            {
                label: isEmpty ? '' : '# burned calories',
                data: isEmpty ? [0] : deficit > 0 ? [progress, deficit] : [progress],
                backgroundColor: isEmpty ? [] : [
                    'rgba(54, 162, 235)', 
                    'rgba(255, 99, 132)', 
                ],
                borderColor: isEmpty ? [] : [
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 99, 132, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };

    const options = {
        responsive: false,
        plugins: {
            legend: {
                display: !isEmpty, 
                position: 'bottom',
            },
            tooltip: {
                enabled: !isEmpty, 
            },
        },
    };

    return <Doughnut data={data} options={options} width={200} height={200} />;
};

export default DoughnutChart;
