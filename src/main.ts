import { createApp } from 'vue'

import App from './App.vue'
//引入elmPlus全局icon
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
//引入router
import router from './router'

const app = createApp(App)
//引入elePlus图标插件
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

app.use(router)//挂载router实例
app.mount('#app')//挂载app实例