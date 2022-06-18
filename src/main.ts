import {createApp} from 'vue';
import App from './App.vue'
import { createPinia } from 'pinia'
import router from './router'
import '@csstools/normalize.css';

// 数据持久化
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

// 蚂蚁金服
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

// console.log(router);

const app = createApp(App)
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate);
app.use(Antd)
app.use(router)
app.use(pinia)
app.mount('#app')