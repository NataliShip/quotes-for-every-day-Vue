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
    },
    deleteQuote(state, quote) {
      const newState = state.quotes.filter(item => item.quoteText.toString() !== quote.toString())
      state.quotes = newState
    }
  },
  actions: {
    fetchQuote({ commit, state }) {
      const api =
        "https://api.forismatic.com/api/1.0/?method=getQuote&lang=ru&format=jsonp&jsonp=parse";
      fetchApi(api, commit, state);
    }
  }
});

export function fetchApi(api, commit, state) {
  fetchJsonp(api, {
    jsonpCallbackFunction: "parse"
  })
    .then(response => {
      return response.json();
    })
    .then(json => {
      console.log("parsed json", json);
      if (state.quotes.some(item => item.quoteText.toString() === json.quoteText.toString())) {
        // что бы не попадались одинаковые цитаты, при повторении делать еще один запрос
        fetchApi(api, commit, state);
      } else {
        commit('addQuote', json);
      }
    })
    .catch(ex => {
      console.log("parsing failed", ex);
    });
}
