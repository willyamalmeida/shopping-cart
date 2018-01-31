import Vuex from 'vuex';
import Vue from 'vue';
import shop from '@/api/shop';

Vue.use(Vuex);

export default new Vuex.Store({
  state: { // = data
    products: []
  },

  getters: { // = computed properties
    availableProducts (state, getters) {
      return state.products.filter(product => product.inventory > 0);
    }
  },

  actions: { // = methods
    fetchProducts(context) {
      // make the call
      // call setProducts mutation
      shop.getProducts(products => {
        context.commit('setProducts', products);
      });
    }
  },

  mutations: {
    setProducts(state, products) {
      // update products
      state.products = products;
    }
  }
});
