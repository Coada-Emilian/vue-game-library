import { QueryClient, VueQueryPlugin } from "@tanstack/vue-query";
import { createApp } from "vue";
import router from "./router";

import App from "./App.vue";
import "./style.css";

const queryClient = new QueryClient();

createApp(App).use(router).use(VueQueryPlugin, { queryClient }).mount("#app");
