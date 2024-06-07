 import './bootstrap';
 import MUXapi from './api'
 window.MUXapi = new MUXapi()
 

     window.addEventListener('load', function() {
         const form = document.getElementById('serverForm');
         const protocol = document.getElementById('protocol');
         const ipv4 = document.getElementById('ipv4');
         const port = document.getElementById('port');
         const worker_port = document.getElementById('worker_port');

         form.addEventListener('submit', async function(event) {
             event.preventDefault();
             event.stopPropagation();
             let error = false;
             if (form.checkValidity() === false) {
                 error = true;
             } else {
                 if (!validateIPv4(ipv4) || !validatePorts(port, worker_port)) {
                     error = true;
                 }
             }
             form.classList.add('was-validated');
             if (!error) {
                 const result = await window.MUXapi.AddServer(
                   protocol.value,
                   ipv4.value,
                   port.value,
                   worker_port.value
                 )
                 if(result.status) {
                    window.location.reload(false)
                 } else {
                    alert(result.error)
                 }
                 return
             }
         }, false);
     }, false);

     function validateIPv4(ipv4) {
         const ipv4Pattern = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
         if (!ipv4Pattern.test(ipv4.value)) {
             ipv4.setCustomValidity('Invalid');
             return false;
         } else {
             ipv4.setCustomValidity('');
             return true;
         }
     }

     function validatePorts(port, worker_port) {
         const portPattern = /^([1-9][0-9]{0,3}|[1-5][0-9]{4}|6[0-4][0-9]{3}|65[0-4][0-9]{2}|655[0-2][0-9]|6553[0-5])$/;
         let valid = true;

         if (!portPattern.test(port.value)) {
             port.setCustomValidity('Invalid');
             valid = false;
         } else {
             port.setCustomValidity('');
         }

         if (!portPattern.test(worker_port.value)) {
             worker_port.setCustomValidity('Invalid');
             valid = false;
         } else {
             worker_port.setCustomValidity('');
         }

         return valid;
     }
 