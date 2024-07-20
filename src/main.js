import { createApp } from 'vue'
import './style.css'
import 'reset-css'
// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'
// import App from './App.vue'
// import BScroll from '@better-scroll/core'
import App from './components/Home.vue'

const app = createApp(App)
// app.use(ElementPlus)
app.mount('#app')
// app.use(BScroll)
