import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import VueGtag from "vue-gtag";
import "./assets/blue.css";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.use(VueGtag, {
  config: {
    id: import.meta.env.VUE_APP_GA_ID,
  },
});

app.mount("#app");
