import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { reducers } from "../Reducer/index";
import EmpReducer from "../Reducer/EmpReducer";

export const Store = createStore(
  EmpReducer,
  compose(
    applyMiddleware(thunk)
    //  window._REDUX_DEVTOOLS_EXTENSION_ && Window._REDUX_DEVTOOLS_EXTENSION_()
  )
);
// If you want your app to work offline and load faster, you can change
// unregister() to register()
//serviceWorker.unregister();
