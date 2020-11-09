import {createStore} from 'redux'
import {createWrapper, HYDRATE} from 'next-redux-wrapper'

const reducer = (state = {data: null}, action) => {
    switch (action.type) {
        case HYDRATE:
            if (action.type === HYDRATE) {
                const nextState = {
                  ...state, // use previous state
                  ...action.payload, // apply delta from hydration
                }
                if (state.count) nextState.count = state.count // preserve count value on client side navigation
                return nextState
            } else {
                return combinedReducer(state, action)
            }
        case 'DATA':
            return {...state, data: action.payload}
        default:
            return state
    }
};

const makeStore = context => createStore(reducer)

export const wrapper = createWrapper(makeStore, {debug: true})