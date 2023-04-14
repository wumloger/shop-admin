import { createApp } from 'vue'
import { createPinia } from 'pinia'

// import './style.css'
import App from './App.vue'
import elementPlus from 'element-plus'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import '../node_modules/element-plus/dist/index.css'
import 'virtual:windi.css'
import 'nprogress/nprogress.css'
import { router } from './router'

import './permission'


const app = createApp(App)

app.use(elementPlus)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
app.use(router)
app.use(createPinia())
app.mount('#app')
