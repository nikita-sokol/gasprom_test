import {takeEvery, put, call, take, fork} from 'redux-saga/effects'
import {
    GET_SERVICES_REQUESTED, getServiceNameErrorAction,
    getServiceNameSuccessAction
} from "../reducers/serviceNameReducer";

async function getServiseName() {
    const response = await fetch(`http://localhost:7070/api/services/`);
    const servises = await response.json();
    return servises;

}

function* serviseNameWorkerSaga() {
    try {
        const servises = yield call(getServiseName);
        yield put(getServiceNameSuccessAction(servises));
    } catch (e) {
        yield put(getServiceNameErrorAction());
    }
}

export function* watchNameSaga() {
    yield takeEvery(GET_SERVICES_REQUESTED, serviseNameWorkerSaga);
}
