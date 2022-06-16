import {createApp} from 'vue';
import App from './App.vue'
import router from './router'
import '@csstools/normalize.css';
import { createPinia } from 'pinia'
// 蚂蚁金服
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

// console.log(router);

const app = createApp(App)
const pinia = createPinia()
app.use(Antd)
app.use(router)
app.use(pinia)
app.mount('#app')