import Vue from "vue";
import VueRouter from "vue-router";
import CreateArticle from "../views/CreateArticle.vue";
import ListArticle from "../views/ListArticle.vue";
import EditArticle from "../views/EditArticle.vue";

Vue.use(VueRouter);

const routes = [{
    path: "/articles",
    name: "Home",
    redirect: "/articles/index"
  },
  {
    path: "/articles/index",
    name: "index",
    component: ListArticle
  },
  {
    path: "/articles/create",
    name: "create",
    component: CreateArticle
  },
  {
    path: "/articles/edit/:id",
    name: "edit",
    component: EditArticle
  }
];

const router = new VueRouter({
  routes
});

export default router;