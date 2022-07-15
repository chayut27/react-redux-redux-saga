import { INCREMENT, INCREMENT_REQ, DECREMENT, DECREMENT_REQ, INCREMENT_IF_ODD, INCREMENT_IF_ODD_REQ, ADD, ADD_REQ } from "../actionTypes"

const setIncrementAction = (payload) => ({
    type: INCREMENT,
})

const setDecrementAction = (payload) => ({
    type: DECREMENT,
})

const setAddAction = (payload) => ({
    type: ADD,
    payload
})

const counterAction = {
    setIncrementAction,
    setDecrementAction,
    setAddAction,
}

export default counterAction