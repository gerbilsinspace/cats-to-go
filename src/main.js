import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('service-worker.js');
}

if ('Notification' in window) {
  let permissionStatus;
  Notification.requestPermission(status => {
    permissionStatus = status
    console.log('Notification permission status:', permissionStatus);
  });
}


new Vue({
  render: h => h(App)
}).$mount('#app')
