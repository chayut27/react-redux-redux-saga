import { all, takeEvery, takeLatest } from 'redux-saga/effects'
import { incrementSaga, decrementSaga, addSaga, incrementAsyncSaga } from "./counterSaga";

function* watchIncrement() {
    yield takeEvery("INCREMENT_REQ", incrementSaga);
}

function* watchIncrementAsync() {
    yield takeEvery("INCREMENT_ASYNC_REQ", incrementAsyncSaga);
}

function* watchDecrement() {
    yield takeEvery("DECREMENT_REQ", decrementSaga);
}

function* watchAdd() {
    yield takeEvery("ADD_REQ", addSaga);
}

export default function* rootSaga() {
    yield all([
        watchIncrement(),
        watchDecrement(),
        watchAdd(),
        watchIncrementAsync(),
    ])
}