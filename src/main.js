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
import locale from 'element-plus/dist/locale/zh-cn';

// Send the POST request using the fetch API
fetch('/api/sys/login', {
  method: 'POST', // Specify the HTTP method
  headers: {
    'Content-Type': 'application/json' // Specify the content type as JSON
  },
  body: JSON.stringify({
    username: 'admin',
    password: 'Taiji+4321'
  }) // Convert the data object to a JSON string
})
  .then(response => response.json()) // Parse the response JSON
  .then(data => {
    console.log(data)
    const token = data.result.token
  })
  .catch((error) => {
    console.error('Error:', error); // Log any errors to the console
  });

// Composables
import { createApp } from "vue";

const app = createApp(App);

app.use(ElementPlus, {
  locale
})
// 全局注册所有图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

registerPlugins(app);

app.mount("#app");
