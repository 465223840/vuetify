/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from "@/plugins";
import "./styles/tailwind.css";
// Components
import App from "./App.vue";
import "./styles/element-variables.scss";
import ElementPlus from 'element-plus';
import "./styles/main.scss";
import * as ElementPlusIconsVue from '@element-plus/icons-vue';

// Composables
import { createApp } from "vue";

const app = createApp(App);

app.use(ElementPlus)
// 全局注册所有图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

registerPlugins(app);

app.mount("#app");
