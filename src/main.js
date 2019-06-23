import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/store";
import VeeValidate from "vee-validate";
import vco from "v-click-outside";
import VueHZoom from "vue-h-zoom";
// import "./registerServiceWorker";

import { library } from "@fortawesome/fontawesome-svg-core";

import {
  faShoppingCart,
  faUser,
  faTimes,
  faExclamationTriangle,
  faTextWidth,
  faPlus,
  faTrash,
  faUserCircle,
  faCartPlus,
  faCross,
  faClock,
  faTruck,
  faTasks,
  faCheck,
  faHome,
  faTachometerAlt,
  faUsersCog,
  faSignOutAlt,
  faMinus,
  faLaptopMedical,
  faPhone,
  faShoppingBasket,
  faFrown,
  faFrownOpen,
  faChevronUp,
  faChevronDown,
  faCog,
  faHospitalSymbol,
  faTicketAlt,
  faTh,
  faPills,
  faTag,
  faTags,
  faShoppingBag,
  faEdit,
  faPuzzlePiece
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import {
  faInstagram,
  faTwitterSquare,
  faFacebookSquare
} from "@fortawesome/free-brands-svg-icons";

import Axios from "axios";
Axios.defaults.headers.post["Content-Type"] = "application/vnd.api+json";

import titleMixin from "../src/mixins/titleMixin";

Vue.mixin(titleMixin);

require("dotenv").config();

Vue.prototype.$http = Axios;

Vue.config.errorHandler = err => {
  console.log("New Error man: ", err);
};

const token = localStorage.getItem("token");

Axios.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    console.log(error);
    const originalRequest = error.config;
    // token expired
    // if (error.response.status === 401) {
    //   console.log("Error 401");
    //   originalRequest._retry = true;
    //   store
    //     .dispatch("refreshToken")
    //     .then(response => {
    //       // console.log(response)
    //       // let token = response.data.token;
    //       // let headerAuth = "Bearer " + response.data.token;
    //       // store.dispatch("saveToken", token);
    //       // Axios.defaults.headers["Authorization"] = headerAuth;
    //       // originalRequest.headers["Authorization"] = headerAuth;
    //       // return Axios(originalRequest);
    //     })
    //     .catch(error => {
    //       // store
    //       //   .dispatch("logout")
    //       //   .then(() => {
    //       //     router.push({ name: "login" });
    //       //   })
    //       //   .catch(() => {
    //       //     router.push({ name: "login" });
    //       //   });
    //     });
    // }
    return Promise.reject(error);
  }
);

if (token) Axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

library.add(
  faInstagram,
  faTwitterSquare,
  faFacebookSquare,
  faShoppingCart,
  faUser,
  faTimes,
  faExclamationTriangle,
  faTextWidth,
  faPlus,
  faCross,
  faTrash,
  faUserCircle,
  faClock,
  faTasks,
  faTruck,
  faCheck,
  faHome,
  faTachometerAlt,
  faUsersCog,
  faSignOutAlt,
  faCartPlus,
  faPlus,
  faMinus,
  faLaptopMedical,
  faPhone,
  faShoppingBasket,
  faFrown,
  faFrownOpen,
  faChevronDown,
  faChevronUp,
  faCog,
  faUsersCog,
  faHospitalSymbol,
  faCartPlus,
  faTicketAlt,
  faTh,
  faPills,
  faTag,
  faTags,
  faShoppingBag,
  faEdit,
  faPuzzlePiece
);

Vue.use(VeeValidate);
Vue.use(vco);
Vue.use(VueHZoom);
Vue.component("icon-living", FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
