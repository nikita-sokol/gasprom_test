import {applyMiddleware, combineReducers, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import serviceNameReduser from "./serviceNameReduser";
import serviceContentReduser from "./serviceContentReduser";

const rootReduser = combineReducers({
    serviceName: serviceNameReduser,
    serviceContent: serviceContentReduser
});

const store = createStore(rootReduser, composeWithDevTools(applyMiddleware(thunk)));

export default store;