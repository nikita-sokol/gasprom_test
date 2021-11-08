import {applyMiddleware, combineReducers, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import createSagaMiddleware from 'redux-saga';
import serviceNameReduser from "./reducers/serviceNameReducer";
import serviceContentReduser from "./reducers/serviceContentReducer"
import {rootSaga} from "./sagas";

const sagaMiddleware = createSagaMiddleware();

const rootReduser = combineReducers({
    serviceName: serviceNameReduser,
    serviceContent: serviceContentReduser
});

const store = createStore(
    rootReduser,
    composeWithDevTools(
        applyMiddleware(
            sagaMiddleware
        )
    )
);

sagaMiddleware.run(rootSaga);

export default store;