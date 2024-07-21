//Area of little to no impact left chart -------------------------//
alert(123333);


const area_of_little_to_no_impact_ctx = document.querySelector('[data-element="area_of_little_to_no_impact"]');
if (!area_of_little_to_no_impact_ctx){
    return;
}

const labels_area_of_little_to_no_impact = ['0€', '<€400', '€400-600', '€601-800', '€801-1000', '€1001-1200']
const data_area_of_little_to_no_impact = {
  labels: labels_area_of_little_to_no_impact,
  datasets: [
    {
      label: '  Record count   ',
      data: ['46', '57', '80', '62', '55', '44'],
      borderColor: '#80C7BD',
      backgroundColor: transparentize('#80C7BD', 0.8),

      
      order: 2
    },
    {
      label: '  MHI-5    ',
      data: ['55', '58', '57', '57.1', '54', '55'],
      borderColor: '#FF5200',
      backgroundColor: transparentize('#FF5200', 1),
      type: 'line',
      order: 1
    }
  ]
};

const config_area_of_little_to_no_impact = {
  type: 'bar',
  data: data_area_of_little_to_no_impact,
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
        },
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
        ticks: {stepSize: 300},
        grid: {
          drawOnChartArea: false, // only want the grid lines for one axis to show up
        }
      }
    },
  },
};

const chart_area_of_little_to_no_impact = new Chart(area_of_little_to_no_impact_ctx, config_area_of_little_to_no_impact);
