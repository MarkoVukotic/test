function randomNumbers({ count, min, max }) {
    const numbers = [];
    for (let i = 0; i < count; i++) {
        numbers.push(Math.floor(Math.random() * (max - min + 1)) + min);
    }
    return numbers;
}

function randomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function transparentize(color, opacity) {
    const alpha = Math.round(opacity * 255).toString(16).padStart(2, '0');
    return color + alpha;
}

function countries({ count }) {
    const monthNames = ['Germany', 'Austria', 'Italy', 'Denmark', 'Spain', 'Netherlands', 'Portugal', 'Belgium', 'France', 'Iceland', 'United Kingdom', 'All countries'];
    const result = [];
    for (let i = 0; i < count; i++) {
        result.push(monthNames[i % 12]);
    }
    return result;
}

//Area of little to no impact left chart -------------------------//

const areaOfLittleToNoImpactCtx = document.querySelector('[data-element="area_of_little_to_no_impact"]');
//if (!areaOfLittleToNoImpactCtx) return;

        const labelsAreaOfLittleToNoImpact = ['0€', '<€400', '€400-600', '€601-800', '€801-1000', '€1001-1200'];
const dataAreaOfLittleToNoImpact = {
    labels: labelsAreaOfLittleToNoImpact,
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


//Area of little to no impact left chart -------------------------//


//Area of little to no impact right chart -------------------------//

const area_of_little_to_no_impact_ctx_right_chart = document.querySelector('[data-element="area_of_little_to_no_impact_right_chart"]');
// if (!area_of_little_to_no_impact_ctx_right_chart) return;

const labels_area_of_little_to_no_impact_right_chart = ['Postgraduate', 'Undergraduate', 'International', 'Domestic'] 
const data_area_of_little_to_no_impact_right_chart = {
  labels: labels_area_of_little_to_no_impact_right_chart,
  datasets: [
    {
      label: 'Record count',
      data: ['58.2', '56.4', '58.4', '55.7'],
      borderColor: '#80C7BD',
      backgroundColor: transparentize('#80C7BD', 0.8),
      order: 1
    }
  ]
};

const config_area_of_little_to_no_impact_right_chart = {
  type: 'bar',
  data: data_area_of_little_to_no_impact_right_chart,
  options: {
    barPercentage: 0.2,
    categoryPercentage: 1,
    responsive: true,
    plugins: {
      legend: {
        display: false,
        position: 'bottom',
        labels: {
          usePointStyle: true,
          boxWidth: 6
        }
      },
      title: {
        display: true,
        text: 'Level of study or international or domestic status had a negligible effect on mental health scores.'
      }
    },
    scales: {
      y: {
        type: 'linear',
        display: true,
        position: 'left',
        min: 0,
        max: 60,
      }
    },
  },
};

const chart_area_of_little_to_no_impact_right_chart = new Chart(area_of_little_to_no_impact_ctx_right_chart, config_area_of_little_to_no_impact_right_chart);

//Area of little to no impact right chart -------------------------//



// At the country level chart ----------------------------------//


const at_the_country_level_ctx = document.querySelector('[data-element="at-the-country-level"]');
// if (!at_the_country_level_ctx) return;

const labels_at_the_country_level = ['Germany', 'Austria', 'Italy', 'Denmark', 'Spain', 'Netherlands', 'Portugal', 'Belgium', 'France', 'Iceland', 'United Kingdom', 'All countries'];
const data_at_the_country_level = {
  labels: labels_at_the_country_level,
  datasets: [
    {
      label: '  MHI-5   ',
      data: ['61.5', '61', '60.8', '59.8', '58.8', '58.2', '55', '55', '53.9', '53', '52.5', '56.5'],
      borderColor: '#80C7BD',
      backgroundColor: transparentize('#80C7BD', 0.8),
      order: 1
    },
    {
      label: '  Well-being_NPS    ',
      data: ['53.8', '51.3', '53.8', '51.8', '56.2', '56.3', '55.9', '48.8', '50.2', '49.6', '51.5', '52'],
      borderColor: '#FF5200',
      backgroundColor: transparentize('#FF5200', 1),
      type: 'line',
      order: 0
    }
    ,
    {
      label: '  NPS    ',
      data: ['57', '54.1', '58.5', '58.6', '61', '57.8', '60.5', '51', '54', '55.8', '55', '55.8'],
      borderColor: '#f5e846',
      backgroundColor: transparentize('#f5e846', 1),
      type: 'line',
      order: 0
    }
  ]
};

const config_at_the_country_level = {
  type: 'bar',
  data: data_at_the_country_level,
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
        text: 'At the Country Level Chart'
      }
    },
    scales: {
      y: {
        type: 'linear',
        display: true,
        position: 'left',
        min: 48,
        max: 62,
        title: {
          display: true,
          text: 'MHI-5'
        },
      },
      y1: {
        type: 'linear',
        display: true,
        position: 'right',  
        min: -40.0,
        max: 30.0,
        title: {
          display: true,
          text: 'NPS (General & Well-being)'
        },
        ticks: {stepSize: 10},
        grid: {
          drawOnChartArea: false, // only want the grid lines for one axis to show up
        }
      }
    },
  },
};

const chart_at_the_country_level = new Chart(at_the_country_level_ctx, config_at_the_country_level);

// At the country level chart ----------------------------------//

























































// Countries --- Austria Charts ------------------------------------//


// Countries --- Respondents by Gender Austria Charts ------------------------------------//
const respondents_by_gener_austria_ctx = document.querySelector('[data-element="respondents_by_gener_austria"]');
//   if (!respondents_by_gener_austria_ctx) return;
  
  const respondents_by_gender_austria_data = {

    labels: ['  Female  ', '  Male  ', '  Non-binary  ', '  Other  ', '  Prefer not to say  '],
    datasets: [
      {
        label: '  Respondents by gender',
        data: [50.6, 47.2, 1.4, 0.03, 0.35],
        backgroundColor: ['#80C7BD', '#FF5200', '#FFD836', '#698FFF', '#12141D'],
      }
    ]
  };

const respondents_by_gener_austria_config = {
  type: 'doughnut',
  data: respondents_by_gender_austria_data,
  options: {
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
        text: 'Respondents by gender'
      },
      
    }
  },
};
const respondents_by_gener_austria_chart = new Chart(respondents_by_gener_austria_ctx, respondents_by_gener_austria_config);
// Countries --- Respondents by Gender Austria Charts ------------------------------------//

// Countries --- Respondents by Disability Austria Charts ------------------------------------//
const respondents_by_disability_austria_ctx = document.querySelector('[data-element="respondents_by_disability_austria"]');
//   if (!respondents_by_disability_austria_ctx) return;
  
  const respondents_by_disability_austria_data = {
    labels: ['  Yes  ', '  Prefer not to say  ', '  No  '],
    datasets: [
      {
        label: '  Respondents by disability',
        data: [8.6, 4.3, 87.1],
        backgroundColor: ['#80C7BD', '#FF5200', '#FFD836', '#698FFF', '#12141D'],
      }
    ]
  };

const respondents_by_disability_austria_config = {
  type: 'doughnut',
  data: respondents_by_disability_austria_data,
  options: {
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
        text: 'Respondents by disability'
      },
      
    }
  },
};
const respondents_by_disability_austria_chart = new Chart(respondents_by_disability_austria_ctx, respondents_by_disability_austria_config);
// Countries --- Respondents by Disability Austria Charts ------------------------------------//

// Countries --- Respondents by international status Austria Charts ------------------------------------//
const respondents_by_international_status_austria_ctx = document.querySelector('[data-element="respondents_by_international_status_austria"]');
//   if (!respondents_by_international_status_austria_ctx) return;
  
  const respondents_by_international_status_austria_data = {
    labels: ['  Yes  ', '  No  '],
    datasets: [
      {
        label: '  Respondents by international_status',
        data: [86.8, 13.2],
        backgroundColor: ['#80C7BD', '#FF5200'],
      }
    ]
  };

const respondents_by_international_status_austria_config = {
  type: 'doughnut',
  data: respondents_by_international_status_austria_data,
  options: {
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
        text: 'Respondents by international status'
      },
      
    }
  },
};
const respondents_by_international_status_austria_chart = new Chart(respondents_by_international_status_austria_ctx, respondents_by_international_status_austria_config);
// Countries --- Respondents by Gender Austria Charts ------------------------------------//


// Countries --- Respondents by Student Type Austria Charts ------------------------------------//
const respondents_by_student_type_austria_ctx = document.querySelector('[data-element="respondents_by_student_type_austria"]');
//   if (!respondents_by_student_type_austria_ctx) return;
  
  const respondents_by_student_type_austria_data = {
    labels: ['  Postgraduate  ', '  Undergraduate  '],
    datasets: [
      {
        label: '  Respondents by student_type',
        data: [39.5, 60.5], 
        backgroundColor: ['#80C7BD', '#FF5200'],
      }
    ]
  };

const respondents_by_student_type_austria_config = {
  type: 'doughnut',
  data: respondents_by_student_type_austria_data,
  options: {
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
        text: 'Respondents by student type'
      },
      
    }
  },
};
const respondents_by_student_type_austria_chart = new Chart(respondents_by_student_type_austria_ctx, respondents_by_student_type_austria_config);
// Countries --- Respondents by Student Type Austria Charts ------------------------------------//


// Countries --- Respondents by Accomodation type Austria Charts ------------------------------------//
const respondents_by_accommodation_type_austria_ctx = document.querySelector('[data-element="respondents_by_accommodation_type_austria"]');
//   if (!respondents_by_accommodation_type_austria_ctx) return;
  
  const respondents_by_accommodation_type_austria_data = {
    labels: ['  PBSA  ', '  Other  '],
    datasets: [
      {
        label: '  Respondents by accommodation_type',
        data: [91.7, 8.3], 
        backgroundColor: ['#80C7BD', '#FF5200'],
      }
    ]
  };

const respondents_by_accommodation_type_austria_config = {
  type: 'doughnut',
  data: respondents_by_accommodation_type_austria_data,
  options: {
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
        text: 'Respondents by accommodation type'
      },
      
    }
  },
};
const respondents_by_accommodation_type_austria_chart = new Chart(respondents_by_accommodation_type_austria_ctx, respondents_by_accommodation_type_austria_config);
// Countries --- Respondents by Accomodation type Austria Charts ------------------------------------//

// Countries --- Respondents by Accomodation type Austria Charts ------------------------------------//
const respondents_by_undergraduate_year_of_study_austria_ctx = document.querySelector('[data-element="respondents_by_undergraduate_year_of_study_austria"]');
//   if (!respondents_by_undergraduate_year_of_study_austria_ctx) return;
  
  const respondents_by_undergraduate_year_of_study_austria_data = {
    labels: ['  1  ', '  2  ', '  3  ', '  4  ', '  Final  '],
    datasets: [
      {
        label: '  Respondents by undergraduate year of study',
        data: [37.4, 20.9, 18.9, 10.2, 12.6], 
        backgroundColor: ['#80C7BD', '#FF5200', '#F5E847', '#698FFF', '#12141D'],
      }
    ]
  };

const respondents_by_undergraduate_year_of_study_austria_config = {
  type: 'doughnut',
  data: respondents_by_undergraduate_year_of_study_austria_data,
  options: {
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
        text: 'Respondents by undergraduate year of study'
      },
      
    }
  },
};
const respondents_by_undergraduate_year_of_study_austria_chart = new Chart(respondents_by_undergraduate_year_of_study_austria_ctx, respondents_by_undergraduate_year_of_study_austria_config);
// Countries --- Respondents by Accomodation type Austria Charts ------------------------------------//

// Countries --- Austria Charts ------------------------------------//










































// Countries --- Belgium Charts ------------------------------------//


// Countries --- Respondents by Gender Belgium Charts ------------------------------------//
const respondents_by_gener_belgium_ctx = document.querySelector('[data-element="respondents_by_gener_belgium"]');
//   if (!respondents_by_gener_belgium_ctx) return;
  
  const respondents_by_gender_belgium_data = {
    labels: ['  Female  ', '  Male  ', '  Non-binary  ', '  Other  ', '  Prefer not to say  '],
    datasets: [
      {
        label: '  Respondents by gender',
        data: [59.6, 34.8, 3.5, 0.01, 2, 0.35],
        backgroundColor: ['#80C7BD', '#FF5200', '#FFD836', '#698FFF', '#12141D'],
      }
    ]
  };

const respondents_by_gener_belgium_config = {
  type: 'doughnut',
  data: respondents_by_gender_belgium_data,
  options: {
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
        text: 'Respondents by gender'
      },
      
    }
  },
};
const respondents_by_gener_belgium_chart = new Chart(respondents_by_gener_belgium_ctx, respondents_by_gener_belgium_config);
// Countries --- Respondents by Gender Belgium Charts ------------------------------------//

// Countries --- Respondents by Disability Belgium Charts ------------------------------------//
const respondents_by_disability_belgium_ctx = document.querySelector('[data-element="respondents_by_disability_belgium"]');
//   if (!respondents_by_disability_belgium_ctx) return;
  
  const respondents_by_disability_belgium_data = {
    labels: ['  Yes  ', '  Prefer not to say  ', '  No  '],
    datasets: [
      {
        label: '  Respondents by disability',
        data: [10.7, 3.9, 85.4],
        backgroundColor: ['#80C7BD', '#FF5200', '#FFD836', '#698FFF', '#12141D'],
      }
    ]
  };

const respondents_by_disability_belgium_config = {
  type: 'doughnut',
  data: respondents_by_disability_belgium_data,
  options: {
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
        text: 'Respondents by disability'
      },
      
    }
  },
};
const respondents_by_disability_belgium_chart = new Chart(respondents_by_disability_belgium_ctx, respondents_by_disability_belgium_config);
// Countries --- Respondents by Disability Belgium Charts ------------------------------------//

// Countries --- Respondents by international status Belgium Charts ------------------------------------//
const respondents_by_international_status_belgium_ctx = document.querySelector('[data-element="respondents_by_international_status_belgium"]');
//   if (!respondents_by_international_status_belgium_ctx) return;
  
  const respondents_by_international_status_belgium_data = {
    labels: ['  Yes  ', '  No  '],
    datasets: [
      {
        label: '  Respondents by international_status',
        data: [63.5, 36.5],
        backgroundColor: ['#80C7BD', '#FF5200'],
      }
    ]
  };

const respondents_by_international_status_belgium_config = {
  type: 'doughnut',
  data: respondents_by_international_status_belgium_data,
  options: {
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
        text: 'Respondents by international status'
      },
      
    }
  },
};
const respondents_by_international_status_belgium_chart = new Chart(respondents_by_international_status_belgium_ctx, respondents_by_international_status_belgium_config);
// Countries --- Respondents by international status Belgium Charts ------------------------------------//


// Countries --- Respondents by Student Type Belgium Charts ------------------------------------//
const respondents_by_student_type_belgium_ctx = document.querySelector('[data-element="respondents_by_student_type_belgium"]');
//   if (!respondents_by_student_type_belgium_ctx) return;
  
  const respondents_by_student_type_belgium_data = {
    labels: ['  Postgraduate  ', '  Undergraduate  '],
    datasets: [
      {
        label: '  Respondents by student_type',
        data: [29.2, 70.8], 
        backgroundColor: ['#80C7BD', '#FF5200'],
      }
    ]
  };

const respondents_by_student_type_belgium_config = {
  type: 'doughnut',
  data: respondents_by_student_type_belgium_data,
  options: {
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
        text: 'Respondents by student type'
      },
      
    }
  },
};
const respondents_by_student_type_belgium_chart = new Chart(respondents_by_student_type_belgium_ctx, respondents_by_student_type_belgium_config);
// Countries --- Respondents by Student Type Belgium Charts ------------------------------------//


// Countries --- Respondents by Accomodation type Belgium Charts ------------------------------------//
const respondents_by_accommodation_type_belgium_ctx = document.querySelector('[data-element="respondents_by_accommodation_type_belgium"]');
//   if (!respondents_by_accommodation_type_belgium_ctx) return;
  
  const respondents_by_accommodation_type_belgium_data = {
    labels: ['  PBSA  ', '  Other  '],
    datasets: [
      {
        label: '  Respondents by accommodation_type',
        data: [92.3, 7.7], 
        backgroundColor: ['#80C7BD', '#FF5200'],
      }
    ]
  };

const respondents_by_accommodation_type_belgium_config = {
  type: 'doughnut',
  data: respondents_by_accommodation_type_belgium_data,
  options: {
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
        text: 'Respondents by accommodation type'
      },
      
    }
  },
};
const respondents_by_accommodation_type_belgium_chart = new Chart(respondents_by_accommodation_type_belgium_ctx, respondents_by_accommodation_type_belgium_config);
// Countries --- Respondents by Accomodation type Belgium Charts ------------------------------------//

// Countries --- Respondents by Accomodation type Belgium Charts ------------------------------------//
const respondents_by_undergraduate_year_of_study_belgium_ctx = document.querySelector('[data-element="respondents_by_undergraduate_year_of_study_belgium"]');
//   if (!respondents_by_undergraduate_year_of_study_belgium_ctx) return;
  
  const respondents_by_undergraduate_year_of_study_belgium_data = {
    labels: ['  1  ', '  2  ', '  3  ', '  4  ', '  Final  '],
    datasets: [
      {
        label: '  Respondents by undergraduate year of study',
        data: [38.1, 25.4, 17.5, 9.5, 9.5], 
        backgroundColor: ['#80C7BD', '#FF5200', '#F5E847', '#698FFF', '#12141D'],
      }
    ]
  };

const respondents_by_undergraduate_year_of_study_belgium_config = {
  type: 'doughnut',
  data: respondents_by_undergraduate_year_of_study_belgium_data,
  options: {
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
        text: 'Respondents by undergraduate year of study'
      },
      
    }
  },
};
const respondents_by_undergraduate_year_of_study_belgium_chart = new Chart(respondents_by_undergraduate_year_of_study_belgium_ctx, respondents_by_undergraduate_year_of_study_belgium_config);
// Countries --- Respondents by Accomodation type Belgium Charts ------------------------------------//

// Countries --- Belgium Charts ------------------------------------//


































// Countries --- Respondents by Gender Denmark Charts ------------------------------------//
const respondents_by_gener_denmark_ctx = document.querySelector('[data-element="respondents_by_gener_denmark"]');
//   if (!respondents_by_gener_denmark_ctx) return;
  
  const respondents_by_gender_denmark_data = {
    labels: ['  Female  ', '  Male  ', '  Non-binary  ', '  Other  ', '  Prefer not to say  '],
    datasets: [
      {
        label: '  Respondents by gender',
        data: [58.2, 38, 1.8, 0, 2],
        backgroundColor: ['#80C7BD', '#FF5200', '#FFD836', '#698FFF', '#12141D'],
      }
    ]
  };

const respondents_by_gener_denmark_config = {
  type: 'doughnut',
  data: respondents_by_gender_denmark_data,
  options: {
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
        text: 'Respondents by gender'
      },
      
    }
  },
};
const respondents_by_gener_denmark_chart = new Chart(respondents_by_gener_denmark_ctx, respondents_by_gener_denmark_config);
// Countries --- Respondents by Gender Denmark Charts ------------------------------------//

// Countries --- Respondents by Disability Denmark Charts ------------------------------------//
const respondents_by_disability_denmark_ctx = document.querySelector('[data-element="respondents_by_disability_denmark"]');
//   if (!respondents_by_disability_denmark_ctx) return;
  
  const respondents_by_disability_denmark_data = {
    labels: ['  Yes  ', '  Prefer not to say  ', '  No  '],
    datasets: [
      {
        label: '  Respondents by disability',
        data: [18.8, 4.3, 76.9],
        backgroundColor: ['#80C7BD', '#FF5200', '#FFD836', '#698FFF', '#12141D'],
      }
    ]
  };

const respondents_by_disability_denmark_config = {
  type: 'doughnut',
  data: respondents_by_disability_denmark_data,
  options: {
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
        text: 'Respondents by disability'
      },
      
    }
  },
};
const respondents_by_disability_denmark_chart = new Chart(respondents_by_disability_denmark_ctx, respondents_by_disability_denmark_config);
// Countries --- Respondents by Disability Denmark Charts ------------------------------------//

// Countries --- Respondents by international status Denmark Charts ------------------------------------//
const respondents_by_international_status_denmark_ctx = document.querySelector('[data-element="respondents_by_international_status_denmark"]');
//   if (!respondents_by_international_status_denmark_ctx) return;
  
  const respondents_by_international_status_denmark_data = {
    labels: ['  Yes  ', '  No  '],
    datasets: [
      {
        label: '  Respondents by international_status',
        data: [26.9, 73.1],
        backgroundColor: ['#80C7BD', '#FF5200'],
      }
    ]
  };

const respondents_by_international_status_denmark_config = {
  type: 'doughnut',
  data: respondents_by_international_status_denmark_data,
  options: {
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
        text: 'Respondents by international status'
      },
      
    }
  },
};
const respondents_by_international_status_denmark_chart = new Chart(respondents_by_international_status_denmark_ctx, respondents_by_international_status_denmark_config);
// Countries --- Respondents by international status Denmark Charts ------------------------------------//


// Countries --- Respondents by Student Type Denmark Charts ------------------------------------//
const respondents_by_student_type_denmark_ctx = document.querySelector('[data-element="respondents_by_student_type_denmark"]');
//   if (!respondents_by_student_type_denmark_ctx) return;
  
  const respondents_by_student_type_denmark_data = {
    labels: ['  Postgraduate  ', '  Undergraduate  '],
    datasets: [
      {
        label: '  Respondents by student_type',
        data: [25.7, 74.3], 
        backgroundColor: ['#80C7BD', '#FF5200'],
      }
    ]
  };

const respondents_by_student_type_denmark_config = {
  type: 'doughnut',
  data: respondents_by_student_type_denmark_data,
  options: {
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
        text: 'Respondents by student type'
      },
      
    }
  },
};
const respondents_by_student_type_denmark_chart = new Chart(respondents_by_student_type_denmark_ctx, respondents_by_student_type_denmark_config);
// Countries --- Respondents by Student Type Denmark Charts ------------------------------------//


// Countries --- Respondents by Accomodation type Denmark Charts ------------------------------------//
const respondents_by_accommodation_type_denmark_ctx = document.querySelector('[data-element="respondents_by_accommodation_type_denmark"]');
//   if (!respondents_by_accommodation_type_denmark_ctx) return;
  
  const respondents_by_accommodation_type_denmark_data = {
    labels: ['  PBSA  ', '  Other  '],
    datasets: [
      {
        label: '  Respondents by accommodation_type',
        data: [89.7, 10.3], 
        backgroundColor: ['#80C7BD', '#FF5200'],
      }
    ]
  };

const respondents_by_accommodation_type_denmark_config = {
  type: 'doughnut',
  data: respondents_by_accommodation_type_denmark_data,
  options: {
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
        text: 'Respondents by accommodation type'
      },
      
    }
  },
};
const respondents_by_accommodation_type_denmark_chart = new Chart(respondents_by_accommodation_type_denmark_ctx, respondents_by_accommodation_type_denmark_config);
// Countries --- Respondents by Accomodation type Denmark Charts ------------------------------------//

// Countries --- Respondents by Accomodation type Denmark Charts ------------------------------------//
const respondents_by_undergraduate_year_of_study_denmark_ctx = document.querySelector('[data-element="respondents_by_undergraduate_year_of_study_denmark"]');
//   if (!respondents_by_undergraduate_year_of_study_denmark_ctx) return;
  
  const respondents_by_undergraduate_year_of_study_denmark_data = {
    labels: ['  1  ', '  2  ', '  3  ', '  4  ', '  Final  '],
    datasets: [
      {
        label: '  Respondents by undergraduate year of study',
        data: [28.2, 30.1, 23, 8.4, 10.4], 
        backgroundColor: ['#80C7BD', '#FF5200', '#F5E847', '#698FFF', '#12141D'],
      }
    ]
  };

const respondents_by_undergraduate_year_of_study_denmark_config = {
  type: 'doughnut',
  data: respondents_by_undergraduate_year_of_study_denmark_data,
  options: {
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
        text: 'Respondents by undergraduate year of study'
      },
      
    }
  },
};
const respondents_by_undergraduate_year_of_study_denmark_chart = new Chart(respondents_by_undergraduate_year_of_study_denmark_ctx, respondents_by_undergraduate_year_of_study_denmark_config);
// Countries --- Respondents by Accomodation type Denmark Charts ------------------------------------//

// Countries --- Denmark Charts ------------------------------------//












































// Countries --- Respondents by Gender France Charts ------------------------------------//
const respondents_by_gener_france_ctx = document.querySelector('[data-element="respondents_by_gener_france"]');
//   if (!respondents_by_gener_france_ctx) return;
  
  const respondents_by_gender_france_data = {
    labels: ['  Female  ', '  Male  ', '  Non-binary  ', '  Other  ', '  Prefer not to say  '],
    datasets: [
      {
        label: '  Respondents by gender',
        data: [62.9, 35.6, 0.75, 0, 0.75],
        backgroundColor: ['#80C7BD', '#FF5200', '#FFD836', '#698FFF', '#12141D'],
      }
    ]
  };

const respondents_by_gener_france_config = {
  type: 'doughnut',
  data: respondents_by_gender_france_data,
  options: {
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
        text: 'Respondents by gender'
      },
      
    }
  },
};
const respondents_by_gener_france_chart = new Chart(respondents_by_gener_france_ctx, respondents_by_gener_france_config);
// Countries --- Respondents by Gender France Charts ------------------------------------//

// Countries --- Respondents by Disability France Charts ------------------------------------//
const respondents_by_disability_france_ctx = document.querySelector('[data-element="respondents_by_disability_france"]');
//   if (!respondents_by_disability_france_ctx) return;
  
  const respondents_by_disability_france_data = {
    labels: ['  Yes  ', '  Prefer not to say  ', '  No  '],
    datasets: [
      {
        label: '  Respondents by disability',
        data: [6, 3.5, 90.5],
        backgroundColor: ['#80C7BD', '#FF5200', '#FFD836', '#698FFF', '#12141D'],
      }
    ]
  };

const respondents_by_disability_france_config = {
  type: 'doughnut',
  data: respondents_by_disability_france_data,
  options: {
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
        text: 'Respondents by disability'
      },
      
    }
  },
};
const respondents_by_disability_france_chart = new Chart(respondents_by_disability_france_ctx, respondents_by_disability_france_config);
// Countries --- Respondents by Disability France Charts ------------------------------------//

// Countries --- Respondents by international status France Charts ------------------------------------//
const respondents_by_international_status_france_ctx = document.querySelector('[data-element="respondents_by_international_status_france"]');
//   if (!respondents_by_international_status_france_ctx) return;
  
  const respondents_by_international_status_france_data = {
    labels: ['  Yes  ', '  No  '],
    datasets: [
      {
        label: '  Respondents by international_status',
        data: [51.1, 48.9],
        backgroundColor: ['#80C7BD', '#FF5200'],
      }
    ]
  };

const respondents_by_international_status_france_config = {
  type: 'doughnut',
  data: respondents_by_international_status_france_data,
  options: {
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
        text: 'Respondents by international status'
      },
      
    }
  },
};
const respondents_by_international_status_france_chart = new Chart(respondents_by_international_status_france_ctx, respondents_by_international_status_france_config);
// Countries --- Respondents by international status France Charts ------------------------------------//


// Countries --- Respondents by Student Type France Charts ------------------------------------//
const respondents_by_student_type_france_ctx = document.querySelector('[data-element="respondents_by_student_type_france"]');
//   if (!respondents_by_student_type_france_ctx) return;
  
  const respondents_by_student_type_france_data = {
    labels: ['  Postgraduate  ', '  Undergraduate  '],
    datasets: [
      {
        label: '  Respondents by student_type',
        data: [39.4, 60.6], 
        backgroundColor: ['#80C7BD', '#FF5200'],
      }
    ]
  };

const respondents_by_student_type_france_config = {
  type: 'doughnut',
  data: respondents_by_student_type_france_data,
  options: {
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
        text: 'Respondents by student type'
      },
      
    }
  },
};
const respondents_by_student_type_france_chart = new Chart(respondents_by_student_type_france_ctx, respondents_by_student_type_france_config);
// Countries --- Respondents by Student Type France Charts ------------------------------------//


// Countries --- Respondents by Accomodation type France Charts ------------------------------------//
const respondents_by_accommodation_type_france_ctx = document.querySelector('[data-element="respondents_by_accommodation_type_france"]');
//   if (!respondents_by_accommodation_type_france_ctx) return;
  
  const respondents_by_accommodation_type_france_data = {
    labels: ['  PBSA  ', '  Other  '],
    datasets: [
      {
        label: '  Respondents by accommodation_type',
        data: [86.3, 13.7], 
        backgroundColor: ['#80C7BD', '#FF5200'],
      }
    ]
  };

const respondents_by_accommodation_type_france_config = {
  type: 'doughnut',
  data: respondents_by_accommodation_type_france_data,
  options: {
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
        text: 'Respondents by accommodation type'
      },
      
    }
  },
};
const respondents_by_accommodation_type_france_chart = new Chart(respondents_by_accommodation_type_france_ctx, respondents_by_accommodation_type_france_config);
// Countries --- Respondents by Accomodation type France Charts ------------------------------------//

// Countries --- Respondents by Accomodation type France Charts ------------------------------------//
const respondents_by_undergraduate_year_of_study_france_ctx = document.querySelector('[data-element="respondents_by_undergraduate_year_of_study_france"]');
//   if (!respondents_by_undergraduate_year_of_study_france_ctx) return;
  
  const respondents_by_undergraduate_year_of_study_france_data = {
    labels: ['  1  ', '  2  ', '  3  ', '  4  ', '  Final  '],
    datasets: [
      {
        label: '  Respondents by undergraduate year of study',
        data: [36.6, 20.9, 27.7, 9.4, 5.2], 
        backgroundColor: ['#80C7BD', '#FF5200', '#F5E847', '#698FFF', '#12141D'],
      }
    ]
  };

const respondents_by_undergraduate_year_of_study_france_config = {
  type: 'doughnut',
  data: respondents_by_undergraduate_year_of_study_france_data,
  options: {
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
        text: 'Respondents by undergraduate year of study'
      },
      
    }
  },
};
const respondents_by_undergraduate_year_of_study_france_chart = new Chart(respondents_by_undergraduate_year_of_study_france_ctx, respondents_by_undergraduate_year_of_study_france_config);
// Countries --- Respondents by Accomodation type France Charts ------------------------------------//

// Countries --- France Charts ------------------------------------//




























// Countries --- Respondents by Gender Germany Charts ------------------------------------//
const respondents_by_gener_germany_ctx = document.querySelector('[data-element="respondents_by_gener_germany"]');
//   if (!respondents_by_gener_germany_ctx) return;
  
  const respondents_by_gender_germany_data = {
    labels: ['  Female  ', '  Male  ', '  Non-binary  ', '  Other  ', '  Prefer not to say  '],
    datasets: [
      {
        label: '  Respondents by gender',
        data: [50, 47.5, 0.15, 0, 1,1],
        backgroundColor: ['#80C7BD', '#FF5200', '#FFD836', '#698FFF', '#12141D'],
      }
    ]
  };

const respondents_by_gener_germany_config = {
  type: 'doughnut',
  data: respondents_by_gender_germany_data,
  options: {
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
        text: 'Respondents by gender'
      },
      
    }
  },
};
const respondents_by_gener_germany_chart = new Chart(respondents_by_gener_germany_ctx, respondents_by_gener_germany_config);
// Countries --- Respondents by Gender Germany Charts ------------------------------------//

// Countries --- Respondents by Disability Germany Charts ------------------------------------//
const respondents_by_disability_germany_ctx = document.querySelector('[data-element="respondents_by_disability_germany"]');
//   if (!respondents_by_disability_germany_ctx) return;
  
  const respondents_by_disability_germany_data = {
    labels: ['  Yes  ', '  Prefer not to say  ', '  No  '],
    datasets: [
      {
        label: '  Respondents by disability',
        data: [6.3, 3.4, 90.3],
        backgroundColor: ['#80C7BD', '#FF5200', '#FFD836', '#698FFF', '#12141D'],
      }
    ]
  };

const respondents_by_disability_germany_config = {
  type: 'doughnut',
  data: respondents_by_disability_germany_data,
  options: {
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
        text: 'Respondents by disability'
      },
      
    }
  },
};
const respondents_by_disability_germany_chart = new Chart(respondents_by_disability_germany_ctx, respondents_by_disability_germany_config);
// Countries --- Respondents by Disability Germany Charts ------------------------------------//

// Countries --- Respondents by international status Germany Charts ------------------------------------//
const respondents_by_international_status_germany_ctx = document.querySelector('[data-element="respondents_by_international_status_germany"]');
//   if (!respondents_by_international_status_germany_ctx) return;
  
  const respondents_by_international_status_germany_data = {
    labels: ['  Yes  ', '  No  '],
    datasets: [
      {
        label: '  Respondents by international_status',
        data: [76.5, 23.5],
        backgroundColor: ['#80C7BD', '#FF5200'],
      }
    ]
  };

const respondents_by_international_status_germany_config = {
  type: 'doughnut',
  data: respondents_by_international_status_germany_data,
  options: {
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
        text: 'Respondents by international status'
      },
      
    }
  },
};
const respondents_by_international_status_germany_chart = new Chart(respondents_by_international_status_germany_ctx, respondents_by_international_status_germany_config);
// Countries --- Respondents by international status Germany Charts ------------------------------------//


// Countries --- Respondents by Student Type Germany Charts ------------------------------------//
const respondents_by_student_type_germany_ctx = document.querySelector('[data-element="respondents_by_student_type_germany"]');
//   if (!respondents_by_student_type_germany_ctx) return;
  
  const respondents_by_student_type_germany_data = {
    labels: ['  Postgraduate  ', '  Undergraduate  '],
    datasets: [
      {
        label: '  Respondents by student_type',
        data: [33.8, 66.2], 
        backgroundColor: ['#80C7BD', '#FF5200'],
      }
    ]
  };

const respondents_by_student_type_germany_config = {
  type: 'doughnut',
  data: respondents_by_student_type_germany_data,
  options: {
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
        text: 'Respondents by student type'
      },
      
    }
  },
};
const respondents_by_student_type_germany_chart = new Chart(respondents_by_student_type_germany_ctx, respondents_by_student_type_germany_config);
// Countries --- Respondents by Student Type Germany Charts ------------------------------------//


// Countries --- Respondents by Accomodation type Germany Charts ------------------------------------//
const respondents_by_accommodation_type_germany_ctx = document.querySelector('[data-element="respondents_by_accommodation_type_germany"]');
//   if (!respondents_by_accommodation_type_germany_ctx) return;
  
  const respondents_by_accommodation_type_germany_data = {
    labels: ['  PBSA  ', '  Other  '],
    datasets: [
      {
        label: '  Respondents by accommodation_type',
        data: [85.4, 14.6], 
        backgroundColor: ['#80C7BD', '#FF5200'],
      }
    ]
  };

const respondents_by_accommodation_type_germany_config = {
  type: 'doughnut',
  data: respondents_by_accommodation_type_germany_data,
  options: {
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
        text: 'Respondents by accommodation type'
      },
      
    }
  },
};
const respondents_by_accommodation_type_germany_chart = new Chart(respondents_by_accommodation_type_germany_ctx, respondents_by_accommodation_type_germany_config);
// Countries --- Respondents by Accomodation type Germany Charts ------------------------------------//

// Countries --- Respondents by Accomodation type Germany Charts ------------------------------------//
const respondents_by_undergraduate_year_of_study_germany_ctx = document.querySelector('[data-element="respondents_by_undergraduate_year_of_study_germany"]');
//   if (!respondents_by_undergraduate_year_of_study_germany_ctx) return;
  
  const respondents_by_undergraduate_year_of_study_germany_data = {
    labels: ['  1  ', '  2  ', '  3  ', '  4  ', '  Final  '],
    datasets: [
      {
        label: '  Respondents by undergraduate year of study',
        data: [39.6, 26.5, 17.9, 4.6, 11.4], 
        backgroundColor: ['#80C7BD', '#FF5200', '#F5E847', '#698FFF', '#12141D'],
      }
    ]
  };

const respondents_by_undergraduate_year_of_study_germany_config = {
  type: 'doughnut',
  data: respondents_by_undergraduate_year_of_study_germany_data,
  options: {
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
        text: 'Respondents by undergraduate year of study'
      },
      
    }
  },
};
const respondents_by_undergraduate_year_of_study_germany_chart = new Chart(respondents_by_undergraduate_year_of_study_germany_ctx, respondents_by_undergraduate_year_of_study_germany_config);
// Countries --- Respondents by Accomodation type Germany Charts ------------------------------------//

// Countries --- Germany Charts ------------------------------------//































// Countries --- Respondents by Gender Iceland Charts ------------------------------------//
const respondents_by_gener_iceland_ctx = document.querySelector('[data-element="respondents_by_gener_iceland"]');
//   if (!respondents_by_gener_iceland_ctx) return;
  
  const respondents_by_gender_iceland_data = {
    labels: ['  Female  ', '  Male  ', '  Non-binary  ', '  Other  ', '  Prefer not to say  '],
    datasets: [
      {
        label: '  Respondents by gender',
        data: [62.5, 32.4, 4, 0, 1,1],
        backgroundColor: ['#80C7BD', '#FF5200', '#FFD836', '#698FFF', '#12141D'],
      }
    ]
  };

const respondents_by_gener_iceland_config = {
  type: 'doughnut',
  data: respondents_by_gender_iceland_data,
  options: {
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
        text: 'Respondents by gender'
      },
      
    }
  },
};
const respondents_by_gener_iceland_chart = new Chart(respondents_by_gener_iceland_ctx, respondents_by_gener_iceland_config);
// Countries --- Respondents by Gender Iceland Charts ------------------------------------//

// Countries --- Respondents by Disability Iceland Charts ------------------------------------//
const respondents_by_disability_iceland_ctx = document.querySelector('[data-element="respondents_by_disability_iceland"]');
//   if (!respondents_by_disability_iceland_ctx) return;
  
  const respondents_by_disability_iceland_data = {
    labels: ['  Yes  ', '  Prefer not to say  ', '  No  '],
    datasets: [
      {
        label: '  Respondents by disability',
        data: [20.8, 2.7, 76.5],
        backgroundColor: ['#80C7BD', '#FF5200', '#FFD836', '#698FFF', '#12141D'],
      }
    ]
  };

const respondents_by_disability_iceland_config = {
  type: 'doughnut',
  data: respondents_by_disability_iceland_data,
  options: {
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
        text: 'Respondents by disability'
      },
      
    }
  },
};
const respondents_by_disability_iceland_chart = new Chart(respondents_by_disability_iceland_ctx, respondents_by_disability_iceland_config);
// Countries --- Respondents by Disability Iceland Charts ------------------------------------//

// Countries --- Respondents by international status Iceland Charts ------------------------------------//
const respondents_by_international_status_iceland_ctx = document.querySelector('[data-element="respondents_by_international_status_iceland"]');
//   if (!respondents_by_international_status_iceland_ctx) return;
  
  const respondents_by_international_status_iceland_data = {
    labels: ['  Yes  ', '  No  '],
    datasets: [
      {
        label: '  Respondents by international_status',
        data: [50.5, 49.5],
        backgroundColor: ['#80C7BD', '#FF5200'],
      }
    ]
  };

const respondents_by_international_status_iceland_config = {
  type: 'doughnut',
  data: respondents_by_international_status_iceland_data,
  options: {
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
        text: 'Respondents by international status'
      },
      
    }
  },
};
const respondents_by_international_status_iceland_chart = new Chart(respondents_by_international_status_iceland_ctx, respondents_by_international_status_iceland_config);
// Countries --- Respondents by international status Iceland Charts ------------------------------------//


// Countries --- Respondents by Student Type Iceland Charts ------------------------------------//
const respondents_by_student_type_iceland_ctx = document.querySelector('[data-element="respondents_by_student_type_iceland"]');
//   if (!respondents_by_student_type_iceland_ctx) return;
  
  const respondents_by_student_type_iceland_data = {
    labels: ['  Postgraduate  ', '  Undergraduate  '],
    datasets: [
      {
        label: '  Respondents by student_type',
        data: [44.7, 55.3], 
        backgroundColor: ['#80C7BD', '#FF5200'],
      }
    ]
  };

const respondents_by_student_type_iceland_config = {
  type: 'doughnut',
  data: respondents_by_student_type_iceland_data,
  options: {
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
        text: 'Respondents by student type'
      },
      
    }
  },
};
const respondents_by_student_type_iceland_chart = new Chart(respondents_by_student_type_iceland_ctx, respondents_by_student_type_iceland_config);
// Countries --- Respondents by Student Type Iceland Charts ------------------------------------//


// Countries --- Respondents by Accomodation type Iceland Charts ------------------------------------//
const respondents_by_accommodation_type_iceland_ctx = document.querySelector('[data-element="respondents_by_accommodation_type_iceland"]');
//   if (!respondents_by_accommodation_type_iceland_ctx) return;
  
  const respondents_by_accommodation_type_iceland_data = {
    labels: ['  PBSA  ', '  Other  '],
    datasets: [
      {
        label: '  Respondents by accommodation_type',
        data: [98.5, 1.5], 
        backgroundColor: ['#80C7BD', '#FF5200'],
      }
    ]
  };

const respondents_by_accommodation_type_iceland_config = {
  type: 'doughnut',
  data: respondents_by_accommodation_type_iceland_data,
  options: {
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
        text: 'Respondents by accommodation type'
      },
      
    }
  },
};
const respondents_by_accommodation_type_iceland_chart = new Chart(respondents_by_accommodation_type_iceland_ctx, respondents_by_accommodation_type_iceland_config);
// Countries --- Respondents by Accomodation type Iceland Charts ------------------------------------//

// Countries --- Respondents by Accomodation type Iceland Charts ------------------------------------//
const respondents_by_undergraduate_year_of_study_iceland_ctx = document.querySelector('[data-element="respondents_by_undergraduate_year_of_study_iceland"]');
//   if (!respondents_by_undergraduate_year_of_study_iceland_ctx) return;
  
  const respondents_by_undergraduate_year_of_study_iceland_data = {
    labels: ['  1  ', '  2  ', '  3  ', '  4  ', '  Final  '],
    datasets: [
      {
        label: '  Respondents by undergraduate year of study',
        data: [34.6, 25.3, 22.2, 13.7, 3.7], 
        backgroundColor: ['#80C7BD', '#FF5200', '#F5E847', '#698FFF', '#12141D'],
      }
    ]
  };

const respondents_by_undergraduate_year_of_study_iceland_config = {
  type: 'doughnut',
  data: respondents_by_undergraduate_year_of_study_iceland_data,
  options: {
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
        text: 'Respondents by undergraduate year of study'
      },
      
    }
  },
};
const respondents_by_undergraduate_year_of_study_iceland_chart = new Chart(respondents_by_undergraduate_year_of_study_iceland_ctx, respondents_by_undergraduate_year_of_study_iceland_config);
// Countries --- Respondents by Accomodation type Iceland Charts ------------------------------------//

// Countries --- Iceland Charts ------------------------------------//






































// Countries --- Respondents by Gender Italy Charts ------------------------------------//
const respondents_by_gener_italy_ctx = document.querySelector('[data-element="respondents_by_gener_italy"]');
//   if (!respondents_by_gener_italy_ctx) return;
  
  const respondents_by_gender_italy_data = {
    labels: ['  Female  ', '  Male  ', '  Non-binary  ', '  Other  ', '  Prefer not to say  '],
    datasets: [
      {
        label: '  Respondents by gender',
        data: [48.9, 49.5, 0.1, 0, 1.6],
        backgroundColor: ['#80C7BD', '#FF5200', '#FFD836', '#698FFF', '#12141D'],
      }
    ]
  };

const respondents_by_gener_italy_config = {
  type: 'doughnut',
  data: respondents_by_gender_italy_data,
  options: {
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
        text: 'Respondents by gender'
      },
      
    }
  },
};
const respondents_by_gener_italy_chart = new Chart(respondents_by_gener_italy_ctx, respondents_by_gener_italy_config);
// Countries --- Respondents by Gender Italy Charts ------------------------------------//

// Countries --- Respondents by Disability Italy Charts ------------------------------------//
const respondents_by_disability_italy_ctx = document.querySelector('[data-element="respondents_by_disability_italy"]');
//   if (!respondents_by_disability_italy_ctx) return;
  
  const respondents_by_disability_italy_data = {
    labels: ['  Yes  ', '  Prefer not to say  ', '  No  '],
    datasets: [
      {
        label: '  Respondents by disability',
        data: [4, 3, 93],
        backgroundColor: ['#80C7BD', '#FF5200', '#FFD836', '#698FFF', '#12141D'],
      }
    ]
  };

const respondents_by_disability_italy_config = {
  type: 'doughnut',
  data: respondents_by_disability_italy_data,
  options: {
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
        text: 'Respondents by disability'
      },
      
    }
  },
};
const respondents_by_disability_italy_chart = new Chart(respondents_by_disability_italy_ctx, respondents_by_disability_italy_config);
// Countries --- Respondents by Disability Italy Charts ------------------------------------//

// Countries --- Respondents by international status Italy Charts ------------------------------------//
const respondents_by_international_status_italy_ctx = document.querySelector('[data-element="respondents_by_international_status_italy"]');
//   if (!respondents_by_international_status_italy_ctx) return;
  
  const respondents_by_international_status_italy_data = {
    labels: ['  Yes  ', '  No  '],
    datasets: [
      {
        label: '  Respondents by international_status',
        data: [51.9, 48.1],
        backgroundColor: ['#80C7BD', '#FF5200'],
      }
    ]
  };

const respondents_by_international_status_italy_config = {
  type: 'doughnut',
  data: respondents_by_international_status_italy_data,
  options: {
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
        text: 'Respondents by international status'
      },
      
    }
  },
};
const respondents_by_international_status_italy_chart = new Chart(respondents_by_international_status_italy_ctx, respondents_by_international_status_italy_config);
// Countries --- Respondents by international status Italy Charts ------------------------------------//


// Countries --- Respondents by Student Type Italy Charts ------------------------------------//
const respondents_by_student_type_italy_ctx = document.querySelector('[data-element="respondents_by_student_type_italy"]');
//   if (!respondents_by_student_type_italy_ctx) return;
  
  const respondents_by_student_type_italy_data = {
    labels: ['  Postgraduate  ', '  Undergraduate  '],
    datasets: [
      {
        label: '  Respondents by student_type',
        data: [24.7, 75.3], 
        backgroundColor: ['#80C7BD', '#FF5200'],
      }
    ]
  };

const respondents_by_student_type_italy_config = {
  type: 'doughnut',
  data: respondents_by_student_type_italy_data,
  options: {
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
        text: 'Respondents by student type'
      },
      
    }
  },
};
const respondents_by_student_type_italy_chart = new Chart(respondents_by_student_type_italy_ctx, respondents_by_student_type_italy_config);
// Countries --- Respondents by Student Type Italy Charts ------------------------------------//


// Countries --- Respondents by Accomodation type Italy Charts ------------------------------------//
const respondents_by_accommodation_type_italy_ctx = document.querySelector('[data-element="respondents_by_accommodation_type_italy"]');
//   if (!respondents_by_accommodation_type_italy_ctx) return;
  
  const respondents_by_accommodation_type_italy_data = {
    labels: ['  PBSA  ', '  Other  '],
    datasets: [
      {
        label: '  Respondents by accommodation_type',
        data: [66.3, 33.7], 
        backgroundColor: ['#80C7BD', '#FF5200'],
      }
    ]
  };

const respondents_by_accommodation_type_italy_config = {
  type: 'doughnut',
  data: respondents_by_accommodation_type_italy_data,
  options: {
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
        text: 'Respondents by accommodation type'
      },
      
    }
  },
};
const respondents_by_accommodation_type_italy_chart = new Chart(respondents_by_accommodation_type_italy_ctx, respondents_by_accommodation_type_italy_config);
// Countries --- Respondents by Accomodation type Italy Charts ------------------------------------//

// Countries --- Respondents by Accomodation type Italy Charts ------------------------------------//
const respondents_by_undergraduate_year_of_study_italy_ctx = document.querySelector('[data-element="respondents_by_undergraduate_year_of_study_italy"]');
//   if (!respondents_by_undergraduate_year_of_study_italy_ctx) return;
  
  const respondents_by_undergraduate_year_of_study_italy_data = {
    labels: ['  1  ', '  2  ', '  3  ', '  4  ', '  Final  '],
    datasets: [
      {
        label: '  Respondents by undergraduate year of study',
        data: [21.4, 20.4, 26.1, 17.9, 14.3], 
        backgroundColor: ['#80C7BD', '#FF5200', '#F5E847', '#698FFF', '#12141D'],
      }
    ]
  };

const respondents_by_undergraduate_year_of_study_italy_config = {
  type: 'doughnut',
  data: respondents_by_undergraduate_year_of_study_italy_data,
  options: {
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
        text: 'Respondents by undergraduate year of study'
      },
      
    }
  },
};
const respondents_by_undergraduate_year_of_study_italy_chart = new Chart(respondents_by_undergraduate_year_of_study_italy_ctx, respondents_by_undergraduate_year_of_study_italy_config);
// Countries --- Respondents by Accomodation type Italy Charts ------------------------------------//

// Countries --- Italy Charts ------------------------------------//































// Countries --- Respondents by Gender Netherlands Charts ------------------------------------//
const respondents_by_gener_netherlands_ctx = document.querySelector('[data-element="respondents_by_gener_netherlands"]');
//   if (!respondents_by_gener_netherlands_ctx) return;
  
  const respondents_by_gender_netherlands_data = {
    labels: ['  Female  ', '  Male  ', '  Non-binary  ', '  Other  ', '  Prefer not to say  '],
    datasets: [
      {
        label: '  Respondents by gender',
        data: [62.2, 35.2, 2, 0, 0.6],
        backgroundColor: ['#80C7BD', '#FF5200', '#FFD836', '#698FFF', '#12141D'],
      }
    ]
  };

const respondents_by_gener_netherlands_config = {
  type: 'doughnut',
  data: respondents_by_gender_netherlands_data,
  options: {
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
        text: 'Respondents by gender'
      },
      
    }
  },
};
const respondents_by_gener_netherlands_chart = new Chart(respondents_by_gener_netherlands_ctx, respondents_by_gener_netherlands_config);
// Countries --- Respondents by Gender Netherlands Charts ------------------------------------//

// Countries --- Respondents by Disability Netherlands Charts ------------------------------------//
const respondents_by_disability_netherlands_ctx = document.querySelector('[data-element="respondents_by_disability_netherlands"]');
//   if (!respondents_by_disability_netherlands_ctx) return;
  
  const respondents_by_disability_netherlands_data = {
    labels: ['  Yes  ', '  Prefer not to say  ', '  No  '],
    datasets: [
      {
        label: '  Respondents by disability',
        data: [10.9, 3.8, 85.3],
        backgroundColor: ['#80C7BD', '#FF5200', '#FFD836', '#698FFF', '#12141D'],
      }
    ]
  };

const respondents_by_disability_netherlands_config = {
  type: 'doughnut',
  data: respondents_by_disability_netherlands_data,
  options: {
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
        text: 'Respondents by disability'
      },
      
    }
  },
};
const respondents_by_disability_netherlands_chart = new Chart(respondents_by_disability_netherlands_ctx, respondents_by_disability_netherlands_config);
// Countries --- Respondents by Disability Netherlands Charts ------------------------------------//

// Countries --- Respondents by international status Netherlands Charts ------------------------------------//
const respondents_by_international_status_netherlands_ctx = document.querySelector('[data-element="respondents_by_international_status_netherlands"]');
//   if (!respondents_by_international_status_netherlands_ctx) return;
  
  const respondents_by_international_status_netherlands_data = {
    labels: ['  Yes  ', '  No  '],
    datasets: [
      {
        label: '  Respondents by international_status',
        data: [83, 17],
        backgroundColor: ['#80C7BD', '#FF5200'],
      }
    ]
  };

const respondents_by_international_status_netherlands_config = {
  type: 'doughnut',
  data: respondents_by_international_status_netherlands_data,
  options: {
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
        text: 'Respondents by international status'
      },
      
    }
  },
};
const respondents_by_international_status_netherlands_chart = new Chart(respondents_by_international_status_netherlands_ctx, respondents_by_international_status_netherlands_config);
// Countries --- Respondents by international status Netherlands Charts ------------------------------------//


// Countries --- Respondents by Student Type Netherlands Charts ------------------------------------//
const respondents_by_student_type_netherlands_ctx = document.querySelector('[data-element="respondents_by_student_type_netherlands"]');
//   if (!respondents_by_student_type_netherlands_ctx) return;
  
  const respondents_by_student_type_netherlands_data = {
    labels: ['  Postgraduate  ', '  Undergraduate  '],
    datasets: [
      {
        label: '  Respondents by student_type',
        data: [22.7, 72.3 ], 
        backgroundColor: ['#80C7BD', '#FF5200'],
      }
    ]
  };

const respondents_by_student_type_netherlands_config = {
  type: 'doughnut',
  data: respondents_by_student_type_netherlands_data,
  options: {
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
        text: 'Respondents by student type'
      },
      
    }
  },
};
const respondents_by_student_type_netherlands_chart = new Chart(respondents_by_student_type_netherlands_ctx, respondents_by_student_type_netherlands_config);
// Countries --- Respondents by Student Type Netherlands Charts ------------------------------------//


// Countries --- Respondents by Accomodation type Netherlands Charts ------------------------------------//
const respondents_by_accommodation_type_netherlands_ctx = document.querySelector('[data-element="respondents_by_accommodation_type_netherlands"]');
//   if (!respondents_by_accommodation_type_netherlands_ctx) return;
  
  const respondents_by_accommodation_type_netherlands_data = {
    labels: ['  PBSA  ', '  Other  '],
    datasets: [
      {
        label: '  Respondents by accommodation_type',
        data: [88.8, 11.2], 
        backgroundColor: ['#80C7BD', '#FF5200'],
      }
    ]
  };

const respondents_by_accommodation_type_netherlands_config = {
  type: 'doughnut',
  data: respondents_by_accommodation_type_netherlands_data,
  options: {
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
        text: 'Respondents by accommodation type'
      },
      
    }
  },
};
const respondents_by_accommodation_type_netherlands_chart = new Chart(respondents_by_accommodation_type_netherlands_ctx, respondents_by_accommodation_type_netherlands_config);
// Countries --- Respondents by Accomodation type Netherlands Charts ------------------------------------//

// Countries --- Respondents by Accomodation type Netherlands Charts ------------------------------------//
const respondents_by_undergraduate_year_of_study_netherlands_ctx = document.querySelector('[data-element="respondents_by_undergraduate_year_of_study_netherlands"]');
//   if (!respondents_by_undergraduate_year_of_study_netherlands_ctx) return;
  
  const respondents_by_undergraduate_year_of_study_netherlands_data = {
    labels: ['  1  ', '  2  ', '  3  ', '  4  ', '  Final  '],
    datasets: [
      {
        label: '  Respondents by undergraduate year of study',
        data: [52.1, 20.9, 14, 3.9, 9.1], 
        backgroundColor: ['#80C7BD', '#FF5200', '#F5E847', '#698FFF', '#12141D'],
      }
    ]
  };

const respondents_by_undergraduate_year_of_study_netherlands_config = {
  type: 'doughnut',
  data: respondents_by_undergraduate_year_of_study_netherlands_data,
  options: {
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
        text: 'Respondents by undergraduate year of study'
      },
      
    }
  },
};
const respondents_by_undergraduate_year_of_study_netherlands_chart = new Chart(respondents_by_undergraduate_year_of_study_netherlands_ctx, respondents_by_undergraduate_year_of_study_netherlands_config);
// Countries --- Respondents by Accomodation type Netherlands Charts ------------------------------------//

// Countries --- Netherlands Charts ------------------------------------//



























// Countries --- Respondents by Gender Portugal Charts ------------------------------------//
const respondents_by_gener_portugal_ctx = document.querySelector('[data-element="respondents_by_gener_portugal"]');
//   if (!respondents_by_gener_portugal_ctx) return;
  
  const respondents_by_gender_portugal_data = {
    labels: ['  Female  ', '  Male  ', '  Non-binary  ', '  Other  ', '  Prefer not to say  '],
    datasets: [
      {
        label: '  Respondents by gender',
        data: [56.3, 42.2, 0.35, 0, 0.35],
        backgroundColor: ['#80C7BD', '#FF5200', '#FFD836', '#698FFF', '#12141D'],
      }
    ]
  };

const respondents_by_gener_portugal_config = {
  type: 'doughnut',
  data: respondents_by_gender_portugal_data,
  options: {
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
        text: 'Respondents by gender'
      },
      
    }
  },
};
const respondents_by_gener_portugal_chart = new Chart(respondents_by_gener_portugal_ctx, respondents_by_gener_portugal_config);
// Countries --- Respondents by Gender Portugal Charts ------------------------------------//

// Countries --- Respondents by Disability Portugal Charts ------------------------------------//
const respondents_by_disability_portugal_ctx = document.querySelector('[data-element="respondents_by_disability_portugal"]');
//   if (!respondents_by_disability_portugal_ctx) return;
  
  const respondents_by_disability_portugal_data = {
    labels: ['  Yes  ', '  Prefer not to say  ', '  No  '],
    datasets: [
      {
        label: '  Respondents by disability',
        data: [8.6, 3.3, 89.1],
        backgroundColor: ['#80C7BD', '#FF5200', '#FFD836', '#698FFF', '#12141D'],
      }
    ]
  };

const respondents_by_disability_portugal_config = {
  type: 'doughnut',
  data: respondents_by_disability_portugal_data,
  options: {
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
        text: 'Respondents by disability'
      },
      
    }
  },
};
const respondents_by_disability_portugal_chart = new Chart(respondents_by_disability_portugal_ctx, respondents_by_disability_portugal_config);
// Countries --- Respondents by Disability Portugal Charts ------------------------------------//

// Countries --- Respondents by international status Portugal Charts ------------------------------------//
const respondents_by_international_status_portugal_ctx = document.querySelector('[data-element="respondents_by_international_status_portugal"]');
//   if (!respondents_by_international_status_portugal_ctx) return;
  
  const respondents_by_international_status_portugal_data = {
    labels: ['  Yes  ', '  No  '],
    datasets: [
      {
        label: '  Respondents by international_status',
        data: [68, 32],
        backgroundColor: ['#80C7BD', '#FF5200'],
      }
    ]
  };

const respondents_by_international_status_portugal_config = {
  type: 'doughnut',
  data: respondents_by_international_status_portugal_data,
  options: {
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
        text: 'Respondents by international status'
      },
      
    }
  },
};
const respondents_by_international_status_portugal_chart = new Chart(respondents_by_international_status_portugal_ctx, respondents_by_international_status_portugal_config);
// Countries --- Respondents by international status Portugal Charts ------------------------------------//


// Countries --- Respondents by Student Type Portugal Charts ------------------------------------//
const respondents_by_student_type_portugal_ctx = document.querySelector('[data-element="respondents_by_student_type_portugal"]');
//   if (!respondents_by_student_type_portugal_ctx) return;
  
  const respondents_by_student_type_portugal_data = {
    labels: ['  Postgraduate  ', '  Undergraduate  '],
    datasets: [
      {
        label: '  Respondents by student_type',
        data: [35.9, 64.1], 
        backgroundColor: ['#80C7BD', '#FF5200'],
      }
    ]
  };

const respondents_by_student_type_portugal_config = {
  type: 'doughnut',
  data: respondents_by_student_type_portugal_data,
  options: {
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
        text: 'Respondents by student type'
      },
      
    }
  },
};
const respondents_by_student_type_portugal_chart = new Chart(respondents_by_student_type_portugal_ctx, respondents_by_student_type_portugal_config);
// Countries --- Respondents by Student Type Portugal Charts ------------------------------------//


// Countries --- Respondents by Accomodation type Portugal Charts ------------------------------------//
const respondents_by_accommodation_type_portugal_ctx = document.querySelector('[data-element="respondents_by_accommodation_type_portugal"]');
//   if (!respondents_by_accommodation_type_portugal_ctx) return;
  
  const respondents_by_accommodation_type_portugal_data = {
    labels: ['  PBSA  ', '  Other  '],
    datasets: [
      {
        label: '  Respondents by accommodation_type',
        data: [84.8, 15.2], 
        backgroundColor: ['#80C7BD', '#FF5200'],
      }
    ]
  };

const respondents_by_accommodation_type_portugal_config = {
  type: 'doughnut',
  data: respondents_by_accommodation_type_portugal_data,
  options: {
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
        text: 'Respondents by accommodation type'
      },
      
    }
  },
};
const respondents_by_accommodation_type_portugal_chart = new Chart(respondents_by_accommodation_type_portugal_ctx, respondents_by_accommodation_type_portugal_config);
// Countries --- Respondents by Accomodation type Portugal Charts ------------------------------------//

// Countries --- Respondents by Accomodation type Portugal Charts ------------------------------------//
const respondents_by_undergraduate_year_of_study_portugal_ctx = document.querySelector('[data-element="respondents_by_undergraduate_year_of_study_portugal"]');
//   if (!respondents_by_undergraduate_year_of_study_portugal_ctx) return;
  
  const respondents_by_undergraduate_year_of_study_portugal_data = {
    labels: ['  1  ', '  2  ', '  3  ', '  4  ', '  Final  '],
    datasets: [
      {
        label: '  Respondents by undergraduate year of study',
        data: [31.7, 22, 20.7, 9.8, 15.9], 
        backgroundColor: ['#80C7BD', '#FF5200', '#F5E847', '#698FFF', '#12141D'],
      }
    ]
  };

const respondents_by_undergraduate_year_of_study_portugal_config = {
  type: 'doughnut',
  data: respondents_by_undergraduate_year_of_study_portugal_data,
  options: {
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
        text: 'Respondents by undergraduate year of study'
      },
      
    }
  },
};
const respondents_by_undergraduate_year_of_study_portugal_chart = new Chart(respondents_by_undergraduate_year_of_study_portugal_ctx, respondents_by_undergraduate_year_of_study_portugal_config);
// Countries --- Respondents by Accomodation type Portugal Charts ------------------------------------//

// Countries --- Portugal Charts ------------------------------------//




























// Countries --- Respondents by Gender Spain Charts ------------------------------------//
const respondents_by_gener_spain_ctx = document.querySelector('[data-element="respondents_by_gener_spain"]');
//   if (!respondents_by_gener_spain_ctx) return;
  
  const respondents_by_gender_spain_data = {
    labels: ['  Female  ', '  Male  ', '  Non-binary  ', '  Other  ', '  Prefer not to say  '],
    datasets: [
      {
        label: '  Respondents by gender',
        data: [65.1, 33.4, 0.75, 0, 0.75],
        backgroundColor: ['#80C7BD', '#FF5200', '#FFD836', '#698FFF', '#12141D'],
      }
    ]
  };

const respondents_by_gener_spain_config = {
  type: 'doughnut',
  data: respondents_by_gender_spain_data,
  options: {
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
        text: 'Respondents by gender'
      },
      
    }
  },
};
const respondents_by_gener_spain_chart = new Chart(respondents_by_gener_spain_ctx, respondents_by_gener_spain_config);
// Countries --- Respondents by Gender Spain Charts ------------------------------------//

// Countries --- Respondents by Disability Spain Charts ------------------------------------//
const respondents_by_disability_spain_ctx = document.querySelector('[data-element="respondents_by_disability_spain"]');
//   if (!respondents_by_disability_spain_ctx) return;
  
  const respondents_by_disability_spain_data = {
    labels: ['  Yes  ', '  Prefer not to say  ', '  No  '],
    datasets: [
      {
        label: '  Respondents by disability',
        data: [6.5, 2.6, 90.9],
        backgroundColor: ['#80C7BD', '#FF5200', '#FFD836', '#698FFF', '#12141D'],
      }
    ]
  };

const respondents_by_disability_spain_config = {
  type: 'doughnut',
  data: respondents_by_disability_spain_data,
  options: {
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
        text: 'Respondents by disability'
      },
      
    }
  },
};
const respondents_by_disability_spain_chart = new Chart(respondents_by_disability_spain_ctx, respondents_by_disability_spain_config);
// Countries --- Respondents by Disability Spain Charts ------------------------------------//

// Countries --- Respondents by international status Spain Charts ------------------------------------//
const respondents_by_international_status_spain_ctx = document.querySelector('[data-element="respondents_by_international_status_spain"]');
//   if (!respondents_by_international_status_spain_ctx) return;
  
  const respondents_by_international_status_spain_data = {
    labels: ['  Yes  ', '  No  '],
    datasets: [
      {
        label: '  Respondents by international_status',
        data: [20.8, 79.2],
        backgroundColor: ['#80C7BD', '#FF5200'],
      }
    ]
  };

const respondents_by_international_status_spain_config = {
  type: 'doughnut',
  data: respondents_by_international_status_spain_data,
  options: {
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
        text: 'Respondents by international status'
      },
      
    }
  },
};
const respondents_by_international_status_spain_chart = new Chart(respondents_by_international_status_spain_ctx, respondents_by_international_status_spain_config);
// Countries --- Respondents by international status Spain Charts ------------------------------------//


// Countries --- Respondents by Student Type Spain Charts ------------------------------------//
const respondents_by_student_type_spain_ctx = document.querySelector('[data-element="respondents_by_student_type_spain"]');
//   if (!respondents_by_student_type_spain_ctx) return;
  
  const respondents_by_student_type_spain_data = {
    labels: ['  Postgraduate  ', '  Undergraduate  '],
    datasets: [
      {
        label: '  Respondents by student_type',
        data: [8.8, 91.2], 
        backgroundColor: ['#80C7BD', '#FF5200'],
      }
    ]
  };

const respondents_by_student_type_spain_config = {
  type: 'doughnut',
  data: respondents_by_student_type_spain_data,
  options: {
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
        text: 'Respondents by student type'
      },
      
    }
  },
};
const respondents_by_student_type_spain_chart = new Chart(respondents_by_student_type_spain_ctx, respondents_by_student_type_spain_config);
// Countries --- Respondents by Student Type Spain Charts ------------------------------------//


// Countries --- Respondents by Accomodation type Spain Charts ------------------------------------//
const respondents_by_accommodation_type_spain_ctx = document.querySelector('[data-element="respondents_by_accommodation_type_spain"]');
//   if (!respondents_by_accommodation_type_spain_ctx) return;
  
  const respondents_by_accommodation_type_spain_data = {
    labels: ['  PBSA  ', '  Other  '],
    datasets: [
      {
        label: '  Respondents by accommodation_type',
        data: [95.8, 4.2], 
        backgroundColor: ['#80C7BD', '#FF5200'],
      }
    ]
  };

const respondents_by_accommodation_type_spain_config = {
  type: 'doughnut',
  data: respondents_by_accommodation_type_spain_data,
  options: {
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
        text: 'Respondents by accommodation type'
      },
      
    }
  },
};
const respondents_by_accommodation_type_spain_chart = new Chart(respondents_by_accommodation_type_spain_ctx, respondents_by_accommodation_type_spain_config);
// Countries --- Respondents by Accomodation type Spain Charts ------------------------------------//

// Countries --- Respondents by Accomodation type Spain Charts ------------------------------------//
const respondents_by_undergraduate_year_of_study_spain_ctx = document.querySelector('[data-element="respondents_by_undergraduate_year_of_study_spain"]');
//   if (!respondents_by_undergraduate_year_of_study_spain_ctx) return;
  
  const respondents_by_undergraduate_year_of_study_spain_data = {
    labels: ['  1  ', '  2  ', '  3  ', '  4  ', '  Final  '],
    datasets: [
      {
        label: '  Respondents by undergraduate year of study',
        data: [50.8, 25.2, 14.8, 6, 3.2], 
        backgroundColor: ['#80C7BD', '#FF5200', '#F5E847', '#698FFF', '#12141D'],
      }
    ]
  };

const respondents_by_undergraduate_year_of_study_spain_config = {
  type: 'doughnut',
  data: respondents_by_undergraduate_year_of_study_spain_data,
  options: {
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
        text: 'Respondents by undergraduate year of study'
      },
      
    }
  },
};
const respondents_by_undergraduate_year_of_study_spain_chart = new Chart(respondents_by_undergraduate_year_of_study_spain_ctx, respondents_by_undergraduate_year_of_study_spain_config);
// Countries --- Respondents by Accomodation type Spain Charts ------------------------------------//

// Countries --- Spain Charts ------------------------------------//




























// Countries --- Respondents by Gender United Kingdom Charts ------------------------------------//
const respondents_by_gener_united_kingdom_ctx = document.querySelector('[data-element="respondents_by_gener_united_kingdom"]');
//   if (!respondents_by_gener_united_kingdom_ctx) return;
  
  const respondents_by_gender_united_kingdom_data = {
    labels: ['  Female  ', '  Male  ', '  Non-binary  ', '  Other  ', '  Prefer not to say  '],
    datasets: [
      {
        label: '  Respondents by gender',
        data: [63.4, 32.3, 2.3, 0, 2],
        backgroundColor: ['#80C7BD', '#FF5200', '#FFD836', '#698FFF', '#12141D'],
      }
    ]
  };

const respondents_by_gener_united_kingdom_config = {
  type: 'doughnut',
  data: respondents_by_gender_united_kingdom_data,
  options: {
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
        text: 'Respondents by gender'
      },
      
    }
  },
};
const respondents_by_gener_united_kingdom_chart = new Chart(respondents_by_gener_united_kingdom_ctx, respondents_by_gener_united_kingdom_config);
// Countries --- Respondents by Gender United Kingdom Charts ------------------------------------//

// Countries --- Respondents by Disability United Kingdom Charts ------------------------------------//
const respondents_by_disability_united_kingdom_ctx = document.querySelector('[data-element="respondents_by_disability_united_kingdom"]');
//   if (!respondents_by_disability_united_kingdom_ctx) return;
  
  const respondents_by_disability_united_kingdom_data = {
    labels: ['  Yes  ', '  Prefer not to say  ', '  No  '],
    datasets: [
      {
        label: '  Respondents by disability',
        data: [15, 5, 80],
        backgroundColor: ['#80C7BD', '#FF5200', '#FFD836', '#698FFF', '#12141D'],
      }
    ]
  };

const respondents_by_disability_united_kingdom_config = {
  type: 'doughnut',
  data: respondents_by_disability_united_kingdom_data,
  options: {
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
        text: 'Respondents by disability'
      },
      
    }
  },
};
const respondents_by_disability_united_kingdom_chart = new Chart(respondents_by_disability_united_kingdom_ctx, respondents_by_disability_united_kingdom_config);
// Countries --- Respondents by Disability United Kingdom Charts ------------------------------------//

// Countries --- Respondents by international status United Kingdom Charts ------------------------------------//
const respondents_by_international_status_united_kingdom_ctx = document.querySelector('[data-element="respondents_by_international_status_united_kingdom"]');
//   if (!respondents_by_international_status_united_kingdom_ctx) return;
  
  const respondents_by_international_status_united_kingdom_data = {
    labels: ['  Yes  ', '  No  '],
    datasets: [
      {
        label: '  Respondents by international_status',
        data: [26.3, 73.7],
        backgroundColor: ['#80C7BD', '#FF5200'],
      }
    ]
  };

const respondents_by_international_status_united_kingdom_config = {
  type: 'doughnut',
  data: respondents_by_international_status_united_kingdom_data,
  options: {
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
        text: 'Respondents by international status'
      },
      
    }
  },
};
const respondents_by_international_status_united_kingdom_chart = new Chart(respondents_by_international_status_united_kingdom_ctx, respondents_by_international_status_united_kingdom_config);
// Countries --- Respondents by international status United Kingdom Charts ------------------------------------//


// Countries --- Respondents by Student Type United Kingdom Charts ------------------------------------//
const respondents_by_student_type_united_kingdom_ctx = document.querySelector('[data-element="respondents_by_student_type_united_kingdom"]');
//   if (!respondents_by_student_type_united_kingdom_ctx) return;
  
  const respondents_by_student_type_united_kingdom_data = {
    labels: ['  Postgraduate  ', '  Undergraduate  '],
    datasets: [
      {
        label: '  Respondents by student_type',
        data: [14.1, 85.9], 
        backgroundColor: ['#80C7BD', '#FF5200'],
      }
    ]
  };

const respondents_by_student_type_united_kingdom_config = {
  type: 'doughnut',
  data: respondents_by_student_type_united_kingdom_data,
  options: {
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
        text: 'Respondents by student type'
      },
      
    }
  },
};
const respondents_by_student_type_united_kingdom_chart = new Chart(respondents_by_student_type_united_kingdom_ctx, respondents_by_student_type_united_kingdom_config);
// Countries --- Respondents by Student Type United Kingdom Charts ------------------------------------//


// Countries --- Respondents by Accomodation type United Kingdom Charts ------------------------------------//
const respondents_by_accommodation_type_united_kingdom_ctx = document.querySelector('[data-element="respondents_by_accommodation_type_united_kingdom"]');
//   if (!respondents_by_accommodation_type_united_kingdom_ctx) return;
  
  const respondents_by_accommodation_type_united_kingdom_data = {
    labels: ['  PBSA  ', '  Other  '],
    datasets: [
      {
        label: '  Respondents by accommodation_type',
        data: [80.6, 19.4], 
        backgroundColor: ['#80C7BD', '#FF5200'],
      }
    ]
  };

const respondents_by_accommodation_type_united_kingdom_config = {
  type: 'doughnut',
  data: respondents_by_accommodation_type_united_kingdom_data,
  options: {
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
        text: 'Respondents by accommodation type'
      },
      
    }
  },
};
const respondents_by_accommodation_type_united_kingdom_chart = new Chart(respondents_by_accommodation_type_united_kingdom_ctx, respondents_by_accommodation_type_united_kingdom_config);
// Countries --- Respondents by Accomodation type United Kingdom Charts ------------------------------------//

// Countries --- Respondents by Accomodation type United Kingdom Charts ------------------------------------//
const respondents_by_undergraduate_year_of_study_united_kingdom_ctx = document.querySelector('[data-element="respondents_by_undergraduate_year_of_study_united_kingdom"]');
//   if (!respondents_by_undergraduate_year_of_study_united_kingdom_ctx) return;
  
  const respondents_by_undergraduate_year_of_study_united_kingdom_data = {
    labels: ['  1  ', '  2  ', '  3  ', '  4  ', '  Final  '],
    datasets: [
      {
        label: '  Respondents by undergraduate year of study',
        data: [65.3, 19, 7.5, 1.6, 6.6], 
        backgroundColor: ['#80C7BD', '#FF5200', '#F5E847', '#698FFF', '#12141D'],
      }
    ]
  };

const respondents_by_undergraduate_year_of_study_united_kingdom_config = {
  type: 'doughnut',
  data: respondents_by_undergraduate_year_of_study_united_kingdom_data,
  options: {
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
        text: 'Respondents by undergraduate year of study'
      },
      
    }
  },
};
const respondents_by_undergraduate_year_of_study_united_kingdom_chart = new Chart(respondents_by_undergraduate_year_of_study_united_kingdom_ctx, respondents_by_undergraduate_year_of_study_united_kingdom_config);
// Countries --- Respondents by Accomodation type United Kingdom Charts ------------------------------------//

// Countries --- United Kingdom Charts ------------------------------------//







































// Countries --- Respondents by Gender finland Charts ------------------------------------//
const respondents_by_gener_finland_ctx = document.querySelector('[data-element="respondents_by_gener_finland"]');
//   if (!respondents_by_gener_finland_ctx) return;
  
  const respondents_by_gender_finland_data = {
    labels: ['  Female  ', '  Male  ', '  Non-binary  ', '  Other  ', '  Prefer not to say  '],
    datasets: [
      {
        label: '  Respondents by gender',
        data: [44.7, 52.6, 1.35, 0, 1.35],
        backgroundColor: ['#80C7BD', '#FF5200', '#FFD836', '#698FFF', '#12141D'],
      }
    ]
  };

const respondents_by_gener_finland_config = {
  type: 'doughnut',
  data: respondents_by_gender_finland_data,
  options: {
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
        text: 'Respondents by gender'
      },
      
    }
  },
};
const respondents_by_gener_finland_chart = new Chart(respondents_by_gener_finland_ctx, respondents_by_gener_finland_config);
// Countries --- Respondents by Gender finland Charts ------------------------------------//

// Countries --- Respondents by Disability finland Charts ------------------------------------//
const respondents_by_disability_finland_ctx = document.querySelector('[data-element="respondents_by_disability_finland"]');
//   if (!respondents_by_disability_finland_ctx) return;
  
  const respondents_by_disability_finland_data = {
    labels: ['  Yes  ', '  Prefer not to say  ', '  No  '],
    datasets: [
      {
        label: '  Respondents by disability',
        data: [12.4, 4.2, 83.4],
        backgroundColor: ['#80C7BD', '#FF5200', '#FFD836', '#698FFF', '#12141D'],
      }
    ]
  };

const respondents_by_disability_finland_config = {
  type: 'doughnut',
  data: respondents_by_disability_finland_data,
  options: {
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
        text: 'Respondents by disability'
      },
      
    }
  },
};
const respondents_by_disability_finland_chart = new Chart(respondents_by_disability_finland_ctx, respondents_by_disability_finland_config);
// Countries --- Respondents by Disability finland Charts ------------------------------------//

// Countries --- Respondents by international status finland Charts ------------------------------------//
const respondents_by_international_status_finland_ctx = document.querySelector('[data-element="respondents_by_international_status_finland"]');
//   if (!respondents_by_international_status_finland_ctx) return;
  
  const respondents_by_international_status_finland_data = {
    labels: ['  Yes  ', '  No  '],
    datasets: [
      {
        label: '  Respondents by international_status',
        data: [52.9, 47.1],
        backgroundColor: ['#80C7BD', '#FF5200'],
      }
    ]
  };

const respondents_by_international_status_finland_config = {
  type: 'doughnut',
  data: respondents_by_international_status_finland_data,
  options: {
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
        text: 'Respondents by international status'
      },
      
    }
  },
};
const respondents_by_international_status_finland_chart = new Chart(respondents_by_international_status_finland_ctx, respondents_by_international_status_finland_config);
// Countries --- Respondents by international status finland Charts ------------------------------------//


// Countries --- Respondents by Student Type finland Charts ------------------------------------//
const respondents_by_student_type_finland_ctx = document.querySelector('[data-element="respondents_by_student_type_finland"]');
//   if (!respondents_by_student_type_finland_ctx) return;
  
  const respondents_by_student_type_finland_data = {
    labels: ['  Postgraduate  ', '  Undergraduate  '],
    datasets: [
      {
        label: '  Respondents by student_type',
        data: [28.1, 71.9], 
        backgroundColor: ['#80C7BD', '#FF5200'],
      }
    ]
  };

const respondents_by_student_type_finland_config = {
  type: 'doughnut',
  data: respondents_by_student_type_finland_data,
  options: {
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
        text: 'Respondents by student type'
      },
      
    }
  },
};
const respondents_by_student_type_finland_chart = new Chart(respondents_by_student_type_finland_ctx, respondents_by_student_type_finland_config);
// Countries --- Respondents by Student Type finland Charts ------------------------------------//


// Countries --- Respondents by Accomodation type finland Charts ------------------------------------//
const respondents_by_accommodation_type_finland_ctx = document.querySelector('[data-element="respondents_by_accommodation_type_finland"]');
//   if (!respondents_by_accommodation_type_finland_ctx) return;
  
  const respondents_by_accommodation_type_finland_data = {
    labels: ['  PBSA  ', '  Other  '],
    datasets: [
      {
        label: '  Respondents by accommodation_type',
        data: [86.5, 13.5], 
        backgroundColor: ['#80C7BD', '#FF5200'],
      }
    ]
  };

const respondents_by_accommodation_type_finland_config = {
  type: 'doughnut',
  data: respondents_by_accommodation_type_finland_data,
  options: {
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
        text: 'Respondents by accommodation type'
      },
      
    }
  },
};
const respondents_by_accommodation_type_finland_chart = new Chart(respondents_by_accommodation_type_finland_ctx, respondents_by_accommodation_type_finland_config);
// Countries --- Respondents by Accomodation type finland Charts ------------------------------------//

// Countries --- Respondents by Accomodation type finland Charts ------------------------------------//
const respondents_by_undergraduate_year_of_study_finland_ctx = document.querySelector('[data-element="respondents_by_undergraduate_year_of_study_finland"]');
//   if (!respondents_by_undergraduate_year_of_study_finland_ctx) return;
  
  const respondents_by_undergraduate_year_of_study_finland_data = {
    labels: ['  1  ', '  2  ', '  3  ', '  4  ', '  Final  '],
    datasets: [
      {
        label: '  Respondents by undergraduate year of study',
        data: [34.1, 24.3, 17.6, 9.6, 14.5], 
        backgroundColor: ['#80C7BD', '#FF5200', '#F5E847', '#698FFF', '#12141D'],
      }
    ]
  };

const respondents_by_undergraduate_year_of_study_finland_config = {
  type: 'doughnut',
  data: respondents_by_undergraduate_year_of_study_finland_data,
  options: {
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
        text: 'Respondents by undergraduate year of study'
      },
      
    }
  },
};
const respondents_by_undergraduate_year_of_study_finland_chart = new Chart(respondents_by_undergraduate_year_of_study_finland_ctx, respondents_by_undergraduate_year_of_study_finland_config);
// Countries --- Respondents by Accomodation type finland Charts ------------------------------------//

// Countries --- finland Charts ------------------------------------//




















































// Countries --- Respondents by Gender ireland Charts ------------------------------------//
const respondents_by_gener_ireland_ctx = document.querySelector('[data-element="respondents_by_gener_ireland"]');
//   if (!respondents_by_gener_ireland_ctx) return;
  
  const respondents_by_gender_ireland_data = {
    labels: ['  Female  ', '  Male  ', '  Non-binary  ', '  Other  ', '  Prefer not to say  '],
    datasets: [
      {
        label: '  Respondents by gender',
        data: [60.6, 34.4, 3, 0, 2],
        backgroundColor: ['#80C7BD', '#FF5200', '#FFD836', '#698FFF', '#12141D'],
      }
    ]
  };

const respondents_by_gener_ireland_config = {
  type: 'doughnut',
  data: respondents_by_gender_ireland_data,
  options: {
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
        text: 'Respondents by gender'
      },
      
    }
  },
};
const respondents_by_gener_ireland_chart = new Chart(respondents_by_gener_ireland_ctx, respondents_by_gener_ireland_config);
// Countries --- Respondents by Gender ireland Charts ------------------------------------//

// Countries --- Respondents by Disability ireland Charts ------------------------------------//
const respondents_by_disability_ireland_ctx = document.querySelector('[data-element="respondents_by_disability_ireland"]');
//   if (!respondents_by_disability_ireland_ctx) return;
  
  const respondents_by_disability_ireland_data = {
    labels: ['  Yes  ', '  Prefer not to say  ', '  No  '],
    datasets: [
      {
        label: '  Respondents by disability',
        data: [9.4, 5.7, 84.9],
        backgroundColor: ['#80C7BD', '#FF5200', '#FFD836', '#698FFF', '#12141D'],
      }
    ]
  };

const respondents_by_disability_ireland_config = {
  type: 'doughnut',
  data: respondents_by_disability_ireland_data,
  options: {
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
        text: 'Respondents by disability'
      },
      
    }
  },
};
const respondents_by_disability_ireland_chart = new Chart(respondents_by_disability_ireland_ctx, respondents_by_disability_ireland_config);
// Countries --- Respondents by Disability ireland Charts ------------------------------------//

// Countries --- Respondents by international status ireland Charts ------------------------------------//
const respondents_by_international_status_ireland_ctx = document.querySelector('[data-element="respondents_by_international_status_ireland"]');
//   if (!respondents_by_international_status_ireland_ctx) return;
  
  const respondents_by_international_status_ireland_data = {
    labels: ['  Yes  ', '  No  '],
    datasets: [
      {
        label: '  Respondents by international_status',
        data: [57.6, 42.4],
        backgroundColor: ['#80C7BD', '#FF5200'],
      }
    ]
  };

const respondents_by_international_status_ireland_config = {
  type: 'doughnut',
  data: respondents_by_international_status_ireland_data,
  options: {
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
        text: 'Respondents by international status'
      },
      
    }
  },
};
const respondents_by_international_status_ireland_chart = new Chart(respondents_by_international_status_ireland_ctx, respondents_by_international_status_ireland_config);
// Countries --- Respondents by international status ireland Charts ------------------------------------//


// Countries --- Respondents by Student Type ireland Charts ------------------------------------//
const respondents_by_student_type_ireland_ctx = document.querySelector('[data-element="respondents_by_student_type_ireland"]');
//   if (!respondents_by_student_type_ireland_ctx) return;
  
  const respondents_by_student_type_ireland_data = {
    labels: ['  Postgraduate  ', '  Undergraduate  '],
    datasets: [
      {
        label: '  Respondents by student_type',
        data: [20.6, 79.4], 
        backgroundColor: ['#80C7BD', '#FF5200'],
      }
    ]
  };

const respondents_by_student_type_ireland_config = {
  type: 'doughnut',
  data: respondents_by_student_type_ireland_data,
  options: {
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
        text: 'Respondents by student type'
      },
      
    }
  },
};
const respondents_by_student_type_ireland_chart = new Chart(respondents_by_student_type_ireland_ctx, respondents_by_student_type_ireland_config);
// Countries --- Respondents by Student Type ireland Charts ------------------------------------//


// Countries --- Respondents by Accomodation type ireland Charts ------------------------------------//
const respondents_by_accommodation_type_ireland_ctx = document.querySelector('[data-element="respondents_by_accommodation_type_ireland"]');
//   if (!respondents_by_accommodation_type_ireland_ctx) return;
  
  const respondents_by_accommodation_type_ireland_data = {
    labels: ['  PBSA  ', '  Other  '],
    datasets: [
      {
        label: '  Respondents by accommodation_type',
        data: [91.3, 8.7], 
        backgroundColor: ['#80C7BD', '#FF5200'],
      }
    ]
  };

const respondents_by_accommodation_type_ireland_config = {
  type: 'doughnut',
  data: respondents_by_accommodation_type_ireland_data,
  options: {
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
        text: 'Respondents by accommodation type'
      },
      
    }
  },
};
const respondents_by_accommodation_type_ireland_chart = new Chart(respondents_by_accommodation_type_ireland_ctx, respondents_by_accommodation_type_ireland_config);
// Countries --- Respondents by Accomodation type ireland Charts ------------------------------------//

// Countries --- Respondents by Accomodation type ireland Charts ------------------------------------//
const respondents_by_undergraduate_year_of_study_ireland_ctx = document.querySelector('[data-element="respondents_by_undergraduate_year_of_study_ireland"]');
//   if (!respondents_by_undergraduate_year_of_study_ireland_ctx) return;
  
  const respondents_by_undergraduate_year_of_study_ireland_data = {
    labels: ['  1  ', '  2  ', '  3  ', '  4  ', '  Final  '],
    datasets: [
      {
        label: '  Respondents by undergraduate year of study',
        data: [35.2, 30.1, 22.9, 7.2, 4.7], 
        backgroundColor: ['#80C7BD', '#FF5200', '#F5E847', '#698FFF', '#12141D'],
      }
    ]
  };

const respondents_by_undergraduate_year_of_study_ireland_config = {
  type: 'doughnut',
  data: respondents_by_undergraduate_year_of_study_ireland_data,
  options: {
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
        text: 'Respondents by undergraduate year of study'
      },
      
    }
  },
};
const respondents_by_undergraduate_year_of_study_ireland_chart = new Chart(respondents_by_undergraduate_year_of_study_ireland_ctx, respondents_by_undergraduate_year_of_study_ireland_config);
// Countries --- Respondents by Accomodation type ireland Charts ------------------------------------//

// Countries --- ireland Charts ------------------------------------//










































// Countries --- Respondents by Gender sweden Charts ------------------------------------//
const respondents_by_gener_sweden_ctx = document.querySelector('[data-element="respondents_by_gener_sweden"]');
//   if (!respondents_by_gener_sweden_ctx) return;
  
  const respondents_by_gender_sweden_data = {
    labels: ['  Female  ', '  Male  ', '  Non-binary  ', '  Other  ', '  Prefer not to say  '],
    datasets: [
      {
        label: '  Respondents by gender',
        data: [59.4, 38.4, 1.1, 0, 1.1],
        backgroundColor: ['#80C7BD', '#FF5200', '#FFD836', '#698FFF', '#12141D'],
      }
    ]
  };

const respondents_by_gener_sweden_config = {
  type: 'doughnut',
  data: respondents_by_gender_sweden_data,
  options: {
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
        text: 'Respondents by gender'
      },
      
    }
  },
};
const respondents_by_gener_sweden_chart = new Chart(respondents_by_gener_sweden_ctx, respondents_by_gener_sweden_config);
// Countries --- Respondents by Gender sweden Charts ------------------------------------//

// Countries --- Respondents by Disability sweden Charts ------------------------------------//
const respondents_by_disability_sweden_ctx = document.querySelector('[data-element="respondents_by_disability_sweden"]');
//   if (!respondents_by_disability_sweden_ctx) return;
  
  const respondents_by_disability_sweden_data = {
    labels: ['  Yes  ', '  Prefer not to say  ', '  No  '],
    datasets: [
      {
        label: '  Respondents by disability',
        data: [14.8, 2.4, 82.8],
        backgroundColor: ['#80C7BD', '#FF5200', '#FFD836', '#698FFF', '#12141D'],
      }
    ]
  };

const respondents_by_disability_sweden_config = {
  type: 'doughnut',
  data: respondents_by_disability_sweden_data,
  options: {
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
        text: 'Respondents by disability'
      },
      
    }
  },
};
const respondents_by_disability_sweden_chart = new Chart(respondents_by_disability_sweden_ctx, respondents_by_disability_sweden_config);
// Countries --- Respondents by Disability sweden Charts ------------------------------------//

// Countries --- Respondents by international status sweden Charts ------------------------------------//
const respondents_by_international_status_sweden_ctx = document.querySelector('[data-element="respondents_by_international_status_sweden"]');
//   if (!respondents_by_international_status_sweden_ctx) return;
  
  const respondents_by_international_status_sweden_data = {
    labels: ['  Yes  ', '  No  '],
    datasets: [
      {
        label: '  Respondents by international_status',
        data: [13.3, 86.7],
        backgroundColor: ['#80C7BD', '#FF5200'],
      }
    ]
  };

const respondents_by_international_status_sweden_config = {
  type: 'doughnut',
  data: respondents_by_international_status_sweden_data,
  options: {
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
        text: 'Respondents by international status'
      },
      
    }
  },
};
const respondents_by_international_status_sweden_chart = new Chart(respondents_by_international_status_sweden_ctx, respondents_by_international_status_sweden_config);
// Countries --- Respondents by international status sweden Charts ------------------------------------//


// Countries --- Respondents by Student Type sweden Charts ------------------------------------//
const respondents_by_student_type_sweden_ctx = document.querySelector('[data-element="respondents_by_student_type_sweden"]');
//   if (!respondents_by_student_type_sweden_ctx) return;
  
  const respondents_by_student_type_sweden_data = {
    labels: ['  Postgraduate  ', '  Undergraduate  '],
    datasets: [
      {
        label: '  Respondents by student_type',
        data: [26.8, 73.2], 
        backgroundColor: ['#80C7BD', '#FF5200'],
      }
    ]
  };

const respondents_by_student_type_sweden_config = {
  type: 'doughnut',
  data: respondents_by_student_type_sweden_data,
  options: {
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
        text: 'Respondents by student type'
      },
      
    }
  },
};
const respondents_by_student_type_sweden_chart = new Chart(respondents_by_student_type_sweden_ctx, respondents_by_student_type_sweden_config);
// Countries --- Respondents by Student Type sweden Charts ------------------------------------//


// Countries --- Respondents by Accomodation type sweden Charts ------------------------------------//
const respondents_by_accommodation_type_sweden_ctx = document.querySelector('[data-element="respondents_by_accommodation_type_sweden"]');
//   if (!respondents_by_accommodation_type_sweden_ctx) return;
  
  const respondents_by_accommodation_type_sweden_data = {
    labels: ['  PBSA  ', '  Other  '],
    datasets: [
      {
        label: '  Respondents by accommodation_type',
        data: [69.9, 30.1], 
        backgroundColor: ['#80C7BD', '#FF5200'],
      }
    ]
  };

const respondents_by_accommodation_type_sweden_config = {
  type: 'doughnut',
  data: respondents_by_accommodation_type_sweden_data,
  options: {
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
        text: 'Respondents by accommodation type'
      },
      
    }
  },
};
const respondents_by_accommodation_type_sweden_chart = new Chart(respondents_by_accommodation_type_sweden_ctx, respondents_by_accommodation_type_sweden_config);
// Countries --- Respondents by Accomodation type sweden Charts ------------------------------------//

// Countries --- Respondents by Accomodation type sweden Charts ------------------------------------//
const respondents_by_undergraduate_year_of_study_sweden_ctx = document.querySelector('[data-element="respondents_by_undergraduate_year_of_study_sweden"]');
//   if (!respondents_by_undergraduate_year_of_study_sweden_ctx) return;
  
  const respondents_by_undergraduate_year_of_study_sweden_data = {
    labels: ['  1  ', '  2  ', '  3  ', '  4  ', '  Final  '],
    datasets: [
      {
        label: '  Respondents by undergraduate year of study',
        data: [25.3, 28.4, 23, 12.8, 10.5], 
        backgroundColor: ['#80C7BD', '#FF5200', '#F5E847', '#698FFF', '#12141D'],
      }
    ]
  };

const respondents_by_undergraduate_year_of_study_sweden_config = {
  type: 'doughnut',
  data: respondents_by_undergraduate_year_of_study_sweden_data,
  options: {
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
        text: 'Respondents by undergraduate year of study'
      },
      
    }
  },
};
const respondents_by_undergraduate_year_of_study_sweden_chart = new Chart(respondents_by_undergraduate_year_of_study_sweden_ctx, respondents_by_undergraduate_year_of_study_sweden_config);
// Countries --- Respondents by Accomodation type sweden Charts ------------------------------------//

// Countries --- sweden Charts ------------------------------------//
















const respondents_by_gener_czechia_ctx = document.querySelector('[data-element="respondents_by_gener_czechia"]');
//   if (!respondents_by_gener_czechia_ctx) return;
  
const respondents_by_gender_czechia_data = {
    labels: ['  Female  ', '  Male  ', '  Non-binary  ', '  Other  ', '  Prefer not to say  '],
    datasets: [
      {
        label: '  Respondents by gender',
        data: [57.1, 39.3, 2.5, 0, 2.7],
        backgroundColor: ['#80C7BD', '#FF5200', '#FFD836', '#698FFF', '#12141D'],
      }
    ]
  };

const respondents_by_gener_czechia_config = {
  type: 'doughnut',
  data: respondents_by_gender_czechia_data,
  options: {
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
        text: 'Respondents by gender'
      },
      
    }
  },
};
const respondents_by_gener_czechia_chart = new Chart(respondents_by_gener_czechia_ctx, respondents_by_gener_czechia_config);
// Countries --- Respondents by Gender Czechia Charts ------------------------------------//

// Countries --- Respondents by Disability Czechia Charts ------------------------------------//
const respondents_by_disability_czechia_ctx = document.querySelector('[data-element="respondents_by_disability_czechia"]');
//   if (!respondents_by_disability_czechia_ctx) return;
  
const respondents_by_disability_czechia_data = {
    labels: ['  Yes  ', '  Prefer not to say  ', '  No  '],
    datasets: [
      {
        label: '  Respondents by disability',
        data: [7.1, 6.4, 86.4],
        backgroundColor: ['#80C7BD', '#FF5200', '#FFD836', '#698FFF', '#12141D'],
      }
    ]
  };

const respondents_by_disability_czechia_config = {
  type: 'doughnut',
  data: respondents_by_disability_czechia_data,
  options: {
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
        text: 'Respondents by disability'
      },
      
    }
  },
};
const respondents_by_disability_czechia_chart = new Chart(respondents_by_disability_czechia_ctx, respondents_by_disability_czechia_config);
// Countries --- Respondents by Disability Czechia Charts ------------------------------------//

// Countries --- Respondents by international status Czechia Charts ------------------------------------//
const respondents_by_international_status_czechia_ctx = document.querySelector('[data-element="respondents_by_international_status_czechia"]');
//   if (!respondents_by_international_status_czechia_ctx) return;
  
const respondents_by_international_status_czechia_data = {
    labels: ['  Yes  ', '  No  '],
    datasets: [
      {
        label: '  Respondents by international_status',
        data: [91.4, 8.6],
        backgroundColor: ['#80C7BD', '#FF5200'],
      }
    ]
  };

const respondents_by_international_status_czechia_config = {
  type: 'doughnut',
  data: respondents_by_international_status_czechia_data,
  options: {
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
        text: 'Respondents by international status'
      },
      
    }
  },
};
const respondents_by_international_status_czechia_chart = new Chart(respondents_by_international_status_czechia_ctx, respondents_by_international_status_czechia_config);
// Countries --- Respondents by international status Czechia Charts ------------------------------------//

// Countries --- Respondents by Student Type Czechia Charts ------------------------------------//
const respondents_by_student_type_czechia_ctx = document.querySelector('[data-element="respondents_by_student_type_czechia"]');
//   if (!respondents_by_student_type_czechia_ctx) return;
  
const respondents_by_student_type_czechia_data = {
    labels: ['  Postgraduate  ', '  Undergraduate  '],
    datasets: [
      {
        label: '  Respondents by student_type',
        data: [15.7, 84.3], 
        backgroundColor: ['#80C7BD', '#FF5200'],
      }
    ]
  };

const respondents_by_student_type_czechia_config = {
  type: 'doughnut',
  data: respondents_by_student_type_czechia_data,
  options: {
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
        text: 'Respondents by student type'
      },
      
    }
  },
};
const respondents_by_student_type_czechia_chart = new Chart(respondents_by_student_type_czechia_ctx, respondents_by_student_type_czechia_config);
// Countries --- Respondents by Student Type Czechia Charts ------------------------------------//

// Countries --- Respondents by Accomodation type Czechia Charts ------------------------------------//
const respondents_by_accommodation_type_czechia_ctx = document.querySelector('[data-element="respondents_by_accommodation_type_czechia"]');
//   if (!respondents_by_accommodation_type_czechia_ctx) return;
  
const respondents_by_accommodation_type_czechia_data = {
    labels: ['  PBSA  ', '  Other  '],
    datasets: [
      {
        label: '  Respondents by accommodation_type',
        data: [100, 0], 
        backgroundColor: ['#80C7BD', '#FF5200'],
      }
    ]
  };

const respondents_by_accommodation_type_czechia_config = {
  type: 'doughnut',
  data: respondents_by_accommodation_type_czechia_data,
  options: {
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
        text: 'Respondents by accommodation type'
      },
      
    }
  },
};
const respondents_by_accommodation_type_czechia_chart = new Chart(respondents_by_accommodation_type_czechia_ctx, respondents_by_accommodation_type_czechia_config);
// Countries --- Respondents by Accomodation type Czechia Charts ------------------------------------//

// Countries --- Respondents by Undergraduate Year of Study Czechia Charts ------------------------------------//
const respondents_by_undergraduate_year_of_study_czechia_ctx = document.querySelector('[data-element="respondents_by_undergraduate_year_of_study_czechia"]');
//   if (!respondents_by_undergraduate_year_of_study_czechia_ctx) return;
  
const respondents_by_undergraduate_year_of_study_czechia_data = {
    labels: ['  1  ', '  2  ', '  3  ', '  4  ', '  Final  '],
    datasets: [
      {
        label: '  Respondents by undergraduate year of study',
        data: [33.9, 28.8, 26.3, 6.8, 4.2], 
        backgroundColor: ['#80C7BD', '#FF5200', '#F5E847', '#698FFF', '#12141D'],
      }
    ]
  };

const respondents_by_undergraduate_year_of_study_czechia_config = {
  type: 'doughnut',
  data: respondents_by_undergraduate_year_of_study_czechia_data,
  options: {
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
        text: 'Respondents by undergraduate year of study'
      },
      
    }
  },
};
const respondents_by_undergraduate_year_of_study_czechia_chart = new Chart(respondents_by_undergraduate_year_of_study_czechia_ctx, respondents_by_undergraduate_year_of_study_czechia_config);
// Countries --- Respondents by Undergraduate Year of Study Czechia Charts ------------------------------------//

// Countries --- Czechia Charts ------------------------------------//































const respondents_by_gener_poland_ctx = document.querySelector('[data-element="respondents_by_gener_poland"]');
//   if (!respondents_by_gener_poland_ctx) return;
  
const respondents_by_gender_poland_data = {
    labels: ['  Female  ', '  Male  ', '  Non-binary  ', '  Other  ', '  Prefer not to say  '],
    datasets: [
      {
        label: '  Respondents by gender',
        data: [57.5, 41, 0.1, 0, 1.6],
        backgroundColor: ['#80C7BD', '#FF5200', '#FFD836', '#698FFF', '#12141D'],
      }
    ]
  };

const respondents_by_gener_poland_config = {
  type: 'doughnut',
  data: respondents_by_gender_poland_data,
  options: {
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
        text: 'Respondents by gender'
      },
      
    }
  },
};
const respondents_by_gener_poland_chart = new Chart(respondents_by_gener_poland_ctx, respondents_by_gener_poland_config);
// Countries --- Respondents by Gender Poland Charts ------------------------------------//

// Countries --- Respondents by Disability Poland Charts ------------------------------------//
const respondents_by_disability_poland_ctx = document.querySelector('[data-element="respondents_by_disability_poland"]');
//   if (!respondents_by_disability_poland_ctx) return;
  
const respondents_by_disability_poland_data = {
    labels: ['  Yes  ', '  Prefer not to say  ', '  No  '],
    datasets: [
      {
        label: '  Respondents by disability',
        data: [13.2, 3.3, 83.5],
        backgroundColor: ['#80C7BD', '#FF5200', '#FFD836', '#698FFF', '#12141D'],
      }
    ]
  };

const respondents_by_disability_poland_config = {
  type: 'doughnut',
  data: respondents_by_disability_poland_data,
  options: {
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
        text: 'Respondents by disability'
      },
      
    }
  },
};
const respondents_by_disability_poland_chart = new Chart(respondents_by_disability_poland_ctx, respondents_by_disability_poland_config);
// Countries --- Respondents by Disability Poland Charts ------------------------------------//

// Countries --- Respondents by international status Poland Charts ------------------------------------//
const respondents_by_international_status_poland_ctx = document.querySelector('[data-element="respondents_by_international_status_poland"]');
//   if (!respondents_by_international_status_poland_ctx) return;
  
const respondents_by_international_status_poland_data = {
    labels: ['  Yes  ', '  No  '],
    datasets: [
      {
        label: '  Respondents by international_status',
        data: [69.8, 30.2],
        backgroundColor: ['#80C7BD', '#FF5200'],
      }
    ]
  };

const respondents_by_international_status_poland_config = {
  type: 'doughnut',
  data: respondents_by_international_status_poland_data,
  options: {
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
        text: 'Respondents by international status'
      },
      
    }
  },
};
const respondents_by_international_status_poland_chart = new Chart(respondents_by_international_status_poland_ctx, respondents_by_international_status_poland_config);
// Countries --- Respondents by international status Poland Charts ------------------------------------//

// Countries --- Respondents by Student Type Poland Charts ------------------------------------//
const respondents_by_student_type_poland_ctx = document.querySelector('[data-element="respondents_by_student_type_poland"]');
//   if (!respondents_by_student_type_poland_ctx) return;
  
const respondents_by_student_type_poland_data = {
    labels: ['  Postgraduate  ', '  Undergraduate  '],
    datasets: [
      {
        label: '  Respondents by student_type',
        data: [22.2, 77.8], 
        backgroundColor: ['#80C7BD', '#FF5200'],
      }
    ]
  };

const respondents_by_student_type_poland_config = {
  type: 'doughnut',
  data: respondents_by_student_type_poland_data,
  options: {
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
        text: 'Respondents by student type'
      },
      
    }
  },
};
const respondents_by_student_type_poland_chart = new Chart(respondents_by_student_type_poland_ctx, respondents_by_student_type_poland_config);
// Countries --- Respondents by Student Type Poland Charts ------------------------------------//

// Countries --- Respondents by Accomodation type Poland Charts ------------------------------------//
const respondents_by_accommodation_type_poland_ctx = document.querySelector('[data-element="respondents_by_accommodation_type_poland"]');
//   if (!respondents_by_accommodation_type_poland_ctx) return;
  
const respondents_by_accommodation_type_poland_data = {
    labels: ['  PBSA  ', '  Other  '],
    datasets: [
      {
        label: '  Respondents by accommodation_type',
        data: [93.6, 6.4], 
        backgroundColor: ['#80C7BD', '#FF5200'],
      }
    ]
  };

const respondents_by_accommodation_type_poland_config = {
  type: 'doughnut',
  data: respondents_by_accommodation_type_poland_data,
  options: {
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
        text: 'Respondents by accommodation type'
      },
      
    }
  },
};
const respondents_by_accommodation_type_poland_chart = new Chart(respondents_by_accommodation_type_poland_ctx, respondents_by_accommodation_type_poland_config);
// Countries --- Respondents by Accomodation type Poland Charts ------------------------------------//

// Countries --- Respondents by Undergraduate Year of Study Poland Charts ------------------------------------//
const respondents_by_undergraduate_year_of_study_poland_ctx = document.querySelector('[data-element="respondents_by_undergraduate_year_of_study_poland"]');
//   if (!respondents_by_undergraduate_year_of_study_poland_ctx) return;
  
const respondents_by_undergraduate_year_of_study_poland_data = {
    labels: ['  1  ', '  2  ', '  3  ', '  4  ', '  Final  '],
    datasets: [
      {
        label: '  Respondents by undergraduate year of study',
        data: [27.9, 15.2, 22.4, 21.8, 12.7], 
        backgroundColor: ['#80C7BD', '#FF5200', '#F5E847', '#698FFF', '#12141D'],
      }
    ]
  };

const respondents_by_undergraduate_year_of_study_poland_config = {
  type: 'doughnut',
  data: respondents_by_undergraduate_year_of_study_poland_data,
  options: {
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
        text: 'Respondents by undergraduate year of study'
      },
      
    }
  },
};
const respondents_by_undergraduate_year_of_study_poland_chart = new Chart(respondents_by_undergraduate_year_of_study_poland_ctx, respondents_by_undergraduate_year_of_study_poland_config);
// Countries --- Respondents by Undergraduate Year of Study Poland Charts ------------------------------------//

// Countries --- Poland Charts ------------------------------------//

















































//Domestic Interational Exchange CTX
const by_domestic_international_exchange_ctx = document.querySelector('[data-element="by_domestic_international_exchange"]');
  //if (!by_domestic_international_exchange_ctx) return;
  const by_domestic_international_exchange_data = {
    labels: ['  Domestic Students  ', '  International Students  ', '  Exchange Students  '],
    datasets: [
      {
        label: '  By Domestic international exchange',
        data: [5908, 3979, 1040], 
        backgroundColor: ['#80C7BD', '#FF5200', '#F5E847'],
      }
    ]
  };
const by_domestic_international_exchange_config = {
  type: 'doughnut',
  data: by_domestic_international_exchange_data,
  options: {
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
        text: 'By Domestic international exchange'
      },
    }
  },
};
const by_domestic_international_exchange_chart = new Chart(by_domestic_international_exchange_ctx, by_domestic_international_exchange_config);

//Level of study
const level_of_study_ctx = document.querySelector('[data-element="level_of_study"]');
  //if (!level_of_study_ctx) return;
  const level_of_study_data = {
    labels: ['  Undergraduate  ', '  Postgraduate  '],
    datasets: [
      {
        label: '  Level Of Study',
        data: [8479, 2448], 
        backgroundColor: ['#80C7BD', '#FF5200'],
      }
    ]
  };
const level_of_study_config = {
  type: 'doughnut',
  data: level_of_study_data,
  options: {
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
        text: 'Level Of Study'
      },
    }
  },
};
const level_of_study_chart = new Chart(level_of_study_ctx, level_of_study_config);

//By Country
const by_country_ctx = document.querySelector('[data-element="by_country"]');
  //if (!by_country_ctx) return;
  const by_country_data = {
    labels: ['  Portugal  ', '  Czechia  ', '  Belgium  ', '  Poland  ', '  Iceland  ', '  France  ', '  Italy  ', '  Denmark  ', '  Sweden  ', '  Ireland  ', '  Finland  ', '  Netherlands  ', '  Germany  ', '  Austria  ' , '  United Kingdom  ' , '  Spain  '],
    datasets: [
         {
      label: 'By Country',
      data:  [128, 140, 178, 212, 293, 315, 372, 416, 534, 616, 711, 741, 752, 972, 1718, 2703],
      borderColor: ['#80C7BD', '#80C7BD', '#80C7BD', '#80C7BD', '#80C7BD', '#80C7BD', '#80C7BD', '#80C7BD', '#80C7BD', '#80C7BD', '#80C7BD', '#80C7BD', '#80C7BD', '#80C7BD', '#80C7BD', '#80C7BD', '#80C7BD', '#80C7BD'],
      backgroundColor: ['#80C7BD', '#80C7BD', '#80C7BD', '#80C7BD', '#80C7BD', '#80C7BD', '#80C7BD', '#80C7BD', '#80C7BD', '#80C7BD', '#80C7BD', '#80C7BD', '#80C7BD', '#80C7BD', '#80C7BD', '#80C7BD', '#80C7BD', '#80C7BD'],
    }
    ]
  };
const by_country_config = {
  type: 'bar',
  data: by_country_data,
  options: {
    indexAxis: 'y',
    elements: {
      bar: {
        borderWidth: 2,
      }
    },
    responsive: true,
    plugins: {
      legend: {
        position: 'right',
      },
      title: {
        display: true,
        text: 'Respondents by Country'
      }
    }
  },
};
const by_country_chart = new Chart(by_country_ctx, by_country_config);

//By Accommodation Type
const by_accommodation_type_ctx = document.querySelector('[data-element="by_accommodation_type"]');
  //if (!by_accommodation_type_ctx) return;
  const by_accommodation_type_data = {
    labels: ['  Other  ', '  Public / social housing  ', '  With parents, guardians or relatives Rented house, flat or apartment  ', '  Rented house, flat or apartment  ', '  University owned student halls (on or off campus)  ', '  Student accommodation building owned by a private company  ', ],
    datasets: [
         {
      label: 'By Accommodation Type',
      data:  [114, 106, 137, 661, 2228, 7681],
      borderColor: ['#80C7BD', '#80C7BD', '#80C7BD', '#80C7BD', '#80C7BD', '#80C7BD'],
      backgroundColor: ['#80C7BD', '#80C7BD', '#80C7BD', '#80C7BD', '#80C7BD', '#80C7BD'],
    }
    ]
  };
const by_accommodation_type_config = {
  type: 'bar',
  data: by_accommodation_type_data,
  options: {
    indexAxis: 'y',
    elements: {
      bar: {
        borderWidth: 2,
      }
    },
    responsive: true,
    plugins: {
      legend: {
        position: 'right',
      },
      title: {
        display: true,
        text: 'Respondents per Accommodation Type'
      }
    }
  },
};
const by_accommodation_type_chart = new Chart(by_accommodation_type_ctx, by_accommodation_type_config);






const facilities_1_ctx = document.querySelector('[data-element="facilities_1"]');
// if (!country_benchmarking_chart_2_ctx) return;

const labels_facilities_1 = ['Community lounge / games area', 'Shared outdoor space', 'Organised community events & activities (online and offline, ResLife)', 'Gym', 'Room cleaning', 'Laundry facilties', 'Bookable shared spaces'];
const data_facilities_1 = {
  labels: labels_facilities_1,
  datasets: [
    {
      label: 'Non-users',
      data: ['55.84', '55.53', '55.84', '56.92', '57.70', '55.98', '57.11'],
      backgroundColor: ['#80C7BD', '#80C7BD','#80C7BD','#80C7BD','#80C7BD','#80C7BD','#80C7BD'],
      stack: 'Stack 0',
    },    
    {
      label: 'Average sometimes and often maths',
         data: ['60.47', '59.89', '60.71', '60.22', '60.20', '58.06', '60.48'],
      backgroundColor: ['#FF5200', '#FF5200','#FF5200','#FF5200','#FF5200','#FF5200','#FF5200'],
      stack: 'Stack 1',
    },
  ]
};

const config_facilities_1 = {
  type: 'bar',
  data: data_facilities_1,
  options: {
    plugins: {
      title: {
        display: true,
        text: 'Services and Facilities usage with greatest differential in MHI5 reported'
      },
    },
    responsive: true,
    interaction: {
      intersect: false,
    },
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
            min: 50,
            max: 60,
      }
    }
  }
};

const chart_facilities_1 = new Chart(facilities_1_ctx, config_facilities_1);



const facilities_2_ctx = document.querySelector('[data-element="facilities_2"]');
// if (!country_benchmarking_chart_2_ctx) return;

const labels_facilities_2 = [
  'Travel (bike / public transport card)',
  'A programme of events and activities',
  'Meals / catering (at least 2 meals per day)',
  'High speed Wi-Fi',
  'Contents insurance',
  'Access to social facilities (i.e. games room, study space, common room)',
  'Fully inclusive gas, electricity and water',
  'Free laundry facilities',
  'Parking for car and / or bike',
  'Charged laundry facilities'
];

const data_facilities_2 = {
  labels: labels_facilities_2,
  datasets: [
    {
      label: 'Included',
      data: ['7.21', '7.12', '7.29', '6.84', '7.04', '6.87', '6.8', '6.79', '7.03', '6.79'],
      backgroundColor: ['#80C7BD', '#80C7BD', '#80C7BD', '#80C7BD', '#80C7BD', '#80C7BD', '#80C7BD', '#80C7BD', '#80C7BD', '#80C7BD'],
      stack: 'Stack 0',
    },
    {
      label: 'Not included',
      data: ['6.76', '6.47', '6.74', '6.56', '6.73', '6.52', '6.67', '6.78', '6.67', '6.78'],
      backgroundColor: ['#FF5200', '#FF5200', '#FF5200', '#FF5200', '#FF5200', '#FF5200', '#FF5200', '#FF5200', '#FF5200', '#FF5200'],
      stack: 'Stack 1',
    }
  ]
};

const config_facilities_2 = {
  type: 'bar',
  data: data_facilities_2,
  options: {
    plugins: {
      title: {
        display: true,
        text: ''
      },
    },
    responsive: true,
    interaction: {
      intersect: false,
    },
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
            min: 6,
            max: 7.2,
      }
    }
  }
};

const chart_facilities_2 = new Chart(facilities_2_ctx, config_facilities_2);




const facilities_3_ctx = document.querySelector('[data-element="facilities_3"]');
// if (!country_benchmarking_chart_3_ctx) return;

const labels_facilities_3 = [
  'Study Areas',
  'Gym',
  'Community Lounge / Games Area',
  'Shared Outdoor Space',
  'Community Kitchen',
  'Cafe',
  'Restaurant',
  'Shared Bikes or Cars',
  'Laundry Facilities',
  'Cinema',
  'Swimming Pool',
  'Bookable Shared Spaces'
];

const data_facilities_3 = {
  labels: labels_facilities_3,
  datasets: [
    {
      label: 'Access',
      data: ['8720', '7351', '9184', '9265', '7474', '4066', '3679', '4346', '10245', '4782', '2840', '5998'],
      backgroundColor: ['#80C7BD', '#80C7BD', '#80C7BD', '#80C7BD', '#80C7BD', '#80C7BD', '#80C7BD', '#80C7BD', '#80C7BD', '#80C7BD', '#80C7BD', '#80C7BD'],
      stack: 'Stack 0',
    },
    {
      label: 'No Access',
      data: ['2207', '3576', '1743', '1662', '3453', '6861', '7248', '6581', '682', '6145', '8087', '4929'],
      backgroundColor: ['#FF5200', '#FF5200', '#FF5200', '#FF5200', '#FF5200', '#FF5200', '#FF5200', '#FF5200', '#FF5200', '#FF5200', '#FF5200', '#FF5200'],
      stack: 'Stack 1',
    }
  ]
};


const config_facilities_3 = {
  type: 'bar',
  data: data_facilities_3,
  options: {
    plugins: {
      title: {
        display: true,
        text: ''
      },
    },
    responsive: true,
    interaction: {
      intersect: false,
    },
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
            min: 12000,
            max: 0,
      }
    }
  }
};

const chart_facilities_3 = new Chart(facilities_3_ctx, config_facilities_3);





const facilities_4_ctx = document.querySelector('[data-element="facilities_4"]');
// if (!country_benchmarking_chart_4_ctx) return;

const labels_facilities_4 = [
  'Organised Community Events',
  'On-Site Reception',
  'On-Site Community Manager',
  'Students lead Community Groups',
  'Mental Health Services',
  'Security Staff',
  'Wi-Fi Support',
  'Repairs and Building Manager',
  'Cleaning of Shared Spaces',
  'Room Cleaning',
  'Community Networking App',
  'Rentable Facilities',
  'Parcel Delivery Service',
  'Mobile App',
  'Career / Job Support'
];

const data_facilities_4 = {
  labels: labels_facilities_4,
  datasets: [
    {
      label: 'Access',
      data: ['8444', '8396', '7615', '5990', '5221', '7479', '8524', '9658', '8287', '6541', '5961', '6841', '7966', '6285', '4463'],
      backgroundColor: ['#80C7BD', '#80C7BD', '#80C7BD', '#80C7BD', '#80C7BD', '#80C7BD', '#80C7BD', '#80C7BD', '#80C7BD', '#80C7BD', '#80C7BD', '#80C7BD', '#80C7BD', '#80C7BD', '#80C7BD'],
      stack: 'Stack 0',
    },
    {
      label: 'No Access',
      data: ['2483', '2531', '3312', '4937', '5706', '3448', '2403', '1269', '2640', '4386', '4966', '4086', '2961', '4642', '6464'],
      backgroundColor: ['#FF5200', '#FF5200', '#FF5200', '#FF5200', '#FF5200', '#FF5200', '#FF5200', '#FF5200', '#FF5200', '#FF5200', '#FF5200', '#FF5200', '#FF5200', '#FF5200', '#FF5200'],
      stack: 'Stack 1',
    }
  ]
};


const config_facilities_4 = {
  type: 'bar',
  data: data_facilities_4,
  options: {
    plugins: {
      title: {
        display: true,
        text: ''
      },
    },
    responsive: true,
    interaction: {
      intersect: false,
    },
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
            min: 12000,
            max: 0,
      }
    }
  }
};

const chart_facilities_4 = new Chart(facilities_4_ctx, config_facilities_4);



// Facilities Chart
const facilities_5_ctx = document.querySelector('[data-element="facilities_5"]');
// if (!facilities_5_ctx) return;
const facilities_5_data = {
  labels: [
    'On-site reception',
    'Parcel delivery service',
    'Repairs and building manager',
    'Mobile app',
    'Cleaning of shared spaces',
    'Wi-Fi support',
    'On-site community manager',
    'Security staff',
    'Room cleaning',
    'Organised community events & activities (online and offline, ResLife)',
    'Community networking app',
    'Mental health services (counselling, helpline etc)',
    'Student lead community groups',
    'Career / job support'
  ],
  datasets: [
    {
      label: 'Services',
      data: [8, 10, 11.1, 12.2, 14.1, 16.8, 17.3, 17.7, 18, 22.8, 22.9, 28.4, 29.6, 35.2],
      borderColor: '#80C7BD',
      backgroundColor: '#80C7BD',
    }
  ]
};

const facilities_5_config = {
  type: 'bar',
  data: facilities_5_data,
  options: {
    indexAxis: 'y',
    elements: {
      bar: {
        borderWidth: 2,
      }
    },
    responsive: true,
    plugins: {
      legend: {
        position: 'right',
      },
      title: {
        display: true,
        text: ''
      }
    }
  },
};

const facilities_5_chart = new Chart(facilities_5_ctx, facilities_5_config);



// Facilities Chart
const facilities_7_ctx = document.querySelector('[data-element="facilities_7"]');
// if (!facilities_7_ctx) return;
const facilities_7_data = {
  labels: [
    'Swimming Pool',
    'Career/job support',
    'Student lead community groups',
    'Cinema',
    'Mental health services',
    'Restaurant',
    'Cafe',
    'Shared bikes or cars'
  ],
  datasets: [
    {
      label: 'Services and Facilities with a Possitive Impact on Well-Being',
      data: [10.45, 8.73, 5.84, 5.72, 5.72, 3.48, 3.15, 0.2],
      borderColor: '#80C7BD',
      backgroundColor: '#80C7BD',
    }
  ]
};

const facilities_7_config = {
  type: 'bar',
  data: facilities_7_data,
  options: {
    indexAxis: 'y',
    elements: {
      bar: {
        borderWidth: 2,
      }
    },
    responsive: true,
    plugins: {
      legend: {
        position: 'right',
      },
      title: {
        display: true,
        text: ''
      }
    }
  },
};

const facilities_7_chart = new Chart(facilities_7_ctx, facilities_7_config);











const facilities_8_ctx = document.querySelector('[data-element="facilities_8"]');
// if (!facilities_8_ctx) return;

const labels_facilities_8 = [
  'Often',
  'Sometimes',
  'Never'
];

const data_facilities_8 = {
  labels: labels_facilities_8,
  datasets: [
    {
      label: 'Respondents taking part',
      data: ['62', '37.7', '31.3'],
      backgroundColor: ['#80C7BD', '#80C7BD', '#80C7BD'],
      stack: 'Stack 0',
    },
  ]
};

const config_facilities_8 = {
  type: 'bar',
  data: data_facilities_8,
  options: {
    plugins: {
      title: {
        display: true,
        text: 'Respondents taking part'
      },
    },
    responsive: true,
    interaction: {
      intersect: false,
    },
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
        min: 30,
        max: 63, // Corrected the range so the min is smaller than the max
      }
    }
  }
};

const chart_facilities_8 = new Chart(facilities_8_ctx, config_facilities_8);







const facilities_9_ctx = document.querySelector('[data-element="facilities_9"]');
// if (!facilities_9_ctx) return;

const labels_facilities_9 = [
  'Students reporting loneliness',
  'Students not loneley'
];

const data_facilities_9 = {
  labels: labels_facilities_9,
  datasets: [
    {
      label: 'Respondents taking part',
      data: ['49.6', '63.2'],
      backgroundColor: ['#80C7BD', '#80C7BD'],
      stack: 'Stack 0',
    },
  ]
};

const config_facilities_9 = {
  type: 'bar',
  data: data_facilities_9,
  options: {
    plugins: {
      title: {
        display: true,
        text: 'Respondents taking part'
      },
    },
    responsive: true,
    interaction: {
      intersect: false,
    },
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
        min: 40,
        max: 70, // Corrected the range so the min is smaller than the max
      }
    }
  }
};

const chart_facilities_9 = new Chart(facilities_9_ctx, config_facilities_9);








