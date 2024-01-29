import { createApp } from "vue";
import App from "./App.vue";
import upperFirst from "lodash/upperFirst";
import camelCase from "lodash/camelCase";
import router from "@/router";

const app = createApp(App);
app.use(router);
app.mount("#app");
