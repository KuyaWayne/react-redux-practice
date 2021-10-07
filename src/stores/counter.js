import { createStore } from 'redux';

function increment() {
  return {
    type: "INCREMENT"
  }
}

function decrement() {
  return {
    type: "DECREMENT"
  }
}

function counterReducer(state = { counter: 0 }, action) {
  if (action.type === "INCREMENT") {
    return { counter: state.counter + 1 }
  } else if (action.type === "DECREMENT") {
    return { counter: state.counter - 1 }
  } else {
    return { counter: state.counter };
  }
}

export default createStore(counterReducer);