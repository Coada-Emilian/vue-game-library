import { QueryClient, VueQueryPlugin } from "@tanstack/vue-query";
import { createPinia } from "pinia";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { useLibraryStore } from "./stores/library.ts";
import "./style.css";

const queryClient = new QueryClient();
const pinia = createPinia();

const library = useLibraryStore(pinia);

library.$subscribe((_mutation, state) => {
  localStorage.setItem("library-games", JSON.stringify(state.games));
});

createApp(App)
  .use(router)
  .use(pinia)
  .use(VueQueryPlugin, { queryClient })
  .mount("#app");
