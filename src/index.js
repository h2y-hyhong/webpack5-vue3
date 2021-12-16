import App from "./App.vue";
import { createApp } from "vue";
import store from "./store";
import router from "./router";
import axios from "axios";

const app = createApp(App);
app.config.globalProperties.$axios2 = axios;
app.provide("$axios", axios);
app.use(store).use(router).mount("#app");
