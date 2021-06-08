export const dailyChartData={
  type:"line",
  data: {
    labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday","Sunday"],
    datasets: [
      {
        label:"Daily Income",
        data: [10000, 0, 7900, 820, 27, 14,50],
        borderColor: "#35a4ba"
      }
    ]
  },
  options: {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true
          }
        }
      ],
      xAxes: [
        {
          gridLines: {
            display: false
          }
        }
      ]
    },
    elements: {
      line: {
        fill: false,
        tension: 0,
        borderWidth: 4
      },
      point: {
        radius: 0,
        hitRadius: 5,
        hoverRadius: 5
      }
    },
    
  }
};

export default dailyChartData;
