import './bootstrap';
import MUXapi from './api'
import { ChartManager } from './chart';

window.MUXapi = new MUXapi()

window.serverCharts = {}

window.addEventListener('load', () => {
  window.serverKeys.forEach((serverKey) => {
    window.serverCharts[serverKey] = new ChartManager(`${serverKey}-cpu-chart`, `${serverKey}-tasks-chart`, 60)
  })
  setInterval(async () => {
    const stat = await window.MUXapi.ServersListHealth()
    stat['data'].forEach((data) => {
      window.serverCharts[data.server.key].online = data.online
      window.serverCharts[data.server.key].pushDataInAll(data.health.cpu_load_avg, data.health.active_tasks)
    })
  }, 1000)
})