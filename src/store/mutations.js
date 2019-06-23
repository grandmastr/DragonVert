import {
  ADD_PRODUCT,
  ADD_PRODUCT_SUCCESS,
  PRODUCT_BY_ID,
  PRODUCT_BY_ID_SUCCESS,
  UPDATE_PRODUCT,
  UPDATE_PRODUCT_SUCCESS,
  REMOVE_PRODUCT,
  REMOVE_PRODUCT_SUCCESS,
  ADD_TO_CART,
  UPDATE_CART,
  USER_LOGIN,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_LOGOUT_SUCCESS,
  REMOVE_FROM_CART,
  EDIT_CART_PRODUCT_QUANTITY,
  ALL_PRODUCTS,
  ALL_PHARMACIES_SUCCESS,
  ALL_PRODUCTS_SUCCESS,
  ALL_PHARMACIES,
  ALL_CATEGORIES,
  ALL_CATEGORIES_SUCCESS,
  CATEGORY,
  CATEGORY_SUCCESS,
  LOAD_DASH_COMPONENT,
  LOADED_DASH_COMPONENT,
  UPDATE_URL,
  UPDATE_USER,
  UPDATE_MERCHANT,
  UPDATE_MERCHANT_PRODUCTS,
  ACTIVE_TAB
} from "./mutation-types";

export const userMutations = {
  [USER_LOGIN]: state => {
    state.showLoader = true;
  },
  [USER_LOGIN_SUCCESS]: (state, user) => {
    state.showLoader = false;
    state.isLoggedIn = true;
    state.user = user;
  },
  [USER_LOGOUT]: state => {
    state.isLoggedIn = false;
  },
  auth_request: state => {
    state.showLoader = true;
  },
  auth_success: (state, token) => {
    state.authErrors = [];
    state.token = token;
    state.showLoader = false;
    state.userStatus = "Authentication Successful";
  },
  auth_error: (state, error) => {
    state.authError = error;
    state.userStatus = "Authentication Error";
  },
  auth_errors: (state, errors) => {
    state.authErrors = errors;
    state.userStatus = "Authentication Error";
  },
  logout: state => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    state.showLoader = false;
    state.token = "";
    state.user = {};
  },
  [UPDATE_USER]: (state, payload) => {
    state.user = payload;
  },
  [UPDATE_MERCHANT]: (state, payload) => {
    state.merchant = payload;
  },
  [UPDATE_MERCHANT_PRODUCTS]: (state, payload) => {
    state.merchantProducts = payload;
  }
};

export const productMutations = {
  [ALL_PRODUCTS]: state => {
    state.showLoader = true;
  },

  [ALL_PRODUCTS_SUCCESS]: (state, payload) => {
    state.showLoader = false;
    state.products = payload;
  },
  [PRODUCT_BY_ID]: state => {
    state.showLoader = true;
  },
  [PRODUCT_BY_ID_SUCCESS]: (state, payload) => {
    state.showLoader = false;
    state.product = payload;
  },
  [ADD_PRODUCT]: state => {
    state.showLoader = true;
  },
  [ADD_PRODUCT_SUCCESS]: (state, payload) => {
    state.showLoader = false;
    state.products.push(payload);
  },
  [ALL_CATEGORIES]: state => {
    state.showLoader = true;
  },
  [ALL_CATEGORIES_SUCCESS]: (state, payload) => {
    state.showLoader = false;
    state.categories = payload;
  },
  [UPDATE_PRODUCT]: state => {
    state.showLoader = true;
  },
  [UPDATE_PRODUCT_SUCCESS]: (state, payload) => {
    state.showLoader = false;
    state.products = state.products.map(p => {
      if (p.id === payload.id) {
        payload = {
          ...payload,
          manufacturer: state.pharmacies.filter(
            x => x.id === payload.manufacturer[0]
          )
        };
        return payload;
      }
    });
  },
  [REMOVE_PRODUCT]: state => {
    state.showLoader = true;
  },
  [REMOVE_PRODUCT_SUCCESS]: (state, payload) => {
    state.showLoader = false;
    const index = state.products.findIndex(p => p.id === payload);
    state.products.splice(index, 1);
  }
};

export const cartMutations = {
  [ADD_TO_CART]: (state, payload) => {
    if (state.cart.indexOf(payload) > 0) {
      let index = state.cart.indexOf(payload);
      state.cart[index].quantityToPurchase += 1;
    } else {
      payload.quantityToPurchase = 1;
      state.cart.push(payload);
    }
  },
  [REMOVE_FROM_CART]: (state, payload) => {
    const index = state.cart.findIndex(p => p.id === payload);
    state.cart.splice(index, 1);
    console.log(state.cart, state.cart.length, index);
  },
  [UPDATE_CART]: (state, payload) => {
    state.cart = payload;
  }
};

export const pharmaciesMutation = {
  [ALL_PHARMACIES]: state => {
    state.showLoader = true;
  },
  [ALL_PHARMACIES_SUCCESS]: (state, payload) => {
    state.showLoader = false;
    state.pharmacies = payload;
  }
};

export const categoryMutations = {
  [CATEGORY]: state => {
    state.showLoader = true;
  },
  [CATEGORY_SUCCESS]: (state, payload) => {
    state.showLoader = false;
    if (payload === undefined)
      state.category = "No product available in this category yet";
    else state.category = payload;
  }
};

export const urlMutations = {
  [UPDATE_URL]: (state, payload) => {
    state.next = payload;
  }
};

export const adminMutations = {
  // [ACTIVE_TAB]: (state, payload) => {
  //   state.activeDashTab = payload;
  // },
  [LOAD_DASH_COMPONENT]: state => {
    state.loadedDashComponent = false;
  },
  [LOADED_DASH_COMPONENT]: state => {
    state.loadedDashComponent = true;
  }
};
