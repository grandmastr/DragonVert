import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/store";
import VeeValidate from "vee-validate";
import vco from "v-click-outside";
import VueHZoom from "vue-h-zoom";
// import "./registerServiceWorker";

const log = console.log;

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

const token = localStorage.getItem("token");

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
