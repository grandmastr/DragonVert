export const userGetter = {
  getUser: state => state.user,
  isLoggedIn: state => !!state.token,
  authStatus: state => state.userStatus,
  authError: state => state.authError
};

export const productGetter = {
  allProducts: (state, getters) => {
    return state.products;
  },
  allMerchantProducts: (state, getters) => {
    return state.merchantProducts;
  },
  productById: (state, getters) => id => {
    if (getters.allProducts.length > 0) {
      return getters.allProducts.filter(product => product.id === id);
    } else {
      return state.product;
    }
  }
};

export const categoryGetter = {
  getCategory: (state, getters) => {
    return state.category;
  }
};

export const categoriesGetter = {
  allCategories: (state, getters) => {
    return state.categories;
  }
};

export const pharmacies = {
  allManufacturers: state => state.manufacturers
};

export const cartGetter = {
  cart: state => state.cart
};

export const urlGetter = {
  next: state => state.next
};

export const adminGetter = {
  loadedDashComponent: state => state.loadedDashComponent
};
