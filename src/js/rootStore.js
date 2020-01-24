import { createStore } from "redux";

function tempReducer() {
  return null;
}

const rootStore = createStore(
  tempReducer,
  window.__REDUX_DEVTOOLS_EXTENSIONS__ && window.__REDUX_DEVTOOLS_EXTENSIONS__()
);

export default rootStore;
