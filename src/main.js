import { createApp } from "vue";

import router from "./router";
import store from "./store";
import App from "./App.vue";
import BaseCard from "./components/ui/BaseCard";
import BaseBadge from "./components/ui/BaseBadge";
import BaseButton from "./components/ui/BaseButton";

const app = createApp(App);

app.use(router);
app.use(store);

app.component("base-card", BaseCard);
app.component("base-button", BaseButton);
app.component("base-badge", BaseBadge);

app.mount("#app");
