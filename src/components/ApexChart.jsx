import React from "react";
import Chart from "react-apexcharts";

const ApexChart = () => {
  const options = {
    chart: {
      id: "basic-bar",
      toolbar: {
        show: false
      }
    },
    colors: ['#ff4444', '#00cfff'],
    tooltip: {
        enabled: false
    },
    xaxis: {
      categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
      labels:{
        style:{
            fontSize: '15px'
        }
      }
    },
    stroke: {
        curve: 'smooth'
    }
  };

  const series = [
    {
      name: "series-1",
      data: [30, 40, 45, 50, 49, 60, 70, 91]
    },
    {
        name: "series-2",
        data: [10, 20, 35, 40, 39, 50, 60, 81]
      }
  ];

  return (
    <div className="app">
      <div className="row">
        <div className="mixed-chart">
          <Chart options={options} series={series} type="area" width="100%" />
        </div>
      </div>
    </div>
  );
};

export default ApexChart;
