import { createApp } from 'vue'
import './style.css'
import 'reset-css'
// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'
// import App from './App.vue'
// import BScroll from '@better-scroll/core'
import App from './components/Home.vue'

// import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper';
import 'swiper/css';
// import VueAnimateNumber from "vue-animate-number";
// import NumberAnimation from "vue-number-animation"

const app = createApp(App)
app.mount('#app')
app.use(VueAwesomeSwiper)
// app.use(router)
// createApp(App).use(VueAwesomeSwiper).use(router).mount('#app')
// app.use(ElementPlus)
// app.use(BScroll)
// app.use(NumberAnimation)



