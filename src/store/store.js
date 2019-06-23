import Vue from "vue";
import Vuex from "vuex";

import {
  productGetter,
  pharmacies,
  categoriesGetter,
  categoryGetter,
  userGetter,
  cartGetter,
  urlGetter
} from "./getters";

import {
  userMutations,
  cartMutations,
  pharmaciesMutation,
  productMutations,
  categoryMutations,
  urlMutations
} from "./mutations";

import {
  productActions,
  pharmaciesActions,
  categoriesAction,
  categoryAction,
  userActions
} from "./actions";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  // for state management
  state: {
    cart: localStorage.getItem("cart") || [],
    showLoader: false,
    product: {},
    category: [],
    categories: [],
    manufacturers: [],
    token: localStorage.getItem("token") || "",
    user: JSON.parse(localStorage.getItem("user")) || {},
    merchant: JSON.parse(localStorage.getItem("merchant")) || {},
    isLoggedIn: false,
    authError: "",
    authErrors: [],
    merchantProducts: []
  },
  // actions
  actions: Object.assign(
    {},
    productActions,
    pharmaciesActions,
    categoriesAction,
    categoryAction,
    userActions
    // adminActions
  ),
  // getters
  getters: Object.assign(
    {},
    productGetter,
    pharmacies,
    categoriesGetter,
    categoryGetter,
    userGetter,
    cartGetter,
    urlGetter
    // adminGetter
  ),
  // mutations
  mutations: Object.assign(
    {},
    cartMutations,
    pharmaciesMutation,
    productMutations,
    categoryMutations,
    userMutations,
    urlMutations
    // adminMutations
  )
});
