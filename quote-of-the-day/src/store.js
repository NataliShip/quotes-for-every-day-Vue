import Vue from "vue";
import Vuex from "vuex";
import fetchJsonp from "fetch-jsonp";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    quotes: [],
  },
  mutations: {
    addQuote(state, json) {
      state.quotes.push(json);
    }
  },
  actions: {
    fetchQuote({ commit }) {
      const api =
        "https://api.forismatic.com/api/1.0/?method=getQuote&lang=ru&format=jsonp&jsonp=parse";
      fetchJsonp(api, {
        jsonpCallbackFunction: "parse"
      })
        .then(response => {
          return response.json();
        })
        .then(json => {
          console.log("parsed json", json);
          commit('addQuote', json)
        })
        .catch(ex => {
          console.log("parsing failed", ex);
        });
    }
  }
});
