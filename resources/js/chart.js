import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

export class ChartManager {
  constructor(cpuChartId, taskChartId, maxPoints) {
    this.maxPoints = maxPoints
    this.cpuChart = this.initChart(document.getElementById(cpuChartId).getContext('2d'), 'CPU load graph (%)', 'rgb(255, 195, 77)', 100);
    this.taskChart = this.initChart(document.getElementById(taskChartId).getContext('2d'), 'Task load graph (cnt)', 'rgb(75, 192, 192)', 5);
  }
  initChart(ctx, label, borderColor, max) {
    const labels = new Array(this.maxPoints).fill(""); // Creates an array with 100 null labels
    const data = new Array(this.maxPoints).fill(0); // Creates an array with 100 data points set to 0
    console.log(data, this.maxPoints)
    return new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: label,
                data: data,
                borderWidth: 1,
                fill: false,
                borderColor: borderColor,
                pointStyle: false
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    max: max,
                },
                x: {
                  ticks: {
                        font: {
                            size: 7,
                        }
                    }
                }
            }
        }
    });
  }
  updateChart(chart, lable, data, updateMax = false) {
    chart.data.labels.push(lable);
    chart.data.datasets[0].data.push(data);
    if (chart.data.labels.length > this.maxPoints) {
        chart.data.labels.shift();
        chart.data.datasets[0].data.shift();
    }
    if(updateMax)
      chart.options.scales.y.max = Math.max(...chart.data.datasets) + 5;
    chart.update();
  }
  pushDataInAll(cpuData, tasksData) {
    const currentDate = new Date();
    let hours = currentDate.getHours();
    let minutes = currentDate.getMinutes();
    let seconds = currentDate.getSeconds();

    hours = (hours < 10) ? `0${hours}` : hours;
    minutes = (minutes < 10) ? `0${minutes}` : minutes;
    seconds = (seconds < 10) ? `0${seconds}` : seconds;
  
    const currentTime = `${hours}:${minutes}:${seconds}`;
    this.updateChart(this.cpuChart, currentTime, cpuData)
    this.updateChart(this.taskChart, currentTime, tasksData, true)
  }
}