import "@/css/normalize.css";
import "@/css/style.css";

import { createApp } from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import { loadFonts } from "./plugins/webfontloader";
import { createYmaps } from "vue-yandex-maps";
import router from "./router";

loadFonts();

createApp(App)
  .use(router)
  .use(vuetify)
  .use(
    createYmaps({
      apikey: "5020e56a-a60b-4d89-97df-6846ee7e328c",
    })
  )
  .mount("#app");
