import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import BootstrapVue3 from "bootstrap-vue-3";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

createApp(App).use(BootstrapVue3).use(store).use(router).mount("#app");
