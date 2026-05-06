import './assets/css/index.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import { MaskInput } from 'vue-3-mask';

import { createMemoryHistory, createRouter } from 'vue-router'

import index from './views/index.vue'

const routes = [
  { path: '/', component: index },
]

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

import App from './App.vue'

const app = createApp(App).use(router)

app.use(createPinia())

app.component('MaskInput', MaskInput);

app.mount('#app')
