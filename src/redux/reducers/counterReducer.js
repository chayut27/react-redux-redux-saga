import { INCREMENT, DECREMENT, INCREMENT_IF_ODD, ADD, INCREMENT_ASYNC } from "../actionTypes"

const initialState = {
    counter: 0
}

function counterReducer(state = initialState, { type, payload }) {
    switch (type) {
        case INCREMENT:
            return { ...state, counter: state.counter + 1 }
        case INCREMENT_ASYNC:
            return { ...state, counter: state.counter + 1 }
        case DECREMENT:
            return { ...state, counter: state.counter - 1 }
        case ADD:
            return { ...state, counter: state.counter + payload }
        default:
            return state
    }
}

export default counterReducer