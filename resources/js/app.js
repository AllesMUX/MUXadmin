import './bootstrap';
import MUXapi from './api'
import { ChartManager } from './chart';

window.MUXapi = new MUXapi()

window.serverCharts = {}

window.addEventListener('load', () => {
  if(window.serverKeys.length){
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
    
    Array.prototype.forEach.call(document.getElementsByClassName("btn-server-delete"), function (el) {
      el.addEventListener('click', async function() {
        if(this.dataset.confirm === 'true') {
          const result = await window.MUXapi.RemoveServer(this.dataset.key)
          if(result.status) {
            window.location.reload(false)
          } else {
            alert(result.error)
          }
        } else {
          const currentHTML = this.innerHTML
          this.dataset.confirm = 'true'
          this.innerHTML = 'Confirm <i class="bi bi-check2"></i>'
          setTimeout(() => {
            this.dataset.confirm = 'false'          
            this.innerHTML = currentHTML
          }, 3000)
        }
      })
    });
  }
})