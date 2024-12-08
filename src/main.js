import '@/assets/scss/main.scss';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { createHead } from '@unhead/vue';
import Toaster from '@meforma/vue-toaster';
import router from '@/router';
import 'bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.scss';

import App from './App.vue';

const app = createApp(App);
const pinia = createPinia();
const head = createHead();

app
  .use(router)
  .use(pinia)
  .use(head)
  .use(Toaster, { position: 'top-right' })
  .provide('toast', app.config.globalProperties.$toast)
  .mount('#app');
