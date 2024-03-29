import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueParticles from 'vue-particles'
// import "@/assets/app.css";
// import Notifications from "vue-notification";


Vue.use(VueParticles);
// Vue.use(Notifications);
Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')