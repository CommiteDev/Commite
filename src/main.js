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
    id: "G-PVKT0CLN92",
  },
},router);

app.mount("#app");
