import { call, put, delay } from 'redux-saga/effects'
// const delay = (ms) => new Promise(res => setTimeout(res, ms))

export function* incrementSaga() {
    yield put({ type: 'INCREMENT' });
}

export function* incrementAsyncSaga() {
    yield delay(1000)
    yield put({ type: 'INCREMENT_ASYNC' });
}

export function* decrementSaga() {
    yield put({ type: 'DECREMENT' });
}

export function* addSaga({ payload }) {
    yield put({ type: 'ADD', payload });
}