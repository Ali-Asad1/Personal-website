import React, { useState } from "react";
import Chart from "react-apexcharts";
import "./RadialBar.css";
export default function RadialBar({ serie, label }) {
  const [options, setOptions] = useState({
    chart: {
      type: "radialBar",
      fontFamily: "Nunito",
      animations: {
        enabled: true,
        easing: "easein",
        speed: 2000,
      },
    },
    plotOptions: {
      radialBar: {
        hollow: {
          size: "50%",
        },
        dataLabels: {
          name: {
            show: false,
          },
          value: {
            show: true,
            offsetX: 3,
            offsetY: 7,
            color: "#FFF",
            fontSize: "15px",
          },
        },
        track: {
          background: "#FFF",
          strokeWidth: "100%",
          opacity: "50%",
        },
      },
    },
    fill: {
      colors: ["#F6B846"],
      opacity: 1,
    },
    stroke: {
      lineCap: "round",
    },
    labels: [label],
    states: {
      hover: {
        filter: {
          type: "none",
          value: 0,
        },
      },
      active: {
        filter: {
          type: "none",
          value: 0,
        },
      },
    },
  });
  const [series, setSeries] = useState([serie]);

  return (
    <div className='chart-container'>
      <Chart options={options} series={series} type='radialBar' height={150} />
      <span className="chart-label">
        {label}
      </span>
    </div>
  );
}
