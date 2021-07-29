import { createApp } from "vue";
import App from "./App.vue";
import Router from "./router";
import installElement from "./plugin/element";

const app = createApp(App);
installElement(app);
app.use(Router);

app.mount("#app");
