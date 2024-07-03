const redux = require("redux");

//reducer
//store
//subscriber
//actions

const INITIAL_VALUE = {
  counter: 0,
};

const reducer = (store = INITIAL_VALUE, action) => {
  console.log("reducer called", action);
  return { counter: store.counter + 1 };
};

const store = redux.createStore(reducer);

const subscriber = () => {
  store = store.getState();
  console.log(state);
};

store.subscribe(subscriber);

store.dispatch({ type: "INCREMENT" });
