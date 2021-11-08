import {takeEvery, put, call} from 'redux-saga/effects'
import {GET_SERVICE_REQUESTED,  getServiceContentSuccessAction, getServiceContentErrorAction} from "../reducers/serviceContentReducer";

async function getServiseContent(id) {
    const response = await fetch(`http://localhost:7070/api/services/${id}`);
    const servise = await response.json();
    return servise;
}

function* serviseContentWorkerSaga(payload) {


    try {
        const id = payload.payload;
        const servise = yield call(getServiseContent, id);
        yield put( getServiceContentSuccessAction(servise));
    } catch (e) {
        yield put(getServiceContentErrorAction());
    }
}

export function* watchContentSaga() {
    yield takeEvery(GET_SERVICE_REQUESTED, serviseContentWorkerSaga);
}

