//Area of little to no impact left chart -------------------------//
alert(123333);


const areaOfLittleToNoImpactCtx = document.querySelector('[data-element="area_of_little_to_no_impact"]');
// if (!areaOfLittleToNoImpactCtx) {
//     return;
// }

const labelsAreaOfLittleToNoImpact = ['0€', '<€400', '€400-600', '€601-800', '€801-1000', '€1001-1200'];
const dataAreaOfLittleToNoImpact = {
    labels: labelsAreaOfLittleToNoImpact,
    datasets: [
        {
            label: '  Record count   ',
            data: ['46', '57', '80', '62', '55', '44'],
            borderColor: '#80C7BD',
            backgroundColor: Chart.helpers.color('#80C7BD').alpha(0.8).rgbString(),
            order: 2
        },
        {
            label: '  MHI-5    ',
            data: ['55', '58', '57', '57.1', '54', '55'],
            borderColor: '#FF5200',
            backgroundColor: Chart.helpers.color('#FF5200').alpha(1).rgbString(),
            type: 'line',
            order: 1
        }
    ]
};

const configAreaOfLittleToNoImpact = {
    type: 'bar',
    data: dataAreaOfLittleToNoImpact,
    options: {
        barPercentage: 0.5,
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom',
                labels: {
                    usePointStyle: true,
                    boxWidth: 6
                }
            },
            title: {
                display: true,
                text: 'Rent and MHI-5 score'
            }
        },
        scales: {
            y: {
                type: 'linear',
                display: true,
                position: 'left',
                min: 40,
                max: 80,
                title: {
                    display: true,
                    text: 'MHI-5'
                }
            },
            y1: {
                type: 'linear',
                display: true,
                position: 'right',
                min: 0,
                max: 1200,
                title: {
                    display: true,
                    text: 'Record count'
                },
                ticks: { stepSize: 300 },
                grid: {
                    drawOnChartArea: false // only want the grid lines for one axis to show up
                }
            }
        }
    }
};

const chartAreaOfLittleToNoImpact = new Chart(areaOfLittleToNoImpactCtx, configAreaOfLittleToNoImpact);
