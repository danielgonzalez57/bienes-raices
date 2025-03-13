import './index.css'
import PrimeVue from 'primevue/config';

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Aura from '@primeuix/themes/aura';
import Button from "primevue/button"

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(PrimeVue, {
  theme: {
      preset: Aura
  }
});
app.component('Button-item', Button);

app.mount('#app')
