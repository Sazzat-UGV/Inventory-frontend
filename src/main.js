import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import VeeValidatePlugin from './utils/validation';

const app = createApp(App)

app.use(createPinia());
app.use(router);
app.use(VeeValidatePlugin);

app.mount('#app')
