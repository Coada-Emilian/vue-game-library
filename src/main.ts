import { QueryClient, VueQueryPlugin } from "@tanstack/vue-query";
import { createPinia } from "pinia";
import { createApp } from "vue";
import router from "./router";

import App from "./App.vue";
import "./style.css";

const queryClient = new QueryClient();
const pinia = createPinia();

createApp(App)
  .use(router)
  .use(pinia)
  .use(VueQueryPlugin, { queryClient })
  .mount("#app");
