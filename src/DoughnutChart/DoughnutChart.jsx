import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);


const centerTextPlugin = {
    id: 'centerText',
    afterDraw(chart) {
        const { width, height, ctx } = chart;
        ctx.save();

        const text = chart.config.options.centerText; 
        ctx.font = 'bold 40px "Segoe UI", Tahoma, Geneva, Verdana, sans-serif'; 
        ctx.fillStyle = 'rgba(148, 12, 82, 1)'; 
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';

        const centerX = width / 2;
        const centerY = height / 2;

        ctx.fillText(text, centerX, centerY);
        ctx.restore();
    }
};

ChartJS.register(centerTextPlugin);




const DoughnutChart = ({ progress, deficit, precentage }) => {

    const isEmpty = progress <= 0 && deficit <= 0;

    const data = isEmpty ? {
        labels: [],
        datasets: [
            {
                label: '',
                data: [1], 
                backgroundColor: ['rgba(211, 211, 211, 0.2)'], 
                borderColor: ['rgba(211, 211, 211, 1)'],
                borderWidth: 1,
            },
        ],
    } : {
        labels: deficit > 0 ? ['Burned', 'Deficit'] : ['Burned'],
        datasets: [
            {
                label: '# burned calories',
                data: deficit > 0 ? [progress, deficit] : [progress],
                backgroundColor: [
                    'rgba(54, 162, 235, 1)', 
                    'rgba(255, 99, 132, 1)', 
                ],
                borderColor: [
                    'rgba(0,0,0)',
                    'rgba(0,0,0)',
                ],
                borderWidth: 1,
            },
        ],
    };

    const options = {
        responsive: false,
        centerText: isEmpty ? '0%' : `${precentage}%`,
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

    return <Doughnut data={data} options={options} width={400} height={400} />;
};

export default DoughnutChart;
