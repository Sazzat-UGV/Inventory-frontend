import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import VeeValidatePlugin from './utils/validation';
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';


const app = createApp(App)

app.use(createPinia());
app.use(router);
app.use(VeeValidatePlugin);
app.use(VueSweetalert2,{
    confirmButtonColor: '#A95EEA',
    cancelButtonColor: '#ff7674',
  });

app.mount('#app')
