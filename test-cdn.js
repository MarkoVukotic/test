import Chart from 'chart.js/auto';
import { randomNumbers, transparentize, countries } from 'src/utils/utils.js';

window.Webflow ||= [];
window.Webflow.push(() => {


//Area of little to no impact left chart -------------------------//

const area_of_little_to_no_impact_ctx = document.querySelector('[data-element="area_of_little_to_no_impact"]');
// if (!area_of_little_to_no_impact_ctx) return;

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

































































































  //Chart 1 ------------------------------------------------------------------------------------------------------------------------------
  const ctx1 = document.querySelector('[data-element="chart-1"]');
//   if (!ctx1) return;
  const services_and_facilities = ['Community lounge/games area', 'Shared outdoor space', 'Organised community events', 'Gym', 'Room cleaning', 'Laundry facilities', 'Bookable shared spaces'];
  const data = {
  labels: services_and_facilities,
  datasets: [
    {
      label: ' Users',
      data: [60.2,59.5,60.3,59.5,59.7,57.6,60.2],
      borderColor: '#80C7BD',
      backgroundColor: transparentize('#80C7BD', 0.8),
      order: 1
    },
    {
      label: ' Non-users',
      data: [54.7, 53.9, 55.3, 55.9, 56.5, 54.2, 57.3],
      borderColor: '#FF5200',
      backgroundColor: transparentize('#FF5200', 0.8),
      order: 1
    }
  ]
};

const config = {
  type: 'bar',
  data: data,
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
        text: 'Chart 1'
      }
    },
    scales: {
      y: {
        min: 48,
        max: 62,
      }
    }
  },
};

const chart1 = new Chart(ctx1, config);
//Chart 1 ------------------------------------------------------------------------------------------------------------------------------




//Chart 2 ------------------------------------------------------------------------------------------------------------------------------
const ctx2 = document.querySelector('[data-element="chart-2"]');
// if (!ctx2) return;

const labels = countries({ count: 12 });
const data1 = {
  labels: labels,
  datasets: [
    {
      label: ' Well-being_NPS',
      data: [61,60.5,60.4,59,58.5,58.2,55.5,55.5,54.9,53.5,53,56.5],
      borderColor: '#FF5200',
      backgroundColor: transparentize('#FF5200', 1),
      type: 'line',
      order: 1
    }, 
    {
      label: ' NPS',
      data: [57,54.1,59,58.9,61,57.9,61,53,53.9,55,54.5,55.8],
      borderColor: '#FFD836',
      backgroundColor: transparentize('#FFD836', 1),
      type: 'line',
      order: 1
    },
    {
      label: ' MHI-5',
      data: [61,60.5,60.4,59,58.5,58.2,55.5,55.5,54.9,53.5,53,56.5],
      borderColor: '#80C7BD',
      backgroundColor: transparentize('#80C7BD', 0.8),
      order: 1
    }
  ]
};

const config1 = {
  type: 'bar',
  data: data1,
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
        text: 'At the Country Level'
      }
    },
    scales: {
      y: {
        min: 48,
        max: 62,
      }
    }
  },
};

const chart2 = new Chart(ctx2, config1);
//Chart 2 ------------------------------------------------------------------------------------------------------------------------------

const ctx3 = document.querySelector('[data-element="chart-3"]');
// if (!ctx3) return;

const DATA_COUNT = 5;
const NUMBER_CFG = {count: DATA_COUNT, min: 0, max: 100};

const data3 = {
  labels: ['Female', 'Male', 'Non-binary', 'Other', 'Prefer not to say'],
  datasets: [
    {
      label: '  Respondents by gender',
      data: [61.8, 34.6, 2.6, 0, 1], // Replace these numbers with actual data as needed
      backgroundColor: ['#80C7BD', '#FF5200', '#FFD836', '#698FFF', '#12141D'], // Replace with actual colors
    }
  ]
};

const config3 = {
  type: 'doughnut',
  data: data3,
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Chart 3'
      }
    }
  },
};

const chart3 = new Chart(ctx3, config3);

//Chart 3 ------------------------------------------------------------------------------------------------------------------------------


//Chart 4 ------------------------------------------------------------------------------------------------------------------------------
const ctx4 = document.querySelector('[data-element="chart-4"]');
// if (!ctx4) return;

const labels4 = ['Career/job support', 'Student lead community groups', 'Organised community events', 'Community networking ap', 'Mobile app', 'Mental Health Services', 'Room cleaning', 'On-site community manager', 'Security measures and staff', 'Parcel delivery service', 'Wifi support', 'On-site reception', 'Cleaning of shared spaces', 'Repairs and building manager']
const data4 = {
  labels: labels4,
  datasets: [
    {
      label: '',
      data: [15,6.9,1.6,-1.1,0.7,2.1,-6.8, -6.8, -3.9, -8.1, -11.1, -10.9, -13.3, -15.2],
      borderColor: '#80C7BD',
      backgroundColor: transparentize('#80C7BD', 0.8),
    },
  ]
};

const config4 = {
  type: 'bar',
  data: data4,
  options: {
    indexAxis: 'y',
    // Elements options apply to all of the options unless overridden in a dataset
    // In this case, we are setting the border of each horizontal bar to be 2px wide
    elements: {
      bar: {
        borderWidth: 2,
      }
    },
    responsive: true,
    plugins: {
      legend: {
        position: 'right',
        display: false
      },
      title: {
        display: true,
        text: 'Chart 4'
      }
    }
  },
};
const chart4 = new Chart(ctx4, config4);

//Chart 4 ------------------------------------------------------------------------------------------------------------------------------


//Chart 5 ------------------------------------------------------------------------------------------------------------------------------


const ctx5 = document.querySelector('[data-element="chart-5"]');
// if (!ctx5) return;

const labels5 = ['Lonliness', 'Bullying', 'Discrimination', 'Relationships', 'Alcohol/substance use', 'Making friends', 'Getting on with housemates', 'Home-sickness', 'Work life balance', 'Workload', 'Study skills', 'Improving academic performance', 'Coursework and exams', 'Understanding cource content', 'Knowing where to find support', 'Confidence', 'Knowing how to make the most out of my time at university', 'Commuting']
const data5 = {
  labels: labels,
  datasets: [
    {
      label: ' Well-being_NPS',
      data: [20,30,50.4,10,12,22,55.5,55.5,54.9,23.5,10,58.5],
      borderColor: '#FF5200',
      backgroundColor: transparentize('#FF5200', 1),
      type: 'line',
      order: 1
    }, 
    {
      label: ' MHI-5',
      data: [40,70,40.4,55,58.5,48.2,55.5,55.5,51.9,63.5,73,36.5],
      borderColor: '#80C7BD',
      backgroundColor: transparentize('#80C7BD', 0.8),
      order: 1
    }, 
    {
      label: ' MHI-5',
      data: [61,60.5,60.4,59,58.5,58.2,55.5,55.5,54.9,53.5,53,56.5],
      borderColor: '#058069',
      backgroundColor: transparentize('#058069', 0.8),
      order: 1
    }
  ]
};

const config5 = {
  type: 'bar',
  data: data5,
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
        text: 'Chart 5'
      }
    },
    scales: {
      yAxes: [{
          ticks: {
              beginAtZero: true
          }
      }]
  }
  },
};

const chart5 = new Chart(ctx5, config5);

//Chart 5 ------------------------------------------------------------------------------------------------------------------------------


//Chart 6 ------------------------------------------------------------------------------------------------------------------------------

// const ctx6 = document.querySelector('[data-element="chart-6"]');
// if (!ctx6) return;

// const DATA_COUNT = 7;
// const NUMBER_CFG = {count: DATA_COUNT, rmin: 1, rmax: 1, min: -100, max: 100};

// // Function to generate bubble data
// function generateBubbles(cfg) {
//   const data = [];
//   for (let i = 0; i < cfg.count; i++) {
//     data.push({
//       x: Math.random() * (cfg.max - cfg.min) + cfg.min,
//       y: Math.random() * (cfg.max - cfg.min) + cfg.min,
//       r: Math.random() * (cfg.rmax - cfg.rmin) + cfg.rmin,
//     });
//   }
//   return data;
// }

// // Define chart colors
// const CHART_COLORS = {
//   red: 'rgb(255, 99, 132)',
//   orange: 'rgb(255, 159, 64)',
// };

// // Function to make a color transparent
// function transparentize(color, opacity) {
//   const alpha = 1 - opacity;
//   return color.replace('rgb', 'rgba').replace(')', `, ${alpha})`);
// }

// const data6 = {
//   datasets: [
//     {
//       label: 'Dataset 1',
//       data: generateBubbles(NUMBER_CFG),
//       borderColor: CHART_COLORS.red,
//       backgroundColor: transparentize(CHART_COLORS.red, 0.5),
//       yAxisID: 'y',
//     },
//     {
//       label: 'Dataset 2',
//       data: generateBubbles(NUMBER_CFG),
//       borderColor: CHART_COLORS.orange,
//       backgroundColor: transparentize(CHART_COLORS.orange, 0.5),
//       yAxisID: 'y2',
//     }
//   ]
// };

// console.log(data);


// const config6 = {
//   type: 'scatter',
//   data: data6,
//   options: {
//     responsive: true,
//     plugins: {
//       legend: {
//         position: 'top',
//       },
//       title: {
//         display: true,
//         text: 'Chart.js Scatter Multi Axis Chart'
//       }
//     },
//     scales: {
//       y: {
//         type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
//         position: 'left',
//         ticks: {
//           color: '#FF5200'
//         }
//       },
//       y2: {
//         type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
//         position: 'right',
//         reverse: true,
//         ticks: {
//           color: '#058069'
//         },
//         grid: {
//           drawOnChartArea: false // only want the grid lines for one axis to show up
//         }
//       }
//     }
//   },
// };

// const chart6 = new Chart(ctx6, config6);
//Chart 6 ------------------------------------------------------------------------------------------------------------------------------
});
