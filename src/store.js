import { createStore } from 'redux'
import defaultState from './defaultState';

const GET_QUOTE = 'GET_QUOTE';

let quoteReducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_QUOTE:
      return { ...defaultState, currentQuote: state.quotes[action.index] };
    default:
      return state;
  }
}

let getNewQuote = () => {
  return {
    type: GET_QUOTE,
    index: Math.floor(Math.random() * defaultState.quotes.length)
  }
}

let store = createStore(quoteReducer);

export { store, getNewQuote };