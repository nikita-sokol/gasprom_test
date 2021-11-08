import {all,spawn} from 'redux-saga/effects';
import {watchNameSaga} from './serviceNameSaga'
import {watchContentSaga} from './serviceContentSaga'

export function* rootSaga() {
    yield all([
        watchNameSaga(),
        watchContentSaga()
    ]);
}