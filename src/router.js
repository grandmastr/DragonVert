import Vue from "vue";

// importing Router
import Router from "vue-router";

// importing routes
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import Cart from "./views/Cart.vue";
import Checkout from "./views/Checkout.vue";
import Category from "./views/Category.vue";
import ProductDetails from "./views/ProductDetails.vue";
import Categories from "./views/Categories.vue";
import Loader from "./partials/Loader.vue";
import Error from "./partials/404error.vue";
import productSlider from "./partials/ProductSlider.vue";
import Search from "./views/SearchResult.vue";
import unauthorized from "./partials/unauthorized.vue";
import Products from "./views/Products.vue";

// importing account routes
import Login from "./views/accounts/Login.vue";
import Register from "./views/accounts/Register.vue";
import ForgotPassword from "./views/accounts/forgotPassword.vue";
import Profile from "./views/accounts/Profile.vue";
import DashBoard from "./views/accounts/DashBoard.vue";
import superAdminDash from "./views/accounts/superAdminDash.vue";
import pharmacyRegister from "./views/accounts/pharmacyRegister.vue";
import completeProfile from "./views/accounts/completeProfile.vue";

// import productForm from "./views/accounts/productForm.vue";
import EditProduct from "./views/accounts/EditProduct.vue";
import PostProduct from "./views/accounts/PostProduct.vue";

// importing other pages
import Contact from "./views/Contact.vue";
import store from "./store/store";

Vue.use(Router);

let router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/loader",
      name: "loader",
      component: Loader
    },
    {
      path: "/about",
      name: "about",
      component: About
    },
    {
      path: "/contact",
      name: "contact",
      component: Contact
    },
    {
      path: "/equipments/:id",
      name: "productDetails",
      component: ProductDetails
    },
    {
      path: "/equipments",
      name: "products",
      component: Products
    },
    {
      path: "/cart",
      name: "cart",
      component: Cart
    },
    {
      path: "/categories",
      name: "Categories",
      component: Categories
    },
    {
      path: "/categories/:category",
      name: "Category",
      component: Category
    },
    {
      path: "/checkout",
      name: "checkout",
      component: Checkout
    },
    {
      path: "/product",
      component: productSlider
    },
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/register",
      name: "register",
      component: Register
    },
    {
      path: "/pharmacy/register",
      name: "pharmacyRegister",
      component: pharmacyRegister
    },
    {
      path: "/forgot-password",
      name: "forgotPassword",
      component: ForgotPassword
    },
    {
      path: "/search/:query",
      name: "search",
      component: Search
    },
    {
      path: "/diagnozed",
      name: "unauthorized",
      component: unauthorized
    },
    {
      path: "/admin",
      name: "admin",
      component: Profile,

      children: [
        {
          path: "user",
          component: superAdminDash
        },
        {
          path: "merchant",
          component: superAdminDash
        },
        {
          path: "complete-details",
          component: completeProfile
        },
        {
          path: "edit/:id",
          component: EditProduct
        },
        {
          path: "post",
          component: PostProduct
        }
      ],

      meta: {
        requiresAuth: true
      }
    },
    {
      path: "*",
      component: Error
    }
  ]
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.getters.isLoggedIn) {
      next({
        path: "/login",
        query: {
          redirectTo: to.fullPath // managing intended paths, there should be a better way but this will do for now
        }
      });
    } else {
      next();
    }
  } else {
    next(); //making sure to always call next
  }
});

export default router;
