import axios from "axios";
const API_BASE = "https://dragonvert.joppa.ng";

import {
  ADD_PRODUCT,
  ADD_PRODUCT_SUCCESS,
  ALL_CATEGORIES,
  ALL_CATEGORIES_SUCCESS,
  CATEGORY,
  UPDATE_MERCHANT_PRODUCTS,
  USER_LOGIN,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_LOGOUT_SUCCESS,
  CATEGORY_SUCCESS,
  PRODUCT_BY_ID,
  PRODUCT_BY_ID_SUCCESS,
  UPDATE_PRODUCT,
  UPDATE_PRODUCT_SUCCESS,
  REMOVE_PRODUCT,
  REMOVE_PRODUCT_SUCCESS,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  ALL_PRODUCTS,
  ALL_MANUFACTURERS_SUCCESS,
  ALL_PRODUCTS_SUCCESS,
  ALL_MANUFACTURERS,
  ACTIVE_TAB,
  UPDATE_USER,
  UPDATE_MERCHANT,
  UPDATE_CART
} from "./mutation-types";

// const axiosConfiguration = {
//   headers: {
//     'Content-Type': 'application/vnd.api+json'
//   }
// };

export const userActions = {
  login({ commit }, user) {
    return new Promise((resolve, reject) => {
      commit("auth_request");
      axios(`${API_BASE}/auth/login/`, {
        data: user,
        method: "POST",
        headers: { "Content-Type": "application/vnd.api+json" }
      })
        .then(response => {
          if (response.data.statusText === "error") {
            commit("auth_error", response.data.statusText);
            let errors = [...Object.values(response.data.data)];
            commit("auth_errors", errors);
            reject(response.data.statusText);
          } else {
            const { user, token } = response.data;
            localStorage.setItem("user", JSON.stringify(user));
            localStorage.setItem("token", token);
            axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
            commit("auth_success", token);
            commit(USER_LOGIN_SUCCESS, user);
            resolve(response);
          }
        })
        .catch(e => {
          commit("auth_error", e);
          console.log(e);
          localStorage.removeItem("token");
          reject(e);
        });
    });
  },
  register({ commit }, user) {
    return new Promise((resolve, reject) => {
      commit("auth_request");
      axios(`${API_BASE}/auth/registration/`, {
        data: user,
        method: "POST",
        headers: { "Content-Type": "application/vnd.api+json" }
      })
        .then(response => {
          const { user, token } = response.data;
          localStorage.removeItem("token");
          localStorage.setItem("token", token);
          localStorage.removeItem("user");
          localStorage.setItem("user", JSON.stringify(user));
          axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
          commit("auth_success", response.data);
          resolve(response);
        })
        .catch(e => {
          commit("auth_error", e);
          localStorage.removeItem("token");
          reject(e);
        });
    });
  },
  logout({ commit }) {
    return new Promise((resolve, reject) => {
      commit("logout");
      axios("https://dragonvert.joppa.ng/auth/logout/", {
        method: "POST",
        headers: { "Content-Type": "application/vnd.api+json" }
      })
        .then(response => {
          localStorage.removeItem("token");
          localStorage.removeItem("user");
          localStorage.removeItem("merchant");
          delete axios.defaults.headers.common["Authorization"];
          resolve();
        })
        .catch(e => reject());
    });
  },
  updateUser({ commit }, user) {
    return new Promise((resolve, reject) => {
      commit(UPDATE_USER, user);
      resolve();
    });
  },
  updateMerchant({ commit }, merchant) {
    return new Promise((resolve, reject) => {
      try {
        commit(UPDATE_MERCHANT, merchant);
        resolve();
      } catch (e) {
        console.log(e);
      }
    });
  }
};

export const productActions = {
  allProducts({ commit }) {
    commit(ALL_PRODUCTS);
    axios.get(`${API_BASE}/equipments`).then(response => {
      console.log(response);
      commit(ALL_PRODUCTS_SUCCESS, response.data);
    });
  },
  allMerchantProducts({ commit }, payload) {
    commit(UPDATE_MERCHANT_PRODUCTS, payload);
  },
  updateMerchantProducts({ commit }, id) {
    axios
      .get(`https://dragonvert.joppa.ng/equipments/?merchant=${id}`)
      .then(response => {
        console.log(response);
        commit(UPDATE_MERCHANT_PRODUCTS, response.data.data);
      });
  },
  productById({ commit }, payload) {
    commit(PRODUCT_BY_ID);
    axios.get(`${API_BASE}/products/${payload}`).then(response => {
      console.log(response);
      // commit(PRODUCT_BY_ID_SUCCESS, response.data.data.stock);
    });
  },
  updateCart({ commit }) {
    axios
      .get(`https://dragonvert.joppa.ng/cart/`)
      .then(response => {
        if (response.status === 200) {
          commit(UPDATE_CART, response.data.data);
        } else {
          // console.log();
        }
      })
      .catch(error => console.table(error));
  },
  addToCart({ commit }, data) {
    axios(`https://dragonvert.joppa.ng/cart/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/vnd.api+json"
      },
      data
    })
      .then(() => {
        axios.get("https://dragonvert.joppa.ng/cart/").then(response => {
          if (response.status === 200) commit(UPDATE_CART, response.data.data);
          else console.log(response);
        });
      })
      .catch(e => console.table(e));
  },
  removeFromCart({ commit }, id) {
    axios(`https://dragonvert.joppa.ng/cart/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/vnd.api+json"
      }
    })
      .then(() => {
        axios.get(`https://dragonvert.joppa.ng/cart/`).then(response => {
          if (response.status === 200) commit(UPDATE_CART, response.data.data);
          else console.log(response);
        });
      })
      .catch(e => console.table(e));
  }
};

export const categoryAction = {};

export const categoriesAction = {
  allCategories({ commit }) {
    commit(ALL_CATEGORIES);
    axios.get(`${API_BASE}/categories`).then(response => {
      commit(ALL_CATEGORIES_SUCCESS, response.data.data);
    });
  },
  category({ commit }, payload) {
    commit(CATEGORY);
    axios
      .get(`${API_BASE}/equipments/?main_category=${payload}`)
      .then(response => {
        console.log(response);
        commit(CATEGORY_SUCCESS, response.data.data);
      });
  }
};

export const pharmaciesActions = {};

export const adminActions = {
  // activeDashTab({ commit }, payload) {
  //   commit(ACTIVE_TAB, payload);
  // }
};
