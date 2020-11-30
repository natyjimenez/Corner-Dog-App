import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import firebase from "firebase";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    alias: "/home",
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/adoption",
    name: "Adoption",
    component: () =>
      import(/* webpackChunkName: "adoption" */ "../views/Adoption.vue"),
  },
  {
    path: "/enfermedades",
    name: "Enfermedades",
    component: () =>
      import(
        /* webpackChunkName: "enfermedades" */ "../views/Enfermedades.vue"
      ),
  },
  {
    path: "/breed",
    name: "Breed",
    component: () =>
      import(/* webpackChunkName: "breed" */ "../views/Breed.vue"),
  },
  {
    path: "/contact",
    name: "Contact",
    component: () =>
      import(/* webpackChunkName: "contact" */ "../views/Contact.vue"),
  },
  {
    path: "/admin",
    name: "Admin",
    component: () =>
      import(/* webpackChunkName: "admin" */ "../views/Admin.vue"),
  },
  {
    path: "/editor",
    name: "Editor",
    component: () =>
      import(/* webpackChunkName: "editor" */ "../views/Editor.vue"),
    meta: {
      login: true,
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  let usuario = firebase.auth().currentUser;
  console.log(usuario);
  let autorizacion = to.matched.some((route) => route.meta.login);

  if (!usuario && autorizacion) {
    next("admin");
  } else if (usuario && to.path == "/admin"){
    next("/editor");
  } else if (usuario && !autorizacion) {
    next();
  }
  next();
});

export default router;
