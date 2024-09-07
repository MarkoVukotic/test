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
        data: [52.8, 46.5, 0.35, 0, 0.35],
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
        data: [5, 0.7, 94.3],
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
        data: [91.1, 8.9],
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
        data: [50.4, 49.6], 
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
        data: [84.5, 15.5], 
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
        data: [35, 23.8, 19.3, 13.6, 9.3], 
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






const country_benchmarking_chart_2_ctx = document.querySelector('[data-element="country_benchmarking_chart_2"]');
// if (!country_benchmarking_chart_2_ctx) return;

const labels_country_benchmarking_chart_2 = ['Portugal', 'Spain', 'Austria', 'Denmark', 'Sweden', 'Poland', 'France', 'Finland', 'Italy', 'Germany', 'Czechia', 'Netherlands', 'Ireland', 'Belgium', 'Iceland', 'United Kingdom'];
const data_country_benchmarking_chart_2 = {
  labels: labels_country_benchmarking_chart_2,
  datasets: [
    {
      label: '  MHI-5   ',
      data: ['64.84', '61.04', '60.57', '60.24', '59.79', '59.79', '58.66', '57.82', '57.68', '57.26', '56.88', '56.59', '55.43', '55.21' , '54.32' ,'51.83'],
      borderColor: '#80C7BD',
      backgroundColor: transparentize('#80C7BD', 0.8),
      order: 1
    },
    {
      label: '  Traditional Net Promoter Score    ',
    data: ['41.40', '20.93', '3.60', '9.61', '25.65', '26.41', '-15.55', '24.75', '-1.07', '-19.94', '-32.14', '6.07', '-30.35', '-58.42' , '-2.04' ,'-5.00'],
      borderColor: '#FF5200',
      backgroundColor: transparentize('#FF5200', 1),
      type: 'line',
      order: 0
    }
    ,
    {
      label: '  MH Impact Net Promoter Score    ',
     data: ['10.15', '1.62', '-10.59', '-28.12', '-16.10', '-0.47', '-26.34', '-12.65', '-23.38', '-19.81', '-27.85', '-26.72', '-38.14', '-48.31' , '-35.83' ,'-34.49'],
      borderColor: '#f5e846',
      backgroundColor: transparentize('#f5e846', 1),
      type: 'line',
      order: 0
    }
  ]
};

const config_country_benchmarking_chart_2 = {
  type: 'bar',
  data: data_country_benchmarking_chart_2,
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
        text: 'country_benchmarking_chart_2 TITLE'
      }
    },
    scales: {
      y: {
        type: 'linear',
        display: true,
        position: 'left',
        min: 50,
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
        min: -35.0,
        max: 70.0,
        title: {
          display: true,
          text: 'MH Impact Net Promoter Score'
        },
        ticks: {stepSize: 10},
        grid: {
          drawOnChartArea: false, // only want the grid lines for one axis to show up
        }
      }
    },
  },
};

const chart_country_benchmarking_chart_2 = new Chart(country_benchmarking_chart_2_ctx, config_country_benchmarking_chart_2);






