import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    score: 0,
    running: false,
    cardCount: 3,
    animationStyle: 'fade',
    matched: [],
    selection: []
  },
  mutations: {
    changeCards(state, cardCount) {
      state.cardCount = cardCount
    },
    changeAnimation(state, animationStyle) {
      state.animationStyle = animationStyle
    },
    resetGame(state, payload=false){
      state.matched = [];
      state.selection = [];
      state.score = 0;
      state.running = payload;
    },
    increaseScore(state, payload) {
      state.score += payload;
    },
    decreaseScore(state, payload) {
      const newScore = (state.score - payload);
      state.score = newScore;
    },
    updateSelection(state, payload) {
      if (state.selection.indexOf(payload) == -1) {
        state.selection.push(payload);
      }
    },
    clearSelection(state, payload) {
      if (payload !== undefined) {
        state.selection = state.selection.filter(function(s){
          return (s !== payload);
        });
      }
      else {
        state.selection = [];
      }
    },
    updateMatched(state, payload) {
      if (state.matched.indexOf(payload) == -1) {
        state.matched.push(payload);
        state.selection = [];
      }
    }
  },
  actions: {
    changeCards(context, payload) {
      context.commit('changeCards', payload);
    },
    changeAnimation(context, payload) {
      context.commit('changeAnimation', payload);
    },
    resetGame(context, payload) {
      context.commit('resetGame', payload);
    },
    increaseScore(context, payload) {
      context.commit('increaseScore', payload);
    },
    decreaseScore(context, payload) {
      context.commit('decreaseScore', payload);
    },
    clearSelection(context, payload) {
      context.commit('clearSelection', payload);
    },
    updateSelection(context, payload) {
      context.commit('updateSelection', payload);
    },
    updateMatched(context, payload) {
      context.commit('updateMatched', payload);
      context.commit('increaseScore', 10);
    }
  },
  getters: {
    cardCount: state => state.cardCount,
    animationStyle: state => state.animationStyle,
    matched: state => state.matched,
    selection: state => state.selection,
    score: state => state.score,
    running: state => state.running
  }
})