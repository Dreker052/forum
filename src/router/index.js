import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/views/HomePage.vue";
import SubjectPage from "@/views/SubjectPage.vue";
import PostPage from "@/views/PostPage.vue";

const routes = [
  {
    path: "/",
    component: HomePage,
  },
  {
    path: "/:title",
    component: SubjectPage,
  },
  {
    path: "/:title/:id",
    component: PostPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
