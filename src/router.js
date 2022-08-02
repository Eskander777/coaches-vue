import { createRouter, createWebHistory } from "vue-router";

import CoachesPage from "./pages/coaches/CoachesPage.vue";
import CoachPage from "./pages/coaches/CoachPage.vue";
import ContactPage from "./pages/coaches/ContactPage.vue";
import RegisterPage from "./pages/requests/RegisterPage.vue";
import RequestsPage from "./pages/requests/RequestsPage.vue";
import NotFoundPage from "./pages/NotFoundPage.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/coaches" },
    { path: "/coaches", component: CoachesPage },
    {
      path: "/coaches/:id",
      component: CoachPage,
      props: true,
      children: [{ path: "contact", component: ContactPage }],
    },
    { path: "/register", component: RegisterPage },
    { path: "/requests", component: RequestsPage },
    { path: "/:notFound(.*)", component: NotFoundPage },
  ],
});

export default router;
